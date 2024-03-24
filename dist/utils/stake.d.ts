import { Connection, Keypair, PublicKey, TransactionInstruction } from '@solana/web3.js';
import BN from 'bn.js';
import { WithdrawAccount } from '../index';
import { StakePool, ValidatorList } from '../layouts';
export declare function getValidatorListAccount(connection: Connection, pubkey: PublicKey): Promise<{
    pubkey: PublicKey;
    account: {
        data: ValidatorList;
        executable: boolean;
        lamports: number;
        owner: PublicKey;
    };
}>;
export interface ValidatorAccount {
    type: 'preferred' | 'active' | 'transient' | 'reserve';
    voteAddress?: PublicKey | undefined;
    stakeAddress: PublicKey;
    lamports: BN;
}
export declare function prepareWithdrawAccounts(connection: Connection, stakePool: StakePool, stakePoolAddress: PublicKey, amount: BN, compareFn?: (a: ValidatorAccount, b: ValidatorAccount) => number, skipFee?: boolean): Promise<WithdrawAccount[]>;
/**
 * Calculate the pool tokens that should be minted for a deposit of `stakeLamports`
 */
export declare function calcPoolTokensForDeposit(stakePool: StakePool, stakeLamports: BN): BN;
/**
 * Calculate lamports amount on withdrawal
 */
export declare function calcLamportsWithdrawAmount(stakePool: StakePool, poolTokens: BN): BN;
export declare function newStakeAccount(feePayer: PublicKey, instructions: TransactionInstruction[], lamports: number): Keypair;
