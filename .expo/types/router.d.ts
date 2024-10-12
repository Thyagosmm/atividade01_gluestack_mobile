/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/Forgot/Forgot` | `/Register/Register` | `/_sitemap` | `/tabs` | `/tabs/` | `/tabs/(tabs)` | `/tabs/(tabs)/` | `/tabs/(tabs)/tab1` | `/tabs/(tabs)/tab2` | `/tabs/tab1` | `/tabs/tab2`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
