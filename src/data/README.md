this shows some thoughts, and also
https://github.com/zeit/next.js/pull/10451

walkthrough of with-apollo example:
https://usecodeflow.com/tutorials/view/zeit/next.js/tree/befb50/ck7ovpr9900000vlenu7ya359

possible solution if i have a problem with useSubscription:
https://github.com/zeit/next.js/issues/10902

IMPORTANT:
is this important? to only mutate data in the cache?
https://stackoverflow.com/questions/58021561/server-side-render-data-when-using-apollo-client-with-nextjs
(first comment)

SSR not working?

- maybe it is because getInitialProps is being called from a component (not a page) down the tree and it is breaking getAppTree or whatever? Maybe in withAuthSync? Should not do getInitialProps.. maybe put token in state / context instead
