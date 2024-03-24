/// <reference types="node" />
import { Buffer } from 'buffer';
import { PublicKey } from '@solana/web3.js';
export declare const METADATA_PROGRAM_ID: PublicKey;
export declare const METADATA_MAX_NAME_LENGTH = 32;
export declare const METADATA_MAX_SYMBOL_LENGTH = 10;
export declare const METADATA_MAX_URI_LENGTH = 200;
export declare const STAKE_POOL_PROGRAM_ID: PublicKey;
export declare const MAX_VALIDATORS_TO_UPDATE = 5;
export declare const EPHEMERAL_STAKE_SEED_PREFIX: Buffer;
export declare const TRANSIENT_STAKE_SEED_PREFIX: Buffer;
export declare const MINIMUM_ACTIVE_STAKE = 1000000000;
