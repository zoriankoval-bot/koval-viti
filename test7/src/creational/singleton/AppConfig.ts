export class AppConfig {
  private static instance: AppConfig;

  private settings: Map<string, string> = new Map([
    ['env', 'development'],
    ['version', '1.0.0'],
    ['maxConnections', '10'],
  ]);

  private constructor() {}

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  get(key: string): string | undefined {
    return this.settings.get(key);
  }

  set(key: string, value: string): void {
    this.settings.set(key, value);
  }

  getAll(): Record<string, string> {
    return Object.fromEntries(this.settings);
  }
}
