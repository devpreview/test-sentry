# test-sentry

Testing repository for https://github.com/getsentry/sentry-javascript/issues/1638

After init Sentry source maps is broken.

For example:

```
import * as Sentry from "@sentry/browser";
//Sentry.init({});
console.log('main');
```

![Console](https://habrastorage.org/webt/yc/xr/s1/ycxrs1g0n7af9txoh5_rhu5ia28.png)

```
import * as Sentry from "@sentry/browser";
Sentry.init({});
console.log('main');
```

![Console](https://habrastorage.org/webt/tg/g1/ja/tgg1jancvp613rw2fsxz04ns-lc.png)
