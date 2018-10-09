import * as Sentry from "@sentry/browser";

Sentry.init({
    integrations: [new Sentry.Integrations.Breadcrumbs({console: false})]
});
console.log('main');
