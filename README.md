# Discord Token Cracker
This project follows discord algorithm from creating tokens and tries to reverse it to give you the final token.

## How can we get the first part :
It's very simple, We get the user's id then we encode it to base64 using deprecated function `btoa()` and it returns the first part of the token, Easy right?

## What about second part :
Here it gets a little bit complicated, We get when the account was created date `YY-MM-DD HH:MM:SS UTC` we use `.split(' ')` function so we get the `argument[0]` which is the (year, month and day) and the `argument[1]` is the (hours, minutes and seconds) then we add 15 days to the date and subtract 36 minutes gives us the exact timestamp in code when the account was created we subtract from it the discord epoch for tokens which is `1293840000` then divide it by `1000` to say bye bye for the last 3 zeros we get the final timestamp.

The last thing we need in the second part to just encode it to the right encoding type and we will get the second part, But unfortunately the encode type which [@SamuelScheit](https://github.com/SamuelScheit) left [here](https://github.com/hxr404/Discord-Console-hacks/issues/2) doesn't work, Tried encoding it to hex then base64 and from decimals to base64 not working, If someone could contribute and help i would be appreciated