import CryptoJS from 'crypto-js';

class TokenStructure {
    public DiscordUserId: string | undefined;
    public DiscordUserEpochTimestamp: string | undefined;
    private GrantAccessKey: string = 'SD9ma82nDSA8Dadjvs8n8SDO@#DWSa(djsa!'; // Not even needed

    private async crackFirstSectionOfToken(discordUserId = this.DiscordUserId, grantKey = this.GrantAccessKey) {
        if (grantKey !== this.GrantAccessKey) return 'Why did you changed the grant key, It\'s not needed bruh.';
        if(discordUserId) {
            if(discordUserId.length >= 17)
            {
                return btoa(discordUserId).toString();
            }
        }
        else
        {
            return 'NaN id was provided.';
        }
    }

    private async getEpochTimestamp(discordLookupTimestamp: string) {
        if (!discordLookupTimestamp) return 'Bruh, Enter the fucking argument of the fucking discordLookupTimestamp.'

        const addDays = (dateTime: Date, days: number) => {
            var date = new Date(dateTime);
            date.setDate(date.getDate() + days);
            return date;
        }

        const splitDate = discordLookupTimestamp.split(' ');

        const YY_MM_DD = splitDate[0].split('-');
        const HH_MM_SS = splitDate[1].split(':');

        const DateYear  = YY_MM_DD[0];
        const DateMonth = YY_MM_DD[1];
        const DateDays  = YY_MM_DD[2];

        let DateHours   = HH_MM_SS[0];
        let DateMinutes = HH_MM_SS[1];
        let DateSeconds = HH_MM_SS[2];

        const combinedDate = `${DateYear}-${DateMonth}-${DateDays} ${DateHours}:${DateMinutes}:${DateSeconds} UTC`;

        const parseDate = Date.parse(combinedDate);
        const realDate = new Date(parseDate);

        realDate.setMinutes(realDate.getMinutes() - 36); // "Add 15 days on the account created time and subtract 36 from the account created minutes"
        const finalDate = addDays(realDate, 15);
        return (finalDate.getTime() - 1293840000) / 1000; // 1293840000 is Discord epoch used for tokens, I'm sure you understood everything.
    }

    public async combineCrackedInfo() {
        if (!this.DiscordUserId) return 'Nah where is DiscordUserId you bitch?';
        if (!this.DiscordUserEpochTimestamp) return 'Now where the fuck is DiscordUserEpochTimestamp you dog shit?';
        if (!this.GrantAccessKey) return 'For real? you forgot GrantAccessKey?';

        return `${await this.crackFirstSectionOfToken()}.${(await this.getEpochTimestamp(this.DiscordUserEpochTimestamp)).toString()}`;
    }
}

export {
    TokenStructure
}