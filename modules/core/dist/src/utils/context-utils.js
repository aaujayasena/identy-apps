/**
 * Utility class for context operations.
 * TODO: accept the runtime config time from the caller.
 */
export class ContextUtils {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    /**
     * Sets the runtime config object.
     *
     * @param {RuntimeConfigInterface} config - Runtime config.
     */
    static setRuntimeConfig(config) {
        this.runtimeConfig = config;
    }
    /**
     * Returns the runtime config.
     *
     * @return {RuntimeConfigInterface}
     */
    static getRuntimeConfig() {
        return this.runtimeConfig;
    }
}
//# sourceMappingURL=context-utils.js.map