import { struct, u32 } from '@solana/buffer-layout';
import { publicKey } from '@solana/buffer-layout-utils';
import { PublicKey } from '@solana/web3.js';
import {
    unpackTokenGroup,
    unpackTokenGroupMember,
    type TokenGroup,
    type TokenGroupMember,
} from '@solana/spl-token-group';
import type { Mint } from '../../state/mint.js';
import { ExtensionType, getExtensionData } from '../extensionType.js';

export { TOKEN_GROUP_SIZE, TOKEN_GROUP_MEMBER_SIZE } from '@solana/spl-token-group';

export function getTokenGroupState(mint: Mint): Partial<TokenGroup> | null {
    const extensionData = getExtensionData(ExtensionType.TokenGroup, mint.tlvData);
    if (extensionData !== null) {
        const { updateAuthority, mint, size, maxSize } = unpackTokenGroup(extensionData);

        // Explicity set None/Zero keys to null
        return {
            updateAuthority: updateAuthority?.equals(PublicKey.default) ? undefined : updateAuthority,
            mint,
            size,
            maxSize,
        };
    } else {
        return null;
    }
}

export function getTokenGroupMemberState(mint: Mint): Partial<TokenGroupMember> | null {
    const extensionData = getExtensionData(ExtensionType.TokenGroupMember, mint.tlvData);
    if (extensionData !== null) {
        const { mint, group, memberNumber } = unpackTokenGroupMember(extensionData);

        return {
            mint,
            group,
            memberNumber,
        };
    } else {
        return null;
    }
}
