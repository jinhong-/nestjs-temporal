import { OnApplicationBootstrap, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, MetadataScanner, ModuleRef } from '@nestjs/core';
import { NativeConnectionOptions, RuntimeOptions, WorkerOptions } from '@temporalio/worker';
import { TemporalMetadataAccessor } from './temporal-metadata.accessors';
export declare class TemporalExplorer implements OnModuleInit, OnModuleDestroy, OnApplicationBootstrap {
    private readonly moduleRef;
    private readonly discoveryService;
    private readonly metadataAccessor;
    private readonly metadataScanner;
    private readonly logger;
    private readonly injector;
    private worker;
    private timerId;
    constructor(moduleRef: ModuleRef, discoveryService: DiscoveryService, metadataAccessor: TemporalMetadataAccessor, metadataScanner: MetadataScanner);
    clearInterval(): void;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): void;
    onApplicationBootstrap(): void;
    explore(): Promise<void>;
    getWorkerConfigOptions(name?: string): WorkerOptions;
    getNativeConnectionOptions(name?: string): NativeConnectionOptions;
    getRuntimeOptions(name?: string): RuntimeOptions;
    handleActivities(): Promise<{}>;
}
