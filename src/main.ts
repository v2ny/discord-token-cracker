import { TokenStructure } from "./TokenStructureClass";

const tokenClass: TokenStructure = new TokenStructure();
tokenClass.DiscordUserId = ''; // The id of the bot/user
tokenClass.DiscordUserEpochTimestamp = ''; // The format is "YY-MM-DD HH:MM:SS UTC"

(async () => {
    await tokenClass.combineCrackedInfo().then((data) => {
        console.log(data);
    })
})();