/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
    title: 'Sourcehawk',
    tagline: 'Compliance as Code',
    url: 'https://optum.github.io/sourcehawk-docs',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'Optum', // Usually your GitHub org/user name.
    projectName: 'sourcehawk-docs', // Usually your repo name.
    githubHost: 'github.com',
    themeConfig: {
        navbar: {
            title: 'Sourcehawk',
            logo: {
                alt: 'Sourcehawk Logo',
                src: 'img/logo_blue.png',
            },
            items: [
                {
                    to: 'docs/sourcehawk',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {to: 'blog', label: 'Blog', position: 'left'},
                // Please keep GitHub link to the right for consistency.
                {
                    href: 'https://github.com/optum/sourcehawk-docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Plugins',
                    items: [
                        {
                            label: 'Maven Plugin',
                            to: 'docs/usage/maven',
                        }
                    ],
                },
                {
                    title: 'Usage',
                    items: [
                        {
                            label: 'Usage',
                            to: 'docs/usage/general',
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/optum?q=sourcehawk',
                        },
                    ],
                }
            ],
            logo: {
                alt: 'Facebook Open Source Logo',
                src: 'img/oss_logo.png',
                href: 'https://opensource.facebook.com',
            },
            // Please do not remove the credits, help to publicize Docusaurus :)
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/optum/sourcehawk-docs/edit/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/optum/sourcehawk-docs/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                }
            }
        ]
    ]
};
