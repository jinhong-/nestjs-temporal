"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TemporalModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporalModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const temporal_metadata_accessors_1 = require("./temporal-metadata.accessors");
const temporal_explorer_1 = require("./temporal.explorer");
const temporal_constants_1 = require("./temporal.constants");
const temporal_providers_1 = require("./temporal.providers");
const utils_1 = require("./utils");
let TemporalModule = TemporalModule_1 = class TemporalModule {
    static forRoot(workerConfig, connectionConfig, runtimeConfig) {
        const workerConfigProvider = {
            provide: temporal_constants_1.TEMPORAL_WORKER_CONFIG,
            useValue: workerConfig || null,
        };
        const connectionConfigProvider = {
            provide: temporal_constants_1.TEMPORAL_CONNECTION_CONFIG,
            useValue: connectionConfig || null,
        };
        const runtimeConfigProvider = {
            provide: temporal_constants_1.TEMPORAL_CORE_CONFIG,
            useValue: runtimeConfig || null,
        };
        const providers = [
            workerConfigProvider,
            connectionConfigProvider,
            runtimeConfigProvider,
        ];
        return {
            global: true,
            module: TemporalModule_1,
            providers,
            imports: [TemporalModule_1.registerCore()],
        };
    }
    static forRootAsync(asyncWorkerConfig, asyncConnectionConfig, asyncRuntimeConfig) {
        const providers = [
            (0, utils_1.createAsyncProvider)(temporal_constants_1.TEMPORAL_WORKER_CONFIG, asyncWorkerConfig),
            (0, utils_1.createAsyncProvider)(temporal_constants_1.TEMPORAL_CONNECTION_CONFIG, asyncConnectionConfig),
            (0, utils_1.createAsyncProvider)(temporal_constants_1.TEMPORAL_CORE_CONFIG, asyncRuntimeConfig),
        ];
        return {
            global: true,
            module: TemporalModule_1,
            providers: [...providers],
            imports: [TemporalModule_1.registerCore()],
            exports: providers,
        };
    }
    static registerClient(options) {
        const createClientProvider = (0, temporal_providers_1.createClientProviders)([].concat(options));
        return {
            global: true,
            module: TemporalModule_1,
            providers: createClientProvider,
            exports: createClientProvider,
        };
    }
    static registerClientAsync(asyncSharedWorkflowClientOptions) {
        const providers = (0, utils_1.createClientAsyncProvider)(asyncSharedWorkflowClientOptions);
        return {
            global: true,
            module: TemporalModule_1,
            providers,
            exports: providers,
        };
    }
    static registerCore() {
        return {
            global: true,
            module: TemporalModule_1,
            imports: [core_1.DiscoveryModule],
            providers: [temporal_explorer_1.TemporalExplorer, temporal_metadata_accessors_1.TemporalMetadataAccessor],
        };
    }
};
TemporalModule = TemporalModule_1 = __decorate([
    (0, common_1.Module)({})
], TemporalModule);
exports.TemporalModule = TemporalModule;
