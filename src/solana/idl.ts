import {Idl} from "@project-serum/anchor";

export const idl: Idl = {
    "version": "0.0.0",
    "name": "nft_bonds",
    "instructions": [
        {
            "name": "makeOffer",
            "accounts": [
                {
                    "name": "eventAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "offer",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "tokenAccountFromWhoMadeTheOffer",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrowedTokensOfOfferMaker",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "kindOfTokenOffered",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "kindOfTokenWantedInReturn",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "eventBump",
                    "type": "u8"
                },
                {
                    "name": "escrowedTokensOfOfferMakerBump",
                    "type": "u8"
                },
                {
                    "name": "imOfferingThisMuch",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "acceptOffer",
            "accounts": [
                {
                    "name": "eventAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "offer",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrowedTokensOfOfferMaker",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "whoIsTakingTheOffer",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "accountHoldingWhatMakerWillGet",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "accountHoldingWhatReceiverWillGive",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "accountHoldingWhatReceiverWillGet",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "kindOfTokenWantedInReturn",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "createEvent",
            "accounts": [
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "eventAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "eventAccountBump",
                    "type": "u8"
                },
                {
                    "name": "title",
                    "type": "string"
                },
                {
                    "name": "duration",
                    "type": "u8"
                },
                {
                    "name": "percent",
                    "type": "u8"
                },
                {
                    "name": "vestingTime",
                    "type": "u8"
                },
                {
                    "name": "token",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "submitEvent",
            "accounts": [
                {
                    "name": "baseAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "eventAccount",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "baseAccount",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "BaseAccount",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "hashes",
                        "type": {
                            "vec": "publicKey"
                        }
                    }
                ]
            }
        },
        {
            "name": "EventAccount",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "name": "startTime",
                        "type": "i64"
                    },
                    {
                        "name": "duration",
                        "type": "u8"
                    },
                    {
                        "name": "percent",
                        "type": "u8"
                    },
                    {
                        "name": "vestingTime",
                        "type": "u8"
                    },
                    {
                        "name": "collectedTokensAmount",
                        "type": "u64"
                    },
                    {
                        "name": "fullTokensAmount",
                        "type": "u64"
                    },
                    {
                        "name": "collectedNfts",
                        "type": "u8"
                    },
                    {
                        "name": "totalNfts",
                        "type": "u8"
                    },
                    {
                        "name": "token",
                        "type": "publicKey"
                    },
                    {
                        "name": "isOpened",
                        "type": "bool"
                    },
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "Offer",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "isCollected",
                        "type": "bool"
                    },
                    {
                        "name": "amountOfOfferedTokens",
                        "type": "u64"
                    },
                    {
                        "name": "kindOfTokenWantedInReturn",
                        "type": "publicKey"
                    },
                    {
                        "name": "escrowedTokensOfOfferMakerBump",
                        "type": "u8"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        }
    ],
}