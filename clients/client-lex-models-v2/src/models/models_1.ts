// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActiveContext,
  AgentTurnResult,
  AgentTurnSpecification,
  AggregatedUtterancesFilter,
  AggregatedUtterancesSortBy,
  AggregatedUtterancesSummary,
  AnalyticsBinBySpecification,
  AnalyticsIntentFilter,
  AnalyticsIntentGroupBySpecification,
  AnalyticsIntentMetric,
  AnalyticsIntentNodeSummary,
  AnalyticsIntentResult,
  AnalyticsIntentStageFilter,
  AnalyticsIntentStageGroupBySpecification,
  AnalyticsIntentStageMetric,
  AnalyticsIntentStageResult,
  AnalyticsModality,
  AnalyticsPathFilter,
  AnalyticsSessionFilter,
  AnalyticsSessionGroupBySpecification,
  AnalyticsSessionMetric,
  AnalyticsSessionResult,
  AnalyticsSessionSortByName,
  AnalyticsSortOrder,
  AnalyticsUtteranceAttribute,
  AnalyticsUtteranceFilter,
  AnalyticsUtteranceGroupBySpecification,
  AnalyticsUtteranceMetric,
  AnalyticsUtteranceResult,
  AnalyticsUtteranceSortByName,
  AssociatedTranscript,
  AssociatedTranscriptFilter,
  BotAliasLocaleSettings,
  BotAliasStatus,
  BotAliasSummary,
  BotAliasTestExecutionTarget,
  BotFilter,
  BotLocaleFilter,
  BotLocaleSortBy,
  BotLocaleStatus,
  BotLocaleSummary,
  BotMember,
  BotRecommendationStatus,
  BotRecommendationSummary,
  BotSortBy,
  BotStatus,
  BotSummary,
  BotType,
  BotVersionSortBy,
  BotVersionSummary,
  BuiltInIntentSortBy,
  BuiltInIntentSummary,
  BuiltInSlotTypeSortBy,
  BuiltInSlotTypeSummary,
  CompositeSlotTypeSetting,
  Condition,
  ConversationEndState,
  ConversationLevelResultDetail,
  ConversationLevelTestResults,
  ConversationLevelTestResultsFilterBy,
  ConversationLogsDataSource,
  ConversationLogSettings,
  CustomVocabularyItem,
  DataPrivacy,
  DialogAction,
  DialogCodeHookSettings,
  ElicitationCodeHookInvocationSetting,
  EncryptionSetting,
  EncryptionSettingFilterSensitiveLog,
  ExecutionErrorDetails,
  ExportResourceSpecification,
  ExportStatus,
  ExternalSourceSetting,
  FulfillmentUpdatesSpecification,
  ImageResponseCard,
  ImportExportFileFormat,
  ImportResourceSpecification,
  ImportStatus,
  InputContext,
  KendraConfiguration,
  MergeStrategy,
  MultipleValuesSetting,
  ObfuscationSetting,
  OutputContext,
  PromptSpecification,
  ResponseSpecification,
  SampleUtterance,
  SentimentAnalysisSettings,
  SlotConstraint,
  SlotDefaultValueSpecification,
  SlotPriority,
  SlotShape,
  SlotTypeValue,
  SlotValue,
  SlotValueSelectionSetting,
  SortOrder,
  SubSlotSetting,
  TestResultMatchStatus,
  TestSetDiscrepancyReportResourceTarget,
  TestSetModality,
  TestSetStorageLocation,
  TranscriptSourceSetting,
  VoiceSettings,
  WaitAndContinueSpecification,
} from "./models_0";

/**
 * @public
 */
export interface DescribeSlotTypeResponse {
  /**
   * <p>The unique identifier for the slot type.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The name specified for the slot type.</p>
   */
  slotTypeName?: string;

  /**
   * <p>The description specified for the slot type.</p>
   */
  description?: string;

  /**
   * <p>The values that the slot type can take. Includes any synonyms for
   *          the slot type values.</p>
   */
  slotTypeValues?: SlotTypeValue[];

  /**
   * <p>The strategy that Amazon Lex uses to choose a value from a list of
   *          possible values.</p>
   */
  valueSelectionSetting?: SlotValueSelectionSetting;

  /**
   * <p>The built in slot type used as a parent to this slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>The identifier of the bot associated with the slot type.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the slot type.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale specified for the slot type.</p>
   */
  localeId?: string;

  /**
   * <p>A timestamp of the date and time that the slot type was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the slot type was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Provides information about the external source of the slot type's definition.</p>
   */
  externalSourceSetting?: ExternalSourceSetting;

  /**
   * <p>Specifications for a composite slot type.</p>
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}

/**
 * @public
 */
export interface DescribeTestExecutionRequest {
  /**
   * <p>The execution Id of the test set execution.</p>
   */
  testExecutionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TestExecutionApiMode = {
  NonStreaming: "NonStreaming",
  Streaming: "Streaming",
} as const;

/**
 * @public
 */
export type TestExecutionApiMode = (typeof TestExecutionApiMode)[keyof typeof TestExecutionApiMode];

/**
 * @public
 * <p>Contains information about the bot used for the test execution.</p>
 */
export interface TestExecutionTarget {
  /**
   * <p>Contains information about the bot alias used for the test execution.</p>
   */
  botAliasTarget?: BotAliasTestExecutionTarget;
}

/**
 * @public
 * @enum
 */
export const TestExecutionModality = {
  Audio: "Audio",
  Text: "Text",
} as const;

/**
 * @public
 */
export type TestExecutionModality = (typeof TestExecutionModality)[keyof typeof TestExecutionModality];

/**
 * @public
 * @enum
 */
export const TestExecutionStatus = {
  Completed: "Completed",
  Failed: "Failed",
  InProgress: "InProgress",
  Pending: "Pending",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Waiting: "Waiting",
} as const;

/**
 * @public
 */
export type TestExecutionStatus = (typeof TestExecutionStatus)[keyof typeof TestExecutionStatus];

/**
 * @public
 */
export interface DescribeTestExecutionResponse {
  /**
   * <p>The execution Id for the test set execution.</p>
   */
  testExecutionId?: string;

  /**
   * <p>The execution creation date and time for the test set execution.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time of the last update for the execution.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The test execution status for the test execution.</p>
   */
  testExecutionStatus?: TestExecutionStatus | string;

  /**
   * <p>The test set Id for the test set execution.</p>
   */
  testSetId?: string;

  /**
   * <p>The test set name of the test set execution.</p>
   */
  testSetName?: string;

  /**
   * <p>The target bot for the test set execution details.</p>
   */
  target?: TestExecutionTarget;

  /**
   * <p>Indicates whether we use streaming or non-streaming APIs are used for
   *       the test set execution. For streaming, <code>StartConversation</code>
   *       Amazon Lex Runtime API is used. Whereas for non-streaming, <code>RecognizeUtterance</code>
   *       and <code>RecognizeText</code> Amazon Lex Runtime API is used.</p>
   */
  apiMode?: TestExecutionApiMode | string;

  /**
   * <p>Indicates whether test set is audio or text.</p>
   */
  testExecutionModality?: TestExecutionModality | string;

  /**
   * <p>Reasons for the failure of the test set execution.</p>
   */
  failureReasons?: string[];
}

/**
 * @public
 */
export interface DescribeTestSetRequest {
  /**
   * <p>The test set Id for the test set request.</p>
   */
  testSetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TestSetStatus = {
  Deleting: "Deleting",
  Importing: "Importing",
  PendingAnnotation: "PendingAnnotation",
  Ready: "Ready",
  ValidationError: "ValidationError",
} as const;

/**
 * @public
 */
export type TestSetStatus = (typeof TestSetStatus)[keyof typeof TestSetStatus];

/**
 * @public
 */
export interface DescribeTestSetResponse {
  /**
   * <p>The test set Id for the test set response.</p>
   */
  testSetId?: string;

  /**
   * <p>The test set name of the test set.</p>
   */
  testSetName?: string;

  /**
   * <p>The description of the test set.</p>
   */
  description?: string;

  /**
   * <p>Indicates whether the test set is audio or text data.</p>
   */
  modality?: TestSetModality | string;

  /**
   * <p>The status of the test set.</p>
   */
  status?: TestSetStatus | string;

  /**
   * <p>The roleARN used for any operation in the test set to access
   *       resources in the Amazon Web Services account.</p>
   */
  roleArn?: string;

  /**
   * <p>The total number of agent and user turn in the test set.</p>
   */
  numTurns?: number;

  /**
   * <p>The Amazon S3 storage location for the test set data.</p>
   */
  storageLocation?: TestSetStorageLocation;

  /**
   * <p>The creation date and time for the test set data.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time for the last update of the test set data.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface DescribeTestSetDiscrepancyReportRequest {
  /**
   * <p>The unique identifier of the test set discrepancy report.</p>
   */
  testSetDiscrepancyReportId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TestSetDiscrepancyReportStatus = {
  Completed: "Completed",
  Failed: "Failed",
  InProgress: "InProgress",
} as const;

/**
 * @public
 */
export type TestSetDiscrepancyReportStatus =
  (typeof TestSetDiscrepancyReportStatus)[keyof typeof TestSetDiscrepancyReportStatus];

/**
 * @public
 * <p>Contains information about discrepancy in an intent information between the test set and the
 *        bot.</p>
 */
export interface TestSetIntentDiscrepancyItem {
  /**
   * <p>The name of the intent in the discrepancy report.</p>
   */
  intentName: string | undefined;

  /**
   * <p>The error message for a discrepancy for an intent between the test set and the bot.</p>
   */
  errorMessage: string | undefined;
}

/**
 * @public
 * <p>Contains information about discrepancy in a slot information between the test set and the bot.</p>
 */
export interface TestSetSlotDiscrepancyItem {
  /**
   * <p>The name of the intent associated with the slot in the discrepancy report.</p>
   */
  intentName: string | undefined;

  /**
   * <p>The name of the slot in the discrepancy report.</p>
   */
  slotName: string | undefined;

  /**
   * <p>The error message for a discrepancy for an intent between the test set and the bot.</p>
   */
  errorMessage: string | undefined;
}

/**
 * @public
 * <p>Contains details about the errors in the test set discrepancy report</p>
 */
export interface TestSetDiscrepancyErrors {
  /**
   * <p>Contains information about discrepancies found for intents between the test set and the bot.</p>
   */
  intentDiscrepancies: TestSetIntentDiscrepancyItem[] | undefined;

  /**
   * <p>Contains information about discrepancies found for slots between the test set and the bot.</p>
   */
  slotDiscrepancies: TestSetSlotDiscrepancyItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeTestSetDiscrepancyReportResponse {
  /**
   * <p>The unique identifier of the test set discrepancy report to describe.</p>
   */
  testSetDiscrepancyReportId?: string;

  /**
   * <p>The test set Id for the test set discrepancy report.</p>
   */
  testSetId?: string;

  /**
   * <p>The time and date of creation for the test set discrepancy report.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The target bot location for the test set discrepancy report.</p>
   */
  target?: TestSetDiscrepancyReportResourceTarget;

  /**
   * <p>The status for the test set discrepancy report.</p>
   */
  testSetDiscrepancyReportStatus?: TestSetDiscrepancyReportStatus | string;

  /**
   * <p>The date and time of the last update for the test set discrepancy report.</p>
   */
  lastUpdatedDataTime?: Date;

  /**
   * <p>The top 200 error results from the test set discrepancy report.</p>
   */
  testSetDiscrepancyTopErrors?: TestSetDiscrepancyErrors;

  /**
   * <p>Pre-signed Amazon S3 URL to download the test set discrepancy report.</p>
   */
  testSetDiscrepancyRawOutputUrl?: string;

  /**
   * <p>The failure report for the test set discrepancy report generation action.</p>
   */
  failureReasons?: string[];
}

/**
 * @public
 */
export interface DescribeTestSetGenerationRequest {
  /**
   * <p>The unique identifier of the test set generation.</p>
   */
  testSetGenerationId: string | undefined;
}

/**
 * @public
 * <p>Contains information about the data source from which the test set is generated.</p>
 */
export interface TestSetGenerationDataSource {
  /**
   * <p>Contains information about the bot from which the conversation logs are sourced.</p>
   */
  conversationLogsDataSource?: ConversationLogsDataSource;
}

/**
 * @public
 * @enum
 */
export const TestSetGenerationStatus = {
  Failed: "Failed",
  Generating: "Generating",
  Pending: "Pending",
  Ready: "Ready",
} as const;

/**
 * @public
 */
export type TestSetGenerationStatus = (typeof TestSetGenerationStatus)[keyof typeof TestSetGenerationStatus];

/**
 * @public
 */
export interface DescribeTestSetGenerationResponse {
  /**
   * <p>The unique identifier of the test set generation.</p>
   */
  testSetGenerationId?: string;

  /**
   * <p>The status for the test set generation.</p>
   */
  testSetGenerationStatus?: TestSetGenerationStatus | string;

  /**
   * <p>The reasons the test set generation failed.</p>
   */
  failureReasons?: string[];

  /**
   * <p>The unique identifier for the test set created for the generated test set.</p>
   */
  testSetId?: string;

  /**
   * <p>The test set name for the generated test set.</p>
   */
  testSetName?: string;

  /**
   * <p>The test set description for the test set generation.</p>
   */
  description?: string;

  /**
   * <p>The Amazon S3 storage location for the test set generation.</p>
   */
  storageLocation?: TestSetStorageLocation;

  /**
   * <p>The data source of the test set used for the test set generation.</p>
   */
  generationDataSource?: TestSetGenerationDataSource;

  /**
   * <p> The roleARN of the test set used for the test set generation.</p>
   */
  roleArn?: string;

  /**
   * <p>The creation date and time for the test set generation.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time of the last update for the test set generation.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 * @enum
 */
export const ExportFilterName = {
  ExportResourceType: "ExportResourceType",
} as const;

/**
 * @public
 */
export type ExportFilterName = (typeof ExportFilterName)[keyof typeof ExportFilterName];

/**
 * @public
 * @enum
 */
export const ExportFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;

/**
 * @public
 */
export type ExportFilterOperator = (typeof ExportFilterOperator)[keyof typeof ExportFilterOperator];

/**
 * @public
 * <p>Filters the response form the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html">ListExports</a> operation</p>
 */
export interface ExportFilter {
  /**
   * <p>The name of the field to use for filtering.</p>
   */
  name: ExportFilterName | string | undefined;

  /**
   * <p>The values to use to filter the response. The values must be
   *          <code>Bot</code>, <code>BotLocale</code>, or
   *          <code>CustomVocabulary</code>.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify EQ when the
   *          <code>ListExports</code> operation should return only resource types
   *          that equal the specified value. Specify CO when the
   *          <code>ListExports</code> operation should return resource types that
   *          contain the specified value.</p>
   */
  operator: ExportFilterOperator | string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportSortAttribute = {
  LastUpdatedDateTime: "LastUpdatedDateTime",
} as const;

/**
 * @public
 */
export type ExportSortAttribute = (typeof ExportSortAttribute)[keyof typeof ExportSortAttribute];

/**
 * @public
 * <p>Provides information about sorting a list of exports.</p>
 */
export interface ExportSortBy {
  /**
   * <p>The export field to use for sorting.</p>
   */
  attribute: ExportSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 * <p>Provides summary information about an export in an export list.
 *       </p>
 */
export interface ExportSummary {
  /**
   * <p>The unique identifier that Amazon Lex assigned to the export.</p>
   */
  exportId?: string;

  /**
   * <p>Information about the bot or bot locale that was exported.</p>
   */
  resourceSpecification?: ExportResourceSpecification;

  /**
   * <p>The file format used in the export files.</p>
   */
  fileFormat?: ImportExportFileFormat | string;

  /**
   * <p>The status of the export. When the status is <code>Completed</code>
   *          the export is ready to download.</p>
   */
  exportStatus?: ExportStatus | string;

  /**
   * <p>The date and time that the export was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time that the export was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface GetTestExecutionArtifactsUrlRequest {
  /**
   * <p>The unique identifier of the completed test execution.</p>
   */
  testExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetTestExecutionArtifactsUrlResponse {
  /**
   * <p>The unique identifier of the completed test execution.</p>
   */
  testExecutionId?: string;

  /**
   * <p>The pre-signed Amazon S3 URL to download completed test execution.</p>
   */
  downloadArtifactsUrl?: string;
}

/**
 * @public
 * @enum
 */
export const ImportFilterName = {
  ImportResourceType: "ImportResourceType",
} as const;

/**
 * @public
 */
export type ImportFilterName = (typeof ImportFilterName)[keyof typeof ImportFilterName];

/**
 * @public
 * @enum
 */
export const ImportFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;

/**
 * @public
 */
export type ImportFilterOperator = (typeof ImportFilterOperator)[keyof typeof ImportFilterOperator];

/**
 * @public
 * <p>Filters the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html">ListImports</a> operation.</p>
 */
export interface ImportFilter {
  /**
   * <p>The name of the field to use for filtering.</p>
   */
  name: ImportFilterName | string | undefined;

  /**
   * <p>The values to use to filter the response. The values must be
   *          <code>Bot</code>, <code>BotLocale</code>, or
   *          <code>CustomVocabulary</code>.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify EQ when the
   *          <code>ListImports</code> operation should return only resource types
   *          that equal the specified value. Specify CO when the
   *          <code>ListImports</code> operation should return resource types that
   *          contain the specified value.</p>
   */
  operator: ImportFilterOperator | string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImportResourceType = {
  Bot: "Bot",
  BotLocale: "BotLocale",
  CustomVocabulary: "CustomVocabulary",
  TestSet: "TestSet",
} as const;

/**
 * @public
 */
export type ImportResourceType = (typeof ImportResourceType)[keyof typeof ImportResourceType];

/**
 * @public
 * @enum
 */
export const ImportSortAttribute = {
  LastUpdatedDateTime: "LastUpdatedDateTime",
} as const;

/**
 * @public
 */
export type ImportSortAttribute = (typeof ImportSortAttribute)[keyof typeof ImportSortAttribute];

/**
 * @public
 * <p>Provides information for sorting a list of imports.</p>
 */
export interface ImportSortBy {
  /**
   * <p>The export field to use for sorting.</p>
   */
  attribute: ImportSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 * <p>Provides summary information about an import in an import
 *          list.</p>
 */
export interface ImportSummary {
  /**
   * <p>The unique identifier that Amazon Lex assigned to the import.</p>
   */
  importId?: string;

  /**
   * <p>The unique identifier that Amazon Lex assigned to the imported
   *          resource.</p>
   */
  importedResourceId?: string;

