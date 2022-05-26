export function throwInitError(){
    let initError = new Error(
      "wallet is not enabled, try calling enable"
    );
    initError.code = 4202
    throw(initError);
}

export function throwRejectedError(){
    let rejectedError = new Error(
      "user rejected the request"
    );
    rejectedError.code = 4001
    throw(rejectedError);
}

export function throwUnauthorizedError(){
    let unauthorizedError = new Error(
      "user is not authorized this function to be performed"
    );
    unauthorizedError.code = 4100
    throw(unauthorizedError);
}

export function throwInvalidInputError(){
    //4300	Invalid Input	The input provided is invalid.
    let invalidInputError = new Error(
        "the input provided is invalid"
    );
    invalidInputError.code = 4300
    throw(invalidInputError);
}


//4200	Unsupported Operation	The wallet does not support the requested operation.
export function throwUnsupportedOperationError(){
    let unsupportedOperationError = new Error(
        "the wallet does not support the requested operation"
    );
    unsupportedOperationError.code = 4200
    throw(unsupportedOperationError);
}

//4201	Too Many Transactions	The wallet does not support signing that many transactions at a time.
export function throwTooManyTransactionsError(){
    let tooManyTransactionsError = new Error(
        "the wallet does not support signing that many transactions at a time"
    );
    tooManyTransactionsError.code = 4201
    throw(tooManyTransactionsError);
}