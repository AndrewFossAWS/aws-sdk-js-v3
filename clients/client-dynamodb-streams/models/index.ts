import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *          <p>Represents the input of a <code>DescribeStream</code> operation.</p>
 *
 */
export interface DescribeStreamInput {
  __type?: "DescribeStreamInput";
  /**
   *
   *          <p>The shard ID of the first item that this operation will evaluate. Use the value that was
   *       returned for <code>LastEvaluatedShardId</code> in the previous operation. </p>
   *
   */
  ExclusiveStartShardId?: string;

  /**
   *
   *          <p>The maximum number of shard objects to return. The upper limit is 100.</p>
   *
   */
  Limit?: number;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) for the stream.</p>
   *
   */
  StreamArn: string | undefined;
}

export namespace DescribeStreamInput {
  export function isa(o: any): o is DescribeStreamInput {
    return _smithy.isa(o, "DescribeStreamInput");
  }
}

/**
 *
 *          <p>Represents the output of a <code>DescribeStream</code> operation.</p>
 *
 */
export interface DescribeStreamOutput extends $MetadataBearer {
  __type?: "DescribeStreamOutput";
  /**
   *
   *          <p>A complete description of the stream, including its creation date and time, the DynamoDB table associated with the stream, the shard IDs within the stream, and the beginning and ending sequence numbers of stream records within the shards.</p>
   *
   */
  StreamDescription?: StreamDescription;
}

export namespace DescribeStreamOutput {
  export function isa(o: any): o is DescribeStreamOutput {
    return _smithy.isa(o, "DescribeStreamOutput");
  }
}

/**
 *
 *          <p>The shard iterator has expired and can no longer be used to retrieve stream records. A shard
 *       iterator expires 15 minutes after it is retrieved using the <code>GetShardIterator</code>
 *       action.</p>
 *
 */
export interface ExpiredIteratorException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ExpiredIteratorException";
  name: "ExpiredIteratorException";
  $fault: "client";
  /**
   *
   *          <p>The provided iterator exceeds the maximum age allowed.</p>
   *
   */
  message?: string;
}

export namespace ExpiredIteratorException {
  export function isa(o: any): o is ExpiredIteratorException {
    return _smithy.isa(o, "ExpiredIteratorException");
  }
}

/**
 *
 *          <p>Represents the input of a <code>GetRecords</code> operation.</p>
 *
 */
export interface GetRecordsInput {
  __type?: "GetRecordsInput";
  /**
   *
   *          <p>The maximum number of records to return from the shard. The upper limit is 1000.</p>
   *
   */
  Limit?: number;

  /**
   *
   *          <p>A shard iterator that was retrieved from a previous GetShardIterator operation. This iterator can be used to access the stream records in this shard.</p>
   *
   */
  ShardIterator: string | undefined;
}

export namespace GetRecordsInput {
  export function isa(o: any): o is GetRecordsInput {
    return _smithy.isa(o, "GetRecordsInput");
  }
}

/**
 *
 *          <p>Represents the output of a <code>GetRecords</code> operation.</p>
 *
 */
export interface GetRecordsOutput extends $MetadataBearer {
  __type?: "GetRecordsOutput";
  /**
   *
   *          <p>The next position in the shard from which to start sequentially reading stream records. If
   *       set to <code>null</code>, the shard has been closed and the requested iterator will not return
   *       any more data.</p>
   *
   */
  NextShardIterator?: string;

  /**
   *
   *          <p>The stream records from the shard, which were retrieved using the shard iterator.</p>
   *
   */
  Records?: Array<_Record>;
}

export namespace GetRecordsOutput {
  export function isa(o: any): o is GetRecordsOutput {
    return _smithy.isa(o, "GetRecordsOutput");
  }
}

/**
 *
 *          <p>Represents the input of a <code>GetShardIterator</code> operation.</p>
 *
 */
export interface GetShardIteratorInput {
  __type?: "GetShardIteratorInput";
  /**
   *
   *          <p>The sequence number of a stream record in the shard from which to start reading.</p>
   *
   */
  SequenceNumber?: string;

  /**
   *
   *          <p>The identifier of the shard. The iterator will be returned for this shard ID.</p>
   *
   */
  ShardId: string | undefined;

