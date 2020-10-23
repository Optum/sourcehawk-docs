/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
    docs: {
        Sourcehawk: ['sourcehawk'],
        Usage: ['usage/general', 'usage/maven', 'usage/cli', 'usage/faas', 'usage/sourcehawk-ui'],
        Concepts: [
            'concepts/protocols',
            'concepts/enforcers',
            'concepts/results',
        ],
        Protocols: [
            {
                'File Protocols': ['protocols/file/file-protocol',
                    {
                        'Enforcers': [
                            'protocols/file/enforcers/common',
                            'protocols/file/enforcers/yaml',
                            'protocols/file/enforcers/xml',
                            'protocols/file/enforcers/json',
                            'protocols/file/enforcers/docker',
                            'protocols/file/enforcers/maven',
                        ]
                    }]
            }
        ]
    },
};
