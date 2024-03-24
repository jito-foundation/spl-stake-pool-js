import { AccountInfo, Connection, PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
import { ValidatorAccount } from './utils';
import { StakeAccount, StakePool, ValidatorList } from './layouts';
import BN from 'bn.js';
export type { StakePool, AccountType, ValidatorList, ValidatorStakeInfo } from './layouts';
export { STAKE_POOL_PROGRAM_ID } from './constants';
export * from './instructions';
export interface ValidatorListAccount {
    pubkey: PublicKey;
    account: AccountInfo<ValidatorList>;
}
export interface StakePoolAccount {
    pubkey: PublicKey;
    account: AccountInfo<StakePool>;
}
export interface WithdrawAccount {
    stakeAddress: PublicKey;
    voteAddress?: PublicKey;
    poolAmount: BN;
}
/**
 * Wrapper class for a stake pool.
 * Each stake pool has a stake pool account and a validator list account.
 */
export interface StakePoolAccounts {
    stakePool: StakePoolAccount | undefined;
    validatorList: ValidatorListAccount | undefined;
}
interface RedelegateProps {
    connection: Connection;
    stakePoolAddress: PublicKey;
    sourceVoteAccount: PublicKey;
    destinationVoteAccount: PublicKey;
    sourceTransientStakeSeed: number | BN;
    destinationTransientStakeSeed: number | BN;
    ephemeralStakeSeed: number | BN;
    lamports: number | BN;
}
/**
 * Retrieves and deserializes a StakePool account using a web3js connection and the stake pool address.
 * @param connection: An active web3js connection.
 * @param stakePoolAddress: The public key (address) of the stake pool account.
 */
export declare function getStakePoolAccount(connection: Connection, stakePoolAddress: PublicKey): Promise<StakePoolAccount>;
/**
 * Retrieves and deserializes a Stake account using a web3js connection and the stake address.
 * @param connection: An active web3js connection.
 * @param stakeAccount: The public key (address) of the stake account.
 */
export declare function getStakeAccount(connection: Connection, stakeAccount: PublicKey): Promise<StakeAccount>;
/**
 * Retrieves all StakePool and ValidatorList accounts that are running a particular StakePool program.
 * @param connection: An active web3js connection.
 * @param stakePoolProgramAddress: The public key (address) of the StakePool program.
 */
export declare function getStakePoolAccounts(connection: Connection, stakePoolProgramAddress: PublicKey): Promise<(StakePoolAccount | ValidatorListAccount)[] | undefined>;
/**
 * Creates instructions required to deposit stake to stake pool.
 */
export declare function depositStake(connection: Connection, stakePoolAddress: PublicKey, authorizedPubkey: PublicKey, validatorVote: PublicKey, depositStake: PublicKey, poolTokenReceiverAccount?: PublicKey): Promise<{
    instructions: TransactionInstruction[];
    signers: Signer[];
}>;
/**
 * Creates instructions required to deposit sol to stake pool.
 */
export declare function depositSol(connection: Connection, stakePoolAddress: PublicKey, from: PublicKey, lamports: number, destinationTokenAccount?: PublicKey, referrerTokenAccount?: PublicKey, depositAuthority?: PublicKey): Promise<{
    instructions: TransactionInstruction[];
    signers: Signer[];
}>;
/**
 * Creates instructions required to withdraw stake from a stake pool.
 */
export declare function withdrawStake(connection: Connection, stakePoolAddress: PublicKey, tokenOwner: PublicKey, amount: number, useReserve?: boolean, voteAccountAddress?: PublicKey, stakeReceiver?: PublicKey, poolTokenAccount?: PublicKey, validatorComparator?: (_a: ValidatorAccount, _b: ValidatorAccount) => number): Promise<{
    instructions: TransactionInstruction[];
    signers: Signer[];
    stakeReceiver: PublicKey | undefined;
    totalRentFreeBalances: number;
}>;
/**
 * Creates instructions required to withdraw SOL directly from a stake pool.
 */
export declare function withdrawSol(connection: Connection, stakePoolAddress: PublicKey, tokenOwner: PublicKey, solReceiver: PublicKey, amount: number, solWithdrawAuthority?: PublicKey): Promise<{
    instructions: TransactionInstruction[];
    signers: Signer[];
}>;
export declare function addValidatorToPool(connection: Connection, stakePoolAddress: PublicKey, validatorVote: PublicKey, seed?: number): Promise<{
    instructions: TransactionInstruction[];
}>;
export declare function removeValidatorFromPool(connection: Connection, stakePoolAddress: PublicKey, validatorVote: PublicKey, seed?: number): Promise<{
    instructions: TransactionInstruction[];
}>;
/**
 * Creates instructions required to increase validator stake.
 */
export declare function increaseValidatorStake(connection: Connection, stakePoolAddress: PublicKey, validatorVote: PublicKey, lamports: number, ephemeralStakeSeed?: number): Promise<{
    instructions: TransactionInstruction[];
}>;
/**
 * Creates instructions required to decrease validator stake.
 */
export declare function decreaseValidatorStake(connection: Connection, stakePoolAddress: PublicKey, validatorVote: PublicKey, lamports: number, ephemeralStakeSeed?: number): Promise<{
    instructions: TransactionInstruction[];
}>;
/**
 * Creates instructions required to completely update a stake pool after epoch change.
 */
export declare function updateStakePool(connection: Connection, stakePool: StakePoolAccount, noMerge?: boolean): Promise<{
    updateListInstructions: TransactionInstruction[];
    finalInstructions: TransactionInstruction[];
}>;
/**
 * Retrieves detailed information about the StakePool.
 */
export declare function stakePoolInfo(connection: Connection, stakePoolAddress: PublicKey): Promise<{
    address: string;
    poolWithdrawAuthority: string;
    manager: string;
    staker: string;
    stakeDepositAuthority: string;
    stakeWithdrawBumpSeed: number;
    maxValidators: number;
    validatorList: {
        activeStakeLamports: string;
        transientStakeLamports: string;
        lastUpdateEpoch: string;
        transientSeedSuffixStart: string;
        transientSeedSuffixEnd: string;
        status: string;
        voteAccountAddress: string;
    }[];
    validatorListStorageAccount: string;
    reserveStake: string;
    poolMint: string;
    managerFeeAccount: string;
    tokenProgramId: string;
    totalLamports: string;
    poolTokenSupply: string;
    lastUpdateEpoch: string;
    lockup: import("./layouts").Lockup;
    epochFee: import("./layouts").Fee;
    nextEpochFee: import("./layouts").Fee | undefined;
    preferredDepositValidatorVoteAddress: PublicKey | undefined;
    preferredWithdrawValidatorVoteAddress: PublicKey | undefined;
    stakeDepositFee: import("./layouts").Fee;
    stakeWithdrawalFee: import("./layouts").Fee;
    nextStakeWithdrawalFee: import("./layouts").Fee | undefined;
    stakeReferralFee: number;
    solDepositAuthority: string | undefined;
    solDepositFee: import("./layouts").Fee;
    solReferralFee: number;
    solWithdrawAuthority: string | undefined;
    solWithdrawalFee: import("./layouts").Fee;
    nextSolWithdrawalFee: import("./layouts").Fee | undefined;
    lastEpochPoolTokenSupply: string;
    lastEpochTotalLamports: string;
    details: {
        reserveStakeLamports: number | undefined;
        reserveAccountStakeAddress: string;
        minimumReserveStakeBalance: number;
        stakeAccounts: {
            voteAccountAddress: string;
            stakeAccountAddress: string;
            validatorActiveStakeLamports: string;
            validatorLastUpdateEpoch: string;
            validatorLamports: string;
            validatorTransientStakeAccountAddress: string;
            validatorTransientStakeLamports: string;
            updateRequired: boolean;
        }[];
        totalLamports: BN;
        totalPoolTokens: number;
        currentNumberOfValidators: number;
        maxNumberOfValidators: number;
        updateRequired: boolean;
    };
}>;
/**
 * Creates instructions required to redelegate stake.
 */
export declare function redelegate(props: RedelegateProps): Promise<{
    instructions: TransactionInstruction[];
}>;
/**
 * Creates instructions required to create pool token metadata.
 */
export declare function createPoolTokenMetadata(connection: Connection, stakePoolAddress: PublicKey, payer: PublicKey, name: string, symbol: string, uri: string): Promise<{
    instructions: TransactionInstruction[];
}>;
/**
 * Creates instructions required to update pool token metadata.
 */
export declare function updatePoolTokenMetadata(connection: Connection, stakePoolAddress: PublicKey, name: string, symbol: string, uri: string): Promise<{
    instructions: TransactionInstruction[];
}>;
