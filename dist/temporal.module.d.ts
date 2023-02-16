import { DynamicModule } from '@nestjs/common';
import { NativeConnectionOptions, WorkerOptions, RuntimeOptions } from '@temporalio/worker';
import { SharedWorkerAsyncConfiguration, TemporalModuleOptions, SharedRuntimeAsyncConfiguration, SharedConnectionAsyncConfiguration, SharedWorkflowClientOptions } from './interfaces';
export declare class TemporalModule {
    static forRoot(workerConfig: WorkerOptions, connectionConfig?: NativeConnectionOptions, runtimeConfig?: RuntimeOptions): DynamicModule;
    static forRootAsync(asyncWorkerConfig: SharedWorkerAsyncConfiguration, asyncConnectionConfig?: SharedConnectionAsyncConfiguration, asyncRuntimeConfig?: SharedRuntimeAsyncConfiguration): DynamicModule;
    static registerClient(options?: TemporalModuleOptions): DynamicModule;
    static registerClientAsync(asyncSharedWorkflowClientOptions: SharedWorkflowClientOptions): DynamicModule;
    private static registerCore;
}