  /**
   *
   *          <p>Determines how the shard iterator is used to start reading stream records from the shard:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AT_SEQUENCE_NUMBER</code> - Start reading exactly from the position denoted by a
   *           specific sequence number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AFTER_SEQUENCE_NUMBER</code> - Start reading right after the position denoted by a
   *           specific sequence number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRIM_HORIZON</code> - Start reading at the last (untrimmed) stream record, which is
   *           the oldest record in the shard. In DynamoDB Streams, there is a 24 hour limit on data retention.
   *           Stream records whose age exceeds this limit are subject to removal (trimming) from the
   *           stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LATEST</code> - Start reading just after the most recent stream record in the
   *           shard, so that you always read the most recent data in the shard.</p>
   *             </li>
   *          </ul>
   *
   */
  ShardIteratorType: ShardIteratorType | string | undefined;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) for the stream.</p>
   *
   */
  StreamArn: string | undefined;
}

export namespace GetShardIteratorInput {
  export function isa(o: any): o is GetShardIteratorInput {
    return _smithy.isa(o, "GetShardIteratorInput");
  }
}

/**
 *
 *          <p>Represents the output of a <code>GetShardIterator</code> operation.</p>
 *
 */
export interface GetShardIteratorOutput extends $MetadataBearer {
  __type?: "GetShardIteratorOutput";
  /**
   *
   *          <p>The position in the shard from which to start reading stream records sequentially. A shard iterator specifies this position using the sequence number of a stream record in a shard.</p>
   *
   */
  ShardIterator?: string;
}

export namespace GetShardIteratorOutput {
  export function isa(o: any): o is GetShardIteratorOutput {
    return _smithy.isa(o, "GetShardIteratorOutput");
  }
}

/**
 *
 *          <p>Contains details about the type of identity that made the request.</p>
 *
 */
export interface Identity {
  __type?: "Identity";
  /**
   *
   *          <p>A unique identifier for the entity that made the call. For Time To Live, the
   *       principalId is "dynamodb.amazonaws.com".</p>
   *
   */
  PrincipalId?: string;

  /**
   *
   *          <p>The type of the identity. For Time To Live, the type is "Service".</p>
   *
   */
  Type?: string;
}

export namespace Identity {
  export function isa(o: any): o is Identity {
    return _smithy.isa(o, "Identity");
  }
}

/**
 *
 *          <p>Represents the input of a <code>ListStreams</code> operation.</p>
 *
 */
export interface ListStreamsInput {
  __type?: "ListStreamsInput";
  /**
   *
   *          <p>The ARN (Amazon Resource Name) of the first item that this operation will evaluate. Use the
   *       value that was returned for <code>LastEvaluatedStreamArn</code> in the previous operation.
   *     </p>
   *
   */
  ExclusiveStartStreamArn?: string;

  /**
   *
   *          <p>The maximum number of streams to return. The upper limit is 100.</p>
   *
   */
  Limit?: number;

  /**
   *
   *          <p>If this parameter is provided, then only the streams associated with this table name are returned.</p>
   *
   */
  TableName?: string;
}

export namespace ListStreamsInput {
  export function isa(o: any): o is ListStreamsInput {
    return _smithy.isa(o, "ListStreamsInput");
  }
}

/**
 *
 *          <p>Represents the output of a <code>ListStreams</code> operation.</p>
 *
 */
export interface ListStreamsOutput extends $MetadataBearer {
  __type?: "ListStreamsOutput";
  /**
   *
   *          <p>The stream ARN of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p>
   *          <p>If <code>LastEvaluatedStreamArn</code> is empty, then the "last page" of results has been
   *       processed and there is no more data to be retrieved.</p>
   *          <p>If <code>LastEvaluatedStreamArn</code> is not empty, it does not necessarily mean that there
   *       is more data in the result set. The only way to know when you have reached the end of the
   *       result set is when <code>LastEvaluatedStreamArn</code> is empty.</p>
   *
   */
  LastEvaluatedStreamArn?: string;

  /**
   *
   *          <p>A list of stream descriptors associated with the current account and endpoint.</p>
   *
   */
  Streams?: Array<_Stream>;
}

export namespace ListStreamsOutput {
  export function isa(o: any): o is ListStreamsOutput {
    return _smithy.isa(o, "ListStreamsOutput");
  }
}

export type OperationType = "INSERT" | "MODIFY" | "REMOVE";

/**
 *
 *          <p>A description of a unique event within a stream.</p>
 *
 */
export interface _Record {
  __type?: "Record";
  /**
   *
   *          <p>The region in which the <code>GetRecords</code> request was received.</p>
   *
   */
  awsRegion?: string;

  /**
   *
   *          <p>The main body of the stream record, containing all of the DynamoDB-specific fields.</p>
   *
   */
  dynamodb?: StreamRecord;

  /**
   *
   *          <p>A globally unique identifier for the event that was recorded in this stream record.</p>
   *
   */
  eventID?: string;