  /**
   * <p>The name that you gave the imported resource.</p>
   */
  importedResourceName?: string;

  /**
   * <p>The status of the resource. When the status is
   *          <code>Completed</code> the resource is ready to build.</p>
   */
  importStatus?: ImportStatus | string;

  /**
   * <p>The strategy used to merge existing bot or bot locale definitions
   *          with the imported definition.</p>
   */
  mergeStrategy?: MergeStrategy | string;

  /**
   * <p>The date and time that the import was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time that the import was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The type of resource that was imported.</p>
   */
  importedResourceType?: ImportResourceType | string;
}

/**
 * @public
 * <p>Provides the phrase that Amazon Lex should look for in the user's input
 *  to the bot.</p>
 */
export interface RuntimeHintValue {
  /**
   * <p>The phrase that Amazon Lex should look for in the user's input to the
   *  bot.</p>
   */
  phrase: string | undefined;
}

/**
 * @public
 * <p>The number of items in the intent classification test.</p>
 */
export interface IntentClassificationTestResultItemCounts {
  /**
   * <p>The total number of results in the intent classification test.</p>
   */
  totalResultCount: number | undefined;

  /**
   * <p>The number of matched, mismatched, and execution error results for speech transcription for the intent.</p>
   */
  speechTranscriptionResultCounts?: Record<string, number>;

  /**
   * <p>The number of matched and mismatched results for intent recognition for the intent.</p>
   */
  intentMatchResultCounts: Record<string, number> | undefined;
}

/**
 * @public
 * <p>Information for an intent that is classified by the test workbench.</p>
 */
export interface IntentClassificationTestResultItem {
  /**
   * <p>The name of the intent.</p>
   */
  intentName: string | undefined;

  /**
   * <p>Indicates whether the conversation involves multiple turns or not.</p>
   */
  multiTurnConversation: boolean | undefined;

  /**
   * <p>The result of the intent classification test.</p>
   */
  resultCounts: IntentClassificationTestResultItemCounts | undefined;
}

/**
 * @public
 * <p>Information for the results of the intent classification test. </p>
 */
export interface IntentClassificationTestResults {
  /**
   * <p>A list of the results for the intent classification test.</p>
   */
  items: IntentClassificationTestResultItem[] | undefined;
}

/**
 * @public
 * @enum
 */
export const IntentFilterName = {
  IntentName: "IntentName",
} as const;

/**
 * @public
 */
export type IntentFilterName = (typeof IntentFilterName)[keyof typeof IntentFilterName];

/**
 * @public
 * @enum
 */
export const IntentFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;

/**
 * @public
 */
export type IntentFilterOperator = (typeof IntentFilterOperator)[keyof typeof IntentFilterOperator];

/**
 * @public
 * <p>Filters the response from the <code>ListIntents</code>
 *          operation.</p>
 */
export interface IntentFilter {
  /**
   * <p>The name of the field to use for the filter.</p>
   */
  name: IntentFilterName | string | undefined;

  /**
   * <p>The value to use for the filter.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *          <code>ListIntents</code> operation should return only aliases that
   *          equal the specified value. Specify <code>CO</code> when the
   *          <code>ListIntents</code> operation should return aliases that
   *          contain the specified value.</p>
   */
  operator: IntentFilterOperator | string | undefined;
}

/**
 * @public
 * <p>Information about the counts for a slot resolution in the results of a test execution.</p>
 */
export interface SlotResolutionTestResultItemCounts {
  /**
   * <p>The total number of results.</p>
   */
  totalResultCount: number | undefined;

  /**
   * <p>The number of matched, mismatched and execution error results for speech transcription for the slot.</p>
   */
  speechTranscriptionResultCounts?: Record<string, number>;

  /**
   * <p>The number of matched and mismatched results for slot resolution for the slot.</p>
   */
  slotMatchResultCounts: Record<string, number> | undefined;
}

/**
 * @public
 * <p>Information about the success and failure rate of slot resolution
 *  in the results of a test execution.</p>
 */
export interface SlotResolutionTestResultItem {
  /**
   * <p>The name of the slot.</p>
   */
  slotName: string | undefined;

  /**
   * <p>A result for slot resolution in the results of a test execution.</p>
   */
  resultCounts: SlotResolutionTestResultItemCounts | undefined;
}

/**
 * @public
 * <p>Information about intent-level slot resolution in a test result.</p>
 */
export interface IntentLevelSlotResolutionTestResultItem {
  /**
   * <p>The name of the intent that was recognized.</p>
   */
  intentName: string | undefined;

  /**
   * <p>Indicates whether the conversation involves multiple turns or not.</p>
   */
  multiTurnConversation: boolean | undefined;

  /**
   * <p>The results for the slot resolution in the test execution result.</p>
   */
  slotResolutionResults: SlotResolutionTestResultItem[] | undefined;
}

/**
 * @public
 * <p>Indicates the success or failure of slots at the intent level.</p>
 */
export interface IntentLevelSlotResolutionTestResults {
  /**
   * <p>Indicates the items for the slot level resolution for the intents.</p>
   */
  items: IntentLevelSlotResolutionTestResultItem[] | undefined;
}

/**
 * @public
 * @enum
 */
export const IntentSortAttribute = {
  IntentName: "IntentName",
  LastUpdatedDateTime: "LastUpdatedDateTime",
} as const;

/**
 * @public
 */
export type IntentSortAttribute = (typeof IntentSortAttribute)[keyof typeof IntentSortAttribute];

/**
 * @public
 * <p>Specifies attributes for sorting a list of intents.</p>
 */
export interface IntentSortBy {
  /**
   * <p>The attribute to use to sort the list of intents.</p>
   */
  attribute: IntentSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list. You can choose ascending or
   *          descending.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 * @enum
 */
export const IntentState = {
  Failed: "Failed",
  Fulfilled: "Fulfilled",
  FulfillmentInProgress: "FulfillmentInProgress",
  InProgress: "InProgress",
  ReadyForFulfillment: "ReadyForFulfillment",
  Waiting: "Waiting",
} as const;

/**
 * @public
 */
export type IntentState = (typeof IntentState)[keyof typeof IntentState];

/**
 * @public
 * <p>Summary information about an intent returned by the
 *          <code>ListIntents</code> operation.</p>
 */
export interface IntentSummary {
  /**
   * <p>The unique identifier assigned to the intent. Use this ID to get
   *          detailed information about the intent with the
   *          <code>DescribeIntent</code> operation.</p>
   */
  intentId?: string;

  /**
   * <p>The name of the intent.</p>
   */
  intentName?: string;

  /**
   * <p>The description of the intent.</p>
   */
  description?: string;

  /**
   * <p>If this intent is derived from a built-in intent, the name of the
   *          parent intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The input contexts that must be active for this intent to be
   *          considered for recognition.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>The output contexts that are activated when this intent is
   *          fulfilled.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>The timestamp of the date and time that the intent was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 * <p>An object containing the name of an intent that was invoked.</p>
 */
export interface InvokedIntentSample {
  /**
   * <p>The name of an intent that was invoked.</p>
   */
  intentName?: string;
}

/**
 * @public
 * @enum
 */
export const TimeDimension = {
  Days: "Days",
  Hours: "Hours",
  Weeks: "Weeks",
} as const;

/**
 * @public
 */
export type TimeDimension = (typeof TimeDimension)[keyof typeof TimeDimension];

/**
 * @public
 * <p>Specifies the time window that utterance statistics are returned
 *             for. The time window is always relative to the last time that the that
 *             utterances were aggregated. For example, if the
 *             <code>ListAggregatedUtterances</code> operation is called at 1600,
 *             the time window is set to 1 hour, and the last refresh time was 1530,
 *             only utterances made between 1430 and 1530 are returned.</p>
 *          <p>You can choose the time window that statistics should be returned
 *             for.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Hours</b> - You can request
 *                     utterance statistics for 1, 3, 6, 12, or 24 hour time windows.
 *                     Statistics are refreshed every half hour for 1 hour time windows,
 *                     and hourly for the other time windows.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Days</b> - You can request
 *                     utterance statistics for 3 days. Statistics are refreshed every 6
 *                     hours.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Weeks</b> - You can see
 *                     statistics for one or two weeks. Statistics are refreshed every
 *                     12 hours for one week time windows, and once per day for two week
 *                     time windows.</p>
 *             </li>
 *          </ul>
 */
export interface RelativeAggregationDuration {
  /**
   * <p>The type of time period that the <code>timeValue</code> field
   *             represents. </p>
   */
  timeDimension: TimeDimension | string | undefined;

  /**
   * <p>The period of the time window to gather statistics for. The valid
   *             value depends on the setting of the <code>timeDimension</code>
   *             field.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Hours</code> - 1/3/6/12/24</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Days</code> - 3</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Weeks</code> - 1/2</p>
   *             </li>
   *          </ul>
   */
  timeValue: number | undefined;
}

/**
 * @public
 * <p>Provides parameters for setting the time window and duration for
 *             aggregating utterance data.</p>
 */
export interface UtteranceAggregationDuration {
  /**
   * <p>The desired time window for aggregating utterances. </p>
   */
  relativeAggregationDuration: RelativeAggregationDuration | undefined;
}

/**
 * @public
 */
export interface ListAggregatedUtterancesRequest {
  /**
   * <p>The unique identifier of the bot associated with this
   *          request.</p>
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the bot alias associated with this request. If you
   *          specify the bot alias, you can't specify the bot version.</p>
   */
  botAliasId?: string;

  /**
   * <p>The identifier of the bot version associated with this request. If
   *          you specify the bot version, you can't specify the bot alias.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale where the utterances were
   *          collected. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported
   *          languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The time window for aggregating the utterance information. You can
   *          specify a time between one hour and two weeks.</p>
   */
  aggregationDuration: UtteranceAggregationDuration | undefined;

  /**
   * <p>Specifies sorting parameters for the list of utterances. You can
   *          sort by the hit count, the missed count, or the number of distinct
   *          sessions the utterance appeared in.</p>
   */
  sortBy?: AggregatedUtterancesSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the utterances
   *          in the response to only those that match the filter specification. You
   *          can only specify one filter and one string to filter on.</p>
   */
  filters?: AggregatedUtterancesFilter[];

  /**
   * <p>The maximum number of utterances to return in each page of results.
   *          If there are fewer results than the maximum page size, only the actual
   *          number of results are returned. If you don't specify the
   *             <code>maxResults</code> parameter, 1,000 results are
   *          returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListAggregatedUtterances</code>
   *          operation contains more results that specified in the
   *             <code>maxResults</code> parameter, a token is returned in the
   *          response. Use that token in the <code>nextToken</code> parameter to
   *          return the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAggregatedUtterancesResponse {
  /**
   * <p>The identifier of the bot that contains the utterances.</p>
   */
  botId?: string;

  /**
   * <p>The identifier of the bot alias that contains the utterances. If you
   *          specified the bot version, the bot alias ID isn't returned.</p>
   */
  botAliasId?: string;

  /**
   * <p>The identifier of the bot version that contains the utterances. If
   *          you specified the bot alias, the bot version isn't returned.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale that the utterances are
   *          in.</p>
   */
  localeId?: string;

  /**
   * <p>The time period used to aggregate the utterance data.</p>
   */
  aggregationDuration?: UtteranceAggregationDuration;

  /**
   * <p>The date and time that the aggregation window begins. Only data
   *          collected after this time is returned in the results.</p>
   */
  aggregationWindowStartTime?: Date;

  /**
   * <p>The date and time that the aggregation window ends. Only data
   *          collected between the start time and the end time are returned in the
   *          results. </p>
   */
  aggregationWindowEndTime?: Date;

  /**
   * <p>The last date and time that the aggregated data was collected. The
   *          time period depends on the length of the aggregation window.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Hours</b> - for 1 hour time
   *                window, every half hour; otherwise every hour.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Days</b> - every 6 hours</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Weeks</b> - for a one week time
   *                window, every 12 hours; otherwise, every day</p>
   *             </li>
   *          </ul>
   */
  aggregationLastRefreshedDateTime?: Date;

  /**
   * <p>Summaries of the aggregated utterance data. Each response contains
   *          information about the number of times that the utterance was seen
   *          during the time period, whether it was detected or missed, and when it
   *          was seen during the time period.</p>
   */
  aggregatedUtterancesSummaries?: AggregatedUtterancesSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListAggregatedUtterances</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a
   *             <code>ListAggregatedUtterances</code> operation request to get the
   *          next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBotAliasesRequest {
  /**
   * <p>The identifier of the bot to list aliases for.</p>
   */
  botId: string | undefined;

  /**
   * <p>The maximum number of aliases to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListBotAliases</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBotAliasesResponse {
  /**
   * <p>Summary information for the bot aliases that meet the filter
   *          criteria specified in the request. The length of the list is specified
   *          in the <code>maxResults</code> parameter of the request. If there are
   *          more aliases available, the <code>nextToken</code> field contains a
   *          token to get the next page of results.</p>
   */
  botAliasSummaries?: BotAliasSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBotAliases</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListBotAliases</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The identifier of the bot associated with the aliases.</p>
   */
  botId?: string;
}

/**
 * @public
 */
export interface ListBotLocalesRequest {
  /**
   * <p>The identifier of the bot to list locales for.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to list locales for.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>Specifies sorting parameters for the list of locales. You can sort
   *          by locale name in ascending or descending order.</p>
   */
  sortBy?: BotLocaleSortBy;

  /**
   * <p>Provides the specification for a filter used to limit the response
   *          to only those locales that match the filter specification. You can only
   *          specify one filter and one value to filter on.</p>
   */
  filters?: BotLocaleFilter[];

  /**
   * <p>The maximum number of aliases to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListBotLocales</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token as the
   *             <code>nextToken</code> parameter to return the next page of results.
   *       </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBotLocalesResponse {
  /**
   * <p>The identifier of the bot to list locales for.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot.</p>
   */
  botVersion?: string;

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBotLocales</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListBotLocales</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Summary information for the locales that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter of the request. If there are more
   *          locales available, the <code>nextToken</code> field contains a token to
   *          get the next page of results.</p>
   */
  botLocaleSummaries?: BotLocaleSummary[];
}

/**
 * @public
 */
export interface ListBotRecommendationsRequest {
  /**
   * <p>The unique identifier of the bot that contains the bot
   *          recommendation list.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the bot recommendation
   *          list.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          list.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The maximum number of bot recommendations to return in each page of
   *          results. If there are fewer results than the max page size, only the
   *          actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListBotRecommendation operation contains
   *          more results than specified in the maxResults parameter, a token is
   *          returned in the response. Use that token in the nextToken parameter to
   *          return the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBotRecommendationsResponse {
  /**
   * <p>The unique identifier of the bot that contains the bot
   *          recommendation list.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the bot recommendation
   *          list.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          list.</p>
   */
  localeId?: string;

