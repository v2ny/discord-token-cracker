import { TokenStructure } from "./TokenStructureClass";

const tokenClass: TokenStructure = new TokenStructure();
tokenClass.DiscordUserId = '315100220520267776';
tokenClass.DiscordUserEpochTimestamp = '2017-05-19 12:15:46 UTC';

(async () => {
    await tokenClass.combineCrackedInfo().then((data) => {
        console.log(data)
    })
})();