  /**
   *
   *          <p>The type of data modification that was performed on the DynamoDB table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INSERT</code> - a new item was added to the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFY</code> - one or more of an existing item's attributes were modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVE</code> - the item was deleted from the table</p>
   *             </li>
   *          </ul>
   *
   */
  eventName?: OperationType | string;

  /**
   *
   *          <p>The AWS service from which the stream record originated.  For DynamoDB Streams, this is <code>aws:dynamodb</code>.</p>
   *
   */
  eventSource?: string;

  /**
   *
   *          <p>The version number of the stream record format.  This number is updated whenever the structure of <code>Record</code> is modified.</p>
   *          <p>Client applications must not assume that <code>eventVersion</code> will remain at a particular
   *       value, as this number is subject to change at any time. In general, <code>eventVersion</code> will
   *       only increase as the low-level DynamoDB Streams API evolves.</p>
   *
   */
  eventVersion?: string;

  /**
   *
   *          <p>Items that are deleted by the Time to Live process after expiration have the following fields: </p>
   *          <ul>
   *             <li>
   *                <p>Records[].userIdentity.type</p>
   *                <p>"Service"</p>
   *             </li>
   *             <li>
   *                <p>Records[].userIdentity.principalId</p>
   *                <p>"dynamodb.amazonaws.com"</p>
   *             </li>
   *          </ul>
   *
   */
  userIdentity?: Identity;
}

export namespace _Record {
  export function isa(o: any): o is _Record {
    return _smithy.isa(o, "Record");
  }
}

/**
 *
 *          <p>The beginning and ending sequence numbers for the stream records contained within a shard.</p>
 *
 */
export interface SequenceNumberRange {
  __type?: "SequenceNumberRange";
  /**
   *
   *          <p>The last sequence number.</p>
   *
   */
  EndingSequenceNumber?: string;

  /**
   *
   *          <p>The first sequence number.</p>
   *
   */
  StartingSequenceNumber?: string;
}

export namespace SequenceNumberRange {
  export function isa(o: any): o is SequenceNumberRange {
    return _smithy.isa(o, "SequenceNumberRange");
  }
}

/**
 *
 *          <p>A uniquely identified group of stream records within a stream.</p>
 *
 */
export interface Shard {
  __type?: "Shard";
  /**
   *
   *          <p>The shard ID of the current shard's parent.</p>
   *
   */
  ParentShardId?: string;

  /**
   *
   *          <p>The range of possible sequence numbers for the shard.</p>
   *
   */
  SequenceNumberRange?: SequenceNumberRange;

  /**
   *
   *          <p>The system-generated identifier for this shard.</p>
   *
   */
  ShardId?: string;
}

export namespace Shard {
  export function isa(o: any): o is Shard {
    return _smithy.isa(o, "Shard");
  }
}

export type ShardIteratorType =
  | "AFTER_SEQUENCE_NUMBER"
  | "AT_SEQUENCE_NUMBER"
  | "LATEST"
  | "TRIM_HORIZON";

/**
 *
 *          <p>Represents all of the data describing a particular stream.</p>
 *
 */
export interface _Stream {
  __type?: "Stream";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) for the stream.</p>
   *
   */
  StreamArn?: string;

  /**
   *
   *          <p>A timestamp, in ISO 8601 format, for this stream.</p>
   *          <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is
   *       possible that a stream from another table might have the same timestamp. However, the
   *       combination of the following three elements is guaranteed to be unique:</p>
   *          <ul>
   *             <li>
   *                <p>the AWS customer ID.</p>
   *             </li>
   *             <li>
   *                <p>the table name</p>
   *             </li>
   *             <li>
   *                <p>the <code>StreamLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   */
  StreamLabel?: string;

  /**
   *
   *          <p>The DynamoDB table with which the stream is associated.</p>
   *
   */
  TableName?: string;
}

export namespace _Stream {
  export function isa(o: any): o is _Stream {
    return _smithy.isa(o, "Stream");
  }
}

/**
 *
 *          <p>Represents all of the data describing a particular stream.</p>
 *
 */
export interface StreamDescription {
  __type?: "StreamDescription";
  /**
   *
   *          <p>The date and time when the request to create this stream was issued.</p>
   *
   */
  CreationRequestDateTime?: Date;

  /**
   *
   *          <p>The key attribute(s) of the stream's DynamoDB table.</p>
   *
   */
  KeySchema?: Array<KeySchemaElement>;

