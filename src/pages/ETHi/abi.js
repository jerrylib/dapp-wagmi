const VAULT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "AddAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "_strategies",
        type: "address[]",
      },
    ],
    name: "AddStrategies",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_actualAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_shareAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_burnAmount",
        type: "uint256",
      },
    ],
    name: "BurnWithoutExchange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_transferValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_redeemValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalValueOfAfterAdjustPosition",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalValueOfBeforeAdjustPosition",
        type: "uint256",
      },
    ],
    name: "EndAdjustPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_platform",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_srcAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_srcAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_distAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_distAmount",
        type: "uint256",
      },
    ],
    name: "Exchange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "wants",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lendValue",
        type: "uint256",
      },
    ],
    name: "LendToStrategy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_mintAmount",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_pegTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "PegTokenSwapCash",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_debtChangeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_redeemFeeBps",
        type: "uint256",
      },
    ],
    name: "RedeemFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "RemoveAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "_strategies",
        type: "address[]",
      },
    ],
    name: "RemoveStrategies",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "RemoveStrategyByForce",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "_strategies",
        type: "address[]",
      },
    ],
    name: "RemoveStrategyFromQueue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "_adjustPositionPeriod",
        type: "bool",
      },
    ],
    name: "SetAdjustPositionPeriod",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "_shutdown",
        type: "bool",
      },
    ],
    name: "SetEmergencyShutdown",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "queues",
        type: "address[]",
      },
    ],
    name: "SetWithdrawalQueue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalDebtOfBeforeAdjustPosition",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_trackedAssets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_vaultCashDetatil",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_vaultBufferCashDetail",
        type: "uint256[]",
      },
    ],
    name: "StartAdjustPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gain",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loss",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastStrategyTotalDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nowStrategyTotalDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
    ],
    name: "StrategyReported",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "TreasuryAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_basis",
        type: "uint256",
      },
    ],
    name: "TrusteeFeeBpsChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "accessControlProxy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "addAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "profitLimitRatio",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lossLimitRatio",
            type: "uint256",
          },
        ],
        internalType: "struct IETHVault.StrategyAdd[]",
        name: "strategyAdds",
        type: "tuple[]",
      },
    ],
    name: "addStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "adjustPositionPeriod",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minimumAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_needExchange",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "fromToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "toToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fromAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "platform",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "method",
                type: "uint8",
              },
              {
                internalType: "bytes",
                name: "encodeExchangeArgs",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "slippage",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "oracleAdditionalSlippage",
                type: "uint256",
              },
            ],
            internalType: "struct IETHExchangeAggregator.ExchangeParam",
            name: "exchangeParam",
            type: "tuple",
          },
        ],
        internalType: "struct IETHExchangeAggregator.ExchangeToken[]",
        name: "_exchangeTokens",
        type: "tuple[]",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "strategy",
        type: "address",
      },
    ],
    name: "checkActiveStrategy",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "checkIsSupportAsset",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyShutdown",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endAdjustPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "estimateMint",
    outputs: [
      {
        internalType: "uint256",
        name: "_sharesAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "platform",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "method",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "encodeExchangeArgs",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleAdditionalSlippage",
            type: "uint256",
          },
        ],
        internalType: "struct IETHExchangeAggregator.ExchangeParam",
        name: "exchangeParam",
        type: "tuple",
      },
    ],
    name: "exchange",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangeManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "forceRemoveStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getStrategies",
    outputs: [
      {
        internalType: "address[]",
        name: "_strategies",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupportAssets",
    outputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTrackedAssets",
    outputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getWithdrawalQueue",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "fromToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "toToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fromAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "platform",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "method",
                type: "uint8",
              },
              {
                internalType: "bytes",
                name: "encodeExchangeArgs",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "slippage",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "oracleAdditionalSlippage",
                type: "uint256",
              },
            ],
            internalType: "struct IETHExchangeAggregator.ExchangeParam",
            name: "exchangeParam",
            type: "tuple",
          },
        ],
        internalType: "struct IETHExchangeAggregator.ExchangeToken[]",
        name: "_exchangeTokens",
        type: "tuple[]",
      },
    ],
    name: "lend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minimumAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "_sharesAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pauseRebase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pegTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceProvider",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rebase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rebasePaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rebaseThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemFeeBps",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "removeAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_strategies",
        type: "address[]",
      },
    ],
    name: "removeStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_strategies",
        type: "address[]",
      },
    ],
    name: "removeStrategyFromQueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "report",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_adjustPositionPeriod",
        type: "bool",
      },
    ],
    name: "setAdjustPositionPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
    ],
    name: "setAdminImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "setEmergencyShutdown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setPegTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "setRebaseThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_redeemFeeBps",
        type: "uint256",
      },
    ],
    name: "setRedeemFeeBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
    ],
    name: "setStrategyEnforceChangeLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_lossRatioLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_profitLimitRatio",
        type: "uint256",
      },
    ],
    name: "setStrategySetLimitRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setTreasuryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_basis",
        type: "uint256",
      },
    ],
    name: "setTrusteeFeeBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_underlyingUnitsPerShare",
        type: "uint256",
      },
    ],
    name: "setUnderlyingUnitsPerShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setVaultBufferAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "queues",
        type: "address[]",
      },
    ],
    name: "setWithdrawalQueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startAdjustPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "strategies",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "lastReport",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "profitLimitRatio",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lossLimitRatio",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "enforceChangeLimit",
            type: "bool",
          },
        ],
        internalType: "struct IETHVault.StrategyParams",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssetsIncludeVaultBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalValueInStrategies",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalValueInVault",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "trusteeFeeBps",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingUnitsPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpauseRebase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "valueOfTrackedTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "_totalValue",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "valueOfTrackedTokensIncludeVaultBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "_totalValue",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "vaultBufferAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawQueue",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumInvestmentAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default VAULT_ABI;
