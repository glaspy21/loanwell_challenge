export const surveyJson = { 
    ps: {
    pages: [
     {
      name: "summaryPage",
      elements: [
       {
        type: "html",
        name: "question11"
       },
       {
        type: "html",
        name: "summaryText",
        html: "<p>SBA uses the information required by this Form 413 as one of a number of data sources in analyzing the repayment ability and creditworthiness of an application for an SBA guaranteed 7(a) or 504 loan or, with respect to a surety bond, to assist in recovery in the event that the contractor defaults on the contract. Submission of this information is required as part of your application for assistance. Failure to provide the information would impact the agency’s decision on your application.</p>\n\n\n<p>Complete this form for: (1) each proprietor; (2) general partner; (3) managing member of a limited liability company (LLC); (4) each owner of 20% or more of the equity of the Applicant (including the assets of the owner’s spouse and any minor children); and (5) any person providing a guaranty on the loan</p><br>\n\n<p><strong>Return completed form to:</strong></p>\n\n<p><strong>For 7(a) loans:</strong> the Lender processing the application for SBA guaranty</p>\n\n<p><strong>For 504 loans:</strong> the Certified Development Company (CDC) processing the application for SBA guaranty</p> \n\n<p><strong>For Surety Bonds: </strong>the Surety Company or Agent processing the application for surety bond guarantee</p>\n \n"
       }
      ],
      title: "Summary"
     },
     {
      name: "personalPage",
      elements: [
       {
        type: "panel",
        name: "personal",
        elements: [
         {
          type: "text",
          name: "personal.firstName",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "First Name",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "1 or More Letters",
            regex: "^[a-zA-Z'\\s]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "personal.lastName",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Last Name",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "1 or More Letters",
            regex: "^[a-zA-Z'\\s]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "personal.address",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Home Address",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "1 or More Letters and Numbers",
            regex: "^[a-zA-Z0-9\\s']+\\.?$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "personal.city",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "City",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "1 or More Letters and Numbers",
            regex: "^[a-zA-Z\\s]+$"
           }
          ],
          size: 8
         },
         {
          type: "dropdown",
          name: "personal.state",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "State",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          choices: [
           "AL",
           "AK",
           "AZ",
           "AR",
           "CA",
           "CO",
           "CT",
           "DE",
           "DC",
           "FL",
           "GA",
           "GU",
           "HI",
           "ID",
           "IL",
           "IN",
           "IA",
           "KS",
           "KY",
           "LA",
           "ME",
           "MD",
           "MA",
           "MI",
           "MN",
           "MS",
           "MO",
           "MT",
           "NE",
           "NV",
           "NH",
           "NJ",
           "NM",
           "NY",
           "NC",
           "ND",
           "OH",
           "OK",
           "OR",
           "PW",
           "PA",
           "RI",
           "SC",
           "SD",
           "TN",
           "TX",
           "UT",
           "VT",
           "VI",
           "VA",
           "WA",
           "WV",
           "WI",
           "WY"
          ],
          choicesOrder: "asc"
         },
         {
          type: "text",
          name: "personal.zip",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Zip Code",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only (5 or 9)",
            regex: "^[0-9]{5}([0-9]{4})?$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "personal.businessPhone",
          minWidth: "inherit",
          title: "Business Phone",
          hideNumber: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only (10 or None)",
            regex: "^[0-9]{10}$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "personal.homePhone",
          minWidth: "inherit",
          title: "Home Phone",
          hideNumber: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only (10 or None)",
            regex: "^[0-9]{10}$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "personal.businessName",
          minWidth: "inherit",
          title: "Business Name of Applicant",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Letters and Numbers Only",
            regex: "^[a-zA-Z0-9\\s'\\.]+$"
           }
          ],
          size: 8
         }
        ]
       }
      ],
      title: "Personal Info"
     },
     {
      name: "assetsPage",
      elements: [
       {
        type: "panel",
        name: "assets",
        elements: [
         {
          type: "text",
          name: "assets.cashOnHand",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Cash on Hand & in Banks",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          inputType: "number",
          size: 8
         },
         {
          type: "text",
          name: "assets.savingsAccounts",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Savings Accounts",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "assets.retirementAccounts",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "IRA or Other Retirement Account",
          description: "(Describe in Section 5)\n",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "assets.accountsReceivable",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Accounts & Notes Receivable",
          description: "(Describe in Section 5)\n",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "assets.lifeInsuranceCash",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Life Insurance – Cash Surrender Value Only",
          description: "(Describe in Section 8)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "assets.stocksAndBonds",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Stocks and Bonds",
          description: "(Describe in Section 3)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "assets.realEstate",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Real Estate",
          description: "(Describe in Section 4)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "assets.automobiles",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Automobiles",
          description: "(Describe in Section 5, and include Year/Make/Model)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "assets.otherPersProp",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Other Personal Property",
          description: "(Describe in Section 5)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "assets.otherAssets",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Other Assets",
          description: "(Describe in Section 5)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "expression",
          name: "assets.total",
          useDisplayValuesInTitle: false,
          title: "Total Assets\n",
          hideNumber: true,
          expression: "{assets.cashOnHand}+{assets.savingsAccounts}+{assets.retirementAccounts}+{assets.accountsReceivable}+{assets.lifeInsuranceCash}+{assets.stocksAndBonds}+{assets.realEstate}+{assets.automobiles}+{assets.otherPersProp}+{assets.otherAssets}\n",
          displayStyle: "currency"
         }
        ]
       }
      ],
      title: "Assets",
      description: "(Omit Cents)"
     },
     {
      name: "liabilitiesPage",
      elements: [
       {
        type: "panel",
        name: "liabilities",
        elements: [
         {
          type: "text",
          name: "liabilities.accountsPayable",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Accounts Payable",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "liabilities.notesPayable",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Notes Payable to Banks and Others",
          description: "(Describe in Section 2)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "liabilities.installAccAuto",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Installment Account",
          description: "(Auto)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "expression",
          name: "liabilities.installAccAutoMon",
          title: "Mo. Installment Account Payments",
          description: "(Auto)",
          hideNumber: true,
          expression: "{liabilities.installAccAuto}/12",
          displayStyle: "currency"
         },
         {
          type: "text",
          name: "liabilities.installAccOther",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Installment Account",
          description: "(Other)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "expression",
          name: "liabilities.installAccOtherMon",
          title: "Mo. Installment Account Payments",
          description: "(Other)",
          hideNumber: true,
          expression: "{liabilities.installAccOther}/12",
          displayStyle: "currency"
         },
         {
          type: "text",
          name: "liabilities.loansAgainstLife",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Loan(s) Against Life Insurance",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "liabilities.mortgages",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Mortgages on Real Estate",
          description: "(Describe in Section 4)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "liabilities.UnpaidTaxes",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Unpaid Taxes",
          description: "(Describe in Section 6)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "liabilities.OtherLiabs",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Other Liabilities",
          description: "(Describe in Section 7)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "expression",
          name: "liabilities.Total",
          title: "Total Liabilities",
          hideNumber: true,
          expression: "{liabilities.accountsPayable}+{liabilities.notesPayable}+{liabilities.installAccAuto}+{liabilities.installAccOther}+{liabilities.loansAgainstLife}+{liabilities.mortgages}+{liabilities.UnpaidTaxes}+{liabilities.OtherLiabs}",
          displayStyle: "currency"
         }
        ]
       },
       {
        type: "text",
        name: "netWorth",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "50px",
        title: "Net Worth",
        hideNumber: true,
        isRequired: true,
        requiredErrorText: "Required",
        validators: [
         {
          type: "regex",
          text: "Digits Only",
          regex: "^[0-9]+$"
         }
        ],
        size: 8
       },
       {
        type: "expression",
        name: "netTotal",
        title: "Net Total (Net Worth - Liabilities)\n",
        description: "*This total must equal your \nTotal Assets.",
        descriptionLocation: "underInput",
        hideNumber: true,
        expression: "{netWorth}-{liabilities.Total}"
       },
       {
        type: "expression",
        name: "isEqualTotal",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "50px",
        title: "Net Total Equals Total Assets?",
        hideNumber: true,
        expression: "{netTotal}=={assets.total}"
       }
      ],
      title: "Liabilities",
      description: "(Omit Cents)"
     },
     {
      name: "contingentLiabilitiesPage",
      elements: [
       {
        type: "panel",
        name: "panel1",
        elements: [
         {
          type: "text",
          name: "contLiabilities.endorserComaker",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "As Endorser or Co-Maker",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "contLiabilities.legalClaimAndJudg",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Legal Claims & Judgments",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "contLiabilities.provFedIncTax",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Provision for Federal Income Tax",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "contLiabilities.otherSpecialDebt",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Other Special Debt",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         }
        ]
       }
      ],
      title: "Contingent Liabilities",
      description: "(Omit Cents)"
     },
     {
      name: "section1Page",
      elements: [
       {
        type: "panel",
        name: "sec1IncomeSources",
        elements: [
         {
          type: "text",
          name: "incSources.salary",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Salary",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "incSources.netInvest",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Net Investment Income",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "incSources.realEstate",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Real Estate Income",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "incSources.other.value",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Other Income (Describe below)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "paneldynamic",
          name: "incSources.other.panel",
          visibleIf: "{incSources.other.value} > 0",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Description of Other Income in Section 1",
          hideNumber: true,
          requiredIf: "{incSources.other.value} > 0",
          requiredErrorText: "Required",
          templateElements: [
           {
            type: "text",
            name: "incSources.other.items",
            title: "Item\n",
            hideNumber: true
           }
          ],
          panelCount: 1,
          minPanelCount: 1,
          panelAddText: "Add",
          panelRemoveText: "Remove",
          showRangeInProgress: false
         }
        ]
       }
      ],
      title: "Section 1. Source Of Income"
     },
     {
      name: "section2Page",
      elements: [
       {
        type: "paneldynamic",
        name: "sec2panel",
        title: "Notes",
        hideNumber: true,
        templateElements: [
         {
          type: "text",
          name: "notesPayable.firstName",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Noteholder First Name",
          hideNumber: true,
          isRequired: true,
          validators: [
           {
            type: "regex",
            text: "1 or more Letters",
            regex: "^[a-zA-Z\\s]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "notesPayable.lastName",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Noteholder Last Name",
          hideNumber: true,
          isRequired: true,
          validators: [
           {
            type: "regex",
            text: "1 or more Letters",
            regex: "^[a-zA-Z\\s]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "notesPayable.address",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Noteholder Address",
          hideNumber: true,
          isRequired: true,
          validators: [
           {
            type: "regex",
            text: "1 or more Letters",
            regex: "^[a-zA-Z0-9\\s']+\\.?$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "notesPayable.originalBalance",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Original Balance",
          hideNumber: true,
          isRequired: true,
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "notesPayable.currentBalance",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Current Balance",
          hideNumber: true,
          isRequired: true,
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "notesPayable.paymentAmount",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Payment Amount",
          hideNumber: true,
          isRequired: true,
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "dropdown",
          name: "notesPayable.frequency",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Frequency",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          choices: [
           {
            value: "Daily",
            text: "Daily"
           },
           {
            value: "Weekly",
            text: "Weekly"
           },
           {
            value: "Bi-weekly",
            text: "Bi-weekly"
           },
           {
            value: "Monthly",
            text: "Monthly"
           },
           {
            value: "Yearly",
            text: "Yearly"
           }
          ],
          hasOther: true,
          otherText: "Custom"
         },
         {
          type: "text",
          name: "notesPayable.howSecured",
          title: "How Secured or Endorsed Type of Collateral",
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Letters and Numbers",
            regex: "^[a-zA-Z0-9\\s\\.']+$"
           }
          ]
         }
        ],
        panelCount: 1,
        minPanelCount: 1,
        panelAddText: "Add",
        panelRemoveText: "Remove"
       }
      ],
      title: "Section 2. Notes Payable to Banks and Others",
      description: "(Use attachments if necessary. Each attachment must be identified as part of this statement and signed.)"
     },
     {
      name: "section3Page",
      elements: [
       {
        type: "paneldynamic",
        name: "sec3StocksBonds",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "50px",
        title: "Stocks/Bonds",
        hideNumber: true,
        templateElements: [
         {
          type: "text",
          name: "stocksBonds.numShares",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Number of Shares",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "stocksBonds.securityName",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Name of Security",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          size: 8
         },
         {
          type: "text",
          name: "stocksBonds.cost",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Cost",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "stocksBonds.marketValue",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Market Value",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "expression",
          name: "stocksBonds.totalValue",
          title: "Total Value",
          expression: "({stocksBonds.numShares})*({stocksBonds.marketValue})"
         }
        ],
        panelCount: 1,
        minPanelCount: 1
       }
      ],
      title: "Section 3. Stocks and Bonds",
      description: "(Use attachments if necessary. Each attachment must be identified as part of this statement and signed.)"
     },
     {
      name: "section4Page",
      elements: [
       {
        type: "paneldynamic",
        name: "sec4RealEstate",
        title: "Real Estate Properties",
        hideNumber: true,
        templateElements: [
         {
          type: "dropdown",
          name: "realEstateProp.type",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Type of Real Estate",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          choices: [
           {
            value: "Primary Residence",
            text: "Primary Residence"
           },
           {
            value: "Other Residence",
            text: "Other Residence"
           },
           {
            value: "Rental Property",
            text: "Rental Property"
           },
           {
            value: "Land",
            text: "Land"
           }
          ]
         },
         {
          type: "text",
          name: "realEstateProp.address",
          title: "Property \nAddress",
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Letters and Numbers",
            regex: "^[a-zA-Z0-9\\.\\s]+$"
           }
          ]
         },
         {
          type: "panel",
          name: "realEstateProp.datePurchased",
          elements: [
           {
            type: "dropdown",
            name: "sec4DatePurchasedMonth",
            width: "inherit",
            minWidth: "inherit",
            maxWidth: "50px",
            title: "MM",
            isRequired: true,
            choices: [
             "01",
             "02",
             "03",
             "04",
             "05",
             "06",
             "07",
             "08",
             "09",
             "10",
             "11",
             "12"
            ],
            choicesOrder: "asc"
           },
           {
            type: "dropdown",
            name: "sec4DatePurchasedDay",
            width: "inherit",
            minWidth: "inherit",
            maxWidth: "50px",
            startWithNewLine: false,
            title: "DD",
            isRequired: true,
            choices: [
             "01",
             "02",
             "03",
             "04",
             "05",
             "06",
             "07",
             "08",
             "09",
             "10",
             "11",
             "12",
             "13",
             "14",
             "15",
             "16",
             "17",
             "18",
             "19",
             "20",
             "21",
             "22",
             "23",
             "24",
             "25",
             "26",
             "27",
             "28",
             "29",
             "30",
             "31"
            ],
            choicesOrder: "asc"
           },
           {
            type: "dropdown",
            name: "sec4DatePurchasedYear",
            width: "inherit",
            minWidth: "inherit",
            maxWidth: "50px",
            startWithNewLine: false,
            title: "YYYY\n",
            isRequired: true,
            choices: [
             "1900",
             "1901",
             "1902",
             "1903",
             "1904",
             "1905",
             "1906",
             "1907",
             "1908",
             "1909",
             "1910",
             "1911",
             "1912",
             "1913",
             "1914",
             "1915",
             "1916",
             "1917",
             "1918",
             "1919",
             "1920",
             "1921",
             "1922",
             "1923",
             "1924",
             "1925",
             "1926",
             "1927",
             "1928",
             "1929",
             "1930",
             "1931",
             "1932",
             "1933",
             "1934",
             "1935",
             "1936",
             "1937",
             "1938",
             "1939",
             "1940",
             "1941",
             "1942",
             "1943",
             "1944",
             "1945",
             "1946",
             "1947",
             "1948",
             "1949",
             "1950",
             "1951",
             "1952",
             "1953",
             "1954",
             "1955",
             "1956",
             "1957",
             "1958",
             "1959",
             "1960",
             "1961",
             "1962",
             "1963",
             "1964",
             "1965",
             "1966",
             "1967",
             "1968",
             "1969",
             "1970",
             "1971",
             "1972",
             "1973",
             "1974",
             "1975",
             "1976",
             "1977",
             "1978",
             "1979",
             "1980",
             "1981",
             "1982",
             "1983",
             "1984",
             "1985",
             "1986",
             "1987",
             "1988",
             "1989",
             "1990",
             "1991",
             "1992",
             "1993",
             "1994",
             "1995",
             "1996",
             "1997",
             "1998",
             "1999",
             "2000",
             "2001",
             "2002",
             "2003",
             "2004",
             "2005",
             "2006",
             "2007",
             "2008",
             "2009",
             "2010",
             "2011",
             "2012",
             "2013",
             "2014",
             "2015",
             "2016",
             "2017",
             "2018",
             "2019",
             "2020"
            ],
            choicesOrder: "desc"
           }
          ],
          title: "Date Purchased",
          isRequired: true
         },
         {
          type: "text",
          name: "realEstateProp.originalCost",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Original Cost",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ]
         },
         {
          type: "text",
          name: "realEstateProp.marketValue",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Present Market Value",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ]
         },
         {
          type: "text",
          name: "realEstateProp.mortgage.holderfirstName",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Mortgage Holder First Name",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "1 or More Letters",
            regex: "^[a-zA-Z\\s]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "realEstateProp.mortgage.holderLastName",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Mortgage Holder Last Name",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "1 or More Letters",
            regex: "^[a-zA-Z\\s]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "realEstateProp.mortgage.holderAddress",
          title: "Mortgage Holder Address",
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Letters and Numbers",
            regex: "^[a-zA-Z0-9\\.\\s]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "realEstateProp.mortgage.acctNum",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Mortgage Account Number",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "realEstateProp.mortgage.balance",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Mortgage Balance",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only",
            regex: "^[0-9]+$"
           }
          ],
          size: 8
         },
         {
          type: "panel",
          name: "realEstateProp.mortgage.payAmt",
          elements: [
           {
            type: "text",
            name: "sec4MortgagePaymentAmt",
            width: "inherit",
            minWidth: "inherit",
            maxWidth: "50px",
            title: "Amount",
            isRequired: true,
            requiredErrorText: "Required",
            validators: [
             {
              type: "regex",
              text: "Digits Only",
              regex: "^[0-9]+$"
             }
            ],
            size: 8
           },
           {
            type: "html",
            name: "Filler",
            width: "inherit",
            minWidth: "inherit",
            maxWidth: "50px",
            startWithNewLine: false,
            html: "<p>per<p>"
           },
           {
            type: "dropdown",
            name: "realEstateProp.mortgage.payPeriod",
            width: "inherit",
            minWidth: "inherit",
            maxWidth: "50px",
            startWithNewLine: false,
            title: "Period\n",
            isRequired: true,
            choices: [
             "Month",
             "Year"
            ],
            hasOther: true
           }
          ],
          title: "Payment",
          requiredErrorText: "Required",
         },
         {
          type: "text",
          name: "realEstateProp.mortgage.status",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          title: "Status of Mortgage",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "1 or More Letters",
            regex: "^[a-zA-Z\\s]+$"
           }
          ],
          size: 8
         }
        ]
       }
      ],
      title: "Section 4. Real Estate Owned"
     },
     {
      name: "section5Page",
      elements: [
       {
        type: "comment",
        name: "otherProperties.description",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "50px",
        title: "Description",
        hideNumber: true,
        requiredIf: "{assets.retirementAccounts} > 0 or {assets.accountsReceivable} > 0 or {assets.automobiles} > 0 or {assets.otherPersProp} > 0 or {assets.otherAssets} > 0"
       }
      ],
      visibleIf: "{assets.retirementAccounts} > 0 or {assets.accountsReceivable} > 0 or {assets.automobiles} > 0 or {assets.otherPersProp} > 0 or {assets.otherAssets} > 0",
      title: "Section 5. Other Personal Property and Other Assets",
      description: "(Describe, and, if any is pledged as security, state name and address of lien holder, amount of lien, terms of payment and, if delinquent, describe delinquency.)"
     },
     {
      name: "section6Page",
      elements: [
       {
        type: "comment",
        name: "unpaidTaxes.description",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "50px",
        title: "Description",
        hideNumber: true,
        requiredIf: "{liabilities.UnpaidTaxes} > 0",
        requiredErrorText: "Required",
        cols: 30
       }
      ],
      visibleIf: "{liabilities.UnpaidTaxes} > 0",
      title: "Section 6. Unpaid Taxes",
      description: "(Describe in detail as to type, to whom payable, when due, amount, and to what property, if any, a tax lien attaches.)"
     },
     {
      name: "section7Page",
      elements: [
       {
        type: "comment",
        name: "otherLiabilities.description",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "50px",
        title: "Description",
        hideNumber: true,
        requiredIf: "{liabilities.OtherLiabs} > 0",
        requiredErrorText: "Required",
        cols: 30
       }
      ],
      visibleIf: "{liabilities.OtherLiabs} > 0",
      title: "Section 7. Other Liabilities",
      description: "(Describe in detail.)"
     },
     {
      name: "lifeInsHeld.description",
      elements: [
       {
        type: "comment",
        name: "sec8LifeInsurance",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "50px",
        title: "Description",
        hideNumber: true,
        requiredIf: "{assets.lifeInsuranceCash} > 0",
        requiredErrorText: "Required",
        cols: 30
       }
      ],
      visibleIf: "{assets.lifeInsuranceCash} > 0",
      title: "Section 8. Life Insurance Held",
      description: "(Give face amount and cash surrender value of policies – name of insurance company and Beneficiaries.)"
     },
     {
      name: "signAndDatePage",
      elements: [
       {
        type: "html",
        name: "disclaimer",
        html: "<p>I authorize the SBA/Lender/Surety Company to make inquiries as necessary to verify the accuracy of the statements made and to determine my creditworthiness.</p>\n<p><strong>CERTIFICATION:</strong> (to be completed by each person submitting the information requested on this form and the spouse of any 20% or more owner when spousal assets are included)</p>\n<p>By signing this form, I certify under penalty of criminal prosecution that all information on this form and any additional supporting information submitted with this form is true and complete to the best of my knowledge. I understand that SBA or its participating Lenders or Certified Development Companies or Surety Companies will rely on this information when making decisions regarding an application for a loan or a surety bond. I further certify that I have read the attached statements required by law and executive order.</p><br>"
       },
       {
        type: "paneldynamic",
        name: "signAndDate",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "50px",
        title: "Signee",
        hideNumber: true,
        templateElements: [
         {
          type: "signaturepad",
          name: "sign.sig",
          width: "inherit",
          title: "Signature",
          isRequired: true
         },
         {
          type: "text",
          name: "sign.print",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "50px",
          startWithNewLine: false,
          title: "Print Name",
          isRequired: true
         },
         {
          type: "panel",
          name: "sign.date",
          elements: [
           {
            type: "dropdown",
            name: "sign.date.month",
            width: "150px",
            minWidth: "150px",
            maxWidth: "150px",
            title: "MM",
            isRequired: true,
            choices: [
             "01",
             "02",
             "03",
             "04",
             "05",
             "06",
             "07",
             "08",
             "09",
             "10",
             "11",
             "12"
            ],
            choicesOrder: "asc"
           },
           {
            type: "dropdown",
            name: "sign.date.day",
            width: "150px",
            minWidth: "150px",
            maxWidth: "150px",
            startWithNewLine: false,
            title: "DD",
            isRequired: true,
            choices: [
             "01",
             "02",
             "03",
             "04",
             "05",
             "06",
             "07",
             "08",
             "09",
             "10",
             "11",
             "12",
             "13",
             "14",
             "15",
             "16",
             "17",
             "18",
             "19",
             "20",
             "21",
             "22",
             "23",
             "24",
             "25",
             "26",
             "27",
             "28",
             "29",
             "30",
             "31"
            ],
            choicesOrder: "asc"
           },
           {
            type: "dropdown",
            name: "sign.date.year",
            width: "150px",
            minWidth: "150px",
            maxWidth: "150px",
            startWithNewLine: false,
            title: "YYYY\n",
            isRequired: true,
            choices: [
             "1900",
             "1901",
             "1902",
             "1903",
             "1904",
             "1905",
             "1906",
             "1907",
             "1908",
             "1909",
             "1910",
             "1911",
             "1912",
             "1913",
             "1914",
             "1915",
             "1916",
             "1917",
             "1918",
             "1919",
             "1920",
             "1921",
             "1922",
             "1923",
             "1924",
             "1925",
             "1926",
             "1927",
             "1928",
             "1929",
             "1930",
             "1931",
             "1932",
             "1933",
             "1934",
             "1935",
             "1936",
             "1937",
             "1938",
             "1939",
             "1940",
             "1941",
             "1942",
             "1943",
             "1944",
             "1945",
             "1946",
             "1947",
             "1948",
             "1949",
             "1950",
             "1951",
             "1952",
             "1953",
             "1954",
             "1955",
             "1956",
             "1957",
             "1958",
             "1959",
             "1960",
             "1961",
             "1962",
             "1963",
             "1964",
             "1965",
             "1966",
             "1967",
             "1968",
             "1969",
             "1970",
             "1971",
             "1972",
             "1973",
             "1974",
             "1975",
             "1976",
             "1977",
             "1978",
             "1979",
             "1980",
             "1981",
             "1982",
             "1983",
             "1984",
             "1985",
             "1986",
             "1987",
             "1988",
             "1989",
             "1990",
             "1991",
             "1992",
             "1993",
             "1994",
             "1995",
             "1996",
             "1997",
             "1998",
             "1999",
             "2000",
             "2001",
             "2002",
             "2003",
             "2004",
             "2005",
             "2006",
             "2007",
             "2008",
             "2009",
             "2010",
             "2011",
             "2012",
             "2013",
             "2014",
             "2015",
             "2016",
             "2017",
             "2018",
             "2019",
             "2020"
            ],
            choicesOrder: "desc"
           },
           {
            type: "text",
            name: "sign.ssn",
            width: "inherit",
            minWidth: "inherit",
            maxWidth: "50px",
            title: "SSN",
            hideNumber: true,
            isRequired: true,
            requiredErrorText: "Required",
            validators: [
             {
              type: "regex",
              text: "Digits Only (9)",
              regex: "^[0-9]{9}$"
             }
            ],
            size: 8
           }
          ],
          title: "Date",
          isRequired: true
         }
        ],
        panelCount: 1,
        minPanelCount: 1,
        panelAddText: "Add",
        panelRemoveText: "Remove"
       }
      ],
      title: "Sign and Date"
     }
    ],
    showProgressBar: "top",
    checkErrorsMode: "onValueChanged",
    pagePrevText: "Previous",
    pageNextText: "Next",
    completeText: "Submit",
    previewText: "Preview"
   }, sba: {
    pages: [
     {
      name: "summaryPage",
      elements: [
       {
        type: "html",
        name: "summary",
        html: "<p><strong>The purpose of this form is to collect identifying information about the applicant, loan request, indebtedness, information about the principals, information about current or previous government financing, and certain other disclosures. The information also facilitates background checks as authorized by Section 7(a)(1)(B) of the Small Business Act, 15 U.S.C. 636(a)(1)(B). This form is to be completed by the Small Business Applicant and submitted to an SBA Participating Lender.</strong></p>\n\n<h2>To be completed by the following:</h2>\n<p>(With the exception of guarantors, all parties listed below are considered “Associates” of the small business applicant.)</p>\n<ul>\n<li>For a sole proprietorship, the sole proprietor;</li>\n<li>For a partnership, all general partners and all limited partners owning 20% or more of the equity of the firm;</li>\n<li>For a corporation, all owners of 20% or more of the corporation and each officer and director;</li>\n<li>For limited liability companies (LLCs), all members owning 20% or more of the company, each officer, director, and managing member</li>\n<li>Any person hired by the business to manage day-to-day operations; and</li>\n<li>Any other person who is guaranteeing the loan, if required by SBA.</li>\n</ul>\n<p><u>For clarification regarding any of the questions,</u> you should contact the SBA Participating Lender that will be\nprocessing the loan request.</p>"
       }
      ]
     },
     {
      name: "personalPage",
      elements: [
       {
        type: "text",
        name: "personal.nameOfBusiness",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "inherit",
        title: "NAME OF BUSINESS APPLYING FOR LOAN: ",
        description: "(“APPLICANT”)",
        hideNumber: true,
        isRequired: true,
        requiredErrorText: "Required",
        validators: [
         {
          type: "regex",
          text: "1 or More Letters",
          regex: "^[a-zA-Z\\s']+$"
         }
        ],
        size: 8
       },
       {
        type: "text",
        name: "personal.firstName",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "inherit",
        title: "FIRST NAME",
        hideNumber: true,
        isRequired: true,
        requiredErrorText: "Required",
        validators: [
         {
          type: "regex",
          text: "1 or More Letters",
          regex: "^[a-zA-Z\\s']+$"
         }
        ],
        size: 8
       },
       {
        type: "text",
        name: "personal.LastName",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "inherit",
        title: "LAST NAME",
        hideNumber: true,
        isRequired: true,
        requiredErrorText: "Required",
        validators: [
         {
          type: "regex",
          text: "1 or More Letters",
          regex: "^[a-zA-Z\\s']+$"
         }
        ],
        size: 8
       },
       {
        type: "text",
        name: "personal.SSN",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "inherit",
        title: "SSN\n",
        hideNumber: true,
        isRequired: true,
        requiredErrorText: "Required",
        validators: [
         {
          type: "regex",
          text: "Only Digits (9)",
          regex: "^[0-9]{9}$"
         }
        ],
        size: 8
       },
       {
        type: "dropdown",
        name: "personal.title",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "inherit",
        title: "TITLE:",
        hideNumber: true,
        isRequired: true,
        requiredErrorText: "Required\n",
        choices: [
         {
          value: "Mr.",
          text: "Mr."
         },
         {
          value: "Mrs.",
          text: "Mrs."
         },
         {
          value: "Ms.",
          text: "Ms."
         },
         {
          value: "Dr.",
          text: "Dr."
         }
        ],
        hasOther: true,
        otherText: "Other"
       },
       {
        type: "panel",
        name: "personal.dob",
        elements: [
         {
          type: "dropdown",
          name: "personal.dob.month",
          width: "150PX",
          minWidth: "150PX",
          maxWidth: "150PX",
          title: "MM",
          hideNumber: true,
          choices: [
           "01",
           "02",
           "03",
           "04",
           "05",
           "06",
           "07",
           "08",
           "09",
           "10",
           "11",
           "12"
          ]
         },
         {
          type: "dropdown",
          name: "personal.dob.day",
          width: "150px",
          minWidth: "150px",
          maxWidth: "150px",
          startWithNewLine: false,
          title: "DD",
          hideNumber: true,
          choices: [
           "01",
           "02",
           "03",
           "04",
           "05",
           "06",
           "07",
           "08",
           "09",
           "10",
           "11",
           "12",
           "13",
           "14",
           "15",
           "16",
           "17",
           "18",
           "19",
           "20",
           "21",
           "22",
           "23",
           "24",
           "25",
           "26",
           "27",
           "28",
           "29",
           "30",
           "31"
          ]
         },
         {
          type: "dropdown",
          name: "personal.dob.year",
          width: "150px",
          minWidth: "150px",
          maxWidth: "150px",
          startWithNewLine: false,
          title: "YYYY",
          hideNumber: true,
          choices: [
           "1900",
           "1901",
           "1902",
           "1903",
           "1904",
           "1905",
           "1906",
           "1907",
           "1908",
           "1909",
           "1910",
           "1911",
           "1912",
           "1913",
           "1914",
           "1915",
           "1916",
           "1917",
           "1918",
           "1919",
           "1920",
           "1921",
           "1922",
           "1923",
           "1924",
           "1925",
           "1926",
           "1927",
           "1928",
           "1929",
           "1930",
           "1931",
           "1932",
           "1933",
           "1934",
           "1935",
           "1936",
           "1937",
           "1938",
           "1939",
           "1940",
           "1941",
           "1942",
           "1943",
           "1944",
           "1945",
           "1946",
           "1947",
           "1948",
           "1949",
           "1950",
           "1951",
           "1952",
           "1953",
           "1954",
           "1955",
           "1956",
           "1957",
           "1958",
           "1959",
           "1960",
           "1961",
           "1962",
           "1963",
           "1964",
           "1965",
           "1966",
           "1967",
           "1968",
           "1969",
           "1970",
           "1971",
           "1972",
           "1973",
           "1974",
           "1975",
           "1976",
           "1977",
           "1978",
           "1979",
           "1980",
           "1981",
           "1982",
           "1983",
           "1984",
           "1985",
           "1986",
           "1987",
           "1988",
           "1989",
           "1990",
           "1991",
           "1992",
           "1993",
           "1994",
           "1995",
           "1996",
           "1997",
           "1998",
           "1999",
           "2000",
           "2001",
           "2002",
           "2003",
           "2004",
           "2005",
           "2006",
           "2007",
           "2008",
           "2009",
           "2010",
           "2011",
           "2012",
           "2013",
           "2014",
           "2015",
           "2016",
           "2017",
           "2018",
           "2019",
           "2020"
          ],
          choicesOrder: "desc"
         }
        ],
        title: "Date of Birth",
        isRequired: true,
        requiredErrorText: "Required"
       }
      ],
      navigationButtonsVisibility: "show"
     },
     {
      name: "ownersPage",
      elements: [
       {
        type: "paneldynamic",
        name: "owners",
        title: "List proprietors, partners, officers, directors, all holders of outstanding stock. 100% of ownership must be shown.",
        description: "** The gender/race/ethnicity/veteran data is collected for program reporting purposes only. Disclosure is voluntary and has no bearing on the credit decision.",
        descriptionLocation: "underInput",
        hideNumber: true,
        isRequired: true,
        templateElements: [
         {
          type: "text",
          name: "owner.firstName",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "inherit",
          title: "Owner First Name",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "1 or More Letters",
            regex: "^[a-zA-Z\\s']+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "owner.lastName",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "inherit",
          title: "Owner Last Name",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "1 or More Letters",
            regex: "^[a-zA-Z\\s']+$"
           }
          ],
          size: 8
         },
         {
          type: "text",
          name: "owner.percentOwned",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "inherit",
          title: "% Owned",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          validators: [
           {
            type: "regex",
            text: "Digits Only (1-100)",
            regex: "^[0-9]{1,3}$"
           }
          ],
          inputType: "number",
          size: 8,
          min: "0",
          max: "100",
          step: 1
         },
         {
          type: "dropdown",
          name: "owner.Veteran",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "inherit",
          title: "Veteran*",
          hideNumber: true,
          defaultValue: "4",
          isRequired: true,
          choices: [
           {
            value: "1",
            text: "Non-Veteran"
           },
           {
            value: "2",
            text: "Veteran-Other"
           },
           {
            value: "3",
            text: "Service-Disabled Veteran"
           },
           {
            value: "4",
            text: "Not Disclosed"
           }
          ]
         },
         {
          type: "dropdown",
          name: "owner.gender",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "inherit",
          title: "Gender*",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required",
          choices: [
           {
            value: "M",
            text: "Male"
           },
           {
            value: "F",
            text: "Female"
           },
           {
            value: "N",
            text: "Not Disclosed"
           }
          ]
         },
         {
          type: "checkbox",
          name: "owner.race",
          width: "inherit",
          minWidth: "inherit",
          maxWidth: "inherit",
          title: "Race*",
          description: "(check all)",
          hideNumber: true,
          isRequired: true,
          requiredErrorText: "Required\n",
          choices: [
           {
            value: "1",
            text: "American Indian or Alaska Native"
           },
           {
            value: "2",
            text: "Asian"
           },
           {
            value: "3",
            text: "Black or African-American"
           },
           {
            value: "4",
            text: "Native Hawaiian or Pacific Islander"
           },
           {
            value: "5",
            text: "White"
           },
           {
            value: "X",
            text: "Not Disclosed"
           }
          ]
         },
         {
          type: "dropdown",
          name: "owner.ethnicity",
          title: "Ethnicity*",
          hideNumber: true,
          isRequired: true,
          choices: [
           {
            value: "H",
            text: "Hispanic or Latino"
           },
           {
            value: "N",
            text: "Not Hispanic or Latino"
           },
           {
            value: "Y",
            text: "Not Disclosed"
           }
          ]
         }
        ],
        panelCount: 1,
        minPanelCount: 1,
        panelAddText: "Add Owner",
        panelRemoveText: "Remove Owner",
        showRangeInProgress: false
       }
      ]
     },
     {
      name: "questionSummaryPage",
      elements: [
       {
        type: "html",
        name: "questionsSummary",
        html: "<h3>ALL OF THE FOLLOWING QUESTIONS MUST BE ANSWERED AND ARE SUBJECT TO VERIFICATION BY SBA</h3>"
       }
      ]
     },
     {
      name: "isSubjectToChargesPage",
      elements: [
       {
        type: "boolean",
        name: "questions.isSubjectToCharges",
        title: "Are you presently subject to an indictment, criminal information, arraignment, or other means by which formal criminal charges are brought in any jurisdiction?",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "html",
        name: "*isSubjectToCharges",
        visibleIf: "{questions.isSubjectToCharges} = true",
        html: "<p>If “Yes”, the loan request is ineligible for SBA assistance.</p>"
       }
      ]
     },
     {
      name: "hasBeenArrestedPage",
      elements: [
       {
        type: "boolean",
        name: "questions.hasBeenArrested",
        title: "Have you been arrested in the past six months for any criminal offense?",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "html",
        name: "*hasBeenArrested",
        visibleIf: "{questions.hasBeenArrested} = true",
        html: "<p>If \"Yes\", you must complete SBA Form 912 and provide details and lender will be required to conduct a background check and make a character determination in accordance with the procedures described in SOP 50 10 5.</p"
       }
      ]
     },
     {
      name: "hasBeenGuiltyPage",
      elements: [
       {
        type: "boolean",
        name: "questions.hasBeenGuilty",
        title: "For any criminal offense – other than a minor vehicle violation – have you ever: 1) been convicted; 2) plead guilty; 3) plead nolo contendere; 4) been placed on pretrial diversion; or 5) been placed on any form of parole or probation (including probation before judgment)? ",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "html",
        name: "*hasBeenGuilty",
        visibleIf: "{questions.hasBeenGuilty} = true",
        html: "<p>If \"Yes\", you must complete SBA Form 912 and provide details and lender will be required to conduct a background check and make a character determination in accordance with the procedures described in SOP 50 10 5.</p>\n<p>If you are currently on parole or probation (including probation before judgment), the loan request is ineligible for SBA assistance. If the charge resulting in a “YES” was a single misdemeanor that was subsequently dropped without prosecution, you must provide documentation from the appropriate court or prosecutor’s office along with the completed Form 912.</p>"
       }
      ]
     },
     {
      name: "hasSubmittedAppPage",
      elements: [
       {
        type: "boolean",
        name: "questions.hasSubmittedApp",
        title: "Has an application for the loan you are applying for now ever been submitted to SBA or to a Certified Development Company or lender in connection with any SBA program?",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "html",
        name: "*hasSubmittedApp",
        visibleIf: "{questions.hasSubmittedApp} = true",
        html: "<p>If \"YES\", this application may not be submitted to SBA under any delegated or expedited processing method, but must be submitted to the Standard 7(a) Loan Guaranty Processing Center (LGPC) for non-delegated processing. The only exception is an application that was declined under a 7(a) Small Loan due to the applicant’s credit score may be submitted under SBA Express procedures. Note: This does not mean that your loan will be denied, only that your lender will need to use different SBA procedures to process the loan.</p>"
       }
      ]
     },
     {
      name: "isSuspendedPage",
      elements: [
       {
        type: "boolean",
        name: "questions.isSuspended",
        title: "Are you presently debarred, suspended, proposed for debarment, declared ineligible, or voluntarily excluded from participation in this transaction by any Federal department or agency?",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "html",
        name: "*isSuspended",
        html: "<p>If \"Yes\", this application may not be submitted to SBA under any delegated or expedited processing method, but must be submitted to the Standard 7(a) Loan Guaranty Processing Center (LGPC) for non-delegated processing. The only exception is an application that was declined under a 7(a) Small Loan due to the applicant’s credit score may be submitted under SBA Express procedures. Note: This does not mean that your loan will be denied, only that your lender will need to use different SBA procedures to process the loan.</p>",
        visibleIf: "{questions.isSuspended} = true"
       }
      ]
     },
     {
      name: "isDelinquentPage",
      elements: [
       {
        type: "boolean",
        name: "questions.isDelinquent",
        title: "If you are at least a 50% or more owner of the applicant business, are you more than 60 days delinquent on any obligation to pay child support arising under an administrative order, court order, repayment agreement between the holder and a custodial parent, or repayment agreement between the holder and a state agency providing child support enforcement services? ",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "html",
        name: "*isDelinquent",
        html: "<p>If \"YES\", this application may not be submitted to SBA under any delegated or expedited processing method, but must be submitted to the Standard 7(a) Loan Guaranty Processing Center (LGPC) for non-delegated processing. The only exception is an application that was declined under a 7(a) Small Loan due to the applicant’s credit score may be submitted under SBA Express procedures. Note: This does not mean that your loan will be denied, only that your lender will need to use different SBA procedures to process the loan.</p>",
        visibleIf: "{questions.isDelinquent} = true"
       }
      ]
     },
     {
      name: "isCitizenPage",
      elements: [
       {
        type: "boolean",
        name: "questions.isCitizen",
        title: "Are you a U.S. Citizen?",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "boolean",
        name: "questions.alien.isLawful",
        visibleIf: "{questions.isCitizen} = false",
        title: "Are you a Lawful Permanent resident alien?",
        hideNumber: true,
        requiredIf: "{questions.isCitizen} = false"
       },
       {
        type: "text",
        name: "questions.alien.registration",
        visibleIf: "{questions.alien.isLawful} = true",
        title: "Provide Alien Registration Number",
        hideNumber: true,
        requiredIf: "{questions.alien.isLawful} = true"
       }
      ]
     },
     {
      name: "prodExportsPage",
      elements: [
       {
        type: "boolean",
        name: "questions.prodExports.areExported",
        title: "Are any of your business’ products or services exported or do you plan to begin exporting as a result of this loan?",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "text",
        name: "questions.prodExports.totalSales",
        visibleIf: "{questions.prodExports.areExported} = true",
        title: "Provide the estimated total export sales this loan will support:",
        hideNumber: true,
        requiredIf: "{questions.prodExports.areExported} = true",
        inputType: "number"
       }
      ]
     },
     {
      name: "franchisePage",
      elements: [
       {
        type: "boolean",
        name: "questions.isFranchise",
        title: "Is your business a franchise?",
        hideNumber: true,
        isRequired: true
       }
      ]
     },
     {
      name: "hasAffiliatesPage",
      elements: [
       {
        type: "boolean",
        name: "questions.hasAffiliates",
        title: "Does the Applicant business have any Affiliates?",
        description: "Affiliation exists when one individual or entity controls or has the power to control another or when a third party or parties control or have the power to control both. SBA considers factors such as ownership, management previous relationships with or ties to another entity, and contractual relationships when determining whether affiliation exists. The complete definition of affiliation is found at 13 CFR 121.103. (See also, 13 CFR 121.107 and 121.301.) An “Affiliate” includes, for example: (1) a parent company; (2) subsidiaries and other companies that are owned or controlled by the Applicant; (3) companies in which an officer, director, general partner, managing member or party owning 20% or more is also an officer, director, general partner, managing member or 20% or greater owner of the Applicant; (4) companies or individuals with unexercised options to own 50% or more of the Applicant’s stock; and (5) companies that have entered into agreements to merge with the Applicant.",
        descriptionLocation: "underInput",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "html",
        name: "question1",
        visibleIf: "{questions.hasAffiliates} = true",
        html: "<p>Attach a listing of all Affiliates to this form.</p>"
       }
      ]
     },
     {
      name: "loanPage",
      elements: [
       {
        type: "boolean",
        name: "questions.loan.hasObtained",
        title: "Have you, the Applicant, its Affiliates, or any business owned or controlled by you or any Associate ever obtained a direct or guaranteed loan from SBA or any other Federal agency or been a guarantor on such a loan?",
        description: "(This includes student loans and disaster loans.)",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "boolean",
        name: "questions.loan.isDelinquent",
        visibleIf: "{questions.loan.hasObtained} = true",
        title: "Is any of the financing currently delinquent?",
        hideNumber: true,
        requiredIf: "{questions.loan.hasObtained} = true"
       },
       {
        type: "boolean",
        name: "questions.loan.hasDefaulted",
        visibleIf: "{questions.loan.isDelinquent} notempty",
        title: "Did any of this financing ever default and cause a loss to the Government?",
        hideNumber: true,
        requiredIf: "{questions.loan.hasObtained} = true"
       }
      ]
     },
     {
      name: "numEmployedPage",
      elements: [
       {
        type: "text",
        name: "questions.numEmployed",
        title: "What is the existing number of employees currently employed by the business?",
        hideNumber: true,
        inputType: "number"
       }
      ]
     },
     {
      name: "jobsPage",
      elements: [
       {
        type: "text",
        name: "questions.jobs.numCreated",
        title: "Number of jobs to be created as a result of the loan?",
        hideNumber: true,
        isRequired: true,
        inputType: "number",
        min: "0",
        step: 1
       },
       {
        type: "text",
        name: "questions.jobs.numRetained",
        visibleIf: "{questions.jobs.numCreated} notempty",
        title: "Number of jobs that will be retained as a result of the loan that would have been lost otherwise?",
        hideNumber: true,
        isRequired: true
       }
      ]
     },
     {
      name: "brokerPage",
      elements: [
       {
        type: "boolean",
        name: "questions.usesBroker",
        title: "Have you or the Applicant used (or intend to use) a packager, broker, accountant, lawyer, etc.to assist in (a) preparing the loan application or any related materials and/or (b) referring the loan to the lender?",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "html",
        name: "*usesBroker",
        visibleIf: "{questions.usesBroker} = true",
        width: "inherit",
        minWidth: "inherit",
        maxWidth: "inherit",
        html: "<p>If \"Yes\", A SBA Form 159 7(a) will need to be completed by the Applicant and the lender.</p>"
       }
      ]
     },
     {
      name: "isforConstructionPage",
      elements: [
       {
        type: "boolean",
        name: "questions.isForConstruction",
        title: "Will more than $10,000 of the loan proceeds be used for construction?",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "html",
        name: "*forConstruction",
        visibleIf: "{questions.isForConstruction} = true",
        html: "<p>If “Yes,” a SBA Form 601 will need to be completed.</p>"
       }
      ]
     },
     {
      name: "isRiskyRevenuePage",
      elements: [
       {
        type: "boolean",
        name: "questions.isRiskyRevenue",
        title: "Are any of the Applicant’s revenues derived from gambling or from the sale of products or services, or the presentation of any depiction, displays or live performances, of a prurient sexual nature?",
        hideNumber: true,
        isRequired: true
       }
      ]
     },
     {
      name: "isForPilotPage",
      elements: [
       {
        type: "boolean",
        name: "questions.isForPilot",
        title: "Is the loan request for a Community Advantage Pilot Program loan?",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "html",
        name: "*isForPilot",
        html: "<p>If “Yes,” a SBA Form 2449, Community Advantage Addendum will need to be completed.</p>",
        visibleIf: "{questions.isForPilot} = true"
       }
      ]
     },
     {
      name: "page22",
      elements: [
       {
        type: "html",
        name: "question2",
        html: "<h5>SBA may not provide financial assistance to an applicant where there is any appearance of a conflict of interest with an SBA or other governmental employee. If any of the following questions are answered “False”, this application may not be submitted under any delegated or expedited processing method, but must be submitted to the LGPC for non- delegated processing. Note: This does not mean that your loan will be denied, only that your lender will need to use different SBA procedures to process the loan.</h5>"
       }
      ]
     },
     {
      name: "hasOverTenPCPage",
      elements: [
       {
        type: "boolean",
        name: "questions.hasOverTenPC",
        title: "No SBA employee, or the household member (see definition at * below) of an SBA employee, is a sole proprietor, partner, officer, director, or stockholder with a 10 percent or more interest, of the Applicant. [13 CFR 105.204]",
        hideNumber: true,
        valueTrue: "True",
        valueFalse: "False"
       }
      ]
     },
     {
      name: "hasFormerEmployeesPage",
      elements: [
       {
        type: "boolean",
        name: "questions.hasFormerEmployees",
        title: "No former SBA employee, who has been separated from SBA for less than one year prior to the request for financial assistance, is an employee, owner, partner, attorney, agent, owner of stock, officer, director, creditor or debtor of the Applicant. [13 CFR 105.203]",
        hideNumber: true,
        valueTrue: "True",
        valueFalse: "False"
       }
      ]
     },
     {
      name: "hasFormerOfficialsPage",
      elements: [
       {
        type: "boolean",
        name: "questions.hasFormerOfficials",
        title: "No member of Congress, or an appointed official or employee of the legislative or judicial branch of the Federal Government, is a sole proprietor, general partner, officer, director, or stockholder with a 10 percent or more interest, or household member of such individual, of the Applicant. [13 CFR 105.301(c)]",
        hideNumber: true,
        valueTrue: "True",
        valueFalse: "False"
       }
      ]
     },
     {
      name: "govOverTenPCPage",
      elements: [
       {
        type: "boolean",
        name: "questions.hasGovOverTenPC",
        title: "No Government employee having a grade of at least GS-13 or higher is a sole proprietor, general partner, officer, director, or stockholder with a 10 percent or more interest, or a household member of such individual, of the Applicant. [13 CFR 105.301(a)]",
        hideNumber: true,
        valueTrue: "True",
        valueFalse: "False"
       }
      ]
     },
     {
      name: "hasVolunteerOrHouseholdPage",
      elements: [
       {
        type: "boolean",
        name: "questions.hasVolunteerOrHousehold",
        title: "No member or employee of a Small Business Advisory Council or a SCORE volunteer is a sole proprietor, general partner, officer, director, or stockholder with a 10 percent or more interest, or a household member of such individual, of the Applicant. [13 CFR 105.302(a)]",
        description: "A “household member” of an SBA employee includes: a) the spouse of the SBA employee; b) the minor children of said individual; and c) the blood relatives of the employee, and the blood relatives of the employee’s spouse who reside in the same place of abode as the employee.[13 CFR 105.201(d)]",
        descriptionLocation: "underInput",
        hideNumber: true,
        valueTrue: "True",
        valueFalse: "False"
       }
      ]
     },
     {
      name: "restrictionsPage",
      elements: [
       {
        type: "boolean",
        name: "restrictions",
        title: "Would you like to read the list of restrictions?",
        hideNumber: true
       },
       {
        type: "html",
        name: "*restrictions",
        visibleIf: "{restrictions} = true",
        html: "<h3>Please read the following restrictions regarding use of federal financial assistance programs. If you understand them fully and agree to them, sign your name at the end of this document.</h3>\n<p>SBA is required to withhold or limit financial assistance, to impose special conditions on approved loans, to provide special notices to applicants or borrowers and to require special reports and data from borrowers in order to comply with legislation passed by the Congress and Executive Orders issued by the President and by the provisions of various inter-agency agreements. SBA has issued regulations and procedures that implement these laws and executive orders. These are contained in Parts 112, 113, and 117 of Title 13 of the Code of Federal Regulations and in Standard Operating Procedures.</p>\n<p><strong>Privacy Act (5 U.S.C. 552a) -- </strong>Any person can request to see or get copies of any personal information that SBA has in his or her file when that file is retrieved by individual identifiers such as name or social security numbers. Requests for information about another party may be denied unless SBA has the written permission of the individual to release the information to the requestor or unless the information is subject to disclosure under the Freedom of Information Act.</p>\n<p>Under the provisions of the Privacy Act, you are not required to provide your social security number. Failure to provide your social security number may not affect any right, benefit or privilege to which you are entitled. Disclosures of name and other personal identifiers are, however, required for a benefit, as SBA requires an individual seeking assistance from SBA to provide it with sufficient information for it to make a character determination. In determining whether an individual is of good character, SBA considers the person’s integrity, candor, and disposition toward criminal actions. Additionally, SBA is specifically authorized to verify your criminal history, or lack thereof, pursuant to section 7(a)(1)(B), 15 USC Section 636(a)(1)(B) of the Small Business Act ( the Act). Further, for all forms of assistance, SBA is authorized to make all investigations necessary to ensure that a person has not engaged in acts that violate or will violate the Act or the Small Business Investment Act, 15 USC Sections 634(b)(11) and 687(b)(a), respectively. For these purposes, you are asked to voluntarily provide your social security number to assist SBA in making a character determination and to distinguish you from other individuals with the same or similar name or other personal identifier.</p>\n<p>The Privacy Act authorizes SBA to make certain “routine uses” of information protected by that Act. One such routine use is the disclosure of information maintained in SBA’s investigative files system of records when this information indicates a violation or potential violation of law, whether civil, criminal, or administrative in nature. Specifically, SBA may refer the information to the appropriate agency, whether Federal, State, local or foreign, charged with responsibility for, or otherwise involved in investigation, prosecution, enforcement or prevention of such violations. Another routine use is disclosure to other Federal agencies conducting background checks; only to the extent the information is relevant to the requesting agencies' function. See, 74 F.R. 14890 (2009), and as amended from time to time for additional background and other routine uses.</p>\n<p><strong>Right to Financial Privacy Act of 1978 (12 U.S.C. 3401) --</strong> This is notice to you as required by the Right to Financial Privacy Act of 1978, of SBA's access rights to financial records held by financial institutions that are or have been doing business with you or your business, including any financial institutions participating in a loan or loan guaranty. The law provides that SBA shall have a right of access to your financial records in connection with its consideration or administration of assistance to you in the form of a Government guaranteed loan. SBA is required to provide a certificate of its compliance with the Act to a financial institution in connection with its first request for access to your financial records, after which no further certification is required for subsequent accesses. The law also provides that SBA's access rights continue for the term of any approved loan guaranty agreement. No further notice to you of SBA's access rights is required during the term of any such agreement. The law also authorizes SBA to transfer to another Government authority any financial records included in an application for a loan, or concerning an approved loan or loan guarantee, as necessary to process, service or foreclose on a loan guaranty or collect on a defaulted loan guaranty.</p>\n<p><strong>Freedom of Information Act (5 U.S.C. 552) -- </strong>This law provides, with some exceptions, that SBA must supply information reflected in agency files and records to a person requesting it. Information about approved loans that will be automatically released includes, among other things, statistics on our loan programs (individual borrowers are not identified in the statistics) and other information such as the names of the borrowers (and their officers, directors, stockholders or partners), the collateral pledged to secure the loan, the amount of the loan, its purpose in general terms and the maturity. Proprietary data on a borrower would not routinely be made available to third parties. All requests under this Act are to be addressed to the nearest SBA office and be identified as a Freedom of Information request.</p>\n<p><strong>Flood Disaster Protection Act (42 U.S.C. 4011) --</strong> Regulations have been issued by the Federal Insurance Administration (FIA) and by SBA implementing this Act and its amendments. These regulations prohibit SBA from making certain loans in an FIA designated floodplain unless Federal Flood insurance is purchased as a condition of the loan. Failure to maintain the required level of flood insurance makes the applicant ineligible for any financial assistance from SBA, including disaster assistance.</strong>\n SBA Form 1919 (Revised 4/14) 4\n\n<p><strong>Executive Orders -- </strong>Floodplain Management and Wetland Protection (42 F.R. 26951 and 42 F.R. 26961) -- SBA discourages settlement in or development of a floodplain or a wetland. This statement is to notify all SBA loan applicants that such actions are hazardous to both life and property and should be avoided. The additional cost of flood preventive construction must be considered in addition to the possible loss of all assets and investments due to a future flood.<p>\n<p><strong>Occupational Safety and Health Act (15 U.S.C. 651 et seq.) -- </strong>This legislation authorizes the Occupational Safety and Health Administration in the Department of Labor to require businesses to modify facilities and procedures to protect employees or pay penalty fees. Businesses can be forced to cease operations or be prevented from starting operations in a new facility. Therefore, SBA may require additional information from an applicant to determine whether the business will be in compliance with OSHA regulations and allowed to operate its facility after the loan is approved and disbursed. Signing this form as an applicant is certification that the OSHA requirements that apply to the applicant business have been determined and that the applicant, to the best of its knowledge, is in compliance. Furthermore, applicant certifies that it will remain in compliance during the life of the loan.</p>\n<p><strong>Civil Rights Legislation (13 C.F.R. 112, 113, 117) -- </strong>All businesses receiving SBA financial assistance must agree not to discriminate in any business practice, including employment practices and services to the public on the basis of categories cited in 13 C.F.R., Parts 112, 113, and 117 of SBA Regulations. This includes making their goods and services available to handicapped clients or customers. All business borrowers will be required to display the \"Equal Employment Opportunity Poster\" prescribed by SBA.</p>\n<p><strong>Equal Credit Opportunity Act (15 U.S.C. 1691) -- </strong>The Federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status or age (provided the applicant has the capacity to enter into a binding contract); because all or part of the applicant's income derives from any public assistance program, or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act.</p>\n<p><strong>Executive Order 11738 -- </strong>Environmental Protection (38 F.R. 251621) -- The Executive Order charges SBA with administering its loan programs in a manner that will result in effective enforcement of the Clean Air Act, the Federal Water Pollution Act and other environment protection legislation.</p>\n<p><strong>Debt Collection Act of 1982, Deficit Reduction Act of 1984 (31 U.S.C. 3701 et seq. and other titles) --</strong> These laws require SBA to collect aggressively any loan payments which become delinquent. SBA must obtain your taxpayer identification number when you apply for a loan. If you receive a loan, and do not make payments as they come due, SBA may take one or more of the following actions: (1) report the status of your loan(s) to credit bureaus, (2) hire a collection agency to collect your loan, (3) offset your income tax refund or other amounts due to you from the Federal Government, (4) suspend or debar you or your company from doing business with the Federal Government, (5) refer your loan to the Department of Justice or other attorneys for litigation, or (6) foreclose on collateral or take other action permitted in the loan instruments.</p>\n<p><strong>Immigration Reform and Control Act of 1986 (Pub. L. 99-603) --</strong> If you are an alien who was in this country illegally since before January 1, 1982, you may have been granted lawful temporary resident status by the United States Immigration and Naturalization Service pursuant to the Immigration Reform and Control Act of 1986. For five years from the date you are granted such status, you are not eligible for financial assistance from the SBA in the form of a loan guaranty under Section 7(a) of the Small Business Act unless you are disabled or a Cuban or Haitian entrant. When you sign this document, you are making the certification that the Immigration Reform and Control Act of 1986 does not apply to you, or if it does apply, more than five years have elapsed since you have been granted lawful temporary resident status pursuant to such 1986 legislation.</p>\n<p><strong>Lead-Based Paint Poisoning Prevention Act (42 U.S.C. 4821 et seq.)</strong>\nBorrowers using SBA funds for the construction or rehabilitation of a residential structure are prohibited from using lead-based paint (as defined in SBA regulations) on all interior surfaces, whether accessible or not, and exterior surfaces, such as stairs, decks, porches, railings, windows and doors, which are readily accessible to children under 7 years of age. A \"residential structure\" is any home, apartment, hotel, motel, orphanage, boarding school, dormitory, day care center, extended care facility, college or other school housing, hospital, group practice or community facility and all other residential or institutional structures where persons reside.</p>\n<p><strong>Executive Order 12549, Debarment and Suspension (13 C.F.R. 145) -- </strong>The prospective lower tier participant certifies, by submission of this loan application, that neither it nor its principals are presently debarred, suspended, proposed for debarment, declared ineligible, or voluntarily excluded from participation in this transaction by any Federal department or agency. Where the prospective lower tier participant is unable to certify to any of the statements in this certification, such prospective participants shall attach an explanation to the loan application.</p>"
       }
      ]
     },
     {
      name: "authorizationPage",
      elements: [
       {
        type: "html",
        name: "authorization",
        html: "<h3>By Signing the Following Page\n, You Make the Following Representations, Authorizations and Certifications</h3>\n <p><strong><u>REPRESENTATIONS AND AUTHORIZATIONS:</u></strong> I represent that I have read the items above and I understand them. I represent that I will comply, whenever applicable, with the hazard insurance, lead- based paint, civil rights or other limitations in this notice. I further represent that all SBA loan proceeds will be used only for business related purposes as specified in the loan application and, to the extent feasible, to purchase only American-made equipment and products. I authorize the SBA Office of Inspector General to request criminal record information about me from criminal justice agencies for the purpose of determining my eligibility for programs authorized by the Small Business Act, as amended.</p>\n<p><strong><u>CERTIFICATION AS TO ACCURACY: </u></strong>I certify that the information provided in this application and the information that I have provided in all supporting documents and forms is true and accurate. I realize that the penalty for knowingly making a false statement to obtain a guaranteed loan from SBA is that I may be fined up to $250,000 and/or be put in jail for up to 5 years under 18 USC § 1001 and if false statements are submitted to a Federally insured institution, I may be fined up to $1,000,000 and/or be put in jail for up to 30 years under 18 USC § 1014.</p>"
       }
      ]
     },
     {
      name: "signAndDatePage",
      elements: [
       {
        type: "signaturepad",
        name: "sign.sig",
        title: "Signature",
        hideNumber: true,
        isRequired: true,
        readOnly: true
       },
       {
        type: "text",
        name: "sign.print",
        title: "Print Name",
        hideNumber: true,
        isRequired: true
       },
       {
        type: "panel",
        name: "sign.date",
        elements: [
         {
          type: "dropdown",
          name: "sign.date.month",
          width: "150px",
          minWidth: "150px",
          maxWidth: "150px",
          title: "MM",
          hideNumber: true,
          choices: [
           "01",
           "02",
           "03",
           "04",
           "05",
           "06",
           "07",
           "08",
           "09",
           "10",
           "11",
           "12"
          ]
         },
         {
          type: "dropdown",
          name: "sign.date.day",
          width: "150px",
          minWidth: "150px",
          maxWidth: "150px",
          startWithNewLine: false,
          title: "DD",
          hideNumber: true,
          choices: [
           "01",
           "02",
           "03",
           "04",
           "05",
           "06",
           "07",
           "08",
           "09",
           "10",
           "11",
           "12",
           "13",
           "14",
           "15",
           "16",
           "17",
           "18",
           "19",
           "20",
           "21",
           "22",
           "23",
           "24",
           "25",
           "26",
           "27",
           "28",
           "29",
           "30",
           "31"
          ]
         },
         {
          type: "dropdown",
          name: "sign.date.year",
          width: "150px",
          minWidth: "150px",
          maxWidth: "150px",
          startWithNewLine: false,
          title: "YYYY",
          hideNumber: true,
          choices: [
           "1900",
           "1901",
           "1902",
           "1903",
           "1904",
           "1905",
           "1906",
           "1907",
           "1908",
           "1909",
           "1910",
           "1911",
           "1912",
           "1913",
           "1914",
           "1915",
           "1916",
           "1917",
           "1918",
           "1919",
           "1920",
           "1921",
           "1922",
           "1923",
           "1924",
           "1925",
           "1926",
           "1927",
           "1928",
           "1929",
           "1930",
           "1931",
           "1932",
           "1933",
           "1934",
           "1935",
           "1936",
           "1937",
           "1938",
           "1939",
           "1940",
           "1941",
           "1942",
           "1943",
           "1944",
           "1945",
           "1946",
           "1947",
           "1948",
           "1949",
           "1950",
           "1951",
           "1952",
           "1953",
           "1954",
           "1955",
           "1956",
           "1957",
           "1958",
           "1959",
           "1960",
           "1961",
           "1962",
           "1963",
           "1964",
           "1965",
           "1966",
           "1967",
           "1968",
           "1969",
           "1970",
           "1971",
           "1972",
           "1973",
           "1974",
           "1975",
           "1976",
           "1977",
           "1978",
           "1979",
           "1980",
           "1981",
           "1982",
           "1983",
           "1984",
           "1985",
           "1986",
           "1987",
           "1988",
           "1989",
           "1990",
           "1991",
           "1992",
           "1993",
           "1994",
           "1995",
           "1996",
           "1997",
           "1998",
           "1999",
           "2000",
           "2001",
           "2002",
           "2003",
           "2004",
           "2005",
           "2006",
           "2007",
           "2008",
           "2009",
           "2010",
           "2011",
           "2012",
           "2013",
           "2014",
           "2015",
           "2016",
           "2017",
           "2018",
           "2019",
           "2020"
          ],
          choicesOrder: "desc"
         }
        ],
        title: "Date",
        isRequired: true,
        requiredErrorText: "Required"
       }
      ]
     }
    ],
    sendResultOnPageNext: true,
    showPageNumbers: true,
    showProgressBar: "top",
    checkErrorsMode: "onValueChanged",
    startSurveyText: "Begin",
    pagePrevText: "Back",
    pageNextText: "Next",
    completeText: "Submit",
    previewText: "Preview",
    editText: "Edit"
   }}