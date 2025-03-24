import { title } from 'process'
import { Site, Section } from './models'


export type StateType = {
  ready: boolean

  contentfulData: any
  contentful: {
    sites?: Site[]
    sections?: Section[]
  }
}

const initialState = {
  ready: true,

  contentfulData: {},
  contentful: {
    sites: [{
      botLink: 'https://www.checkout-ds24.com/product/602817',
      botLinkText: 'Purchase now',
      botLinkEnabled: true,
      githubLink: 'https://github.com/nindao',
      telegramLink: 'https://t.me/+GyhHM4SF-W04OWM0',
      twitterLink: 'https://twitter.com/_nindao',
      heroSection: {
        title: 'Convert your group chat into a DAO ツ ',
        text: '',
        image: { file: {url: '//images.ctfassets.net/twxwytqo9jya/2BTARCzIDN8L2nrfZqwNLF/6503c3da99bcf229050b936afa29199d/bg.jpg' } },
        image2: { file: {url: '//images.ctfassets.net/twxwytqo9jya/2oTj7N4AHsoPcKMlVdCUZO/795b7b22b9c147c8f8a84194a2ea593a/logo-min.png' } },
        subsections: [
          {}
        ]
      },
      botSection: {
        title: 'Chats as DAOs ',
        text: <>
            Shared ownership should be an accessible experience. Enter NinDAO, the telegram bot that converts your group chat into a DAO with Safe Multisig.
            <br />
            <br />
            By leveraging a familiar chat interface, both web3 natives and newcomers are invited to easily start and manage their own DAO.
        </>,
        image: { file: {url: '//images.ctfassets.net/twxwytqo9jya/7wCT4eUTYXAsjsK4VF6r0L/d14581ddf26479eb33c0eab4de53b59f/girl.jpg' } },
        image2: { file: {url: '' } },
        subsections: [
          {}
        ]
      },
      aboutSection: {
        title: 'How it works',
        text: <>
            Users should have a Metamask wallet before adding the NinDAO bot to the Telegram group chat. The bot creates a Safe Multisig with the public addresses to share ownership over a collective treasury.
            <br /><br />
            Users can create and execute proposals for transferring funds or managing membership without leaving the conversation 🥷🏽.
            <br /><br />
            Featuring
            <ul>
                <li>
                    Safe Multisig
                </li>
                <li>
                    Telegram-Metamask Integration
                </li>
                <li>
                    On-chain governance
                </li>
            </ul>
        </>,
        image: { file: {url: '//images.ctfassets.net/twxwytqo9jya/3P4E7IaL3AiLt9cOSHXs0o/2af285cdf814ddcc1da100672754339d/phone-min.png' } },
        image2: { file: {url: '' } },
        subsections: [
          {}
        ]
      },
      instructionsSection: {
        title: 'Get Started',
        text: '',
        image: { file: {url: '' } },
        image2: { file: {url: '' } },
        subsections: [
          {
            title: 'Sign-in with Metamask',
            text: <>
                To register or sign-in, start a private conversation with @ninDAO_bot or add the bot to the group chat up for DAO conversion.
            </>,    
          },
          {
            title: 'DAO Initiation',
            text: <>
            Once all participants are added, the chat owner initiates the DAO. This creates the Safe multisig and can take a few minutes.
            </>,    
          },
          {
            title: 'Trustless Coordination',
            text: <>
            Manage your DAO with on chain transactions: create and execute proposals and manage membership.
            </>,    
          },
        ]
      },
      faqSection: {
        title: 'FAQ',
        text: '',
        image: { file: {url: '' } },
        image2: { file: {url: '' } },
        subsections: [
          {
            title: 'About NinDAO',
            text: <>
                NinDAO is a Telegram bot that enables users to turn group chats into fully-functioning, trustless DAO management platforms. It is intended to increase and diversify use-cases for DAOs by making it easy to create and manage them through the familiar interface of a chat.
            </>
          },
          {
            title: 'Why a Telegram bot?',
            text: <>
                We like to think of NinDAO as a web3 cyborg, built from (de)centralized parts for trustless coordination. As DAOs integrate automation with human collaboration, they could be considered cyborg organizations.
                <br /><br />
                We believe DAOs can be created for any purpose and scale, and can be co-created by all kinds of users. Telegram as the de-facto DAO messenger is also among the most downloaded apps for iPhone and Android devices. Chat applications, like DAOs, are coordination tools with usability across demographics.
            </>
          },
          {
            title: 'What can NinDAO do?',
            text: <>
                NinDAO allows members to manage their treasury, perform multisig transactions, execute proposals, and manage membership.
            </>
          },
          {
            title: 'Why NinDAO?',
            text: <>
                NinDAO reprograms applications already in-use as sites for web3 innovation and tooling.<br />
                By leveraging familiar mechanics, both web3 natives and newcomers are enabled to start their own DAO.
            </>
          },
        ]
      },
    }],
    sections: [
      {
          "id": "9h26DelRVvBc7jFO6nLyQ",
          "type": "section",
          "title": "How it works",
          "text": [
              {
                  "type": "p",
                  "key": "0",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "Users should have a Metamask wallet before adding the NinDAO bot to the Telegram group chat. The bot creates a Safe Multisig with the public addresses to share ownership over a collective treasury. "
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              },
              {
                  "type": "p",
                  "key": "1",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "Users can create and execute proposals for transferring funds or managing membership without leaving the conversation 🥷🏽."
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              },
              {
                  "type": "p",
                  "key": "2",
                  "ref": null,
                  "props": {
                      "children": [
                          {
                              "type": "b",
                              "key": "0",
                              "ref": null,
                              "props": {
                                  "children": {
                                      "type": "i",
                                      "key": null,
                                      "ref": null,
                                      "props": {
                                          "children": [
                                              false,
                                              "Featuring"
                                          ]
                                      },
                                      "_owner": null,
                                      "_store": {}
                                  }
                              },
                              "_owner": null,
                              "_store": {}
                          }
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              },
              {
                  "type": "ul",
                  "key": "3",
                  "ref": null,
                  "props": {
                      "children": [
                          {
                              "type": "li",
                              "key": "0",
                              "ref": null,
                              "props": {
                                  "className": "ml-4",
                                  "children": [
                                      {
                                          "type": "p",
                                          "key": "0",
                                          "ref": null,
                                          "props": {
                                              "children": [
                                                  {
                                                      "type": "i",
                                                      "key": "0",
                                                      "ref": null,
                                                      "props": {
                                                          "children": [
                                                              false,
                                                              "Safe Multisig"
                                                          ]
                                                      },
                                                      "_owner": null,
                                                      "_store": {}
                                                  }
                                              ]
                                          },
                                          "_owner": null,
                                          "_store": {}
                                      }
                                  ]
                              },
                              "_owner": null,
                              "_store": {}
                          },
                          {
                              "type": "li",
                              "key": "1",
                              "ref": null,
                              "props": {
                                  "className": "ml-4",
                                  "children": [
                                      {
                                          "type": "p",
                                          "key": "0",
                                          "ref": null,
                                          "props": {
                                              "children": [
                                                  {
                                                      "type": "i",
                                                      "key": "0",
                                                      "ref": null,
                                                      "props": {
                                                          "children": [
                                                              false,
                                                              "Telegram-Metamask Integration"
                                                          ]
                                                      },
                                                      "_owner": null,
                                                      "_store": {}
                                                  }
                                              ]
                                          },
                                          "_owner": null,
                                          "_store": {}
                                      }
                                  ]
                              },
                              "_owner": null,
                              "_store": {}
                          },
                          {
                              "type": "li",
                              "key": "2",
                              "ref": null,
                              "props": {
                                  "className": "ml-4",
                                  "children": [
                                      {
                                          "type": "p",
                                          "key": "0",
                                          "ref": null,
                                          "props": {
                                              "children": [
                                                  {
                                                      "type": "i",
                                                      "key": "0",
                                                      "ref": null,
                                                      "props": {
                                                          "children": [
                                                              false,
                                                              "On-chain governance"
                                                          ]
                                                      },
                                                      "_owner": null,
                                                      "_store": {}
                                                  }
                                              ]
                                          },
                                          "_owner": null,
                                          "_store": {}
                                      }
                                  ]
                              },
                              "_owner": null,
                              "_store": {}
                          }
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              },
              {
                  "type": "p",
                  "key": "4",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              ""
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              }
          ],
          "image": {
              "id": "3P4E7IaL3AiLt9cOSHXs0o",
              "title": "Phone",
              "description": "",
              "file": {
                  "url": "//images.ctfassets.net/twxwytqo9jya/3P4E7IaL3AiLt9cOSHXs0o/2af285cdf814ddcc1da100672754339d/phone-min.png",
                  "details": {
                      "size": 317759,
                      "image": {
                          "width": 654,
                          "height": 745
                      }
                  },
                  "fileName": "phone-min.png",
                  "contentType": "image/png"
              }
          }
      },
      {
          "id": "47Q7SKk6FC8Suh7Snoy3iH",
          "type": "section",
          "title": "Why a Telegram bot?",
          "text": [
              {
                  "type": "p",
                  "key": "0",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "We like to think of NinDAO as a web3 cyborg, built from (de)centralized parts for trustless coordination. "
                          ],
                          [
                              false,
                              "As DAOs integrate automation with human collaboration, they could be considered cyborg organizations."
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              },
              {
                  "type": "p",
                  "key": "1",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "We believe DAOs can be created for any purpose and scale, and can be co-created by all kinds of users. Telegram as the de-facto DAO messenger is also among the most downloaded apps for iPhone and Android devices. Chat applications, like DAOs, are coordination tools with usability across demographics. "
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              }
          ]
      },
      {
          "id": "66OHOwcDg5eCAfxtMSARpu",
          "type": "section",
          "title": "Why NinDAO?",
          "text": [
              {
                  "type": "p",
                  "key": "0",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "NinDAO reprograms applications already in-use as sites for web3 innovation and tooling.",
                              {
                                  "type": "br",
                                  "key": "1",
                                  "ref": null,
                                  "props": {},
                                  "_owner": null,
                                  "_store": {}
                              },
                              "By leveraging familiar mechanics, both web3 natives and newcomers are enabled to start their own DAO."
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              }
          ]
      },
      {
          "id": "i5tc4o4siCshqinlUkK7V",
          "type": "section",
          "title": "What can NinDAO do?",
          "text": [
              {
                  "type": "p",
                  "key": "0",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "NinDAO allows members to manage their treasury, perform multisig transactions, execute proposals, and manage membership."
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              }
          ]
      },
      {
          "id": "4yD2c0edzkb9RDtD7rws2Z",
          "type": "section",
          "title": "About NinDAO",
          "text": [
              {
                  "type": "p",
                  "key": "0",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "NinDAO is a Telegram bot that "
                          ],
                          [
                              false,
                              "enables users to turn group chats into fully-functioning, trustless DAO management platforms. It is intended"
                          ],
                          [
                              false,
                              " to increase and diversify use-cases for DAOs by making it easy to create and manage them through the familiar interface of a chat. "
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              }
          ]
      },
      {
          "id": "1CIfqHYD50g1QXF4EMeFa5",
          "type": "section",
          "title": "Get Started",
          "subsections": [
              {
                  "id": "01OHIdGal8rjhix2HlQiVv",
                  "type": "section",
                  "title": "Sign-in with Metamask",
                  "text": [
                      {
                          "type": "p",
                          "key": "0",
                          "ref": null,
                          "props": {
                              "children": [
                                  [
                                      false,
                                      "To register or sign-in, start a private conversation with @ninDAO_bot or add the bot to the group chat up for DAO conversion. "
                                  ]
                              ]
                          },
                          "_owner": null,
                          "_store": {}
                      }
                  ]
              },
              {
                  "id": "5iiV57Bau4ReF7jditn2nJ",
                  "type": "section",
                  "title": "DAO Initiation",
                  "text": [
                      {
                          "type": "p",
                          "key": "0",
                          "ref": null,
                          "props": {
                              "children": [
                                  [
                                      false,
                                      "Once all participants are added, the chat owner initiates the DAO. This creates the Safe multisig and can take a few minutes. "
                                  ]
                              ]
                          },
                          "_owner": null,
                          "_store": {}
                      },
                      {
                          "type": "p",
                          "key": "1",
                          "ref": null,
                          "props": {
                              "children": [
                                  [
                                      false,
                                      ""
                                  ]
                              ]
                          },
                          "_owner": null,
                          "_store": {}
                      }
                  ]
              },
              {
                  "id": "6sjFAp2OELv12N1aoz7Vq2",
                  "type": "section",
                  "title": "Trustless Coordination",
                  "text": [
                      {
                          "type": "p",
                          "key": "0",
                          "ref": null,
                          "props": {
                              "children": [
                                  [
                                      false,
                                      "Manage your DAO with on chain transactions: create and execute proposals and manage membership. "
                                  ]
                              ]
                          },
                          "_owner": null,
                          "_store": {}
                      },
                      {
                          "type": "p",
                          "key": "1",
                          "ref": null,
                          "props": {
                              "children": [
                                  [
                                      false,
                                      ""
                                  ]
                              ]
                          },
                          "_owner": null,
                          "_store": {}
                      }
                  ]
              }
          ]
      },
      {
          "id": "6sjFAp2OELv12N1aoz7Vq2",
          "type": "section",
          "title": "Trustless Coordination",
          "text": [
              {
                  "type": "p",
                  "key": "0",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "Manage your DAO with on chain transactions: create and execute proposals and manage membership. "
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              },
              {
                  "type": "p",
                  "key": "1",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              ""
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              }
          ]
      },
      {
          "id": "5iiV57Bau4ReF7jditn2nJ",
          "type": "section",
          "title": "DAO Initiation",
          "text": [
              {
                  "type": "p",
                  "key": "0",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "Once all participants are added, the chat owner initiates the DAO. This creates the Safe multisig and can take a few minutes. "
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              },
              {
                  "type": "p",
                  "key": "1",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              ""
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              }
          ]
      },
      {
          "id": "01OHIdGal8rjhix2HlQiVv",
          "type": "section",
          "title": "Sign-in with Metamask",
          "text": [
              {
                  "type": "p",
                  "key": "0",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "To register or sign-in, start a private conversation with @ninDAO_bot or add the bot to the group chat up for DAO conversion. "
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              }
          ]
      },
      {
          "id": "48ZP2BzZGuS0kEyGgnrgMC",
          "type": "section",
          "title": "Convert your group chat into a DAO ツ ",
          "image": {
              "id": "2BTARCzIDN8L2nrfZqwNLF",
              "title": "Background",
              "description": "",
              "file": {
                  "url": "//images.ctfassets.net/twxwytqo9jya/2BTARCzIDN8L2nrfZqwNLF/6503c3da99bcf229050b936afa29199d/bg.jpg",
                  "details": {
                      "size": 174167,
                      "image": {
                          "width": 1920,
                          "height": 1146
                      }
                  },
                  "fileName": "bg.jpg",
                  "contentType": "image/jpeg"
              }
          },
          "image2": {
              "id": "2oTj7N4AHsoPcKMlVdCUZO",
              "title": "3d logo",
              "description": "",
              "file": {
                  "url": "//images.ctfassets.net/twxwytqo9jya/2oTj7N4AHsoPcKMlVdCUZO/795b7b22b9c147c8f8a84194a2ea593a/logo-min.png",
                  "details": {
                      "size": 86611,
                      "image": {
                          "width": 1066,
                          "height": 304
                      }
                  },
                  "fileName": "logo-min.png",
                  "contentType": "image/png"
              }
          }
      },
      {
          "id": "6AuZ9cWxgIUB8zqickz7qr",
          "type": "section",
          "title": "Chats as DAOs ",
          "text": [
              {
                  "type": "p",
                  "key": "0",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "Shared ownership should be an accessible experience. Enter NinDAO, the telegram bot that converts your group chat into a DAO with Safe Multisig. "
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              },
              {
                  "type": "p",
                  "key": "1",
                  "ref": null,
                  "props": {
                      "children": [
                          [
                              false,
                              "By leveraging a familiar chat interface, both web3 natives and newcomers are invited to easily start and manage their own DAO."
                          ]
                      ]
                  },
                  "_owner": null,
                  "_store": {}
              }
          ],
          "image": {
              "id": "7wCT4eUTYXAsjsK4VF6r0L",
              "title": "Girl",
              "description": "",
              "file": {
                  "url": "//images.ctfassets.net/twxwytqo9jya/7wCT4eUTYXAsjsK4VF6r0L/d14581ddf26479eb33c0eab4de53b59f/girl.jpg",
                  "details": {
                      "size": 137617,
                      "image": {
                          "width": 800,
                          "height": 561
                      }
                  },
                  "fileName": "girl.jpg",
                  "contentType": "image/jpeg"
              }
          }
      },
      {
          "id": "6tJtyoeFMR5RqGr0JDO1PX",
          "type": "section",
          "title": "FAQ",
          "subsections": [
              {
                  "id": "4yD2c0edzkb9RDtD7rws2Z",
                  "type": "section",
                  "title": "About NinDAO",
                  "text": [
                      {
                          "type": "p",
                          "key": "0",
                          "ref": null,
                          "props": {
                              "children": [
                                  [
                                      false,
                                      "NinDAO is a Telegram bot that "
                                  ],
                                  [
                                      false,
                                      "enables users to turn group chats into fully-functioning, trustless DAO management platforms. It is intended"
                                  ],
                                  [
                                      false,
                                      " to increase and diversify use-cases for DAOs by making it easy to create and manage them through the familiar interface of a chat. "
                                  ]
                              ]
                          },
                          "_owner": null,
                          "_store": {}
                      }
                  ]
              },
              {
                  "id": "47Q7SKk6FC8Suh7Snoy3iH",
                  "type": "section",
                  "title": "Why a Telegram bot?",
                  "text": [
                      {
                          "type": "p",
                          "key": "0",
                          "ref": null,
                          "props": {
                              "children": [
                                  [
                                      false,
                                      "We like to think of NinDAO as a web3 cyborg, built from (de)centralized parts for trustless coordination. "
                                  ],
                                  [
                                      false,
                                      "As DAOs integrate automation with human collaboration, they could be considered cyborg organizations."
                                  ]
                              ]
                          },
                          "_owner": null,
                          "_store": {}
                      },
                      {
                          "type": "p",
                          "key": "1",
                          "ref": null,
                          "props": {
                              "children": [
                                  [
                                      false,
                                      "We believe DAOs can be created for any purpose and scale, and can be co-created by all kinds of users. Telegram as the de-facto DAO messenger is also among the most downloaded apps for iPhone and Android devices. Chat applications, like DAOs, are coordination tools with usability across demographics. "
                                  ]
                              ]
                          },
                          "_owner": null,
                          "_store": {}
                      }
                  ]
              },
              {
                  "id": "i5tc4o4siCshqinlUkK7V",
                  "type": "section",
                  "title": "What can NinDAO do?",
                  "text": [
                      {
                          "type": "p",
                          "key": "0",
                          "ref": null,
                          "props": {
                              "children": [
                                  [
                                      false,
                                      "NinDAO allows members to manage their treasury, perform multisig transactions, execute proposals, and manage membership."
                                  ]
                              ]
                          },
                          "_owner": null,
                          "_store": {}
                      }
                  ]
              },
              {
                  "id": "66OHOwcDg5eCAfxtMSARpu",
                  "type": "section",
                  "title": "Why NinDAO?",
                  "text": [
                      {
                          "type": "p",
                          "key": "0",
                          "ref": null,
                          "props": {
                              "children": [
                                  [
                                      false,
                                      "NinDAO reprograms applications already in-use as sites for web3 innovation and tooling.",
                                      {
                                          "type": "br",
                                          "key": "1",
                                          "ref": null,
                                          "props": {},
                                          "_owner": null,
                                          "_store": {}
                                      },
                                      "By leveraging familiar mechanics, both web3 natives and newcomers are enabled to start their own DAO."
                                  ]
                              ]
                          },
                          "_owner": null,
                          "_store": {}
                      }
                  ]
              }
          ]
      }
  ]
  },
}


export {
  initialState,
}
