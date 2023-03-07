export type AnchorNftStaking = {
  "version": "0.1.0",
  "name": "anchor_nft_staking",
  "instructions": [
    {
      "name": "stake",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "elysianstake"
              }
            ]
          }
        },
        {
          "name": "nftState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "TokenAccount",
                "path": "nft_token_account"
              }
            ]
          }
        },
        {
          "name": "vaultFees",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "vault_elysian"
              }
            ]
          }
        },
        {
          "name": "programAuthority",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "authority"
              }
            ]
          }
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
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "redeem",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "elysianstake"
              }
            ]
          }
        },
        {
          "name": "nftState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "TokenAccount",
                "path": "nft_token_account"
              }
            ]
          }
        },
        {
          "name": "stakeMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "mint"
              }
            ]
          }
        },
        {
          "name": "userStakeAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
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
      "args": []
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "elysianstake"
              }
            ]
          }
        },
        {
          "name": "nftState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "TokenAccount",
                "path": "nft_token_account"
              }
            ]
          }
        },
        {
          "name": "programAuthority",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "authority"
              }
            ]
          }
        },
        {
          "name": "stakeMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "mint"
              }
            ]
          }
        },
        {
          "name": "userStakeAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
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
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "UserStakeInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeStartTime",
            "type": "i64"
          },
          {
            "name": "lastStakeRedeem",
            "type": "i64"
          },
          {
            "name": "stakeAccount",
            "type": "i8"
          },
          {
            "name": "tokensOwed",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "VaultInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalStaked",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "NftStakeInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "skateState",
            "type": {
              "defined": "StakeState"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "StakeState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unstaked"
          },
          {
            "name": "Staked"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyStaked",
      "msg": "NFT already staked"
    },
    {
      "code": 6001,
      "name": "UninitializedAccount",
      "msg": "State account is uninitialized"
    },
    {
      "code": 6002,
      "name": "InvalidWaitingTIme",
      "msg": "User has never staked NFTs"
    },
    {
      "code": 6003,
      "name": "InvalidStakingToken",
      "msg": "Authority Doesn't Matches"
    }
  ]
}
 
export const IDL: AnchorNftStaking = {
  "version": "0.1.0",
  "name": "anchor_nft_staking",
  "instructions": [
    {
      "name": "stake",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "elysianstake"
              }
            ]
          }
        },
        {
          "name": "nftState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "TokenAccount",
                "path": "nft_token_account"
              }
            ]
          }
        },
        {
          "name": "vaultFees",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "vault_elysian"
              }
            ]
          }
        },
        {
          "name": "programAuthority",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "authority"
              }
            ]
          }
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
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "redeem",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "elysianstake"
              }
            ]
          }
        },
        {
          "name": "nftState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "TokenAccount",
                "path": "nft_token_account"
              }
            ]
          }
        },
        {
          "name": "stakeMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "mint"
              }
            ]
          }
        },
        {
          "name": "userStakeAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
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
      "args": []
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "elysianstake"
              }
            ]
          }
        },
        {
          "name": "nftState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "TokenAccount",
                "path": "nft_token_account"
              }
            ]
          }
        },
        {
          "name": "programAuthority",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "authority"
              }
            ]
          }
        },
        {
          "name": "stakeMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "mint"
              }
            ]
          }
        },
        {
          "name": "userStakeAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
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
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "UserStakeInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeStartTime",
            "type": "i64"
          },
          {
            "name": "lastStakeRedeem",
            "type": "i64"
          },
          {
            "name": "stakeAccount",
            "type": "i8"
          },
          {
            "name": "tokensOwed",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "VaultInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalStaked",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "NftStakeInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "skateState",
            "type": {
              "defined": "StakeState"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "StakeState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unstaked"
          },
          {
            "name": "Staked"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyStaked",
      "msg": "NFT already staked"
    },
    {
      "code": 6001,
      "name": "UninitializedAccount",
      "msg": "State account is uninitialized"
    },
    {
      "code": 6002,
      "name": "InvalidWaitingTIme",
      "msg": "User has never staked NFTs"
    },
    {
      "code": 6003,
      "name": "InvalidStakingToken",
      "msg": "Authority Doesn't Matches"
    }
  ]
}