  /**
   *
   *          <p>The shard ID of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p>
   *          <p>If <code>LastEvaluatedShardId</code> is empty, then the "last page" of results has been
   *       processed and there is currently no more data to be retrieved.</p>
   *          <p>If <code>LastEvaluatedShardId</code> is not empty, it does not necessarily mean that there is
   *       more data in the result set. The only way to know when you have reached the end of the result
   *       set is when <code>LastEvaluatedShardId</code> is empty.</p>
   *
   */
  LastEvaluatedShardId?: string;

  /**
   *
   *          <p>The shards that comprise the stream.</p>
   *
   */
  Shards?: Array<Shard>;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) for the stream.</p>
   *
   */
  StreamArn?: string;

  /**
   *
   *          <p>A timestamp, in ISO 8601 format, for this stream.</p>
   *          <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is
   *       possible that a stream from another table might have the same timestamp. However, the
   *       combination of the following three elements is guaranteed to be unique:</p>
   *          <ul>
   *             <li>
   *                <p>the AWS customer ID.</p>
   *             </li>
   *             <li>
   *                <p>the table name</p>
   *             </li>
   *             <li>
   *                <p>the <code>StreamLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   */
  StreamLabel?: string;

  /**
   *
   *          <p>Indicates the current status of the stream:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLING</code> - Streams is currently being enabled on the DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - the stream is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLING</code> - Streams is currently being disabled on the DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - the stream is disabled.</p>
   *             </li>
   *          </ul>
   *
   */
  StreamStatus?: StreamStatus | string;

  /**
   *
   *          <p>Indicates the format of the records within this stream:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>KEYS_ONLY</code> - only the key attributes of items that were modified in the DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_IMAGE</code> - entire items from the table, as they appeared after they were modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OLD_IMAGE</code> - entire items from the table, as they appeared before they were modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_AND_OLD_IMAGES</code> - both the new and the old images of the items from the table.</p>
   *             </li>
   *          </ul>
   *
   */
  StreamViewType?: StreamViewType | string;

  /**
   *
   *          <p>The DynamoDB table with which the stream is associated.</p>
   *
   */
  TableName?: string;
}

export namespace StreamDescription {
  export function isa(o: any): o is StreamDescription {
    return _smithy.isa(o, "StreamDescription");
  }
}

/**
 *
 *          <p>A description of a single data modification that was performed on an item in a DynamoDB table.</p>
 *
 */
export interface StreamRecord {
  __type?: "StreamRecord";
  /**
   *
   *          <p>The approximate date and time when the stream record was created, in <a href="http://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   *
   */
  ApproximateCreationDateTime?: Date;

  /**
   *
   *          <p>The primary key attribute(s) for the DynamoDB item that was modified.</p>
   *
   */
  Keys?: { [key: string]: AttributeValue };

  /**
   *
   *          <p>The item in the DynamoDB table as it appeared after it was modified.</p>
   *
   */
  NewImage?: { [key: string]: AttributeValue };

  /**
   *
   *          <p>The item in the DynamoDB table as it appeared before it was modified.</p>
   *
   */
  OldImage?: { [key: string]: AttributeValue };

  /**
   *
   *          <p>The sequence number of the stream record.</p>
   *
   */
  SequenceNumber?: string;

  /**
   *
   *          <p>The size of the stream record, in bytes.</p>
   *
   */
  SizeBytes?: number;

  /**
   *
   *          <p>The type of data from the modified DynamoDB item that was captured in this stream record:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>KEYS_ONLY</code> - only the key attributes of the modified item.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_IMAGE</code> - the entire item, as it appeared after it was modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OLD_IMAGE</code> - the entire item, as it appeared before it was modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_AND_OLD_IMAGES</code> - both the new and the old item images of the item.</p>
   *             </li>
   *          </ul>
   *
   */
  StreamViewType?: StreamViewType | string;
}

export namespace StreamRecord {
  export function isa(o: any): o is StreamRecord {
    return _smithy.isa(o, "StreamRecord");
  }
}

export type StreamStatus = "DISABLED" | "DISABLING" | "ENABLED" | "ENABLING";

/**
 *
 *          <p>The operation attempted to read past the oldest stream record in a shard.</p>
 *          <p>In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream. You might receive a TrimmedDataAccessException if:</p>
 *          <ul>
 *             <li>
 *                <p>You request a shard iterator with a sequence number older than the trim point (24 hours).</p>
 *             </li>
 *             <li>
 *                <p>You obtain a shard iterator, but before you use the iterator in a <code>GetRecords</code>
 *         request, a stream record in the shard exceeds the 24 hour period and is trimmed. This causes
 *         the iterator to access a record that no longer exists.</p>
 *             </li>
 *          </ul>
 *
 */
