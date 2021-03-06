export type Tiktok = {
  "version": "0.1.0",
  "name": "tiktok",
  "instructions": [
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
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
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "imageUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "createVideo",
      "accounts": [
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "randomkey",
          "isMut": false,
          "isSigner": false
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
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "videoUrl",
          "type": "string"
        },
        {
          "name": "createName",
          "type": "string"
        },
        {
          "name": "creatorUrl",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userName",
            "type": "string"
          },
          {
            "name": "userWalletAddress",
            "type": "publicKey"
          },
          {
            "name": "userProfileImageUrl",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "videoAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "videoUrl",
            "type": "string"
          },
          {
            "name": "creatorName",
            "type": "string"
          },
          {
            "name": "creatorUrl",
            "type": "string"
          },
          {
            "name": "commentCount",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "creatorTime",
            "type": "i64"
          },
          {
            "name": "peopleWhoLike",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "likes",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export const IDL: Tiktok = {
  "version": "0.1.0",
  "name": "tiktok",
  "instructions": [
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
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
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "imageUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "createVideo",
      "accounts": [
        {
          "name": "video",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "randomkey",
          "isMut": false,
          "isSigner": false
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
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "videoUrl",
          "type": "string"
        },
        {
          "name": "createName",
          "type": "string"
        },
        {
          "name": "creatorUrl",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userName",
            "type": "string"
          },
          {
            "name": "userWalletAddress",
            "type": "publicKey"
          },
          {
            "name": "userProfileImageUrl",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "videoAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "videoUrl",
            "type": "string"
          },
          {
            "name": "creatorName",
            "type": "string"
          },
          {
            "name": "creatorUrl",
            "type": "string"
          },
          {
            "name": "commentCount",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "creatorTime",
            "type": "i64"
          },
          {
            "name": "peopleWhoLike",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "likes",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