  /**
   * <p>Summary information for the bot recommendations that meet the filter
   *          specified in this request. The length of the list is specified in the
   *          maxResults parameter of the request. If there are more bot
   *          recommendations available, the nextToken field contains a token to get
   *          the next page of results.</p>
   */
  botRecommendationSummaries?: BotRecommendationSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the ListBotRecommendations operation. If the nextToken
   *          field is present, you send the contents as the nextToken parameter of a
   *          ListBotRecommendations operation request to get the next page of
   *          results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBotsRequest {
  /**
   * <p>Specifies sorting parameters for the list of bots. You can specify
   *          that the list be sorted by bot name in ascending or descending
   *          order.</p>
   */
  sortBy?: BotSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the bots in the
   *          response to only those that match the filter specification. You can
   *          only specify one filter and one string to filter on.</p>
   */
  filters?: BotFilter[];

  /**
   * <p>The maximum number of bots to return in each page of results. If
   *          there are fewer results than the maximum page size, only the actual
   *          number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListBots</code> operation contains
   *          more results than specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response. </p>
   *          <p>Use the returned token in the <code>nextToken</code> parameter of a
   *             <code>ListBots</code> request to return the next page of results.
   *          For a complete set of results, call the <code>ListBots</code> operation
   *          until the <code>nextToken</code> returned in the response is
   *          null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * <p>Summary information for the bots that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter of the request. If there are more
   *          bots available, the <code>nextToken</code> field contains a token to
   *          the next page of results.</p>
   */
  botSummaries?: BotSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBots</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListBots</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBotVersionsRequest {
  /**
   * <p>The identifier of the bot to list versions for.</p>
   */
  botId: string | undefined;

  /**
   * <p>Specifies sorting parameters for the list of versions. You can
   *          specify that the list be sorted by version name in either ascending or
   *          descending order.</p>
   */
  sortBy?: BotVersionSortBy;

  /**
   * <p>The maximum number of versions to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response to the <code>ListBotVersion</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBotVersionsResponse {
  /**
   * <p>The identifier of the bot to list versions for.</p>
   */
  botId?: string;

  /**
   * <p>Summary information for the bot versions that meet the filter
   *          criteria specified in the request. The length of the list is specified
   *          in the <code>maxResults</code> parameter of the request. If there are
   *          more versions available, the <code>nextToken</code> field contains a
   *          token to get the next page of results.</p>
   */
  botVersionSummaries?: BotVersionSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBotVersions</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListBotAliases</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBuiltInIntentsRequest {
  /**
   * <p>The identifier of the language and locale of the intents to list.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Specifies sorting parameters for the list of built-in intents. You
   *          can specify that the list be sorted by the built-in intent signature in
   *          either ascending or descending order.</p>
   */
  sortBy?: BuiltInIntentSortBy;

  /**
   * <p>The maximum number of built-in intents to return in each page of
   *          results. If there are fewer results than the max page size, only the
   *          actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListBuiltInIntents</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBuiltInIntentsResponse {
  /**
   * <p>Summary information for the built-in intents that meet the filter
   *          criteria specified in the request. The length of the list is specified
   *          in the <code>maxResults</code> parameter of the request. If there are
   *          more intents available, the <code>nextToken</code> field contains a
   *          token to get the next page of results.</p>
   */
  builtInIntentSummaries?: BuiltInIntentSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBuiltInIntents</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListBotAliases</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The language and locale of the intents in the list.</p>
   */
  localeId?: string;
}

/**
 * @public
 */
export interface ListBuiltInSlotTypesRequest {
  /**
   * <p>The identifier of the language and locale of the slot types to list.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Determines the sort order for the response from the
   *             <code>ListBuiltInSlotTypes</code> operation. You can choose to sort
   *          by the slot type signature in either ascending or descending
   *          order.</p>
   */
  sortBy?: BuiltInSlotTypeSortBy;

  /**
   * <p>The maximum number of built-in slot types to return in each page of
   *          results. If there are fewer results than the max page size, only the
   *          actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListBuiltInSlotTypes</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBuiltInSlotTypesResponse {
  /**
   * <p>Summary information for the built-in slot types that meet the filter
   *          criteria specified in the request. The length of the list is specified
   *          in the <code>maxResults</code> parameter of the request. If there are
   *          more slot types available, the <code>nextToken</code> field contains a
   *          token to get the next page of results.</p>
   */
  builtInSlotTypeSummaries?: BuiltInSlotTypeSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBuiltInSlotTypes</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a
   *             <code>LIstBuiltInSlotTypes</code> operation request to get the next
   *          page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The language and locale of the slot types in the list.</p>
   */
  localeId?: string;
}

/**
 * @public
 */
export interface ListCustomVocabularyItemsRequest {
  /**
   * <p>The identifier of the version of the bot associated with this custom
   *          vocabulary.</p>
   */
  botId: string | undefined;

  /**
   * <p>The bot version of the bot to the list custom vocabulary
   *          request.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale where this custom vocabulary
   *          is used. The string must match one of the supported locales. For more
   *          information, see Supported
   *          languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).</p>
   */
  localeId: string | undefined;

  /**
   * <p>The maximum number of items returned by the list operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken identifier to the list custom vocabulary
   *          request.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCustomVocabularyItemsResponse {
  /**
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   */
  botId?: string;

  /**
   * <p>The identifier of the version of the bot associated with this custom
   *          vocabulary.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale where this custom vocabulary
   *          is used. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   */
  localeId?: string;

  /**
   * <p>The custom vocabulary items from the list custom vocabulary
   *          response.</p>
   */
  customVocabularyItems?: CustomVocabularyItem[];

  /**
   * <p>The nextToken identifier to the list custom vocabulary
   *          response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExportsRequest {
  /**
   * <p>The unique identifier that Amazon Lex assigned to the bot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot to list exports for. </p>
   */
  botVersion?: string;

  /**
   * <p>Determines the field that the list of exports is sorted by. You can
   *          sort by the <code>LastUpdatedDateTime</code> field in ascending or
   *          descending order.</p>
   */
  sortBy?: ExportSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the exports in
   *          the response to only those that match the filter specification. You can
   *          only specify one filter and one string to filter on.</p>
   */
  filters?: ExportFilter[];

  /**
   * <p>The maximum number of exports to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListExports</code> operation contains
   *          more results that specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response. </p>
   *          <p>Use the returned token in the <code>nextToken</code> parameter of a
   *             <code>ListExports</code> request to return the next page of results.
   *          For a complete set of results, call the <code>ListExports</code>
   *          operation until the <code>nextToken</code> returned in the response is
   *          null.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the resources that should be exported. If you
   *       don't specify a resource type in the <code>filters</code> parameter,
   *       both bot locales and custom vocabularies are exported.</p>
   */
  localeId?: string;
}

/**
 * @public
 */
export interface ListExportsResponse {
  /**
   * <p>The unique identifier assigned to the bot by Amazon Lex.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that was exported.</p>
   */
  botVersion?: string;

  /**
   * <p>Summary information for the exports that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter. If there are more exports
   *          available, the <code>nextToken</code> field contains a token to get the
   *          next page of results.</p>
   */
  exportSummaries?: ExportSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListExports</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListExports</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The locale specified in the request.</p>
   */
  localeId?: string;
}

/**
 * @public
 */
export interface ListImportsRequest {
  /**
   * <p>The unique identifier that Amazon Lex assigned to the bot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot to list imports for.</p>
   */
  botVersion?: string;

  /**
   * <p>Determines the field that the list of imports is sorted by. You can
   *          sort by the <code>LastUpdatedDateTime</code> field in ascending or
   *          descending order.</p>
   */
  sortBy?: ImportSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the bots in the
   *          response to only those that match the filter specification. You can
   *          only specify one filter and one string to filter on.</p>
   */
  filters?: ImportFilter[];

  /**
   * <p>The maximum number of imports to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListImports</code> operation contains
   *          more results than specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response.</p>
   *          <p>Use the returned token in the <code>nextToken</code> parameter of a
   *             <code>ListImports</code> request to return the next page of results.
   *          For a complete set of results, call the <code>ListImports</code>
   *          operation until the <code>nextToken</code> returned in the response is
   *          null.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the locale that should be present in the list. If you
   *          don't specify a resource type in the <code>filters</code> parameter,
   *          the list contains both bot locales and custom vocabularies.</p>
   */
  localeId?: string;
}

/**
 * @public
 */
export interface ListImportsResponse {
  /**
   * <p>The unique identifier assigned by Amazon Lex to the bot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that was imported. It will always be
   *             <code>DRAFT</code>.</p>
   */
  botVersion?: string;

  /**
   * <p>Summary information for the imports that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter. If there are more imports
   *          available, the <code>nextToken</code> field contains a token to get the
   *          next page of results.</p>
   */
  importSummaries?: ImportSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListImports</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListImports</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The locale specified in the request.</p>
   */
  localeId?: string;
}

/**
 * @public
 */
export interface ListIntentMetricsRequest {
  /**
   * <p>The identifier for the bot for which you want to retrieve intent metrics.</p>
   */
  botId: string | undefined;

  /**
   * <p>The timestamp that marks the beginning of the range of time for which you want to see intent metrics.</p>
   */
  startDateTime: Date | undefined;

  /**
   * <p>The date and time that marks the end of the range of time for which you want to see intent metrics.</p>
   */
  endDateTime: Date | undefined;

  /**
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the order by which to organize the results.</p>
   */
  metrics: AnalyticsIntentMetric[] | undefined;

  /**
   * <p>A list of objects, each of which contains specifications for organizing the results by time.</p>
   */
  binBy?: AnalyticsBinBySpecification[];

  /**
   * <p>A list of objects, each of which specifies how to group the results. You can group by the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IntentName</code> – The name of the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentEndState</code> – The final state of the intent. The possible end states are detailed in <a href="https://docs.aws.amazon.com/analytics-key-definitions-intents">Key definitions</a> in the user guide.</p>
   *             </li>
   *          </ul>
   */
  groupBy?: AnalyticsIntentGroupBySpecification[];

  /**
   * <p>A list of objects, each of which describes a condition by which you want to filter the results.</p>
   */
  filters?: AnalyticsIntentFilter[];

  /**
   * <p>The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListIntentMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListIntentMetrics request to return the next page of results. For a complete set of results, call the ListIntentMetrics operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIntentMetricsResponse {
  /**
   * <p>The identifier for the bot for which you retrieved intent metrics.</p>
   */
  botId?: string;

  /**
   * <p>The results for the intent metrics.</p>
   */
  results?: AnalyticsIntentResult[];

  /**
   * <p>If the response from the ListIntentMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListIntentMetrics request to return the next page of results. For a complete set of results, call the ListIntentMetrics operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIntentPathsRequest {
  /**
   * <p>The identifier for the bot for which you want to retrieve intent path metrics.</p>
   */
  botId: string | undefined;

  /**
   * <p>The date and time that marks the beginning of the range of time for which you want to see intent path metrics.</p>
   */
  startDateTime: Date | undefined;

  /**
   * <p>The date and time that marks the end of the range of time for which you want to see intent path metrics.</p>
   */
  endDateTime: Date | undefined;

  /**
   * <p>The intent path for which you want to retrieve metrics. Use a forward slash to separate intents in the path. For example:</p>
   *          <ul>
   *             <li>
   *                <p>/BookCar</p>
   *             </li>
   *             <li>
   *                <p>/BookCar/BookHotel</p>
   *             </li>
   *             <li>
   *                <p>/BookHotel/BookCar</p>
   *             </li>
   *          </ul>
   */
  intentPath: string | undefined;

  /**
   * <p>A list of objects, each describes a condition by which you want to filter the results.</p>
   */
  filters?: AnalyticsPathFilter[];
}

/**
 * @public
 */
export interface ListIntentPathsResponse {
  /**
   * <p>A list of objects, each of which contains information about a node in the intent path for which you requested metrics.</p>
   */
  nodeSummaries?: AnalyticsIntentNodeSummary[];
}

/**
 * @public
 */
export interface ListIntentsRequest {
  /**
   * <p>The unique identifier of the bot that contains the intent.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the intent.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the intents to list.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Determines the sort order for the response from the
   *             <code>ListIntents</code> operation. You can choose to sort by the
   *          intent name or last updated date in either ascending or descending
   *          order.</p>
   */
  sortBy?: IntentSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the intents in
   *          the response to only those that match the filter specification. You can
   *          only specify one filter and only one string to filter on.</p>
   */
  filters?: IntentFilter[];

  /**
   * <p>The maximum number of intents to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListIntents</code> operation contains
   *          more results than specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response.</p>
   *          <p>Use the returned token in the <code>nextToken</code> parameter of a
   *             <code>ListIntents</code> request to return the next page of results.
   *          For a complete set of results, call the <code>ListIntents</code>
   *          operation until the <code>nextToken</code> returned in the response is
   *          null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIntentsResponse {
  /**
   * <p>The identifier of the bot that contains the intent.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the intent.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale of the intents in the list.</p>
   */
  localeId?: string;

  /**
   * <p>Summary information for the intents that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter of the request. If there are more
   *          intents available, the <code>nextToken</code> field contains a token to
   *          get the next page of results.</p>
   */
  intentSummaries?: IntentSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListIntents</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListIntents</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIntentStageMetricsRequest {
  /**
   * <p>The identifier for the bot for which you want to retrieve intent stage metrics.</p>
   */
  botId: string | undefined;

  /**
   * <p>The date and time that marks the beginning of the range of time for which you want to see intent stage metrics.</p>
   */
  startDateTime: Date | undefined;

  /**
   * <p>The date and time that marks the end of the range of time for which you want to see intent stage metrics.</p>
   */
  endDateTime: Date | undefined;

  /**
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   */
  metrics: AnalyticsIntentStageMetric[] | undefined;

  /**
   * <p>A list of objects, each of which contains specifications for organizing the results by time.</p>
   */
  binBy?: AnalyticsBinBySpecification[];

  /**
   * <p>A list of objects, each of which specifies how to group the results. You can group by the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IntentStageName</code> – The name of the intent stage.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SwitchedToIntent</code> – The intent to which the conversation was switched (if any).</p>
   *             </li>
   *          </ul>
   */
  groupBy?: AnalyticsIntentStageGroupBySpecification[];

  /**
   * <p>A list of objects, each of which describes a condition by which you want to filter the results.</p>
   */
  filters?: AnalyticsIntentStageFilter[];

  /**
   * <p>The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the ListIntentStageMetrics operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIntentStageMetricsResponse {
  /**
   * <p>The identifier for the bot for which you retrieved intent stage metrics.</p>
   */
  botId?: string;

  /**
   * <p>The results for the intent stage metrics.</p>
   */
  results?: AnalyticsIntentStageResult[];

  /**
   * <p>If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the ListIntentStageMetrics operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRecommendedIntentsRequest {
  /**
   * <p>The unique identifier of the bot associated with the recommended
   *          intents.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the recommended intents.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the recommended
   *          intents.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the bot recommendation that contains the
   *          recommended intents.</p>
   */
  botRecommendationId: string | undefined;

  /**
   * <p>If the response from the ListRecommendedIntents operation contains
   *          more results than specified in the maxResults parameter, a token is
   *          returned in the response. Use that token in the nextToken parameter to
   *          return the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of bot recommendations to return in each page of
   *          results. If there are fewer results than the max page size, only the
   *          actual number of results are returned.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>An object that contains a summary of a recommended intent.</p>
 */
export interface RecommendedIntentSummary {
  /**
   * <p>The unique identifier of a recommended intent associated with the
   *             bot recommendation.</p>
   */
  intentId?: string;

  /**
   * <p>The name of a recommended intent associated with the bot
   *             recommendation.</p>
   */
  intentName?: string;

  /**
   * <p>The count of sample utterances of a recommended intent that is
   *             associated with a bot recommendation.</p>
   */
  sampleUtterancesCount?: number;
}

/**
 * @public
 */
export interface ListRecommendedIntentsResponse {
  /**
   * <p>The unique identifier of the bot associated with the recommended
   *          intent.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the intent.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the intents to list.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId?: string;

  /**
   * <p>The identifier of the bot recommendation that contains the
   *          recommended intent.</p>
   */
  botRecommendationId?: string;

  /**
   * <p>Summary information for the intents that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *          maxResults parameter of the request. If there are more intents
   *          available, the nextToken field contains a token to get the next page of
   *          results.</p>
   */
  summaryList?: RecommendedIntentSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the ListRecommendedIntents operation. If the nextToken
   *          field is present, you send the contents as the nextToken parameter of a
   *          ListRecommendedIntents operation request to get the next page of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object specifying the measure and method by which to sort the session analytics data.</p>
 */
export interface SessionDataSortBy {
  /**
   * <p>The measure by which to sort the session analytics data.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>conversationStartTime</code> – The date and time when the conversation began. A conversation is defined as a unique combination of a <code>sessionId</code> and an <code>originatingRequestId</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>numberOfTurns</code> – The number of turns that the session took.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>conversationDurationSeconds</code> – The duration of the conversation in seconds.</p>
   *             </li>
   *          </ul>
   */
  name: AnalyticsSessionSortByName | string | undefined;

  /**
   * <p>Specifies whether to sort the results in ascending or descending order.</p>
   */
  order: AnalyticsSortOrder | string | undefined;
}

/**
 * @public
 */
export interface ListSessionAnalyticsDataRequest {
  /**
   * <p>The identifier for the bot for which you want to retrieve session analytics.</p>
   */
  botId: string | undefined;

  /**
   * <p>The date and time that marks the beginning of the range of time for which you want to see session analytics.</p>
   */
  startDateTime: Date | undefined;

  /**
   * <p>The date and time that marks the end of the range of time for which you want to see session analytics.</p>
   */
  endDateTime: Date | undefined;

  /**
   * <p>An object specifying the measure and method by which to sort the session analytics data.</p>
   */
  sortBy?: SessionDataSortBy;

  /**
   * <p>A list of objects, each of which describes a condition by which you want to filter the results.</p>
   */
  filters?: AnalyticsSessionFilter[];

  /**
   * <p>The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListSessionAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListSessionAnalyticsData request to return the next page of results. For a complete set of results, call the ListSessionAnalyticsData operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object containing information about a specific session.</p>
 */
export interface SessionSpecification {
  /**
   * <p>The identifier of the alias of the bot that the session was held with.</p>
   */
  botAliasId?: string;

  /**
   * <p>The version of the bot that the session was held with.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale of the bot that the session was held with.</p>
   */
  localeId?: string;

  /**
   * <p>The channel that is integrated with the bot that the session was held with.</p>
   */
  channel?: string;

  /**
   * <p>The identifier of the session.</p>
   */
  sessionId?: string;

  /**
   * <p>The date and time when the conversation began. A conversation is defined as a unique combination of a <code>sessionId</code> and an <code>originatingRequestId</code>.</p>
   */
  conversationStartTime?: Date;

  /**
   * <p>The date and time when the conversation ended. A conversation is defined as a unique combination of a <code>sessionId</code> and an <code>originatingRequestId</code>.</p>
   */
  conversationEndTime?: Date;

  /**
   * <p>The duration of the conversation in seconds. A conversation is defined as a unique combination of a <code>sessionId</code> and an <code>originatingRequestId</code>.</p>
   */
  conversationDurationSeconds?: number;

  /**
   * <p>The final state of the conversation. A conversation is defined as a unique combination of a <code>sessionId</code> and an <code>originatingRequestId</code>.</p>
   */
  conversationEndState?: ConversationEndState | string;

  /**
   * <p>The mode of the session. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Speech</code> – The session was spoken.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Text</code> – The session was written.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DTMF</code> – The session used a touch-tone keypad (Dual Tone Multi-Frequency).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MultiMode</code> – The session used multiple modes.</p>
   *             </li>
   *          </ul>
   */
  mode?: AnalyticsModality | string;

  /**
   * <p>The number of turns that the session took.</p>
   */
  numberOfTurns?: number;

  /**
   * <p>A list of objects containing the name of an intent that was invoked.</p>
   */
  invokedIntentSamples?: InvokedIntentSample[];

  /**
   * <p>The identifier of the first request in a session.</p>
   */
  originatingRequestId?: string;
}

/**
 * @public
 */
export interface ListSessionAnalyticsDataResponse {
  /**
   * <p>The unique identifier of the bot that the sessions belong to.</p>
   */
  botId?: string;

  /**
   * <p>If the response from the ListSessionAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListSessionAnalyticsData request to return the next page of results. For a complete set of results, call the ListSessionAnalyticsData operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of objects, each of which contains information about a session with the bot.</p>
   */
  sessions?: SessionSpecification[];
}

/**
 * @public
 */
export interface ListSessionMetricsRequest {
  /**
   * <p>The identifier for the bot for which you want to retrieve session metrics.</p>
   */
  botId: string | undefined;

  /**
   * <p>The date and time that marks the beginning of the range of time for which you want to see session metrics.</p>
   */
  startDateTime: Date | undefined;

  /**
   * <p>The date and time that marks the end of the range of time for which you want to see session metrics.</p>
   */
  endDateTime: Date | undefined;

  /**
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   */
  metrics: AnalyticsSessionMetric[] | undefined;

  /**
   * <p>A list of objects, each of which contains specifications for organizing the results by time.</p>
   */
  binBy?: AnalyticsBinBySpecification[];

  /**
   * <p>A list of objects, each of which specifies how to group the results. You can group by the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConversationEndState</code> – The final state of the conversation. The possible end states are detailed in <a href="https://docs.aws.amazon.com/analytics-key-definitions-conversations">Key definitions</a> in the user guide.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – The unique identifier of the bot locale.</p>
   *             </li>
   *          </ul>
   */
  groupBy?: AnalyticsSessionGroupBySpecification[];

  /**
   * <p>A list of objects, each of which describes a condition by which you want to filter the results.</p>
   */
  filters?: AnalyticsSessionFilter[];

  /**
   * <p>The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListSessionMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListSessionMetrics request to return the next page of results. For a complete set of results, call the ListSessionMetrics operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSessionMetricsResponse {
  /**
   * <p>The identifier for the bot for which you retrieved session metrics.</p>
   */
  botId?: string;

  /**
   * <p>The results for the session metrics.</p>
   */
  results?: AnalyticsSessionResult[];

  /**
   * <p>If the response from the ListSessionMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListSessionMetrics request to return the next page of results. For a complete set of results, call the ListSessionMetrics operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SlotFilterName = {
  SlotName: "SlotName",
} as const;

/**
 * @public
 */
export type SlotFilterName = (typeof SlotFilterName)[keyof typeof SlotFilterName];

/**
 * @public
 * @enum
 */
export const SlotFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;

/**
 * @public
 */
export type SlotFilterOperator = (typeof SlotFilterOperator)[keyof typeof SlotFilterOperator];

/**
 * @public
 * <p>Filters the response from the <code>ListSlots</code>
 *          operation.</p>
 */
export interface SlotFilter {
  /**
   * <p>The name of the field to use for filtering.</p>
   */
  name: SlotFilterName | string | undefined;

  /**
   * <p>The value to use to filter the response.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *          <code>ListSlots</code> operation should return only aliases that
   *          equal the specified value. Specify <code>CO</code> when the
   *          <code>ListSlots</code> operation should return aliases that contain
   *          the specified value.</p>
   */
  operator: SlotFilterOperator | string | undefined;
}

/**
 * @public
 * @enum
 */
export const SlotSortAttribute = {
  LastUpdatedDateTime: "LastUpdatedDateTime",
  SlotName: "SlotName",
} as const;

/**
 * @public
 */
export type SlotSortAttribute = (typeof SlotSortAttribute)[keyof typeof SlotSortAttribute];

/**
 * @public
 * <p>Specifies attributes for sorting a list of bots.</p>
 */
export interface SlotSortBy {
  /**
   * <p>The attribute to use to sort the list.</p>
   */
  attribute: SlotSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list. You can choose ascending or
   *          descending.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 */
export interface ListSlotsRequest {
  /**
   * <p>The identifier of the bot that contains the slot.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the slot.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the slots to list. The
   *          string must match one of the supported locales. For more information,
   *          see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The unique identifier of the intent that contains the slot.</p>
   */
  intentId: string | undefined;

  /**
   * <p>Determines the sort order for the response from the
   *             <code>ListSlots</code> operation. You can choose to sort by the slot
   *          name or last updated date in either ascending or descending
   *          order.</p>
   */
  sortBy?: SlotSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the slots in
   *          the response to only those that match the filter specification. You can
   *          only specify one filter and only one string to filter on.</p>
   */
  filters?: SlotFilter[];

  /**
   * <p>The maximum number of slots to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListSlots</code> operation contains
   *          more results than specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Summary information about a slot, a value that the bot elicits from
 *          the user.</p>
 */
export interface SlotSummary {
  /**
   * <p>The unique identifier of the slot.</p>
   */
  slotId?: string;

  /**
   * <p>The name given to the slot.</p>
   */
  slotName?: string;

  /**
   * <p>The description of the slot.</p>
   */
  description?: string;

  /**
   * <p>Whether the slot is required or optional. An intent is complete when
   *          all required slots are filled.</p>
   */
  slotConstraint?: SlotConstraint | string;

  /**
   * <p>The unique identifier for the slot type that defines the values for
   *          the slot.</p>
   */
  slotTypeId?: string;

  /**
   * <p>Prompts that are sent to the user to elicit a value for the
   *          slot.</p>
   */
  valueElicitationPromptSpecification?: PromptSpecification;

  /**
   * <p>The timestamp of the last date and time that the slot was
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface ListSlotsResponse {
  /**
   * <p>The identifier of the bot that contains the slots.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the slots.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale of the slots in the list.</p>
   */
  localeId?: string;

  /**
   * <p>The identifier of the intent that contains the slots.</p>
   */
  intentId?: string;

  /**
   * <p>Summary information for the slots that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter of the request. If there are more
   *          slots available, the <code>nextToken</code> field contains a token to
   *          get the next page of results.</p>
   */
  slotSummaries?: SlotSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListSlots</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListSlots</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SlotTypeFilterName = {
  ExternalSourceType: "ExternalSourceType",
  SlotTypeName: "SlotTypeName",
} as const;

/**
 * @public
 */
export type SlotTypeFilterName = (typeof SlotTypeFilterName)[keyof typeof SlotTypeFilterName];

/**
 * @public
 * @enum
 */
export const SlotTypeFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;

/**
 * @public
 */
export type SlotTypeFilterOperator = (typeof SlotTypeFilterOperator)[keyof typeof SlotTypeFilterOperator];

/**
 * @public
 * <p>Filters the response from the <code>ListSlotTypes</code>
 *          operation.</p>
 */
export interface SlotTypeFilter {
  /**
   * <p>The name of the field to use for filtering.</p>
   */
  name: SlotTypeFilterName | string | undefined;

  /**
   * <p>The value to use to filter the response.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *          <code>ListSlotTypes</code> operation should return only aliases that
   *          equal the specified value. Specify <code>CO</code> when the
   *          <code>ListSlotTypes</code> operation should return aliases that
   *          contain the specified value.</p>
   */
  operator: SlotTypeFilterOperator | string | undefined;
}

/**
 * @public
 * @enum
 */
export const SlotTypeSortAttribute = {
  LastUpdatedDateTime: "LastUpdatedDateTime",
  SlotTypeName: "SlotTypeName",
} as const;

/**
 * @public
 */
export type SlotTypeSortAttribute = (typeof SlotTypeSortAttribute)[keyof typeof SlotTypeSortAttribute];

/**
 * @public
 * <p>Specifies attributes for sorting a list of slot types.</p>
 */
export interface SlotTypeSortBy {
  /**
   * <p>The attribute to use to sort the list of slot types.</p>
   */
  attribute: SlotTypeSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list. You can say ascending or
   *          descending.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 */
export interface ListSlotTypesRequest {
  /**
   * <p>The unique identifier of the bot that contains the slot
   *          types.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the slot type.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the slot types to list.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Determines the sort order for the response from the
   *             <code>ListSlotTypes</code> operation. You can choose to sort by the
   *          slot type name or last updated date in either ascending or descending
   *          order.</p>
   */
  sortBy?: SlotTypeSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the slot types
   *          in the response to only those that match the filter specification. You
   *          can only specify one filter and only one string to filter on.</p>
   */
  filters?: SlotTypeFilter[];

  /**
   * <p>The maximum number of slot types to return in each page of results.
   *          If there are fewer results than the max page size, only the actual
   *          number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListSlotTypes</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SlotTypeCategory = {
  Composite: "Composite",
  Custom: "Custom",
  Extended: "Extended",
  ExternalGrammar: "ExternalGrammar",
} as const;

/**
 * @public
 */
export type SlotTypeCategory = (typeof SlotTypeCategory)[keyof typeof SlotTypeCategory];

/**
 * @public
 * <p>Provides summary information about a slot type.</p>
 */
export interface SlotTypeSummary {
  /**
   * <p>The unique identifier assigned to the slot type.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The name of the slot type.</p>
   */
  slotTypeName?: string;

  /**
   * <p>The description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>If the slot type is derived from a built-on slot type, the name of
   *          the parent slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>A timestamp of the date and time that the slot type was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Indicates the type of the slot type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Custom</code> - A slot type that you created using
   *                custom values. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/custom-slot-types.html">Creating custom slot
   *                types</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Extended</code> - A slot type created by extending the
   *                <code>AMAZON.AlphaNumeric</code> built-in slot type. For more information, see
   *                   <a href="https://docs.aws.amazon.com/lexv2/latest/dg/built-in-slot-alphanumerice.html">
   *                      <code>AMAZON.AlphaNumeric</code>
   *                   </a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ExternalGrammar</code> - A slot type using a custom
   *                GRXML grammar to define values. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/building-grxml.html">Using a custom grammar slot type</a>.</p>
   *             </li>
   *          </ul>
   */
  slotTypeCategory?: SlotTypeCategory | string;
}

/**
 * @public
 */
export interface ListSlotTypesResponse {
  /**
   * <p>The identifier of the bot that contains the slot types.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the slot types.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and local of the slot types in the list.</p>
   */
  localeId?: string;

  /**
   * <p>Summary information for the slot types that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter of the request. If there are more
   *          slot types available, the <code>nextToken</code> field contains a token
   *          to get the next page of results.</p>
   */
  slotTypeSummaries?: SlotTypeSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListSlotTypes</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListSlotTypes</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get a list of tags
   *          for.</p>
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const TestResultTypeFilter = {
  ConversationLevelTestResults: "ConversationLevelTestResults",
  IntentClassificationTestResults: "IntentClassificationTestResults",
  OverallTestResults: "OverallTestResults",
  SlotResolutionTestResults: "SlotResolutionTestResults",
  UtteranceLevelResults: "UtteranceLevelResults",
} as const;

/**
 * @public
 */
export type TestResultTypeFilter = (typeof TestResultTypeFilter)[keyof typeof TestResultTypeFilter];

/**
 * @public
 * <p>Contains information about the method by which to filter the results of the test execution.</p>
 */
export interface TestExecutionResultFilterBy {
  /**
   * <p>Specifies which results to filter. See <a href="https://docs.aws.amazon.com/lexv2/latest/dg/test-results-details-test-set.html">Test result details">Test results details</a>
   *  for details about different types of results.</p>
   */
  resultTypeFilter: TestResultTypeFilter | string | undefined;

  /**
   * <p>Contains information about the method for filtering Conversation level test results.</p>
   */
  conversationLevelTestResultsFilterBy?: ConversationLevelTestResultsFilterBy;
}

/**
 * @public
 */
export interface ListTestExecutionResultItemsRequest {
  /**
   * <p>The unique identifier of the test execution to list the result items.</p>
   */
  testExecutionId: string | undefined;

  /**
   * <p>The filter for the list of results from the test set execution.</p>
   */
  resultFilterBy: TestExecutionResultFilterBy | undefined;

  /**
   * <p>The maximum number of test execution result items to return in each
   *       page. If there are fewer results than the max page size, only the actual
   *       number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListTestExecutionResultItems</code> operation
   *       contains more results than specified in the <code>maxResults</code> parameter,
   *       a token is returned in the response. Use that token in the <code>nextToken</code>
   *       parameter to return the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about the overall results for a test execution result.</p>
 */
export interface OverallTestResultItem {
  /**
   * <p>Indicates whether the conversation contains multiple turns or not.</p>
   */
  multiTurnConversation: boolean | undefined;

  /**
   * <p>The total number of overall results in the result of the test execution.</p>
   */
  totalResultCount: number | undefined;

  /**
   * <p>The number of speech transcription results in the overall test.</p>
   */
  speechTranscriptionResultCounts?: Record<string, number>;

  /**
   * <p>The number of results that succeeded.</p>
   */
  endToEndResultCounts: Record<string, number> | undefined;
}

/**
 * @public
 * <p>Information about the overall test results.</p>
 */
export interface OverallTestResults {
  /**
   * <p>A list of the overall test results.</p>
   */
  items: OverallTestResultItem[] | undefined;
}

/**
 * @public
 * <p>Contains information about the audio for an utterance.</p>
 */
export interface UtteranceAudioInputSpecification {
  /**
   * <p>Amazon S3 file pointing to the audio.</p>
   */
  audioFileS3Location: string | undefined;
}

/**
 * @public
 * <p>Contains information about input of an utterance.</p>
 */
export interface UtteranceInputSpecification {
  /**
   * <p>A text input transcription of the utterance. It is only applicable for test-sets containing text data.</p>
   */
  textInput?: string;

  /**
   * <p>Contains information about the audio input for an utterance.</p>
   */
  audioInput?: UtteranceAudioInputSpecification;
}

/**
 * @public
 * @enum
 */
export const TestExecutionSortAttribute = {
  CreationDateTime: "CreationDateTime",
  TestSetName: "TestSetName",
} as const;

/**
 * @public
 */
export type TestExecutionSortAttribute = (typeof TestExecutionSortAttribute)[keyof typeof TestExecutionSortAttribute];

/**
 * @public
 * <p>Contains information about the method by which to sort the instances of
 *       test executions you have carried out.</p>
 */
export interface TestExecutionSortBy {
  /**
   * <p>Specifies whether to sort the test set executions by the date and time at which the test sets were created.</p>
   */
  attribute: TestExecutionSortAttribute | string | undefined;

  /**
   * <p>Specifies whether to sort in ascending or descending order.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 */
export interface ListTestExecutionsRequest {
  /**
   * <p>The sort order of the test set executions.</p>
   */
  sortBy?: TestExecutionSortBy;

  /**
   * <p>The maximum number of test executions to return in each page. If there are
   *       fewer results than the max page size, only the actual number of results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListTestExecutions operation contains more results
   *       than specified in the maxResults parameter, a token is returned in the response.
   *       Use that token in the nextToken parameter to return the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Summarizes metadata about the test execution.</p>
 */
export interface TestExecutionSummary {
  /**
   * <p>The unique identifier of the test execution.</p>
   */
  testExecutionId?: string;

  /**
   * <p>The date and time at which the test execution was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time at which the test execution was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The current status of the test execution.</p>
   */
  testExecutionStatus?: TestExecutionStatus | string;

  /**
   * <p>The unique identifier of the test set used in the test execution.</p>
   */
  testSetId?: string;

  /**
   * <p>The name of the test set used in the test execution.</p>
   */
  testSetName?: string;

  /**
   * <p>Contains information about the bot used for the test execution..</p>
   */
  target?: TestExecutionTarget;

  /**
   * <p>Specifies whether the API mode for the test execution is streaming
   *       or non-streaming.</p>
   */
  apiMode?: TestExecutionApiMode | string;

  /**
   * <p>Specifies whether the data used for the test execution is written
   *       or spoken.</p>
   */
  testExecutionModality?: TestExecutionModality | string;
}

/**
 * @public
 */
export interface ListTestExecutionsResponse {
  /**
   * <p>The list of test executions.</p>
   */
  testExecutions?: TestExecutionSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a response to
   *       the ListTestExecutions operation. If the nextToken field is present, you send the
   *       contents as the nextToken parameter of a ListTestExecutions operation request to
   *       get the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTestSetRecordsRequest {
  /**
   * <p>The identifier of the test set to list its test set records.</p>
   */
  testSetId: string | undefined;

  /**
   * <p>The maximum number of test set records to return in each page. If there are
   *       fewer records than the max page size, only the actual number of records are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListTestSetRecords operation contains more results
   *       than specified in the maxResults parameter, a token is returned in the response.
   *       Use that token in the nextToken parameter to return the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const TestSetSortAttribute = {
  LastUpdatedDateTime: "LastUpdatedDateTime",
  TestSetName: "TestSetName",
} as const;

/**
 * @public
 */
export type TestSetSortAttribute = (typeof TestSetSortAttribute)[keyof typeof TestSetSortAttribute];

/**
 * @public
 * <p>Contains information about the methods by which to sort the test set.</p>
 */
export interface TestSetSortBy {
  /**
   * <p>Specifies whether to sort the test sets by name or by the time they were last updated.</p>
   */
  attribute: TestSetSortAttribute | string | undefined;

  /**
   * <p>Specifies whether to sort in ascending or descending order.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 */
export interface ListTestSetsRequest {
  /**
   * <p>The sort order for the list of test sets.</p>
   */
  sortBy?: TestSetSortBy;

  /**
   * <p>The maximum number of test sets to return in each page. If there are fewer
   *       results than the max page size, only the actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListTestSets operation contains more results than
   *       specified in the maxResults parameter, a token is returned in the response. Use
   *       that token in the nextToken parameter to return the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Contains summary information about the test set.</p>
 */
export interface TestSetSummary {
  /**
   * <p>The unique identifier of the test set.</p>
   */
  testSetId?: string;

  /**
   * <p>The name of the test set.</p>
   */
  testSetName?: string;

  /**
   * <p>The description of the test set.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether the test set contains written or spoken data.</p>
   */
  modality?: TestSetModality | string;

  /**
   * <p>The status of the test set.</p>
   */
  status?: TestSetStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role
   *       that has permission to access the test set.</p>
   */
  roleArn?: string;

  /**
   * <p>The number of turns in the test set.</p>
   */
  numTurns?: number;

  /**
   * <p>Contains information about the location at which the test set is stored.</p>
   */
  storageLocation?: TestSetStorageLocation;

  /**
   * <p>The date and time at which the test set was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time at which the test set was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface ListTestSetsResponse {
  /**
   * <p>The selected test sets in a list of test sets.</p>
   */
  testSets?: TestSetSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a response
   *       to the ListTestSets operation. If the nextToken field is present, you send the
   *       contents as the nextToken parameter of a ListTestSets operation request to get
   *       the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object specifying the measure and method by which to sort the utterance data.</p>
 */
export interface UtteranceDataSortBy {
  /**
   * <p>The measure by which to sort the utterance analytics data.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Count</code> – The number of utterances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UtteranceTimestamp</code> – The date and time of the utterance.</p>
   *             </li>
   *          </ul>
   */
  name: AnalyticsUtteranceSortByName | string | undefined;

  /**
   * <p>Specifies whether to sort the results in ascending or descending order.</p>
   */
  order: AnalyticsSortOrder | string | undefined;
}

/**
 * @public
 */
export interface ListUtteranceAnalyticsDataRequest {
  /**
   * <p>The identifier for the bot for which you want to retrieve utterance analytics.</p>
   */
  botId: string | undefined;

  /**
   * <p>The date and time that marks the beginning of the range of time for which you want to see utterance analytics.</p>
   */
  startDateTime: Date | undefined;

  /**
   * <p>The date and time that marks the end of the range of time for which you want to see utterance analytics.</p>
   */
  endDateTime: Date | undefined;

  /**
   * <p>An object specifying the measure and method by which to sort the utterance analytics data.</p>
   */
  sortBy?: UtteranceDataSortBy;

  /**
   * <p>A list of objects, each of which describes a condition by which you want to filter the results.</p>
   */
  filters?: AnalyticsUtteranceFilter[];

  /**
   * <p>The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListUtteranceAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListUtteranceAnalyticsData request to return the next page of results. For a complete set of results, call the ListUtteranceAnalyticsData operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const UtteranceContentType = {
  CustomPayload: "CustomPayload",
  ImageResponseCard: "ImageResponseCard",
  PlainText: "PlainText",
  SSML: "SSML",
} as const;

/**
 * @public
 */
export type UtteranceContentType = (typeof UtteranceContentType)[keyof typeof UtteranceContentType];

/**
 * @public
 * <p>An object that contains a response to the utterance from the bot.</p>
 */
export interface UtteranceBotResponse {
  /**
   * <p>The text of the response to the utterance from the bot.</p>
   */
  content?: string;

  /**
   * <p>The type of the response. The following values are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PlainText</code> – A plain text string.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CustomPayload</code> – A response string that you can customize to include data or metadata for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSML</code> – A string that includes Speech Synthesis Markup Language to customize the audio response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ImageResponseCard</code> – An image with buttons that the customer can select. See <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_ImageResponseCard.html">ImageResponseCard</a> for more information.</p>
   *             </li>
   *          </ul>
   */
  contentType?: UtteranceContentType | string;

  /**
   * <p>A card that is shown to the user by a messaging platform. You define
   *          the contents of the card, the card is displayed by the platform. </p>
   *          <p>When you use a response card, the response from the user is
   *          constrained to the text associated with a button on the card.</p>
   */
  imageResponseCard?: ImageResponseCard;
}

/**
 * @public
 * <p>An object containing information about a specific utterance.</p>
 */
export interface UtteranceSpecification {
  /**
   * <p>The identifier of the alias of the bot that the utterance was made to.</p>
   */
  botAliasId?: string;

  /**
   * <p>The version of the bot that the utterance was made to.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale of the bot that the utterance was made to.</p>
   */
  localeId?: string;

  /**
   * <p>The identifier of the session that the utterance was made in.</p>
   */
  sessionId?: string;

  /**
   * <p>The channel that is integrated with the bot that the utterance was made to.</p>
   */
  channel?: string;

  /**
   * <p>The mode of the session. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Speech</code> – The session consisted of spoken dialogue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Text</code> – The session consisted of written dialogue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DTMF</code> – The session consisted of touch-tone keypad (Dual Tone Multi-Frequency) key presses.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MultiMode</code> – The session consisted of multiple modes.</p>
   *             </li>
   *          </ul>
   */
  mode?: AnalyticsModality | string;

  /**
   * <p>The date and time when the conversation in which the utterance took place began. A conversation is defined as a unique combination of a <code>sessionId</code> and an <code>originatingRequestId</code>.</p>
   */
  conversationStartTime?: Date;

  /**
   * <p>The date and time when the conversation in which the utterance took place ended. A conversation is defined as a unique combination of a <code>sessionId</code> and an <code>originatingRequestId</code>.</p>
   */
  conversationEndTime?: Date;

  /**
   * <p>The text of the utterance.</p>
   */
  utterance?: string;

  /**
   * <p>The date and time when the utterance took place.</p>
   */
  utteranceTimestamp?: Date;

  /**
   * <p>The duration in milliseconds of the audio associated with the utterance.</p>
   */
  audioVoiceDurationMillis?: number;

  /**
   * <p>Specifies whether the bot understood the utterance or not.</p>
   */
  utteranceUnderstood?: boolean;

  /**
   * <p>The input type of the utterance. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>PCM format: audio data must be in little-endian byte order.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>audio/l16; rate=16000; channels=1</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>audio/x-l16; sample-rate=16000; channel-count=1</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Opus format</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Text format</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>text/plain; charset=utf-8</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  inputType?: string;

  /**
   * <p>The output type of the utterance. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>audio/mpeg</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>audio/ogg</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>audio/pcm (16 KHz)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>audio/</code> (defaults to <code>mpeg</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>text/plain; charset=utf-8</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  outputType?: string;

  /**
   * <p>The name of the intent that the utterance is associated to.</p>
   */
  associatedIntentName?: string;

  /**
   * <p>The name of the slot that the utterance is associated to.</p>
   */
  associatedSlotName?: string;

  /**
   * <p>The state of the intent that the utterance is associated to.</p>
   */
  intentState?: IntentState | string;

  /**
   * <p>The type of dialog action that the utterance is associated to. See the <code>type</code> field in <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_DialogAction.html">DialogAction</a> for more information.</p>
   */
  dialogActionType?: string;

  /**
   * <p>The identifier for the audio of the bot response.</p>
   */
  botResponseAudioVoiceId?: string;

  /**
   * <p>The slots that have been filled in the session by the time of the utterance.</p>
   */
  slotsFilledInSession?: string;

  /**
   * <p>The identifier of the request associated with the utterance.</p>
   */
  utteranceRequestId?: string;

  /**
   * <p>A list of objects containing information about the bot response to the utterance.</p>
   */
  botResponses?: UtteranceBotResponse[];
}

/**
 * @public
 */
export interface ListUtteranceAnalyticsDataResponse {
  /**
   * <p>The unique identifier of the bot that the utterances belong to.</p>
   */
  botId?: string;

  /**
   * <p>If the response from the ListUtteranceAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListUtteranceAnalyticsData request to return the next page of results. For a complete set of results, call the ListUtteranceAnalyticsData operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of objects, each of which contains information about an utterance in a user session with your bot.</p>
   */
  utterances?: UtteranceSpecification[];
}

/**
 * @public
 */
export interface ListUtteranceMetricsRequest {
  /**
   * <p>The identifier for the bot for which you want to retrieve utterance metrics.</p>
   */
  botId: string | undefined;

  /**
   * <p>The date and time that marks the beginning of the range of time for which you want to see utterance metrics.</p>
   */
  startDateTime: Date | undefined;

  /**
   * <p>The date and time that marks the end of the range of time for which you want to see utterance metrics.</p>
   */
  endDateTime: Date | undefined;

  /**
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   */
  metrics: AnalyticsUtteranceMetric[] | undefined;

  /**
   * <p>A list of objects, each of which contains specifications for organizing the results by time.</p>
   */
  binBy?: AnalyticsBinBySpecification[];

  /**
   * <p>A list of objects, each of which specifies how to group the results. You can group by the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UtteranceText</code> – The transcription of the utterance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UtteranceState</code> – The state of the utterance. The possible states are detailed in <a href="https://docs.aws.amazon.com/analytics-key-definitions-utterances">Key definitions</a> in the user guide.</p>
   *             </li>
   *          </ul>
   */
  groupBy?: AnalyticsUtteranceGroupBySpecification[];

  /**
   * <p>A list containing attributes related to the utterance that you want the response to return. The following attributes are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LastUsedIntent</code> – The last used intent at the time of the utterance.</p>
   *             </li>
   *          </ul>
   */
  attributes?: AnalyticsUtteranceAttribute[];

  /**
   * <p>A list of objects, each of which describes a condition by which you want to filter the results.</p>
   */
  filters?: AnalyticsUtteranceFilter[];

  /**
   * <p>The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListUtteranceMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListUtteranceMetrics request to return the next page of results. For a complete set of results, call the ListUtteranceMetrics operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListUtteranceMetricsResponse {
  /**
   * <p>The identifier for the bot for which you retrieved utterance metrics.</p>
   */
  botId?: string;

  /**
   * <p>The results for the utterance metrics.</p>
   */
  results?: AnalyticsUtteranceResult[];

  /**
   * <p>If the response from the ListUtteranceMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p>
   *          <p>Use the returned token in the nextToken parameter of a ListUtteranceMetrics request to return the next page of results. For a complete set of results, call the ListUtteranceMetrics operation until the nextToken returned in the response is null.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SearchOrder = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;

/**
 * @public
 */
export type SearchOrder = (typeof SearchOrder)[keyof typeof SearchOrder];

/**
 * @public
 */
export interface SearchAssociatedTranscriptsRequest {
  /**
   * <p>The unique identifier of the bot associated with the transcripts
   *          that you are searching.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot containing the transcripts that you are
   *          searching.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the transcripts to
   *          search. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId: string | undefined;

  /**
   * <p>The unique identifier of the bot recommendation associated with the
   *          transcripts to search.</p>
   */
  botRecommendationId: string | undefined;

  /**
   * <p>How SearchResults are ordered. Valid values are Ascending or
   *          Descending. The default is Descending.</p>
   */
  searchOrder?: SearchOrder | string;

  /**
   * <p>A list of filter objects.</p>
   */
  filters: AssociatedTranscriptFilter[] | undefined;

  /**
   * <p>The maximum number of bot recommendations to return in each page of
   *          results. If there are fewer results than the max page size, only the
   *          actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the SearchAssociatedTranscriptsRequest
   *          operation contains more results than specified in the maxResults
   *          parameter, an index is returned in the response. Use that index in the
   *          nextIndex parameter to return the next page of results.</p>
   */
  nextIndex?: number;
}

/**
 * @public
 */
export interface SearchAssociatedTranscriptsResponse {
  /**
   * <p>The unique identifier of the bot associated with the transcripts
   *          that you are searching.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot containing the transcripts that you are
   *          searching.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the transcripts to
   *          search. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId?: string;

  /**
   * <p> The unique identifier of the bot recommendation associated with the
   *          transcripts to search.</p>
   */
  botRecommendationId?: string;

  /**
   * <p>A index that indicates whether there are more results to return in a
   *          response to the SearchAssociatedTranscripts operation. If the nextIndex
   *          field is present, you send the contents as the nextIndex parameter of a
   *          SearchAssociatedTranscriptsRequest operation to get the next page of
   *          results.</p>
   */
  nextIndex?: number;

  /**
   * <p>The object that contains the associated transcript that meet the
   *          criteria you specified.</p>
   */
  associatedTranscripts?: AssociatedTranscript[];

  /**
   * <p>The total number of transcripts returned by the search.</p>
   */
  totalResults?: number;
}

/**
 * @public
 */
export interface StartBotRecommendationRequest {
  /**
   * <p>The unique identifier of the bot containing the bot
   *          recommendation.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot containing the bot recommendation.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to start. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId: string | undefined;

  /**
   * <p>The object representing the Amazon S3 bucket containing the transcript,
   *          as well as the associated metadata.</p>
   */
  transcriptSourceSetting: TranscriptSourceSetting | undefined;

  /**
   * <p>The object representing the passwords that will be used to encrypt
   *          the data related to the bot recommendation results, as well as the KMS
   *          key ARN used to encrypt the associated metadata.</p>
   */
  encryptionSetting?: EncryptionSetting;
}

/**
 * @public
 */
export interface StartBotRecommendationResponse {
  /**
   * <p>The unique identifier of the bot containing the bot
   *          recommendation.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot containing the bot recommendation.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to start. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId?: string;

  /**
   * <p>The status of the bot recommendation.</p>
   *          <p>If the status is Failed, then the reasons for the failure are listed
   *          in the failureReasons field. </p>
   */
  botRecommendationStatus?: BotRecommendationStatus | string;

  /**
   * <p>The identifier of the bot recommendation that you have
   *          created.</p>
   */
  botRecommendationId?: string;

  /**
   * <p>A timestamp of the date and time that the bot recommendation was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The object representing the Amazon S3 bucket containing the transcript,
   *          as well as the associated metadata.</p>
   */
  transcriptSourceSetting?: TranscriptSourceSetting;

  /**
   * <p>The object representing the passwords that were used to encrypt the
   *          data related to the bot recommendation results, as well as the KMS key
   *          ARN used to encrypt the associated metadata.</p>
   */
  encryptionSetting?: EncryptionSetting;
}

/**
 * @public
 */
export interface StartImportRequest {
  /**
   * <p>The unique identifier for the import. It is included in the response
   *          from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateUploadUrl.html">CreateUploadUrl</a> operation.</p>
   */
  importId: string | undefined;

  /**
   * <p>Parameters for creating the bot, bot locale or custom
   *          vocabulary.</p>
   */
  resourceSpecification: ImportResourceSpecification | undefined;

  /**
   * <p>The strategy to use when there is a name conflict between the
   *          imported resource and an existing resource. When the merge strategy is
   *             <code>FailOnConflict</code> existing resources are not overwritten
   *          and the import fails.</p>
   */
  mergeStrategy: MergeStrategy | string | undefined;

  /**
   * <p>The password used to encrypt the zip archive that contains the
   *          resource definition. You should always encrypt the zip archive to
   *          protect it during transit between your site and Amazon Lex.</p>
   */
  filePassword?: string;
}

/**
 * @public
 */
export interface StartImportResponse {
  /**
   * <p>A unique identifier for the import.</p>
   */
  importId?: string;

  /**
   * <p>The parameters used when importing the resource.</p>
   */
  resourceSpecification?: ImportResourceSpecification;

  /**
   * <p>The strategy used when there was a name conflict between the
   *          imported resource and an existing resource. When the merge strategy is
   *             <code>FailOnConflict</code> existing resources are not overwritten
   *          and the import fails.</p>
   */
  mergeStrategy?: MergeStrategy | string;

  /**
   * <p>The current status of the import. When the status is
   *             <code>Complete</code> the bot, bot alias, or custom vocabulary is
   *          ready to use.</p>
   */
  importStatus?: ImportStatus | string;

  /**
   * <p>The date and time that the import request was created.</p>
   */
  creationDateTime?: Date;
}

/**
 * @public
 */
export interface StartTestExecutionRequest {
  /**
   * <p>The test set Id for the test set execution.</p>
   */
  testSetId: string | undefined;

  /**
   * <p>The target bot for the test set execution.</p>
   */
  target: TestExecutionTarget | undefined;

  /**
   * <p>Indicates whether we use streaming or non-streaming APIs for the test set
   *       execution. For streaming, StartConversation Runtime API is used. Whereas, for
   *       non-streaming, RecognizeUtterance and RecognizeText Amazon Lex
   *       Runtime API are used.</p>
   */
  apiMode: TestExecutionApiMode | string | undefined;

  /**
   * <p>Indicates whether audio or text is used.</p>
   */
  testExecutionModality?: TestExecutionModality | string;
}

/**
 * @public
 */
export interface StartTestExecutionResponse {
  /**
   * <p>The unique identifier of the test set execution.</p>
   */
  testExecutionId?: string;

  /**
   * <p>The creation date and time for the test set execution.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The test set Id for the test set execution.</p>
   */
  testSetId?: string;

  /**
   * <p>The target bot for the test set execution.</p>
   */
  target?: TestExecutionTarget;

  /**
   * <p>Indicates whether we use streaming or non-streaming APIs for the test set
   *       execution. For streaming, StartConversation Amazon Lex Runtime API is used. Whereas
   *       for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.</p>
   */
  apiMode?: TestExecutionApiMode | string;

  /**
   * <p>Indicates whether audio or text is used.</p>
   */
  testExecutionModality?: TestExecutionModality | string;
}

/**
 * @public
 */
export interface StartTestSetGenerationRequest {
  /**
   * <p>The test set name for the test set generation request.</p>
   */
  testSetName: string | undefined;

  /**
   * <p>The test set description for the test set generation request.</p>
   */
  description?: string;

  /**
   * <p>The Amazon S3 storage location for the test set generation.</p>
   */
  storageLocation: TestSetStorageLocation | undefined;

  /**
   * <p>The data source for the test set generation.</p>
   */
  generationDataSource: TestSetGenerationDataSource | undefined;

  /**
   * <p>The roleARN used for any operation in the test set to access
   *       resources in the Amazon Web Services account.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't use the <code>UpdateTestSet</code> operation to update tags. To update tags, use the <code>TagResource</code> operation.</p>
   */
  testSetTags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartTestSetGenerationResponse {
  /**
   * <p>The unique identifier of the test set generation to describe.</p>
   */
  testSetGenerationId?: string;

  /**
   * <p> The creation date and time for the test set generation.</p>
   */
  creationDateTime?: Date;

  /**
   * <p> The status for the test set generation.</p>
   */
  testSetGenerationStatus?: TestSetGenerationStatus | string;

  /**
   * <p>The test set name used for the test set generation.</p>
   */
  testSetName?: string;

  /**
   * <p>The description used for the test set generation.</p>
   */
  description?: string;

  /**
   * <p>The Amazon S3 storage location for the test set generation.</p>
   */
  storageLocation?: TestSetStorageLocation;

  /**
   * <p> The data source for the test set generation.</p>
   */
  generationDataSource?: TestSetGenerationDataSource;

  /**
   * <p>The roleARN used for any operation in the test set to access resources
   *       in the Amazon Web Services account.</p>
   */
  roleArn?: string;

  /**
   * <p>A list of tags that was used for the test set that is being generated.</p>
   */
  testSetTags?: Record<string, string>;
}

/**
 * @public
 */
export interface StopBotRecommendationRequest {
  /**
   * <p>The unique identifier of the bot containing the bot
   *          recommendation to be stopped.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot containing the bot recommendation.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to stop. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId: string | undefined;

  /**
   * <p>The unique identifier of the bot recommendation to be
   *          stopped.</p>
   */
  botRecommendationId: string | undefined;
}

/**
 * @public
 */
export interface StopBotRecommendationResponse {
  /**
   * <p>The unique identifier of the bot containing the bot recommendation that
   *          is being stopped.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot containing the recommendation that is being
   *          stopped.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the bot response
   *          to stop. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId?: string;

  /**
   * <p>The status of the bot recommendation. If the status is Failed,
   *          then the reasons for the failure are listed in the failureReasons field.</p>
   */
  botRecommendationStatus?: BotRecommendationStatus | string;

  /**
   * <p>The unique identifier of the bot recommendation that is being
   *          stopped.</p>
   */
  botRecommendationId?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel
   *          to tag.</p>
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag keys to add to the resource. If a tag key already
   *          exists, the existing value is replaced with the new value.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove the tags
   *          from.</p>
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag keys to remove from the resource. If a tag key does
   *          not exist on the resource, it is ignored.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateBotRequest {
  /**
   * <p>The unique identifier of the bot to update. This identifier is
   *          returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation.</p>
   */
  botId: string | undefined;

  /**
   * <p>The new name of the bot. The name must be unique in the account that
   *          creates the bot.</p>
   */
  botName: string | undefined;

  /**
   * <p>A description of the bot.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions
   *          to access the bot.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Provides information on additional privacy protections Amazon Lex should
   *          use with the bot's data.</p>
   */
  dataPrivacy: DataPrivacy | undefined;

  /**
   * <p>The time, in seconds, that Amazon Lex should keep information about a
   *          user's conversation with the bot.</p>
   *          <p>A user interaction remains active for the amount of time specified.
   *          If no conversation occurs during this time, the session expires and
   *          Amazon Lex deletes any data provided before the timeout.</p>
   *          <p>You can specify between 60 (1 minute) and 86,400 (24 hours)
   *          seconds.</p>
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * <p>The type of the bot to be updated.</p>
   */
  botType?: BotType | string;

  /**
   * <p>The list of bot members in the network associated
   *          with the update action.</p>
   */
  botMembers?: BotMember[];
}

/**
 * @public
 */
export interface UpdateBotResponse {
  /**
   * <p>The unique identifier of the bot that was updated.</p>
   */
  botId?: string;

  /**
   * <p>The name of the bot after the update.</p>
   */
  botName?: string;

  /**
   * <p>The description of the bot after the update.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the bot after
   *          the update.</p>
   */
  roleArn?: string;

  /**
   * <p>The data privacy settings for the bot after the update.</p>
   */
  dataPrivacy?: DataPrivacy;

  /**
   * <p>The session timeout, in seconds, for the bot after the
   *          update.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>Shows the current status of the bot. The bot is first in the
   *             <code>Creating</code> status. Once the bot is read for use, it
   *          changes to the <code>Available</code> status. After the bot is created,
   *          you can use the <code>DRAFT</code> version of the bot.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * <p>A timestamp of the date and time that the bot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the bot was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The type of the bot that was updated.</p>
   */
  botType?: BotType | string;

  /**
   * <p>The list of bot members in the network that was updated.</p>
   */
  botMembers?: BotMember[];
}

/**
 * @public
 */
export interface UpdateBotAliasRequest {
  /**
   * <p>The unique identifier of the bot alias.</p>
   */
  botAliasId: string | undefined;

  /**
   * <p>The new name to assign to the bot alias.</p>
   */
  botAliasName: string | undefined;

  /**
   * <p>The new description to assign to the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The new bot version to assign to the bot alias.</p>
   */
  botVersion?: string;

  /**
   * <p>The new Lambda functions to use in each locale for the bot
   *          alias.</p>
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;

  /**
   * <p>The new settings for storing conversation logs in Amazon CloudWatch Logs and
   *          Amazon S3 buckets.</p>
   */
  conversationLogSettings?: ConversationLogSettings;

  /**
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  /**
   * <p>The identifier of the bot with the updated alias.</p>
   */
  botId: string | undefined;
}

/**
 * @public
 */
export interface UpdateBotAliasResponse {
  /**
   * <p>The identifier of the updated bot alias.</p>
   */
  botAliasId?: string;

  /**
   * <p>The updated name of the bot alias.</p>
   */
  botAliasName?: string;

  /**
   * <p>The updated description of the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The updated version of the bot that the alias points to.</p>
   */
  botVersion?: string;

  /**
   * <p>The updated Lambda functions to use in each locale for the bot
   *          alias.</p>
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;

  /**
   * <p>The updated settings for storing conversation logs in Amazon CloudWatch Logs and
   *          Amazon S3 buckets.</p>
   */
  conversationLogSettings?: ConversationLogSettings;

  /**
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  /**
   * <p>The current status of the bot alias. When the status is
   *             <code>Available</code> the alias is ready for use.</p>
   */
  botAliasStatus?: BotAliasStatus | string;

  /**
   * <p>The identifier of the bot with the updated alias.</p>
   */
  botId?: string;

  /**
   * <p>A timestamp of the date and time that the bot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the bot was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface UpdateBotLocaleRequest {
  /**
   * <p>The unique identifier of the bot that contains the locale.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the locale to be updated. The
   *          version can only be the <code>DRAFT</code> version.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale to update. The string must
   *          match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The new description of the locale.</p>
   */
  description?: string;

  /**
   * <p>The new confidence threshold where Amazon Lex inserts the
   *             <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> intents in the list of
   *          possible intents for an utterance.</p>
   */
  nluIntentConfidenceThreshold: number | undefined;

  /**
   * <p>The new Amazon Polly voice Amazon Lex should use for voice interaction with the
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;
}

/**
 * @public
 */
export interface UpdateBotLocaleResponse {
  /**
   * <p>The identifier of the bot that contains the updated locale.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the updated locale.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale of the updated bot locale.</p>
   */
  localeId?: string;

  /**
   * <p>The updated locale name for the locale.</p>
   */
  localeName?: string;

  /**
   * <p>The updated description of the locale.</p>
   */
  description?: string;

  /**
   * <p>The updated confidence threshold for inserting the
   *             <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> intents in the list of
   *          possible intents for an utterance.</p>
   */
  nluIntentConfidenceThreshold?: number;

  /**
   * <p>The updated Amazon Polly voice to use for voice interaction with the
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;

  /**
   * <p>The current status of the locale. When the bot status is
   *             <code>Built</code> the locale is ready for use.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;

  /**
   * <p>If the <code>botLocaleStatus</code> is <code>Failed</code>, the
   *             <code>failureReasons</code> field lists the errors that occurred
   *          while building the bot.</p>
   */
  failureReasons?: string[];

  /**
   * <p>A timestamp of the date and time that the locale was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the locale was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Recommended actions to take to resolve an error in the
   *             <code>failureReasons</code> field.</p>
   */
  recommendedActions?: string[];
}

/**
 * @public
 */
export interface UpdateBotRecommendationRequest {
  /**
   * <p>The unique identifier of the bot containing the bot recommendation
   *          to be updated.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot containing the bot recommendation to be
   *          updated.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to update. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId: string | undefined;

  /**
   * <p>The unique identifier of the bot recommendation to be
   *          updated.</p>
   */
  botRecommendationId: string | undefined;

  /**
   * <p>The object representing the passwords that will be used to encrypt
   *          the data related to the bot recommendation results, as well as the KMS
   *          key ARN used to encrypt the associated metadata.</p>
   */
  encryptionSetting: EncryptionSetting | undefined;
}

/**
 * @public
 */
export interface UpdateBotRecommendationResponse {
  /**
   * <p>The unique identifier of the bot containing the bot recommendation
   *          that has been updated.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot containing the bot recommendation that has
   *          been updated.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to update. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId?: string;

  /**
   * <p>The status of the bot recommendation.</p>
   *          <p>If the status is Failed, then the reasons for the failure are listed
   *          in the failureReasons field. </p>
   */
  botRecommendationStatus?: BotRecommendationStatus | string;

  /**
   * <p>The unique identifier of the bot recommendation to be
   *          updated.</p>
   */
  botRecommendationId?: string;

  /**
   * <p>A timestamp of the date and time that the bot recommendation was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the bot recommendation was
   *          last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The object representing the Amazon S3 bucket containing the transcript,
   *          as well as the associated metadata.</p>
   */
  transcriptSourceSetting?: TranscriptSourceSetting;

  /**
   * <p>The object representing the passwords that were used to encrypt the
   *          data related to the bot recommendation results, as well as the KMS key
   *          ARN used to encrypt the associated metadata.</p>
   */
  encryptionSetting?: EncryptionSetting;
}

/**
 * @public
 */
export interface UpdateExportRequest {
  /**
   * <p>The unique identifier Amazon Lex assigned to the export.</p>
   */
  exportId: string | undefined;

  /**
   * <p>The new password to use to encrypt the export zip archive.</p>
   */
  filePassword?: string;
}

/**
 * @public
 */
export interface UpdateExportResponse {
  /**
   * <p>The unique identifier Amazon Lex assigned to the export.</p>
   */
  exportId?: string;

  /**
   * <p>A description of the type of resource that was exported, either a
   *          bot or a bot locale.</p>
   */
  resourceSpecification?: ExportResourceSpecification;

  /**
   * <p>The file format used for the files that define the resource. The
   *             <code>TSV</code> format is required to export a custom vocabulary
   *          only; otherwise use <code>LexJson</code> format.</p>
   */
  fileFormat?: ImportExportFileFormat | string;

  /**
   * <p>The status of the export. When the status is <code>Completed</code>
   *          the export archive is available for download.</p>
   */
  exportStatus?: ExportStatus | string;

  /**
   * <p>The date and time that the export was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time that the export was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface UpdateResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A resource policy to add to the resource. The policy is a JSON
   *          structure that contains one or more statements that define the policy.
   *          The policy must follow the IAM syntax. For more information about the
   *          contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy
   *             reference </a>. </p>
   *          <p>If the policy isn't valid, Amazon Lex returns a validation
   *          exception.</p>
   */
  policy: string | undefined;

  /**
   * <p>The identifier of the revision of the policy to update. If this
   *          revision ID doesn't match the current revision ID, Amazon Lex throws an
   *          exception.</p>
   *          <p>If you don't specify a revision, Amazon Lex overwrites the contents of
   *          the policy with the new values.</p>
   */
  expectedRevisionId?: string;
}

/**
 * @public
 */
export interface UpdateResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn?: string;

  /**
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   */
  revisionId?: string;
}

/**
 * @public
 */
export interface UpdateSlotTypeRequest {
  /**
   * <p>The unique identifier of the slot type to update.</p>
   */
  slotTypeId: string | undefined;

  /**
   * <p>The new name of the slot type.</p>
   */
  slotTypeName: string | undefined;

  /**
   * <p>The new description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>A new list of values and their optional synonyms that define the
   *          values that the slot type can take.</p>
   */
  slotTypeValues?: SlotTypeValue[];

  /**
   * <p>The strategy that Amazon Lex should use when deciding on a value from the
   *          list of slot type values.</p>
   */
  valueSelectionSetting?: SlotValueSelectionSetting;

  /**
   * <p>The new built-in slot type that should be used as the parent of this
   *          slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>The identifier of the bot that contains the slot type.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the slot type. Must be
   *             <code>DRAFT</code>.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that contains the slot
   *          type. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Provides information about the external source of the slot type's definition.</p>
   */
  externalSourceSetting?: ExternalSourceSetting;

  /**
   * <p>Specifications for a composite slot type.</p>
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}

/**
 * @public
 */
export interface UpdateSlotTypeResponse {
  /**
   * <p>The unique identifier of the updated slot type.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The updated name of the slot type.</p>
   */
  slotTypeName?: string;

  /**
   * <p>The updated description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>The updated values that the slot type provides.</p>
   */
  slotTypeValues?: SlotTypeValue[];

  /**
   * <p>The updated strategy that Amazon Lex uses to determine which value to
   *          select from the slot type.</p>
   */
  valueSelectionSetting?: SlotValueSelectionSetting;

  /**
   * <p>The updated signature of the built-in slot type that is the parent
   *          of this slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>The identifier of the bot that contains the slot type.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the slot type. This is always
   *             <code>DRAFT</code>.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale of the updated slot type.</p>
   */
  localeId?: string;

  /**
   * <p>The timestamp of the date and time that the slot type was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the slot type was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Provides information about the external source of the slot type's definition.</p>
   */
  externalSourceSetting?: ExternalSourceSetting;

  /**
   * <p>Specifications for a composite slot type.</p>
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}

/**
 * @public
 */
export interface UpdateTestSetRequest {
  /**
   * <p>The test set Id for which update test operation to be performed.</p>
   */
  testSetId: string | undefined;

  /**
   * <p>The new test set name.</p>
   */
  testSetName: string | undefined;

  /**
   * <p>The new test set description.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateTestSetResponse {
  /**
   * <p>The test set Id for which update test operation to be performed.</p>
   */
  testSetId?: string;

  /**
   * <p>The test set name for the updated test set.</p>
   */
  testSetName?: string;

  /**
   * <p>The test set description for the updated test set.</p>
   */
  description?: string;

  /**
   * <p>Indicates whether audio or text is used for the updated test set.</p>
   */
  modality?: TestSetModality | string;

  /**
   * <p>The status for the updated test set.</p>
   */
  status?: TestSetStatus | string;

  /**
   * <p>The roleARN used for any operation in the test set to access
   *       resources in the Amazon Web Services account.</p>
   */
  roleArn?: string;

  /**
   * <p>The number of conversation turns from the updated test set.</p>
   */
  numTurns?: number;

  /**
   * <p>The Amazon S3 storage location for the updated test set.</p>
   */
  storageLocation?: TestSetStorageLocation;

  /**
   * <p>The creation date and time for the updated test set.</p>
   */
  creationDateTime?: Date;

  /**
   * <p> The date and time of the last update for the updated test set.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 * <p>Provides an array of phrases that should be given preference when
 *  resolving values for a slot.</p>
 */
export interface RuntimeHintDetails {
  /**
   * <p>One or more strings that Amazon Lex should look for in the input to the
   *  bot. Each phrase is given preference when deciding on slot
   *  values.</p>
   */
  runtimeHintValues?: RuntimeHintValue[];

  /**
   * <p>A map of constituent sub slot names inside a composite slot in the intent and the phrases
   *  that should be added for each sub slot. Inside each composite slot hints, this structure provides
   *  a mechanism to add granular sub slot phrases. Only sub slot hints are supported for composite slots.
   *  The intent name, composite slot name and the constituent sub slot names must exist.</p>
   */
  subSlotHints?: Record<string, RuntimeHintDetails>;
}

/**
 * @public
 * <p>The slot values that Amazon Lex uses when it sets slot
 *          values in a dialog step.</p>
 */
export interface SlotValueOverride {
  /**
   * <p>When the shape value is <code>List</code>, it indicates that the
   *             <code>values</code> field contains a list of slot values. When the
   *          value is <code>Scalar</code>, it indicates that the <code>value</code>
   *          field contains a single value.</p>
   */
  shape?: SlotShape | string;

  /**
   * <p>The current value of the slot.</p>
   */
  value?: SlotValue;

  /**
   * <p>A list of one or more values that the user provided for the slot.
   *          For example, for a slot that elicits pizza toppings, the values
   *          might be "pepperoni" and "pineapple."</p>
   */
  values?: SlotValueOverride[];
}

/**
 * @public
 * <p>Override settings to configure the intent state.</p>
 */
export interface IntentOverride {
  /**
   * <p>The name of the intent. Only required when you're switching
   *          intents.</p>
   */
  name?: string;

  /**
   * <p>A map of all of the slot value overrides for the intent. The name of
   *          the slot maps to the value of the slot. Slots that are not included in
   *          the map aren't overridden.</p>
   */
  slots?: Record<string, SlotValueOverride>;
}

/**
 * @public
 * <p>You can provide Amazon Lex with hints to the phrases that a customer is
 *  likely to use for a slot. When a slot with hints is resolved, the
 *  phrases in the runtime hints are preferred in the resolution. You can
 *  provide hints for a maximum of 100 intents. You can provide a maximum
 *  of 100 slots.</p>
 *          <p>Before you can use runtime hints with an existing bot, you must
 *  first rebuild the bot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using runtime hints to
 *  improve recognition of slot values</a>.</p>
 */
export interface RuntimeHints {
  /**
   * <p>A list of the slots in the intent that should have runtime hints
   *  added, and the phrases that should be added for each slot.</p>
   *          <p>The first level of the <code>slotHints</code> map is the name of the
   *  intent. The second level is the name of the slot within the intent. For
   *  more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using hints to improve
   *  accuracy</a>.</p>
   *          <p>The intent name and slot name must exist.</p>
   */
  slotHints?: Record<string, Record<string, RuntimeHintDetails>>;
}

/**
 * @public
 * <p>Contains information about a slot output by the test set execution.</p>
 */
export interface UserTurnSlotOutput {
  /**
   * <p>The value output by the slot recognition.</p>
   */
  value?: string;

  /**
   * <p>Values that are output by the slot recognition.</p>
   */
  values?: UserTurnSlotOutput[];

  /**
   * <p>A list of items mapping the name of the subslots to information about those subslots.</p>
   */
  subSlots?: Record<string, UserTurnSlotOutput>;
}

/**
 * @public
 * <p>The current state of the conversation with the user.</p>
 */
export interface DialogState {
  /**
   * <p>Defines the action that the bot executes at runtime when the
   *          conversation reaches this step.</p>
   */
  dialogAction?: DialogAction;

  /**
   * <p>Override settings to configure the intent state.</p>
   */
  intent?: IntentOverride;

  /**
   * <p>Map of key/value pairs representing session-specific context
   *          information. It contains application information passed between Amazon Lex and a client application.</p>
   */
  sessionAttributes?: Record<string, string>;
}

/**
 * @public
 * <p>Specifications for the current state of the dialog
 *    between the user and the bot in the test set.</p>
 */
export interface InputSessionStateSpecification {
  /**
   * <p>Session attributes for the session state.</p>
   */
  sessionAttributes?: Record<string, string>;

  /**
   * <p>Active contexts for the session state.</p>
   */
  activeContexts?: ActiveContext[];

  /**
   * <p>Runtime hints for the session state.</p>
   */
  runtimeHints?: RuntimeHints;
}

/**
 * @public
 * <p>A set of actions that Amazon Lex should run if the condition
 *          is matched.</p>
 */
export interface ConditionalBranch {
  /**
   * <p>The name of the branch. </p>
   */
  name: string | undefined;

  /**
   * <p>Contains the expression to evaluate. If the condition is true, the
   *          branch's actions are taken.</p>
   */
  condition: Condition | undefined;

  /**
   * <p>The next step in the conversation.</p>
   */
  nextStep: DialogState | undefined;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  response?: ResponseSpecification;
}

/**
 * @public
 * <p>A set of actions that Amazon Lex should run if none of the
 *          other conditions are met.</p>
 */
export interface DefaultConditionalBranch {
  /**
   * <p>The next step in the conversation.</p>
   */
  nextStep?: DialogState;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  response?: ResponseSpecification;
}

/**
 * @public
 * <p>Contains information about the user messages in the turn in the input.</p>
 */
export interface UserTurnInputSpecification {
  /**
   * <p>The utterance input in the user turn.</p>
   */
  utteranceInput: UtteranceInputSpecification | undefined;

  /**
   * <p>Request attributes of the user turn.</p>
   */
  requestAttributes?: Record<string, string>;

  /**
   * <p>Contains information about the session state in the input.</p>
   */
  sessionState?: InputSessionStateSpecification;
}

/**
 * @public
 * <p>Contains information about the intent that is output for the turn by the test execution.</p>
 */
export interface UserTurnIntentOutput {
  /**
   * <p>The name of the intent.</p>
   */
  name: string | undefined;

  /**
   * <p>The slots associated with the intent.</p>
   */
  slots?: Record<string, UserTurnSlotOutput>;
}

/**
 * @public
 * <p>Contains results that are output for the user turn by the test execution.</p>
 */
export interface UserTurnOutputSpecification {
  /**
   * <p>Contains information about the intent.</p>
   */
  intent: UserTurnIntentOutput | undefined;

  /**
   * <p>The contexts that are active in the turn.</p>
   */
  activeContexts?: ActiveContext[];

  /**
   * <p>The transcript that is output for the user turn by the test execution.</p>
   */
  transcript?: string;
}

/**
 * @public
 * <p>Provides a list of conditional branches. Branches are evaluated in
 *          the order that they are entered in the list. The first branch with a
 *          condition that evaluates to true is executed. The last branch in the
 *          list is the default branch. The default branch should not have any condition
 *          expression. The default branch is executed if no other branch has a
 *          matching condition.</p>
 */
export interface ConditionalSpecification {
  /**
   * <p>Determines whether a conditional branch is active. When
   *             <code>active</code> is false, the conditions are not
   *          evaluated.</p>
   */
  active: boolean | undefined;

  /**
   * <p>A list of conditional branches. A conditional branch is made up of a
   *          condition, a response and a next step. The response and next step are
   *          executed when the condition is true.</p>
   */
  conditionalBranches: ConditionalBranch[] | undefined;

  /**
   * <p>The conditional branch that should be followed when the conditions
   *          for other branches are not satisfied. A conditional branch is made up
   *          of a condition, a response and a next step.</p>
   */
  defaultBranch: DefaultConditionalBranch | undefined;
}

/**
 * @public
 * <p>Contains information about the expected and input values for the user turn.</p>
 */
export interface UserTurnSpecification {
  /**
   * <p>Contains information about the user messages in the turn in the input.</p>
   */
  input: UserTurnInputSpecification | undefined;

  /**
   * <p>Contains results about the expected output for the user turn.</p>
   */
  expected: UserTurnOutputSpecification | undefined;
}

/**
 * @public
 * <p>Contains information about the messages in the turn.</p>
 */
export interface TurnSpecification {
  /**
   * <p>Contains information about the agent messages in the turn.</p>
   */
  agentTurn?: AgentTurnSpecification;

  /**
   * <p>Contains information about the user messages in the turn.</p>
   */
  userTurn?: UserTurnSpecification;
}

/**
 * @public
 * <p>Provides a statement the Amazon Lex conveys to the user when the intent
 *          is successfully fulfilled.</p>
 */
export interface IntentClosingSetting {
  /**
   * <p>The response that Amazon Lex sends to the user when the intent is
   *          complete.</p>
   */
  closingResponse?: ResponseSpecification;

  /**
   * <p>Specifies whether an intent's closing response is used. When this
   *          field is false, the closing response isn't sent to the user. If the
   *             <code>active</code> field isn't specified, the default is
   *          true.</p>
   */
  active?: boolean;

  /**
   * <p>Specifies the next step that the bot executes after playing the
   *          intent's closing response.</p>
   */
  nextStep?: DialogState;

  /**
   * <p>A list of conditional branches associated with the intent's closing
   *          response. These branches are executed when the <code>nextStep</code>
   *          attribute is set to <code>EvalutateConditional</code>.</p>
   */
  conditional?: ConditionalSpecification;
}

/**
 * @public
 * <p>Contains information about a turn in a test set.</p>
 */
export interface TestSetTurnRecord {
  /**
   * <p>The record number associated with the turn.</p>
   */
  recordNumber: number | undefined;

  /**
   * <p>The unique identifier for the conversation associated with the turn.</p>
   */
  conversationId?: string;

  /**
   * <p>The number of turns that has elapsed up to that turn.</p>
   */
  turnNumber?: number;

  /**
   * <p>Contains information about the agent or user turn depending upon type of turn.</p>
   */
  turnSpecification: TurnSpecification | undefined;
}

/**
 * @public
 * <p>Contains the results for the user turn by the test execution.</p>
 */
export interface UserTurnResult {
  /**
   * <p>Contains information about the user messages in the turn in the input.</p>
   */
  input: UserTurnInputSpecification | undefined;

  /**
   * <p>Contains information about the expected output for the user turn.</p>
   */
  expectedOutput: UserTurnOutputSpecification | undefined;

  /**
   * <p>Contains information about the actual output for the user turn.</p>
   */
  actualOutput?: UserTurnOutputSpecification;

  /**
   * <p>Details about an error in an execution of a test set.</p>
   */
  errorDetails?: ExecutionErrorDetails;

  /**
   * <p>Specifies whether the expected and actual outputs match or not, or if there is an error in execution.</p>
   */
  endToEndResult?: TestResultMatchStatus | string;

  /**
   * <p>Specifies whether the expected and actual intents match or not.</p>
   */
  intentMatchResult?: TestResultMatchStatus | string;

  /**
   * <p>Specifies whether the expected and actual slots match or not.</p>
   */
  slotMatchResult?: TestResultMatchStatus | string;

  /**
   * <p>Specifies whether the expected and actual speech transcriptions match or not, or if there is an error in execution.</p>
   */
  speechTranscriptionResult?: TestResultMatchStatus | string;

  /**
   * <p>Contains information about the results related to the conversation associated with the user turn.</p>
   */
  conversationLevelResult?: ConversationLevelResultDetail;
}

/**
 * @public
 */
export interface ListTestSetRecordsResponse {
  /**
   * <p>The list of records from the test set.</p>
   */
  testSetRecords?: TestSetTurnRecord[];

  /**
   * <p>A token that indicates whether there are more records to return in a response
   *       to the ListTestSetRecords operation. If the nextToken field is present, you
   *       send the contents as the nextToken parameter of a ListTestSetRecords operation
   *       request to get the next page of records.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Contains information about the results of the analysis of a turn in the test set.</p>
 */
export interface TestSetTurnResult {
  /**
   * <p>Contains information about the agent messages in the turn.</p>
   */
  agent?: AgentTurnResult;

  /**
   * <p>Contains information about the user messages in the turn.</p>
   */
  user?: UserTurnResult;
}

/**
 * @public
 * <p>Contains information about multiple utterances in the results of a test set execution.</p>
 */
export interface UtteranceLevelTestResultItem {
  /**
   * <p>The record number of the result.</p>
   */
  recordNumber: number | undefined;

  /**
   * <p>The unique identifier for the conversation associated with the result.</p>
   */
  conversationId?: string;

  /**
   * <p>Contains information about the turn associated with the result.</p>
   */
  turnResult: TestSetTurnResult | undefined;
}

/**
 * @public
 * <p>Contains information about the utterances in the results of the test set execution.</p>
 */
export interface UtteranceLevelTestResults {
  /**
   * <p>Contains information about an utterance in the results of the test set execution.</p>
   */
  items: UtteranceLevelTestResultItem[] | undefined;
}

/**
 * @public
 * <p>Contains the results of the test execution, grouped by type of results.
 *  See <a href="https://docs.aws.amazon.com/lexv2/latest/dg/test-results-details-test-set.html">Test result details">Test results details</a>
 *  for details about different types of results.</p>
 */
export interface TestExecutionResultItems {
  /**
   * <p>Overall results for the test execution, including the breakdown of conversations and
   *  single-input utterances.</p>
   */
  overallTestResults?: OverallTestResults;

  /**
   * <p>Results related to conversations in the test set, including metrics about success and failure of
   *  conversations and intent and slot failures.</p>
   */
  conversationLevelTestResults?: ConversationLevelTestResults;

  /**
   * <p>Intent recognition results aggregated by intent name. The aggregated results contain success and failure rates of intent recognition,
   *        speech transcriptions, and end-to-end conversations.</p>
   */
  intentClassificationTestResults?: IntentClassificationTestResults;

  /**
   * <p>Slot resolution results aggregated by intent and slot name. The aggregated results contain success and failure rates of slot resolution,
   *        speech transcriptions, and end-to-end conversations</p>
   */
  intentLevelSlotResolutionTestResults?: IntentLevelSlotResolutionTestResults;

  /**
   * <p>Results related to utterances in the test set.</p>
   */
  utteranceLevelTestResults?: UtteranceLevelTestResults;
}

/**
 * @public
 */
export interface ListTestExecutionResultItemsResponse {
  /**
   * <p>The list of results from the test execution.</p>
   */
  testExecutionResults?: TestExecutionResultItems;

  /**
   * <p>A token that indicates whether there are more results to return in a response
   *       to the <code>ListTestExecutionResultItems</code> operation. If the
   *       <code>nextToken</code> field is present, you send the contents as the
   *       <code>nextToken</code> parameter of a <code>ListTestExecutionResultItems</code>
   *       operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Specifies next steps to run after the dialog code hook
 *          finishes.</p>
 */
export interface PostDialogCodeHookInvocationSpecification {
  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  successResponse?: ResponseSpecification;

  /**
   * <p>Specifics the next step the bot runs after the dialog code hook
   *          finishes successfully. </p>
   */
  successNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the dialog code
   *          hook finishes successfully.</p>
   */
  successConditional?: ConditionalSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  failureResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step the bot runs after the dialog code hook
   *          throws an exception or returns with the <code>State</code> field of the
   *             <code>Intent</code> object set to <code>Failed</code>.</p>
   */
  failureNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the dialog code
   *          hook throws an exception or returns with the <code>State</code> field
   *          of the <code>Intent</code> object set to <code>Failed</code>.</p>
   */
  failureConditional?: ConditionalSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  timeoutResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step that the bot runs when the code hook times
   *          out.</p>
   */
  timeoutNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate if the code hook times
   *          out.</p>
   */
  timeoutConditional?: ConditionalSpecification;
}

/**
 * @public
 * <p>Provides a setting that determines whether the post-fulfillment
 *          response is sent to the user. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete">https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete</a>
 *          </p>
 */
export interface PostFulfillmentStatusSpecification {
  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  successResponse?: ResponseSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  failureResponse?: ResponseSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  timeoutResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step in the conversation that Amazon Lex
   *          invokes when the fulfillment code hook completes successfully.</p>
   */
  successNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the fulfillment
   *          code hook finishes successfully.</p>
   */
  successConditional?: ConditionalSpecification;

  /**
   * <p>Specifies the next step the bot runs after the fulfillment code hook
   *          throws an exception or returns with the <code>State</code> field of the
   *             <code>Intent</code> object set to <code>Failed</code>.</p>
   */
  failureNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the fulfillment
   *          code hook throws an exception or returns with the <code>State</code>
   *          field of the <code>Intent</code> object set to
   *          <code>Failed</code>.</p>
   */
  failureConditional?: ConditionalSpecification;

  /**
   * <p>Specifies the next step that the bot runs when the fulfillment code
   *          hook times out.</p>
   */
  timeoutNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate if the fulfillment code
   *          hook times out.</p>
   */
  timeoutConditional?: ConditionalSpecification;
}

/**
 * @public
 * <p>Settings that specify the dialog code hook that is
 *          called by Amazon Lex at a step of the conversation. </p>
 */
export interface DialogCodeHookInvocationSetting {
  /**
   * <p>Indicates whether a Lambda function should be invoked
   *          for the dialog.</p>
   */
  enableCodeHookInvocation: boolean | undefined;

  /**
   * <p>Determines whether a dialog code hook is used when the intent is
   *          activated.</p>
   */
  active: boolean | undefined;

  /**
   * <p>A label that indicates the dialog step from which the dialog code
   *          hook is happening.</p>
   */
  invocationLabel?: string;

  /**
   * <p>Contains the responses and actions that Amazon Lex takes
   *          after the Lambda function is complete.</p>
   */
  postCodeHookSpecification: PostDialogCodeHookInvocationSpecification | undefined;
}

/**
 * @public
 * <p>Determines if a Lambda function should be invoked for a specific
 *          intent.</p>
 */
export interface FulfillmentCodeHookSettings {
  /**
   * <p>Indicates whether a Lambda function should be invoked to fulfill a
   *          specific intent.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>Provides settings for messages sent to the user for after the Lambda
   *          fulfillment function completes. Post-fulfillment messages can be sent
   *          for both streaming and non-streaming conversations.</p>
   */
  postFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;

  /**
   * <p>Provides settings for update messages sent to the user for
   *          long-running Lambda fulfillment functions. Fulfillment updates can be
   *          used only with streaming conversations.</p>
   */
  fulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;

  /**
   * <p>Determines whether the fulfillment code hook is used. When
   *             <code>active</code> is false, the code hook doesn't run.</p>
   */
  active?: boolean;
}

/**
 * @public
 * <p>Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.</p>
 */
export interface InitialResponseSetting {
  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  initialResponse?: ResponseSpecification;

  /**
   * <p>The next step in the conversation.</p>
   */
  nextStep?: DialogState;

  /**
   * <p>Provides a list of conditional branches. Branches are evaluated in
   *          the order that they are entered in the list. The first branch with a
   *          condition that evaluates to true is executed. The last branch in the
   *          list is the default branch. The default branch should not have any condition
   *          expression. The default branch is executed if no other branch has a
   *          matching condition.</p>
   */
  conditional?: ConditionalSpecification;

  /**
   * <p>Settings that specify the dialog code hook that is
   *          called by Amazon Lex at a step of the conversation. </p>
   */
  codeHook?: DialogCodeHookInvocationSetting;
}

/**
 * @public
 * <p>Settings used when Amazon Lex successfully captures a slot
 *          value from a user.</p>
 */
export interface SlotCaptureSetting {
  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  captureResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step that the bot runs when the slot value is
   *          captured before the code hook times out.</p>
   */
  captureNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the slot value is
   *          captured.</p>
   */
  captureConditional?: ConditionalSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  failureResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step that the bot runs when the slot value code
   *          is not recognized.</p>
   */
  failureNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate when the slot value isn't
   *          captured.</p>
   */
  failureConditional?: ConditionalSpecification;

  /**
   * <p>Code hook called after Amazon Lex successfully captures a
   *          slot value.</p>
   */
  codeHook?: DialogCodeHookInvocationSetting;

  /**
   * <p>Code hook called when Amazon Lex doesn't capture a slot
   *          value.</p>
   */
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
}

/**
 * @public
 * <p>Specifies the elicitation setting details eliciting a slot.</p>
 */
export interface SlotValueElicitationSetting {
  /**
   * <p>A list of default values for a slot. Default values are used when
   *          Amazon Lex hasn't determined a value for a slot. You can specify default
   *          values from context variables, session attributes, and defined
   *          values.</p>
   */
  defaultValueSpecification?: SlotDefaultValueSpecification;

  /**
   * <p>Specifies whether the slot is required or optional.</p>
   */
  slotConstraint: SlotConstraint | string | undefined;

  /**
   * <p>The prompt that Amazon Lex uses to elicit the slot value from the
   *          user.</p>
   */
  promptSpecification?: PromptSpecification;

  /**
   * <p>If you know a specific pattern that users might respond to an Amazon Lex
   *          request for a slot value, you can provide those utterances to improve
   *          accuracy. This is optional. In most cases, Amazon Lex is capable of
   *          understanding user utterances.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>Specifies the prompts that Amazon Lex uses while a bot is waiting for
   *          customer input. </p>
   */
  waitAndContinueSpecification?: WaitAndContinueSpecification;

  /**
   * <p>Specifies the settings that Amazon Lex uses when a slot
   *          value is successfully entered by a user.</p>
   */
  slotCaptureSetting?: SlotCaptureSetting;
}

/**
 * @public
 * <p>Provides a prompt for making sure that the user is ready for the
 *          intent to be fulfilled.</p>
 */
export interface IntentConfirmationSetting {
  /**
   * <p>Prompts the user to confirm the intent. This question should have a
   *          yes or no answer.</p>
   *          <p>Amazon Lex uses this prompt to ensure that the user acknowledges that the
   *          intent is ready for fulfillment. For example, with the
   *             <code>OrderPizza</code> intent, you might want to confirm that the
   *          order is correct before placing it. For other intents, such as intents
   *          that simply respond to user questions, you might not need to ask the
   *          user for confirmation before providing the information. </p>
   */
  promptSpecification: PromptSpecification | undefined;

  /**
   * <p>When the user answers "no" to the question defined in
   *             <code>promptSpecification</code>, Amazon Lex responds with this response
   *          to acknowledge that the intent was canceled. </p>
   */
  declinationResponse?: ResponseSpecification;

  /**
   * <p>Specifies whether the intent's confirmation is sent to the user.
   *          When this field is false, confirmation and declination responses aren't
   *          sent. If the <code>active</code> field isn't specified, the default is
   *          true.</p>
   */
  active?: boolean;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  confirmationResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step that the bot executes when the customer
   *          confirms the intent.</p>
   */
  confirmationNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the intent is
   *          closed.</p>
   */
  confirmationConditional?: ConditionalSpecification;

  /**
   * <p>Specifies the next step that the bot executes when the customer
   *          declines the intent.</p>
   */
  declinationNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the intent is
   *          declined.</p>
   */
  declinationConditional?: ConditionalSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  failureResponse?: ResponseSpecification;

  /**
   * <p>The next step to take in the conversation if the confirmation step
   *          fails.</p>
   */
  failureNextStep?: DialogState;

  /**
   * <p>Provides a list of conditional branches. Branches are evaluated in
   *          the order that they are entered in the list. The first branch with a
   *          condition that evaluates to true is executed. The last branch in the
   *          list is the default branch. The default branch should not have any condition
   *          expression. The default branch is executed if no other branch has a
   *          matching condition.</p>
   */
  failureConditional?: ConditionalSpecification;

  /**
   * <p>The <code>DialogCodeHookInvocationSetting</code> object associated
   *          with intent's confirmation step. The dialog code hook is triggered
   *          based on these invocation settings when the confirmation next step or
   *          declination next step or failure next step is
   *             <code>InvokeDialogCodeHook</code>. </p>
   */
  codeHook?: DialogCodeHookInvocationSetting;

  /**
   * <p>The <code>DialogCodeHookInvocationSetting</code> used when the code
   *          hook is invoked during confirmation prompt retries.</p>
   */
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
}

/**
 * @public
 */
export interface CreateSlotRequest {
  /**
   * <p>The name of the slot. Slot names must be unique within the bot that
   *          contains the slot.</p>
   */
  slotName: string | undefined;

  /**
   * <p>A description of the slot. Use this to help identify the slot in
   *          lists.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the slot type associated with this slot.
   *          The slot type determines the values that can be entered into the
   *          slot.</p>
   */
  slotTypeId?: string;

  /**
   * <p>Specifies prompts that Amazon Lex sends to the user to elicit a response
   *          that provides the value for the slot. </p>
   */
  valueElicitationSetting: SlotValueElicitationSetting | undefined;

  /**
   * <p>Determines how slot values are used in Amazon CloudWatch logs. If the value of
   *          the <code>obfuscationSetting</code> parameter is
   *             <code>DefaultObfuscation</code>, slot values are obfuscated in the
   *          log output. If the value is <code>None</code>, the actual value is
   *          present in the log output.</p>
   *          <p>The default is to obfuscate values in the CloudWatch logs.</p>
   */
  obfuscationSetting?: ObfuscationSetting;

  /**
   * <p>The identifier of the bot associated with the slot.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the slot.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the slot will be used
   *          in. The string must match one of the supported locales. All of the
   *          bots, intents, slot types used by the slot must have the same locale.
   *          For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the intent that contains the slot.</p>
   */
  intentId: string | undefined;

  /**
   * <p>Indicates whether the slot returns multiple values in one response.
   *          Multi-value slots are only available in the <code>en-US</code> locale.
   *          If you set this value to <code>true</code> in any other locale, Amazon Lex throws a
   *             <code>ValidationException</code>. </p>
   *          <p>If the <code>multipleValuesSetting</code> is not set, the default
   *          value is <code>false</code>.</p>
   */
  multipleValuesSetting?: MultipleValuesSetting;

  /**
   * <p>Specifications for the constituent sub slots and the
   *         expression for the composite slot.</p>
   */
  subSlotSetting?: SubSlotSetting;
}

/**
 * @public
 */
export interface CreateSlotResponse {
  /**
   * <p>The unique identifier associated with the slot. Use this to identify
   *          the slot when you update or delete it.</p>
   */
  slotId?: string;

  /**
   * <p>The name specified for the slot.</p>
   */
  slotName?: string;

  /**
   * <p>The description associated with the slot.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier of the slot type associated with this
   *          slot.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The value elicitation settings specified for the slot.</p>
   */
  valueElicitationSetting?: SlotValueElicitationSetting;

  /**
   * <p>Indicates whether the slot is configured to obfuscate values in Amazon CloudWatch
   *          logs.</p>
   */
  obfuscationSetting?: ObfuscationSetting;

  /**
   * <p>The unique identifier of the bot associated with the slot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the slot.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and local specified for the slot.</p>
   */
  localeId?: string;

  /**
   * <p>The unique identifier of the intent associated with the slot.</p>
   */
  intentId?: string;

  /**
   * <p>The timestamp of the date and time that the slot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>Indicates whether the slot returns multiple values in one
   *          response.</p>
   */
  multipleValuesSetting?: MultipleValuesSetting;

  /**
   * <p>Specifications for the constituent sub slots and the
   *         expression for the composite slot.</p>
   */
  subSlotSetting?: SubSlotSetting;
}

/**
 * @public
 */
export interface DescribeSlotResponse {
  /**
   * <p>The unique identifier generated for the slot.</p>
   */
  slotId?: string;

  /**
   * <p>The name specified for the slot.</p>
   */
  slotName?: string;

  /**
   * <p>The description specified for the slot.</p>
   */
  description?: string;

  /**
   * <p>The identifier of the slot type that determines the values entered
   *          into the slot.</p>
   */
  slotTypeId?: string;

  /**
   * <p>Prompts that Amazon Lex uses to elicit a value for the slot.</p>
   */
  valueElicitationSetting?: SlotValueElicitationSetting;

  /**
   * <p>Whether slot values are shown in Amazon CloudWatch logs. If the value is
   *             <code>None</code>, the actual value of the slot is shown in
   *          logs.</p>
   */
  obfuscationSetting?: ObfuscationSetting;

  /**
   * <p>The identifier of the bot associated with the slot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the slot.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale specified for the slot.</p>
   */
  localeId?: string;

  /**
   * <p>The identifier of the intent associated with the slot.</p>
   */
  intentId?: string;

  /**
   * <p>A timestamp of the date and time that the slot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the slot was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Indicates whether the slot accepts multiple values in a single
   *          utterance.</p>
   *          <p>If the <code>multipleValuesSetting</code> is not set, the default
   *          value is <code>false</code>.</p>
   */
  multipleValuesSetting?: MultipleValuesSetting;

  /**
   * <p>Specifications for the constituent sub slots and the
   *         expression for the composite slot.</p>
   */
  subSlotSetting?: SubSlotSetting;
}

/**
 * @public
 */
export interface UpdateSlotRequest {
  /**
   * <p>The unique identifier for the slot to update.</p>
   */
  slotId: string | undefined;

  /**
   * <p>The new name for the slot.</p>
   */
  slotName: string | undefined;

  /**
   * <p>The new description for the slot.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier of the new slot type to associate with this
   *          slot. </p>
   */
  slotTypeId?: string;

  /**
   * <p>A new set of prompts that Amazon Lex sends to the user to elicit a
   *          response the provides a value for the slot.</p>
   */
  valueElicitationSetting: SlotValueElicitationSetting | undefined;

  /**
   * <p>New settings that determine how slot values are formatted in Amazon CloudWatch
   *          logs. </p>
   */
  obfuscationSetting?: ObfuscationSetting;

  /**
   * <p>The unique identifier of the bot that contains the slot.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the slot. Must always be
   *             <code>DRAFT</code>.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that contains the slot.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the intent that contains the slot.</p>
   */
  intentId: string | undefined;

  /**
   * <p>Determines whether the slot accepts multiple values in one response.
   *          Multiple value slots are only available in the en-US locale. If you set
   *          this value to <code>true</code> in any other locale, Amazon Lex throws a
   *             <code>ValidationException</code>.</p>
   *          <p>If the <code>multipleValuesSetting</code> is not set, the default
   *          value is <code>false</code>.</p>
   */
  multipleValuesSetting?: MultipleValuesSetting;

  /**
   * <p>Specifications for the constituent sub slots and the
   *         expression for the composite slot.</p>
   */
  subSlotSetting?: SubSlotSetting;
}

/**
 * @public
 */
export interface UpdateSlotResponse {
  /**
   * <p>The unique identifier of the slot that was updated.</p>
   */
  slotId?: string;

  /**
   * <p>The updated name of the slot.</p>
   */
  slotName?: string;

  /**
   * <p>The updated description of the bot.</p>
   */
  description?: string;

  /**
   * <p>The updated identifier of the slot type that provides values for the
   *          slot.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The updated prompts that Amazon Lex sends to the user to elicit a
   *          response that provides a value for the slot.</p>
   */
  valueElicitationSetting?: SlotValueElicitationSetting;

  /**
   * <p>The updated setting that determines whether the slot value is
   *          obfuscated in the Amazon CloudWatch logs.</p>
   */
  obfuscationSetting?: ObfuscationSetting;

  /**
   * <p>The identifier of the bot that contains the slot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the slot. Will
   *          always be <code>DRAFT</code>.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale that contains the slot.</p>
   */
  localeId?: string;

  /**
   * <p>The intent that contains the slot.</p>
   */
  intentId?: string;

  /**
   * <p>The timestamp of the date and time that the slot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The timestamp of the date and time that the slot was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Indicates whether the slot accepts multiple values in one
   *          response.</p>
   */
  multipleValuesSetting?: MultipleValuesSetting;

  /**
   * <p>Specifications for the constituent sub slots and the
   *         expression for the composite slot.</p>
   */
  subSlotSetting?: SubSlotSetting;
}

/**
 * @public
 */
export interface CreateIntentRequest {
  /**
   * <p>The name of the intent. Intent names must be unique in the locale
   *          that contains the intent and cannot match the name of any built-in
   *          intent.</p>
   */
  intentName: string | undefined;

  /**
   * <p>A description of the intent. Use the description to help identify
   *          the intent in lists.</p>
   */
  description?: string;

  /**
   * <p>A unique identifier for the built-in intent to base this intent
   *          on.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>An array of strings that a user might say to signal the intent. For
   *          example, "I want a pizza", or "I want a \{PizzaSize\} pizza". </p>
   *          <p>In an utterance, slot names are enclosed in curly braces ("\{", "\}")
   *          to indicate where they should be displayed in the utterance shown to
   *          the user.. </p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>Specifies that Amazon Lex invokes the alias Lambda function for each user
   *          input. You can invoke this Lambda function to personalize user
   *          interaction.</p>
   *          <p>For example, suppose that your bot determines that the user's name
   *          is John. You Lambda function might retrieve John's information from a
   *          backend database and prepopulate some of the values. For example, if
   *          you find that John is gluten intolerant, you might set the
   *          corresponding intent slot, <code>glutenIntolerant</code> to
   *             <code>true</code>. You might find John's phone number and set the
   *          corresponding session attribute.</p>
   */
  dialogCodeHook?: DialogCodeHookSettings;

  /**
   * <p>Specifies that Amazon Lex invokes the alias Lambda function when the
   *          intent is ready for fulfillment. You can invoke this function to
   *          complete the bot's transaction with the user.</p>
   *          <p>For example, in a pizza ordering bot, the Lambda function can look up
   *          the closest pizza restaurant to the customer's location and then place
   *          an order on the customer's behalf.</p>
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  /**
   * <p>Provides prompts that Amazon Lex sends to the user to confirm the
   *          completion of an intent. If the user answers "no," the settings contain
   *          a statement that is sent to the user to end the intent.</p>
   */
  intentConfirmationSetting?: IntentConfirmationSetting;

  /**
   * <p>Sets the response that Amazon Lex sends to the user when the intent is
   *          closed.</p>
   */
  intentClosingSetting?: IntentClosingSetting;

  /**
   * <p>A list of contexts that must be active for this intent to be
   *          considered by Amazon Lex.</p>
   *          <p>When an intent has an input context list, Amazon Lex only considers using
   *          the intent in an interaction with the user when the specified contexts
   *          are included in the active context list for the session. If the
   *          contexts are not active, then Amazon Lex will not use the intent.</p>
   *          <p>A context can be automatically activated using the
   *             <code>outputContexts</code> property or it can be set at
   *          runtime.</p>
   *          <p> For example, if there are two intents with different input contexts
   *          that respond to the same utterances, only the intent with the active
   *          context will respond.</p>
   *          <p>An intent may have up to 5 input contexts. If an intent has multiple
   *          input contexts, all of the contexts must be active to consider the
   *          intent.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>A lists of contexts that the intent activates when it is
   *          fulfilled.</p>
   *          <p>You can use an output context to indicate the intents that Amazon Lex
   *          should consider for the next turn of the conversation with a customer. </p>
   *          <p>When you use the <code>outputContextsList</code> property, all of
   *          the contexts specified in the list are activated when the intent is
   *          fulfilled. You can set up to 10 output contexts. You can also set the
   *          number of conversation turns that the context should be active, or the
   *          length of time that the context should be active.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>Configuration information required to use the
   *             <code>AMAZON.KendraSearchIntent</code> intent to connect to an Amazon Kendra
   *          index. The <code>AMAZON.KendraSearchIntent</code> intent is called when
   *          Amazon Lex can't determine another intent to invoke.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>The identifier of the bot associated with this intent.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with this
   *          intent.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale where this intent is used.
   *          All of the bots, slot types, and slots used by the intent must have the
   *          same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Configuration settings for the response that is sent to the user at
   *          the beginning of a conversation, before eliciting slot values.</p>
   */
  initialResponseSetting?: InitialResponseSetting;
}

/**
 * @public
 */
export interface CreateIntentResponse {
  /**
   * <p>A unique identifier for the intent.</p>
   */
  intentId?: string;

  /**
   * <p>The name specified for the intent.</p>
   */
  intentName?: string;

  /**
   * <p>The description specified for the intent.</p>
   */
  description?: string;

  /**
   * <p>The signature of the parent intent specified for the intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The sample utterances specified for the intent.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>The dialog Lambda function specified for the intent.</p>
   */
  dialogCodeHook?: DialogCodeHookSettings;

  /**
   * <p>The fulfillment Lambda function specified for the intent.</p>
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  /**
   * <p>The confirmation setting specified for the intent.</p>
   */
  intentConfirmationSetting?: IntentConfirmationSetting;

  /**
   * <p>The closing setting specified for the intent.</p>
   */
  intentClosingSetting?: IntentClosingSetting;

  /**
   * <p>The list of input contexts specified for the intent.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>The list of output contexts specified for the intent.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>Configuration for searching a Amazon Kendra index specified for the
   *          intent.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>The identifier of the bot associated with the intent.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the
   *          intent.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale that the intent is specified to use.</p>
   */
  localeId?: string;

  /**
   * <p>A timestamp of the date and time that the intent was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>Configuration settings for the response that is sent to the user at
   *          the beginning of a conversation, before eliciting slot values.</p>
   */
  initialResponseSetting?: InitialResponseSetting;
}

/**
 * @public
 */
export interface DescribeIntentResponse {
  /**
   * <p>The unique identifier assigned to the intent when it was
   *          created.</p>
   */
  intentId?: string;

  /**
   * <p>The name specified for the intent.</p>
   */
  intentName?: string;

  /**
   * <p>The description of the intent.</p>
   */
  description?: string;

  /**
   * <p>The identifier of the built-in intent that this intent is derived
   *          from, if any.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>User utterances that trigger this intent.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>The Lambda function called during each turn of a conversation with
   *          the intent.</p>
   */
  dialogCodeHook?: DialogCodeHookSettings;

  /**
   * <p>The Lambda function called when the intent is complete and ready for
   *          fulfillment.</p>
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  /**
   * <p>The list that determines the priority that slots should be elicited
   *          from the user.</p>
   */
  slotPriorities?: SlotPriority[];

  /**
   * <p>Prompts that Amazon Lex sends to the user to confirm completion of an
   *          intent.</p>
   */
  intentConfirmationSetting?: IntentConfirmationSetting;

  /**
   * <p>The response that Amazon Lex sends to when the intent is closed.</p>
   */
  intentClosingSetting?: IntentClosingSetting;

  /**
   * <p>A list of contexts that must be active for the intent to be
   *          considered for sending to the user.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>A list of contexts that are activated when the intent is
   *          fulfilled.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>Configuration information required to use the
   *             <code>AMAZON.KendraSearchIntent</code> intent.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>The identifier of the bot associated with the intent.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the intent.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale specified for the intent.</p>
   */
  localeId?: string;

  /**
   * <p>A timestamp of the date and time that the intent was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the intent was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.</p>
   */
  initialResponseSetting?: InitialResponseSetting;
}

/**
 * @public
 */
export interface UpdateIntentRequest {
  /**
   * <p>The unique identifier of the intent to update.</p>
   */
  intentId: string | undefined;

  /**
   * <p>The new name for the intent.</p>
   */
  intentName: string | undefined;

  /**
   * <p>The new description of the intent.</p>
   */
  description?: string;

  /**
   * <p>The signature of the new built-in intent to use as the parent of
   *          this intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>New utterances used to invoke the intent.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>The new Lambda function to use between each turn of the conversation
   *          with the bot.</p>
   */
  dialogCodeHook?: DialogCodeHookSettings;

  /**
   * <p>The new Lambda function to call when all of the intents required
   *          slots are provided and the intent is ready for fulfillment.</p>
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  /**
   * <p>A new list of slots and their priorities that are contained by the
   *          intent.</p>
   */
  slotPriorities?: SlotPriority[];

  /**
   * <p>New prompts that Amazon Lex sends to the user to confirm the completion
   *          of an intent.</p>
   */
  intentConfirmationSetting?: IntentConfirmationSetting;

  /**
   * <p>The new response that Amazon Lex sends the user when the intent is
   *          closed.</p>
   */
  intentClosingSetting?: IntentClosingSetting;

  /**
   * <p>A new list of contexts that must be active in order for Amazon Lex to
   *          consider the intent.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>A new list of contexts that Amazon Lex activates when the intent is
   *          fulfilled.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>New configuration settings for connecting to an Amazon Kendra index.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>The identifier of the bot that contains the intent.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the intent. Must be
   *             <code>DRAFT</code>.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale where this intent is used.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Configuration settings for a response sent to the user before Amazon Lex starts eliciting slots.</p>
   */
  initialResponseSetting?: InitialResponseSetting;
}

/**
 * @public
 */
export interface UpdateIntentResponse {
  /**
   * <p>The identifier of the intent that was updated.</p>
   */
  intentId?: string;

  /**
   * <p>The updated name of the intent.</p>
   */
  intentName?: string;

  /**
   * <p>The updated description of the intent.</p>
   */
  description?: string;

  /**
   * <p>The updated built-in intent that is the parent of this
   *          intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The updated list of sample utterances for the intent.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>The updated Lambda function called during each turn of the
   *          conversation with the user.</p>
   */
  dialogCodeHook?: DialogCodeHookSettings;

  /**
   * <p>The updated Lambda function called when the intent is ready for
   *          fulfillment.</p>
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  /**
   * <p>The updated list of slots and their priorities that are elicited
   *          from the user for the intent.</p>
   */
  slotPriorities?: SlotPriority[];

  /**
   * <p>The updated prompts that Amazon Lex sends to the user to confirm the
   *          completion of an intent.</p>
   */
  intentConfirmationSetting?: IntentConfirmationSetting;

  /**
   * <p>The updated response that Amazon Lex sends the user when the intent is
   *          closed.</p>
   */
  intentClosingSetting?: IntentClosingSetting;

  /**
   * <p>The updated list of contexts that must be active for the intent to
   *          be considered by Amazon Lex.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>The updated list of contexts that Amazon Lex activates when the intent is
   *          fulfilled.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>The updated configuration for connecting to an Amazon Kendra index with the
   *             <code>AMAZON.KendraSearchIntent</code> intent.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>The identifier of the bot that contains the intent.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the intent. Will always be
   *             <code>DRAFT</code>.</p>
   */
  botVersion?: string;

  /**
   * <p>The updated language and locale of the intent.</p>
   */
  localeId?: string;

  /**
   * <p>A timestamp of when the intent was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the last time that the intent was modified.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Configuration settings for a response sent to the user before Amazon Lex starts eliciting slots.</p>
   */
  initialResponseSetting?: InitialResponseSetting;
}

/**
 * @internal
 */
export const StartBotRecommendationRequestFilterSensitiveLog = (obj: StartBotRecommendationRequest): any => ({
  ...obj,
  ...(obj.encryptionSetting && { encryptionSetting: EncryptionSettingFilterSensitiveLog(obj.encryptionSetting) }),
});

/**
 * @internal
 */
export const StartBotRecommendationResponseFilterSensitiveLog = (obj: StartBotRecommendationResponse): any => ({
  ...obj,
  ...(obj.encryptionSetting && { encryptionSetting: EncryptionSettingFilterSensitiveLog(obj.encryptionSetting) }),
});

/**
 * @internal
 */
export const StartImportRequestFilterSensitiveLog = (obj: StartImportRequest): any => ({
  ...obj,
  ...(obj.filePassword && { filePassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateBotRecommendationRequestFilterSensitiveLog = (obj: UpdateBotRecommendationRequest): any => ({
  ...obj,
  ...(obj.encryptionSetting && { encryptionSetting: EncryptionSettingFilterSensitiveLog(obj.encryptionSetting) }),
});

/**
 * @internal
 */
export const UpdateBotRecommendationResponseFilterSensitiveLog = (obj: UpdateBotRecommendationResponse): any => ({
  ...obj,
  ...(obj.encryptionSetting && { encryptionSetting: EncryptionSettingFilterSensitiveLog(obj.encryptionSetting) }),
});

/**
 * @internal
 */
export const UpdateExportRequestFilterSensitiveLog = (obj: UpdateExportRequest): any => ({
  ...obj,
  ...(obj.filePassword && { filePassword: SENSITIVE_STRING }),
});