export interface TrimmedDataAccessException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TrimmedDataAccessException";
  name: "TrimmedDataAccessException";
  $fault: "client";
  /**
   *
   *          <p>"The data you are trying to access has been trimmed.</p>
   *
   */
  message?: string;
}

export namespace TrimmedDataAccessException {
  export function isa(o: any): o is TrimmedDataAccessException {
    return _smithy.isa(o, "TrimmedDataAccessException");
  }
}

/**
 *
 *          <p>Represents the data for an attribute. You can set one, and only one, of the elements.</p>
 *          <p>Each attribute in an item is a name-value pair. An attribute can be single-valued or multi-valued set. For example, a book item can have title and authors attributes. Each book has one title but can have many authors. The multi-valued attribute is a set; duplicate values are not allowed.</p>
 *
 */
export interface AttributeValue {
  __type?: "AttributeValue";
  /**
   *
   *          <p>A Binary data type.</p>
   *
   */
  B?: Uint8Array;

  /**
   *
   *          <p>A Boolean data type.</p>
   *
   */
  BOOL?: boolean;

  /**
   *
   *          <p>A Binary Set data type.</p>
   *
   */
  BS?: Array<Uint8Array>;

  /**
   *
   *          <p>A List data type.</p>
   *
   */
  L?: Array<AttributeValue>;

  /**
   *
   *          <p>A Map data type.</p>
   *
   */
  M?: { [key: string]: AttributeValue };

  /**
   *
   *          <p>A Number data type.</p>
   *
   */
  N?: string;

  /**
   *
   *          <p>A Number Set data type.</p>
   *
   */
  NS?: Array<string>;

  /**
   *
   *          <p>A Null data type.</p>
   *
   */
  NULL?: boolean;

  /**
   *
   *          <p>A String data type.</p>
   *
   */
  S?: string;

  /**
   *
   *          <p>A String Set data type.</p>
   *
   */
  SS?: Array<string>;
}

export namespace AttributeValue {
  export function isa(o: any): o is AttributeValue {
    return _smithy.isa(o, "AttributeValue");
  }
}

/**
 *
 *          <p>An error occurred on the server side.</p>
 *
 */
export interface InternalServerError
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalServerError";
  name: "InternalServerError";
  $fault: "server";
  /**
   *
   *          <p>The server encountered an internal error trying to fulfill the request.</p>
   *
   */
  message?: string;
}

export namespace InternalServerError {
  export function isa(o: any): o is InternalServerError {
    return _smithy.isa(o, "InternalServerError");
  }
}

/**
 *
 *          <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes
 *       that make up the primary key of a table, or the key attributes of an index.</p>
 *          <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a
 *       simple primary key (partition key)  would be represented by one <code>KeySchemaElement</code>. A composite primary key (partition key and sort key) would require one <code>KeySchemaElement</code> for the partition key, and another
 *       <code>KeySchemaElement</code> for the sort key.</p>
 *          <note>
 *             <p>The partition key of an item is also known as its <i>hash attribute</i>.  The
 *         term "hash attribute" derives from DynamoDB's usage of an internal hash function to
 *         evenly distribute data items across partitions, based on their partition key values.</p>
 *             <p>The sort key of an item is also known as its <i>range attribute</i>.
 *         The term "range attribute" derives from the way DynamoDB stores items with the same
 *         partition key physically close together, in sorted order by the sort key value.</p>
 *          </note>
 *
 */
export interface KeySchemaElement {
  __type?: "KeySchemaElement";
  /**
   *
   *          <p>The name of a key attribute.</p>
   *
   */
  AttributeName: string | undefined;

  /**
   *
   *          <p>The attribute data, consisting of the data type and the attribute value itself.</p>
   *
   */
  KeyType: KeyType | string | undefined;
}

export namespace KeySchemaElement {
  export function isa(o: any): o is KeySchemaElement {
    return _smithy.isa(o, "KeySchemaElement");
  }
}

export type KeyType = "HASH" | "RANGE";

/**
 *
 *          <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that
 *       receive this exception. Your request is eventually successful, unless your retry queue is too
 *       large to finish. Reduce the frequency of requests and use exponential backoff. For more
 *       information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#APIRetries">Error Retries and Exponential
 *         Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  name: "LimitExceededException";
  $fault: "client";
  /**
   *
   *          <p>Too many operations for a given subscriber.</p>
   *
   */
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

/**
 *
 *          <p>The operation tried to access a nonexistent stream.</p>
 *
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   *
   *          <p>The resource which is being requested does not exist.</p>
   *
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

export type StreamViewType =
  | "KEYS_ONLY"
  | "NEW_AND_OLD_IMAGES"
  | "NEW_IMAGE"
  | "OLD_IMAGE";
