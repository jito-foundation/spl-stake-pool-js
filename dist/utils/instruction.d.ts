/// <reference types="node" />
import * as BufferLayout from '@solana/buffer-layout';
import { Buffer } from 'buffer';
/**
 * @internal
 */
export type InstructionType = {
    /** The Instruction index (from solana upstream program) */
    index: number;
    /** The BufferLayout to use to build data */
    layout: BufferLayout.Layout<any>;
};
/**
 * Populate a buffer of instruction data using an InstructionType
 * @internal
 */
export declare function encodeData(type: InstructionType, fields?: any): Buffer;
/**
 * Decode instruction data buffer using an InstructionType
 * @internal
 */
export declare function decodeData(type: InstructionType, buffer: Buffer): any;
