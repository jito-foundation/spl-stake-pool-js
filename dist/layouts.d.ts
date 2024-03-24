import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { Infer } from 'superstruct';
export interface Fee {
    denominator: BN;
    numerator: BN;
}
export declare enum AccountType {
    Uninitialized = 0,
    StakePool = 1,
    ValidatorList = 2
}
export declare const BigNumFromString: import("superstruct").Struct<BN, null>;
export declare const PublicKeyFromString: import("superstruct").Struct<PublicKey, null>;
export type StakeAccountType = Infer<typeof StakeAccountType>;
export declare const StakeAccountType: import("superstruct").Struct<"uninitialized" | "initialized" | "delegated" | "rewardsPool", {
    uninitialized: "uninitialized";
    initialized: "initialized";
    delegated: "delegated";
    rewardsPool: "rewardsPool";
}>;
export type StakeMeta = Infer<typeof StakeMeta>;
export declare const StakeMeta: import("superstruct").Struct<{
    rentExemptReserve: BN;
    authorized: {
        staker: PublicKey;
        withdrawer: PublicKey;
    };
    lockup: {
        unixTimestamp: number;
        epoch: number;
        custodian: PublicKey;
    };
}, {
    rentExemptReserve: import("superstruct").Struct<BN, null>;
    authorized: import("superstruct").Struct<{
        staker: PublicKey;
        withdrawer: PublicKey;
    }, {
        staker: import("superstruct").Struct<PublicKey, null>;
        withdrawer: import("superstruct").Struct<PublicKey, null>;
    }>;
    lockup: import("superstruct").Struct<{
        unixTimestamp: number;
        epoch: number;
        custodian: PublicKey;
    }, {
        unixTimestamp: import("superstruct").Struct<number, null>;
        epoch: import("superstruct").Struct<number, null>;
        custodian: import("superstruct").Struct<PublicKey, null>;
    }>;
}>;
export type StakeAccountInfo = Infer<typeof StakeAccountInfo>;
export declare const StakeAccountInfo: import("superstruct").Struct<{
    meta: {
        rentExemptReserve: BN;
        authorized: {
            staker: PublicKey;
            withdrawer: PublicKey;
        };
        lockup: {
            unixTimestamp: number;
            epoch: number;
            custodian: PublicKey;
        };
    };
    stake: {
        delegation: {
            stake: BN;
            voter: PublicKey;
            activationEpoch: BN;
            deactivationEpoch: BN;
            warmupCooldownRate: number;
        };
        creditsObserved: number;
    } | null;
}, {
    meta: import("superstruct").Struct<{
        rentExemptReserve: BN;
        authorized: {
            staker: PublicKey;
            withdrawer: PublicKey;
        };
        lockup: {
            unixTimestamp: number;
            epoch: number;
            custodian: PublicKey;
        };
    }, {
        rentExemptReserve: import("superstruct").Struct<BN, null>;
        authorized: import("superstruct").Struct<{
            staker: PublicKey;
            withdrawer: PublicKey;
        }, {
            staker: import("superstruct").Struct<PublicKey, null>;
            withdrawer: import("superstruct").Struct<PublicKey, null>;
        }>;
        lockup: import("superstruct").Struct<{
            unixTimestamp: number;
            epoch: number;
            custodian: PublicKey;
        }, {
            unixTimestamp: import("superstruct").Struct<number, null>;
            epoch: import("superstruct").Struct<number, null>;
            custodian: import("superstruct").Struct<PublicKey, null>;
        }>;
    }>;
    stake: import("superstruct").Struct<{
        delegation: {
            stake: BN;
            voter: PublicKey;
            activationEpoch: BN;
            deactivationEpoch: BN;
            warmupCooldownRate: number;
        };
        creditsObserved: number;
    } | null, {
        delegation: import("superstruct").Struct<{
            stake: BN;
            voter: PublicKey;
            activationEpoch: BN;
            deactivationEpoch: BN;
            warmupCooldownRate: number;
        }, {
            voter: import("superstruct").Struct<PublicKey, null>;
            stake: import("superstruct").Struct<BN, null>;
            activationEpoch: import("superstruct").Struct<BN, null>;
            deactivationEpoch: import("superstruct").Struct<BN, null>;
            warmupCooldownRate: import("superstruct").Struct<number, null>;
        }>;
        creditsObserved: import("superstruct").Struct<number, null>;
    }>;
}>;
export type StakeAccount = Infer<typeof StakeAccount>;
export declare const StakeAccount: import("superstruct").Struct<{
    type: "uninitialized" | "initialized" | "delegated" | "rewardsPool";
    info?: {
        meta: {
            rentExemptReserve: BN;
            authorized: {
                staker: PublicKey;
                withdrawer: PublicKey;
            };
            lockup: {
                unixTimestamp: number;
                epoch: number;
                custodian: PublicKey;
            };
        };
        stake: {
            delegation: {
                stake: BN;
                voter: PublicKey;
                activationEpoch: BN;
                deactivationEpoch: BN;
                warmupCooldownRate: number;
            };
            creditsObserved: number;
        } | null;
    } | undefined;
}, {
    type: import("superstruct").Struct<"uninitialized" | "initialized" | "delegated" | "rewardsPool", {
        uninitialized: "uninitialized";
        initialized: "initialized";
        delegated: "delegated";
        rewardsPool: "rewardsPool";
    }>;
    info: import("superstruct").Struct<{
        meta: {
            rentExemptReserve: BN;
            authorized: {
                staker: PublicKey;
                withdrawer: PublicKey;
            };
            lockup: {
                unixTimestamp: number;
                epoch: number;
                custodian: PublicKey;
            };
        };
        stake: {
            delegation: {
                stake: BN;
                voter: PublicKey;
                activationEpoch: BN;
                deactivationEpoch: BN;
                warmupCooldownRate: number;
            };
            creditsObserved: number;
        } | null;
    } | undefined, {
        meta: import("superstruct").Struct<{
            rentExemptReserve: BN;
            authorized: {
                staker: PublicKey;
                withdrawer: PublicKey;
            };
            lockup: {
                unixTimestamp: number;
                epoch: number;
                custodian: PublicKey;
            };
        }, {
            rentExemptReserve: import("superstruct").Struct<BN, null>;
            authorized: import("superstruct").Struct<{
                staker: PublicKey;
                withdrawer: PublicKey;
            }, {
                staker: import("superstruct").Struct<PublicKey, null>;
                withdrawer: import("superstruct").Struct<PublicKey, null>;
            }>;
            lockup: import("superstruct").Struct<{
                unixTimestamp: number;
                epoch: number;
                custodian: PublicKey;
            }, {
                unixTimestamp: import("superstruct").Struct<number, null>;
                epoch: import("superstruct").Struct<number, null>;
                custodian: import("superstruct").Struct<PublicKey, null>;
            }>;
        }>;
        stake: import("superstruct").Struct<{
            delegation: {
                stake: BN;
                voter: PublicKey;
                activationEpoch: BN;
                deactivationEpoch: BN;
                warmupCooldownRate: number;
            };
            creditsObserved: number;
        } | null, {
            delegation: import("superstruct").Struct<{
                stake: BN;
                voter: PublicKey;
                activationEpoch: BN;
                deactivationEpoch: BN;
                warmupCooldownRate: number;
            }, {
                voter: import("superstruct").Struct<PublicKey, null>;
                stake: import("superstruct").Struct<BN, null>;
                activationEpoch: import("superstruct").Struct<BN, null>;
                deactivationEpoch: import("superstruct").Struct<BN, null>;
                warmupCooldownRate: import("superstruct").Struct<number, null>;
            }>;
            creditsObserved: import("superstruct").Struct<number, null>;
        }>;
    }>;
}>;
export interface Lockup {
    unixTimestamp: BN;
    epoch: BN;
    custodian: PublicKey;
}
export interface StakePool {
    accountType: AccountType;
    manager: PublicKey;
    staker: PublicKey;
    stakeDepositAuthority: PublicKey;
    stakeWithdrawBumpSeed: number;
    validatorList: PublicKey;
    reserveStake: PublicKey;
    poolMint: PublicKey;
    managerFeeAccount: PublicKey;
    tokenProgramId: PublicKey;
    totalLamports: BN;
    poolTokenSupply: BN;
    lastUpdateEpoch: BN;
    lockup: Lockup;
    epochFee: Fee;
    nextEpochFee?: Fee | undefined;
    preferredDepositValidatorVoteAddress?: PublicKey | undefined;
    preferredWithdrawValidatorVoteAddress?: PublicKey | undefined;
    stakeDepositFee: Fee;
    stakeWithdrawalFee: Fee;
    nextStakeWithdrawalFee?: Fee | undefined;
    stakeReferralFee: number;
    solDepositAuthority?: PublicKey | undefined;
    solDepositFee: Fee;
    solReferralFee: number;
    solWithdrawAuthority?: PublicKey | undefined;
    solWithdrawalFee: Fee;
    nextSolWithdrawalFee?: Fee | undefined;
    lastEpochPoolTokenSupply: BN;
    lastEpochTotalLamports: BN;
}
export declare const StakePoolLayout: any;
export declare enum ValidatorStakeInfoStatus {
    Active = 0,
    DeactivatingTransient = 1,
    ReadyForRemoval = 2
}
export interface ValidatorStakeInfo {
    status: ValidatorStakeInfoStatus;
    voteAccountAddress: PublicKey;
    activeStakeLamports: BN;
    transientStakeLamports: BN;
    transientSeedSuffixStart: BN;
    transientSeedSuffixEnd: BN;
    lastUpdateEpoch: BN;
}
export declare const ValidatorStakeInfoLayout: any;
export interface ValidatorList {
    accountType: number;
    maxValidators: number;
    validators: ValidatorStakeInfo[];
}
export declare const ValidatorListLayout: any;
