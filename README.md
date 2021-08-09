# nextjs-apollo-starter

This starter pack is paired with an [express-node-apollo graphql server](https://github.com/JoeyLyman/express-node-apollo-starter) starter pack to show an implementation of nextjs with apollo, with log in flow built out. Includes email confirmation, resetting of passwords via email, and requiring an invite code to create an account.

You can clone the express server repository and run it locally on port 4000, which is what this starter pack automatically looks for unless you specify the SERVER_URI environmental variable.

NOTE: Creating an account requires a secret code (i.e. as the owner of my server, i will give out invite codes to a few people to test my new product). This secret code will have to be in your mongodb instance, if you are using the above express server. These can be added manually. Check the mongoose model on the express server to know what to add, then you can hand these out. Or remove this feature if you wish to allow anyone to create an account.
