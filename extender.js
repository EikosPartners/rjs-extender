module.exports = function(filePath, additionalConfig) {
        var fs = require('fs'),
            _ = require('lodash'),
            esprima = require('esprima'),
            escodegen = require('escodegen'),
            fileString,
            parsedFile,
            parsedConfig,
            jsonifiedParsedConfig,
            mergedConfig,
            finalFile;

        fileString = fs.readFileSync(filePath, "utf8");
        parsedFile = esprima.parse(fileString);
        parsedConfig = parsedFile.body[0].expression.arguments[0];
        jsonifiedParsedConfig = eval('(' + escodegen.generate(parsedConfig) + ')');
        mergedConfig = _.merge(additionalConfig, jsonifiedParsedConfig, function(a, b) {

            if (_.isArray(a)) {
                return a.concat(_.difference(b, a));
            }
        });
        parsedFile.body[0].expression.arguments[0] = esprima.parse('(' + JSON.stringify(mergedConfig) + ')').body[0].expression
        finalFile = escodegen.generate(parsedFile);
        finalFile = '/*jshint ignore:start*/\n' + finalFile;
        finalFile += '\n/*jshint ignore:end*/\n';
        fs.writeFile(filePath, finalFile, function(err) {
            if (err) {
                return console.log(err);
            }
        });
    };
