import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum ArrayJobDependency {
  N_TO_N = "N_TO_N",
  SEQUENTIAL = "SEQUENTIAL"
}

/**
 *
 *          <p>An object representing an AWS Batch array job.</p>
 *
 */
export interface ArrayProperties {
  __type?: "ArrayProperties";
  /**
   *
   *          <p>The size of the array job.</p>
   *
   */
  size?: number;
}

export namespace ArrayProperties {
  export function isa(o: any): o is ArrayProperties {
    return _smithy.isa(o, "ArrayProperties");
  }
}

/**
 *
 *          <p>An object representing the array properties of a job.</p>
 *
 */
export interface ArrayPropertiesDetail {
  __type?: "ArrayPropertiesDetail";
  /**
   *
   *          <p>The job index within the array that is associated with this job. This parameter is returned for array job
   *    children.</p>
   *
   */
  index?: number;

  /**
   *
   *          <p>The size of the array job. This parameter is returned for parent array jobs.</p>
   *
   */
  size?: number;

  /**
   *
   *          <p>A summary of the number of array job children in each available job status. This parameter is returned for
   *    parent array jobs.</p>
   *
   */
  statusSummary?: { [key: string]: number };
}

export namespace ArrayPropertiesDetail {
  export function isa(o: any): o is ArrayPropertiesDetail {
    return _smithy.isa(o, "ArrayPropertiesDetail");
  }
}

/**
 *
 *          <p>An object representing the array properties of a job.</p>
 *
 */
export interface ArrayPropertiesSummary {
  __type?: "ArrayPropertiesSummary";
  /**
   *
   *          <p>The job index within the array that is associated with this job. This parameter is returned for children of
   *    array jobs.</p>
   *
   */
  index?: number;

  /**
   *
   *          <p>The size of the array job. This parameter is returned for parent array jobs.</p>
   *
   */
  size?: number;
}

export namespace ArrayPropertiesSummary {
  export function isa(o: any): o is ArrayPropertiesSummary {
    return _smithy.isa(o, "ArrayPropertiesSummary");
  }
}

/**
 *
 *          <p>An object representing the details of a container that is part of a job attempt.</p>
 *
 */
export interface AttemptContainerDetail {
  __type?: "AttemptContainerDetail";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the Amazon ECS container instance that hosts the job attempt.</p>
   *
   */
  containerInstanceArn?: string;

  /**
   *
   *          <p>The exit code for the job attempt. A non-zero exit code is considered a failure.</p>
   *
   */
  exitCode?: number;

  /**
   *
   *          <p>The name of the CloudWatch Logs log stream associated with the container. The log group for AWS Batch jobs is
   *     <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the
   *     <code>RUNNING</code> status.</p>
   *
   */
  logStreamName?: string;

  /**
   *
   *          <p>The network interfaces associated with the job attempt.</p>
   *
   */
  networkInterfaces?: Array<NetworkInterface>;

  /**
   *
   *          <p>A short (255 max characters) human-readable string to provide additional details about a running or stopped
   *    container.</p>
   *
   */
  reason?: string;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the Amazon ECS task that is associated with the job attempt. Each container attempt receives a task
   *    ARN when they reach the <code>STARTING</code> status.</p>
   *
   */
  taskArn?: string;
}

export namespace AttemptContainerDetail {
  export function isa(o: any): o is AttemptContainerDetail {
    return _smithy.isa(o, "AttemptContainerDetail");
  }
}

/**
 *
 *          <p>An object representing a job attempt.</p>
 *
 */
export interface AttemptDetail {
  __type?: "AttemptDetail";
  /**
   *
   *          <p>Details about the container in this job attempt.</p>
   *
   */
  container?: AttemptContainerDetail;

  /**
   *
   *          <p>The Unix timestamp (in seconds and milliseconds) for when the attempt was started (when the attempt transitioned
   *    from the <code>STARTING</code> state to the <code>RUNNING</code> state).</p>
   *
   */
  startedAt?: number;

  /**
   *
   *          <p>A short, human-readable string to provide additional details about the current status of the job attempt.</p>
   *
   */
  statusReason?: string;

  /**
   *
   *          <p>The Unix timestamp (in seconds and milliseconds) for when the attempt was stopped (when the attempt transitioned
   *    from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or
   *    <code>FAILED</code>).</p>
   *
   */
  stoppedAt?: number;
}

export namespace AttemptDetail {
  export function isa(o: any): o is AttemptDetail {
    return _smithy.isa(o, "AttemptDetail");
  }
}

export enum CEState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum CEStatus {
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  INVALID = "INVALID",
  UPDATING = "UPDATING",
  VALID = "VALID"
}

export enum CEType {
  MANAGED = "MANAGED",
  UNMANAGED = "UNMANAGED"
}

export enum CRAllocationStrategy {
  BEST_FIT = "BEST_FIT",
  BEST_FIT_PROGRESSIVE = "BEST_FIT_PROGRESSIVE",
  SPOT_CAPACITY_OPTIMIZED = "SPOT_CAPACITY_OPTIMIZED"
}

export enum CRType {
  EC2 = "EC2",
  SPOT = "SPOT"
}

export interface CancelJobRequest {
  __type?: "CancelJobRequest";
  /**
   *
   *          <p>The AWS Batch job ID of the job to cancel.</p>
   *
   */
  jobId: string | undefined;

  /**
   *
   *          <p>A message to attach to the job that explains the reason for canceling it. This message is returned by future
   *     <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity
   *    logs.</p>
   *
   */
  reason: string | undefined;
}

export namespace CancelJobRequest {
  export function isa(o: any): o is CancelJobRequest {
    return _smithy.isa(o, "CancelJobRequest");
  }
}

export interface CancelJobResponse extends $MetadataBearer {
  __type?: "CancelJobResponse";
}

export namespace CancelJobResponse {
  export function isa(o: any): o is CancelJobResponse {
    return _smithy.isa(o, "CancelJobResponse");
  }
}

/**
 *
 *          <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that
 *    doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
 *
 */
export interface ClientException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ClientException";
  name: "ClientException";
  $fault: "client";
  message?: string;
}

export namespace ClientException {
  export function isa(o: any): o is ClientException {
    return _smithy.isa(o, "ClientException");
  }
}

/**
 *
 *          <p>An object representing an AWS Batch compute environment.</p>
 *
 */
export interface ComputeEnvironmentDetail {
  __type?: "ComputeEnvironmentDetail";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   *
   */
  computeEnvironmentArn: string | undefined;

  /**
   *
   *          <p>The name of the compute environment.</p>
   *
   */
  computeEnvironmentName: string | undefined;

  /**
   *
   *          <p>The compute resources defined for the compute environment.</p>
   *
   */
  computeResources?: ComputeResource;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment.</p>
   *
   */
  ecsClusterArn: string | undefined;

  /**
   *
   *          <p>The service role associated with the compute environment that allows AWS Batch to make calls to AWS API
   *    operations on your behalf.</p>
   *
   */
  serviceRole?: string;

  /**
   *
   *          <p>The state of the compute environment. The valid values are <code>ENABLED</code> or <code>DISABLED</code>.</p>
   *          <p>If the state is <code>ENABLED</code>, then the AWS Batch scheduler can attempt to place jobs from an associated
   *    job queue on the compute resources within the environment. If the compute environment is managed, then it can scale
   *    its instances out or in automatically, based on the job queue demand.</p>
   *          <p>If the state is <code>DISABLED</code>, then the AWS Batch scheduler does not attempt to place jobs within the
   *    environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed
   *    compute environments in the <code>DISABLED</code> state do not scale out. However, they scale in to
   *     <code>minvCpus</code> value after instances become idle.</p>
   *
   */
  state?: CEState | string;

  /**
   *
   *          <p>The current status of the compute environment (for example, <code>CREATING</code> or <code>VALID</code>).</p>
   *
   */
  status?: CEStatus | string;

  /**
   *
   *          <p>A short, human-readable string to provide additional details about the current status of the compute
   *    environment.</p>
   *
   */
  statusReason?: string;

  /**
   *
   *          <p>The type of the compute environment.</p>
   *
   */
  type?: CEType | string;
}

export namespace ComputeEnvironmentDetail {
  export function isa(o: any): o is ComputeEnvironmentDetail {
    return _smithy.isa(o, "ComputeEnvironmentDetail");
  }
}

/**
 *
 *          <p>The order in which compute environments are tried for job placement within a queue. Compute environments are
 *    tried in ascending order. For example, if two compute environments are associated with a job queue, the compute
 *    environment with a lower order integer value is tried for job placement first.</p>
 *
 */
export interface ComputeEnvironmentOrder {
  __type?: "ComputeEnvironmentOrder";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   *
   */
  computeEnvironment: string | undefined;

  /**
   *
   *          <p>The order of the compute environment.</p>
   *
   */
  order: number | undefined;
}

export namespace ComputeEnvironmentOrder {
  export function isa(o: any): o is ComputeEnvironmentOrder {
    return _smithy.isa(o, "ComputeEnvironmentOrder");
  }
}

/**
 *
 *          <p>An object representing an AWS Batch compute resource.</p>
 *
 */
export interface ComputeResource {
  __type?: "ComputeResource";
  /**
   *
   *          <p>The allocation strategy to use for the compute resource in case not enough instances of the best fitting
   *    instance type can be allocated. This could be due to availability of the instance type in the region or <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 service limits</a>. If this is
   *    not specified, the default is <code>BEST_FIT</code>, which will use only the best fitting instance type, waiting for
   *    additional capacity if it's not available. This allocation strategy keeps costs lower but can limit scaling.
   *     <code>BEST_FIT_PROGRESSIVE</code> will select an additional instance type that is large enough to meet the
   *    requirements of the jobs in the queue, with a preference for an instance type with a lower cost.
   *     <code>SPOT_CAPACITY_OPTIMIZED</code> is only available for Spot Instance compute resources and will select an
   *    additional instance type that is large enough to meet the requirements of the jobs in the queue, with a preference
   *    for an instance type that is less likely to be interrupted.</p>
   *
   */
  allocationStrategy?: CRAllocationStrategy | string;

  /**
   *
   *          <p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that
   *    instance type before instances are launched. For example, if your maximum percentage is 20%, then the Spot price must
   *    be below 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and
   *    never more than your maximum percentage. If you leave this field empty, the default value is 100% of the On-Demand
   *    price.</p>
   *
   */
  bidPercentage?: number;

  /**
   *
   *          <p>The desired number of Amazon EC2 vCPUS in the compute environment.</p>
   *
   */
  desiredvCpus?: number;

  /**
   *
   *          <p>The Amazon EC2 key pair that is used for instances launched in the compute environment.</p>
   *
   */
  ec2KeyPair?: string;

  /**
   *
   *          <p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment.</p>
   *
   */
  imageId?: string;

  /**
   *
   *          <p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name
   *    or full Amazon Resource Name (ARN) of an instance profile. For example,
   *     <code>
   *                <i>ecsInstanceRole</i>
   *             </code> or
   *      <code>arn:aws:iam::<i><aws_account_id></i>:instance-profile/<i>ecsInstanceRole</i>
   *             </code>.
   *    For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS Instance
   *     Role</a> in the <i>AWS Batch User Guide</i>.</p>
   *
   */
  instanceRole: string | undefined;

  /**
   *
   *          <p>The instances types that may be launched. You can specify instance families to launch any instance type within
   *    those families (for example, <code>c5</code> or <code>p3</code>), or you can specify specific sizes within a family
   *    (such as <code>c5.8xlarge</code>). You can also choose <code>optimal</code> to pick instance types (from the C, M,
   *    and R instance families) on the fly that match the demand of your job queues.</p>
   *
   */
  instanceTypes: Array<string> | undefined;

  /**
   *
   *          <p>The launch template to use for your compute resources. Any other compute resource parameters that you specify in
   *    a <a>CreateComputeEnvironment</a> API operation override the same parameters in the launch template. You
   *    must specify either the launch template ID or launch template name in the request, but not both. For more
   *    information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch Template
   *     Support</a> in the <i>AWS Batch User Guide</i>.</p>
   *
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   *
   *          <p>The maximum number of Amazon EC2 vCPUs that an environment can reach.</p>
   *
   */
  maxvCpus: number | undefined;

  /**
   *
   *          <p>The minimum number of Amazon EC2 vCPUs that an environment should maintain (even if the compute environment is
   *     <code>DISABLED</code>).</p>
   *
   */
  minvCpus: number | undefined;

  /**
   *
   *          <p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel
   *    jobs to your compute environment, you should consider creating a cluster placement group and associate it with your
   *    compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single
   *    Availability Zone with high network flow potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the
   *     <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *
   */
  placementGroup?: string;

  /**
   *
   *          <p>The Amazon EC2 security groups associated with instances launched in the compute environment. One or more security
   *    groups must be specified, either in <code>securityGroupIds</code> or using a launch template referenced in
   *     <code>launchTemplate</code>. If security groups are specified using both <code>securityGroupIds</code> and
   *     <code>launchTemplate</code>, the values in <code>securityGroupIds</code> will be used.</p>
   *
   */
  securityGroupIds?: Array<string>;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a <code>SPOT</code> compute environment. For more
   *    information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 Spot Fleet
   *     Role</a> in the <i>AWS Batch User Guide</i>.</p>
   *
   */
  spotIamFleetRole?: string;

  /**
   *
   *          <p>The VPC subnets into which the compute resources are launched. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and Subnets</a> in the <i>Amazon
   *     VPC User Guide</i>.</p>
   *
   */
  subnets: Array<string> | undefined;

  /**
   *
   *          <p>Key-value pair tags to be applied to resources that are launched in the compute environment. For AWS Batch, these
   *    take the form of "String1": "String2", where String1 is the tag key and String2 is the tag value—for example, {
   *    "Name": "AWS Batch Instance - C4OnDemand" }.</p>
   *
   */
  tags?: { [key: string]: string };

  /**
   *
   *          <p>The type of compute environment: <code>EC2</code> or <code>SPOT</code>.</p>
   *
   */
  type: CRType | string | undefined;
}

export namespace ComputeResource {
  export function isa(o: any): o is ComputeResource {
    return _smithy.isa(o, "ComputeResource");
  }
}

/**
 *
 *          <p>An object representing the attributes of a compute environment that can be updated.</p>
 *
 */
export interface ComputeResourceUpdate {
  __type?: "ComputeResourceUpdate";
  /**
   *
   *          <p>The desired number of Amazon EC2 vCPUS in the compute environment.</p>
   *
   */
  desiredvCpus?: number;

  /**
   *
   *          <p>The maximum number of Amazon EC2 vCPUs that an environment can reach.</p>
   *
   */
  maxvCpus?: number;

  /**
   *
   *          <p>The minimum number of Amazon EC2 vCPUs that an environment should maintain.</p>
   *
   */
  minvCpus?: number;
}

export namespace ComputeResourceUpdate {
  export function isa(o: any): o is ComputeResourceUpdate {
    return _smithy.isa(o, "ComputeResourceUpdate");
  }
}

/**
 *
 *          <p>An object representing the details of a container that is part of a job.</p>
 *
 */
export interface ContainerDetail {
  __type?: "ContainerDetail";
  /**
   *
   *          <p>The command that is passed to the container.</p>
   *
   */
  command?: Array<string>;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the container instance on which the container is running.</p>
   *
   */
  containerInstanceArn?: string;

  /**
   *
   *          <p>The environment variables to pass to a container.</p>
   *          <note>
   *             <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming convention is reserved for variables that are set by the AWS Batch service.</p>
   *          </note>
   *
   */
  environment?: Array<KeyValuePair>;

  /**
   *
   *          <p>The exit code to return upon completion.</p>
   *
   */
  exitCode?: number;

  /**
   *
   *          <p>The image used to start the container.</p>
   *
   */
  image?: string;

  /**
   *
   *          <p>The instance type of the underlying host infrastructure of a multi-node parallel job.</p>
   *
   */
  instanceType?: string;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) associated with the job upon execution.</p>
   *
   */
  jobRoleArn?: string;

  /**
   *
   *          <p>Linux-specific modifications that are applied to the container, such as details for device mappings.</p>
   *
   */
  linuxParameters?: LinuxParameters;

  /**
   *
   *          <p>The name of the CloudWatch Logs log stream associated with the container. The log group for AWS Batch jobs is
   *     <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the
   *     <code>RUNNING</code> status.</p>
   *
   */
  logStreamName?: string;

  /**
   *
   *          <p>The number of MiB of memory reserved for the job.</p>
   *
   */
  memory?: number;

  /**
   *
   *          <p>The mount points for data volumes in your container.</p>
   *
   */
  mountPoints?: Array<MountPoint>;

  /**
   *
   *          <p>The network interfaces associated with the job.</p>
   *
   */
  networkInterfaces?: Array<NetworkInterface>;

  /**
   *
   *          <p>When this parameter is true, the container is given elevated privileges on the host container instance (similar
   *    to the <code>root</code> user).</p>
   *
   */
  privileged?: boolean;

  /**
   *
   *          <p>When this parameter is true, the container is given read-only access to its root file system.</p>
   *
   */
  readonlyRootFilesystem?: boolean;

  /**
   *
   *          <p>A short (255 max characters) human-readable string to provide additional details about a running or stopped
   *    container.</p>
   *
   */
  reason?: string;

  /**
   *
   *          <p>The type and amount of a resource to assign to a container. Currently, the only supported resource is
   *     <code>GPU</code>.</p>
   *
   */
  resourceRequirements?: Array<ResourceRequirement>;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the Amazon ECS task that is associated with the container job. Each container attempt receives a
   *    task ARN when they reach the <code>STARTING</code> status.</p>
   *
   */
  taskArn?: string;

  /**
   *
   *          <p>A list of <code>ulimit</code> values to set in the container.</p>
   *
   */
  ulimits?: Array<Ulimit>;

  /**
   *
   *          <p>The user name to use inside the container.</p>
   *
   */
  user?: string;

  /**
   *
   *          <p>The number of VCPUs allocated for the job.</p>
   *
   */
  vcpus?: number;

  /**
   *
   *          <p>A list of volumes associated with the job.</p>
   *
   */
  volumes?: Array<Volume>;
}

export namespace ContainerDetail {
  export function isa(o: any): o is ContainerDetail {
    return _smithy.isa(o, "ContainerDetail");
  }
}

/**
 *
 *          <p>The overrides that should be sent to a container.</p>
 *
 */
export interface ContainerOverrides {
  __type?: "ContainerOverrides";
  /**
   *
   *          <p>The command to send to the container that overrides the default command from the Docker image or the job
   *    definition.</p>
   *
   */
  command?: Array<string>;

  /**
   *
   *          <p>The environment variables to send to the container. You can add new environment variables, which are added to
   *    the container at launch, or you can override the existing environment variables from the Docker image or the job
   *    definition.</p>
   *          <note>
   *             <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming convention is reserved for variables that are set by the AWS Batch service.</p>
   *          </note>
   *
   */
  environment?: Array<KeyValuePair>;

  /**
   *
   *          <p>The instance type to use for a multi-node parallel job. This parameter is not valid for single-node container
   *    jobs.</p>
   *
   */
  instanceType?: string;

  /**
   *
   *          <p>The number of MiB of memory reserved for the job. This value overrides the value set in the job
   *    definition.</p>
   *
   */
  memory?: number;

  /**
   *
   *          <p>The type and amount of a resource to assign to a container. This value overrides the value set in the job
   *    definition. Currently, the only supported resource is <code>GPU</code>.</p>
   *
   */
  resourceRequirements?: Array<ResourceRequirement>;

  /**
   *
   *          <p>The number of vCPUs to reserve for the container. This value overrides the value set in the job
   *    definition.</p>
   *
   */
  vcpus?: number;
}

export namespace ContainerOverrides {
  export function isa(o: any): o is ContainerOverrides {
    return _smithy.isa(o, "ContainerOverrides");
  }
}

/**
 *
 *          <p>Container properties are used in job definitions to describe the container that is launched as part of a
 *    job.</p>
 *
 */
export interface ContainerProperties {
  __type?: "ContainerProperties";
  /**
   *
   *          <p>The command that is passed to the container. This parameter maps to <code>Cmd</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>COMMAND</code> parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">https://docs.docker.com/engine/reference/builder/#cmd</a>.</p>
   *
   */
  command?: Array<string>;

  /**
   *
   *          <p>The environment variables to pass to a container. This parameter maps to <code>Env</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--env</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *          <important>
   *             <p>We do not recommend using plaintext environment variables for sensitive information, such as credential
   *     data.</p>
   *          </important>
   *          <note>
   *             <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming convention is reserved for variables that are set by the AWS Batch service.</p>
   *          </note>
   *
   */
  environment?: Array<KeyValuePair>;

  /**
   *
   *          <p>The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker
   *    Hub registry are available by default. Other repositories are specified with
   *      <code>
   *                <i>repository-url</i>/<i>image</i>:<i>tag</i>
   *             </code>.
   *    Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to <code>Image</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of
   *    the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>IMAGE</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker
   *    run</a>.</p>
   *          <ul>
   *             <li>
   *                <p>Images in Amazon ECR repositories use the full registry and repository URI (for example,
   *       <code>012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name></code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in official repositories on Docker Hub use a single name (for example, <code>ubuntu</code> or
   *       <code>mongo</code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in other repositories on Docker Hub are qualified with an organization name (for example,
   *       <code>amazon/amazon-ecs-agent</code>).</p>
   *             </li>
   *             <li>
   *                <p>Images in other online repositories are qualified further by a domain name (for example,
   *       <code>quay.io/assemblyline/ubuntu</code>).</p>
   *             </li>
   *          </ul>
   *
   */
  image?: string;

  /**
   *
   *          <p>The instance type to use for a multi-node parallel job. Currently all node groups in a multi-node parallel job
   *    must use the same instance type. This parameter is not valid for single-node container jobs.</p>
   *
   */
  instanceType?: string;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the IAM role that the container can assume for AWS permissions.</p>
   *
   */
  jobRoleArn?: string;

  /**
   *
   *          <p>Linux-specific modifications that are applied to the container, such as details for device mappings.</p>
   *
   */
  linuxParameters?: LinuxParameters;

  /**
   *
   *          <p>The hard limit (in MiB) of memory to present to the container. If your container attempts to exceed the memory
   *    specified here, the container is killed. This parameter maps to <code>Memory</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. You must specify at least 4 MiB of memory for a job.</p>
   *          <note>
   *             <p>If you are trying to maximize your resource utilization by providing your jobs as much memory as possible for a
   *     particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory
   *      Management</a> in the <i>AWS Batch User Guide</i>.</p>
   *          </note>
   *
   */
  memory?: number;

  /**
   *
   *          <p>The mount points for data volumes in your container. This parameter maps to <code>Volumes</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--volume</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *
   */
  mountPoints?: Array<MountPoint>;

  /**
   *
   *          <p>When this parameter is true, the container is given elevated privileges on the host container instance (similar
   *    to the <code>root</code> user). This parameter maps to <code>Privileged</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--privileged</code> option to
   *     <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *
   */
  privileged?: boolean;

  /**
   *
   *          <p>When this parameter is true, the container is given read-only access to its root file system. This parameter
   *    maps to <code>ReadonlyRootfs</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and
   *    the <code>--read-only</code> option to <code>docker run</code>.</p>
   *
   */
  readonlyRootFilesystem?: boolean;

  /**
   *
   *          <p>The type and amount of a resource to assign to a container. Currently, the only supported resource is
   *     <code>GPU</code>.</p>
   *
   */
  resourceRequirements?: Array<ResourceRequirement>;

  /**
   *
   *          <p>A list of <code>ulimits</code> to set in the container. This parameter maps to <code>Ulimits</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *
   */
  ulimits?: Array<Ulimit>;

  /**
   *
   *          <p>The user name to use inside the container. This parameter maps to <code>User</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--user</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *
   */
  user?: string;

  /**
   *
   *          <p>The number of vCPUs reserved for the container. This parameter maps to <code>CpuShares</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--cpu-shares</code> option to
   *     <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares. You must
   *    specify at least one vCPU.</p>
   *
   */
  vcpus?: number;

  /**
   *
   *          <p>A list of data volumes used in a job.</p>
   *
   */
  volumes?: Array<Volume>;
}

export namespace ContainerProperties {
  export function isa(o: any): o is ContainerProperties {
    return _smithy.isa(o, "ContainerProperties");
  }
}

/**
 *
 *          <p>An object representing summary details of a container within a job.</p>
 *
 */
export interface ContainerSummary {
  __type?: "ContainerSummary";
  /**
   *
   *          <p>The exit code to return upon completion.</p>
   *
   */
  exitCode?: number;

  /**
   *
   *          <p>A short (255 max characters) human-readable string to provide additional details about a running or stopped
   *    container.</p>
   *
   */
  reason?: string;
}

export namespace ContainerSummary {
  export function isa(o: any): o is ContainerSummary {
    return _smithy.isa(o, "ContainerSummary");
  }
}

export interface CreateComputeEnvironmentRequest {
  __type?: "CreateComputeEnvironmentRequest";
  /**
   *
   *          <p>The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.</p>
   *
   */
  computeEnvironmentName: string | undefined;

  /**
   *
   *          <p>Details of the compute resources managed by the compute environment. This parameter is required for managed
   *    compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>AWS Batch User Guide</i>.</p>
   *
   */
  computeResources?: ComputeResource;

  /**
   *
   *          <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your
   *    behalf.</p>
   *          <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN
   *    (this is recommended) or prefix the role name with the path.</p>
   *          <note>
   *             <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path
   *     prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the
   *      <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service
   *     role when you create compute environments.</p>
   *          </note>
   *
   */
  serviceRole: string | undefined;

  /**
   *
   *          <p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts
   *    jobs from a queue and can scale out automatically based on queues.</p>
   *
   */
  state?: CEState | string;

  /**
   *
   *          <p>The type of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
   *
   */
  type: CEType | string | undefined;
}

export namespace CreateComputeEnvironmentRequest {
  export function isa(o: any): o is CreateComputeEnvironmentRequest {
    return _smithy.isa(o, "CreateComputeEnvironmentRequest");
  }
}

export interface CreateComputeEnvironmentResponse extends $MetadataBearer {
  __type?: "CreateComputeEnvironmentResponse";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   *
   */
  computeEnvironmentArn?: string;

  /**
   *
   *          <p>The name of the compute environment.</p>
   *
   */
  computeEnvironmentName?: string;
}

export namespace CreateComputeEnvironmentResponse {
  export function isa(o: any): o is CreateComputeEnvironmentResponse {
    return _smithy.isa(o, "CreateComputeEnvironmentResponse");
  }
}

export interface CreateJobQueueRequest {
  __type?: "CreateJobQueueRequest";
  /**
   *
   *          <p>The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler
   *    uses this parameter to determine which compute environment should execute a given job. Compute environments must be
   *    in the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute
   *    environments with a job queue.</p>
   *
   */
  computeEnvironmentOrder: Array<ComputeEnvironmentOrder> | undefined;

  /**
   *
   *          <p>The name of the job queue.</p>
   *
   */
  jobQueueName: string | undefined;

  /**
   *
   *          <p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the
   *     <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is
   *    determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling
   *    preference over a job queue with a priority value of <code>1</code>.</p>
   *
   */
  priority: number | undefined;

  /**
   *
   *          <p>The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs.</p>
   *
   */
  state?: JQState | string;
}

export namespace CreateJobQueueRequest {
  export function isa(o: any): o is CreateJobQueueRequest {
    return _smithy.isa(o, "CreateJobQueueRequest");
  }
}

export interface CreateJobQueueResponse extends $MetadataBearer {
  __type?: "CreateJobQueueResponse";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the job queue.</p>
   *
   */
  jobQueueArn: string | undefined;

  /**
   *
   *          <p>The name of the job queue.</p>
   *
   */
  jobQueueName: string | undefined;
}

export namespace CreateJobQueueResponse {
  export function isa(o: any): o is CreateJobQueueResponse {
    return _smithy.isa(o, "CreateJobQueueResponse");
  }
}

export interface DeleteComputeEnvironmentRequest {
  __type?: "DeleteComputeEnvironmentRequest";
  /**
   *
   *          <p>The name or Amazon Resource Name (ARN) of the compute environment to delete.</p>
   *
   */
  computeEnvironment: string | undefined;
}

export namespace DeleteComputeEnvironmentRequest {
  export function isa(o: any): o is DeleteComputeEnvironmentRequest {
    return _smithy.isa(o, "DeleteComputeEnvironmentRequest");
  }
}

export interface DeleteComputeEnvironmentResponse extends $MetadataBearer {
  __type?: "DeleteComputeEnvironmentResponse";
}

export namespace DeleteComputeEnvironmentResponse {
  export function isa(o: any): o is DeleteComputeEnvironmentResponse {
    return _smithy.isa(o, "DeleteComputeEnvironmentResponse");
  }
}

export interface DeleteJobQueueRequest {
  __type?: "DeleteJobQueueRequest";
  /**
   *
   *          <p>The short name or full Amazon Resource Name (ARN) of the queue to delete.</p>
   *
   */
  jobQueue: string | undefined;
}

export namespace DeleteJobQueueRequest {
  export function isa(o: any): o is DeleteJobQueueRequest {
    return _smithy.isa(o, "DeleteJobQueueRequest");
  }
}

export interface DeleteJobQueueResponse extends $MetadataBearer {
  __type?: "DeleteJobQueueResponse";
}

export namespace DeleteJobQueueResponse {
  export function isa(o: any): o is DeleteJobQueueResponse {
    return _smithy.isa(o, "DeleteJobQueueResponse");
  }
}

export interface DeregisterJobDefinitionRequest {
  __type?: "DeregisterJobDefinitionRequest";
  /**
   *
   *          <p>The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.</p>
   *
   */
  jobDefinition: string | undefined;
}

export namespace DeregisterJobDefinitionRequest {
  export function isa(o: any): o is DeregisterJobDefinitionRequest {
    return _smithy.isa(o, "DeregisterJobDefinitionRequest");
  }
}

export interface DeregisterJobDefinitionResponse extends $MetadataBearer {
  __type?: "DeregisterJobDefinitionResponse";
}

export namespace DeregisterJobDefinitionResponse {
  export function isa(o: any): o is DeregisterJobDefinitionResponse {
    return _smithy.isa(o, "DeregisterJobDefinitionResponse");
  }
}

export interface DescribeComputeEnvironmentsRequest {
  __type?: "DescribeComputeEnvironmentsRequest";
  /**
   *
   *          <p>A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries.</p>
   *
   */
  computeEnvironments?: Array<string>;

  /**
   *
   *          <p>The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output.
   *    When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in
   *    a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can
   *    be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code>
   *    value. This value can be between 1 and 100. If this parameter is not used, then
   *     <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code>
   *    value if applicable.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code>
   *    request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination
   *    continues from the end of the previous results that returned the <code>nextToken</code> value. This value is
   *     <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   *
   */
  nextToken?: string;
}

export namespace DescribeComputeEnvironmentsRequest {
  export function isa(o: any): o is DescribeComputeEnvironmentsRequest {
    return _smithy.isa(o, "DescribeComputeEnvironmentsRequest");
  }
}

export interface DescribeComputeEnvironmentsResponse extends $MetadataBearer {
  __type?: "DescribeComputeEnvironmentsResponse";
  /**
   *
   *          <p>The list of compute environments.</p>
   *
   */
  computeEnvironments?: Array<ComputeEnvironmentDetail>;

  /**
   *
   *          <p>The <code>nextToken</code> value to include in a future <code>DescribeComputeEnvironments</code> request. When
   *    the results of a <code>DescribeJobDefinitions</code> request exceed <code>maxResults</code>, this value can be used
   *    to retrieve the next page of results. This value is <code>null</code> when there are no more results to
   *    return.</p>
   *
   */
  nextToken?: string;
}

export namespace DescribeComputeEnvironmentsResponse {
  export function isa(o: any): o is DescribeComputeEnvironmentsResponse {
    return _smithy.isa(o, "DescribeComputeEnvironmentsResponse");
  }
}

export interface DescribeJobDefinitionsRequest {
  __type?: "DescribeJobDefinitionsRequest";
  /**
   *
   *          <p>The name of the job definition to describe.</p>
   *
   */
  jobDefinitionName?: string;

  /**
   *
   *          <p>A list of up to 100 job definition names or full Amazon Resource Name (ARN) entries.</p>
   *
   */
  jobDefinitions?: Array<string>;

  /**
   *
   *          <p>The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this
   *    parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page
   *    along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by
   *    sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This
   *    value can be between 1 and 100. If this parameter is not used, then
   *     <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value
   *    if applicable.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request
   *    where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues
   *    from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code>
   *    when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   *
   */
  nextToken?: string;

  /**
   *
   *          <p>The status with which to filter job definitions.</p>
   *
   */
  status?: string;
}

export namespace DescribeJobDefinitionsRequest {
  export function isa(o: any): o is DescribeJobDefinitionsRequest {
    return _smithy.isa(o, "DescribeJobDefinitionsRequest");
  }
}

export interface DescribeJobDefinitionsResponse extends $MetadataBearer {
  __type?: "DescribeJobDefinitionsResponse";
  /**
   *
   *          <p>The list of job definitions.</p>
   *
   */
  jobDefinitions?: Array<JobDefinition>;

  /**
   *
   *          <p>The <code>nextToken</code> value to include in a future <code>DescribeJobDefinitions</code> request. When the
   *    results of a <code>DescribeJobDefinitions</code> request exceed <code>maxResults</code>, this value can be used to
   *    retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   *
   */
  nextToken?: string;
}

export namespace DescribeJobDefinitionsResponse {
  export function isa(o: any): o is DescribeJobDefinitionsResponse {
    return _smithy.isa(o, "DescribeJobDefinitionsResponse");
  }
}

export interface DescribeJobQueuesRequest {
  __type?: "DescribeJobQueuesRequest";
  /**
   *
   *          <p>A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.</p>
   *
   */
  jobQueues?: Array<string>;

  /**
   *
   *          <p>The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this
   *    parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page along
   *    with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending
   *    another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be
   *    between 1 and 100. If this parameter is not used, then <code>DescribeJobQueues</code>
   *    returns up to 100 results and a <code>nextToken</code> value if applicable.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where
   *     <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the
   *    end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when
   *    there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   *
   */
  nextToken?: string;
}

export namespace DescribeJobQueuesRequest {
  export function isa(o: any): o is DescribeJobQueuesRequest {
    return _smithy.isa(o, "DescribeJobQueuesRequest");
  }
}

export interface DescribeJobQueuesResponse extends $MetadataBearer {
  __type?: "DescribeJobQueuesResponse";
  /**
   *
   *          <p>The list of job queues.</p>
   *
   */
  jobQueues?: Array<JobQueueDetail>;

  /**
   *
   *          <p>The <code>nextToken</code> value to include in a future <code>DescribeJobQueues</code> request. When the results
   *    of a <code>DescribeJobQueues</code> request exceed <code>maxResults</code>, this value can be used to retrieve the
   *    next page of results. This value is <code>null</code> when there are no more results to return.</p>
   *
   */
  nextToken?: string;
}

export namespace DescribeJobQueuesResponse {
  export function isa(o: any): o is DescribeJobQueuesResponse {
    return _smithy.isa(o, "DescribeJobQueuesResponse");
  }
}

export interface DescribeJobsRequest {
  __type?: "DescribeJobsRequest";
  /**
   *
   *          <p>A list of up to 100 job IDs.</p>
   *
   */
  jobs: Array<string> | undefined;
}

export namespace DescribeJobsRequest {
  export function isa(o: any): o is DescribeJobsRequest {
    return _smithy.isa(o, "DescribeJobsRequest");
  }
}

export interface DescribeJobsResponse extends $MetadataBearer {
  __type?: "DescribeJobsResponse";
  /**
   *
   *          <p>The list of jobs.</p>
   *
   */
  jobs?: Array<JobDetail>;
}

export namespace DescribeJobsResponse {
  export function isa(o: any): o is DescribeJobsResponse {
    return _smithy.isa(o, "DescribeJobsResponse");
  }
}

/**
 *
 *          <p>An object representing a container instance host device.</p>
 *
 */
export interface Device {
  __type?: "Device";
  /**
   *
   *          <p>The path inside the container at which to expose the host device. By default the <code>hostPath</code> value is
   *    used.</p>
   *
   */
  containerPath?: string;

  /**
   *
   *          <p>The path for the device on the host container instance.</p>
   *
   */
  hostPath: string | undefined;

  /**
   *
   *          <p>The explicit permissions to provide to the container for the device. By default, the container has permissions
   *    for <code>read</code>, <code>write</code>, and <code>mknod</code> for the device.</p>
   *
   */
  permissions?: Array<DeviceCgroupPermission | string>;
}

export namespace Device {
  export function isa(o: any): o is Device {
    return _smithy.isa(o, "Device");
  }
}

export enum DeviceCgroupPermission {
  MKNOD = "MKNOD",
  READ = "READ",
  WRITE = "WRITE"
}

/**
 *
 *          <p>Determine whether your data volume persists on the host container instance and where it is stored. If this
 *    parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed
 *    to persist after the containers associated with it stop running.</p>
 *
 */
export interface Host {
  __type?: "Host";
  /**
   *
   *          <p>The path on the host container instance that is presented to the container. If this parameter is empty, then the
   *    Docker daemon has assigned a host path for you. If this parameter contains a file location, then the data volume
   *    persists at the specified location on the host container instance until you delete it manually. If the source path
   *    location does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the
   *    contents of the source path folder are exported.</p>
   *
   */
  sourcePath?: string;
}

export namespace Host {
  export function isa(o: any): o is Host {
    return _smithy.isa(o, "Host");
  }
}

export enum JQState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum JQStatus {
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  INVALID = "INVALID",
  UPDATING = "UPDATING",
  VALID = "VALID"
}

/**
 *
 *          <p>An object representing an AWS Batch job definition.</p>
 *
 */
export interface JobDefinition {
  __type?: "JobDefinition";
  /**
   *
   *          <p>An object with various properties specific to container-based jobs.</p>
   *
   */
  containerProperties?: ContainerProperties;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) for the job definition.</p>
   *
   */
  jobDefinitionArn: string | undefined;

  /**
   *
   *          <p>The name of the job definition.</p>
   *
   */
  jobDefinitionName: string | undefined;

  /**
   *
   *          <p>An object with various properties specific to multi-node parallel jobs.</p>
   *
   */
  nodeProperties?: NodeProperties;

  /**
   *
   *          <p>Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are
   *    specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding
   *    parameter defaults from the job definition. For more information about specifying parameters, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html">Job Definition Parameters</a>
   *    in the <i>AWS Batch User Guide</i>.</p>
   *
   */
  parameters?: { [key: string]: string };

  /**
   *
   *          <p>The retry strategy to use for failed jobs that are submitted with this job definition.</p>
   *
   */
  retryStrategy?: RetryStrategy;

  /**
   *
   *          <p>The revision of the job definition.</p>
   *
   */
  revision: number | undefined;

  /**
   *
   *          <p>The status of the job definition.</p>
   *
   */
  status?: string;

  /**
   *
   *          <p>The timeout configuration for jobs that are submitted with this job definition. You can specify a timeout
   *    duration after which AWS Batch terminates your jobs if they have not finished.</p>
   *
   */
  timeout?: JobTimeout;

  /**
   *
   *          <p>The type of job definition.</p>
   *
   */
  type: string | undefined;
}

export namespace JobDefinition {
  export function isa(o: any): o is JobDefinition {
    return _smithy.isa(o, "JobDefinition");
  }
}

export enum JobDefinitionType {
  Container = "container",
  Multinode = "multinode"
}

/**
 *
 *          <p>An object representing an AWS Batch job dependency.</p>
 *
 */
export interface JobDependency {
  __type?: "JobDependency";
  /**
   *
   *          <p>The job ID of the AWS Batch job associated with this dependency.</p>
   *
   */
  jobId?: string;

  /**
   *
   *          <p>The type of the job dependency.</p>
   *
   */
  type?: ArrayJobDependency | string;
}

export namespace JobDependency {
  export function isa(o: any): o is JobDependency {
    return _smithy.isa(o, "JobDependency");
  }
}

/**
 *
 *          <p>An object representing an AWS Batch job.</p>
 *
 */
export interface JobDetail {
  __type?: "JobDetail";
  /**
   *
   *          <p>The array properties of the job, if it is an array job.</p>
   *
   */
  arrayProperties?: ArrayPropertiesDetail;

  /**
   *
   *          <p>A list of job attempts associated with this job.</p>
   *
   */
  attempts?: Array<AttemptDetail>;

  /**
   *
   *          <p>An object representing the details of the container that is associated with the job.</p>
   *
   */
  container?: ContainerDetail;

  /**
   *
   *          <p>The Unix timestamp (in seconds and milliseconds) for when the job was created. For non-array jobs and parent
   *    array jobs, this is when the job entered the <code>SUBMITTED</code> state (at the time <a>SubmitJob</a>
   *    was called). For array child jobs, this is when the child job was spawned by its parent and entered the
   *     <code>PENDING</code> state.</p>
   *
   */
  createdAt?: number;

  /**
   *
   *          <p>A list of job names or IDs on which this job depends.</p>
   *
   */
  dependsOn?: Array<JobDependency>;

  /**
   *
   *          <p>The job definition that is used by this job.</p>
   *
   */
  jobDefinition: string | undefined;

  /**
   *
   *          <p>The ID for the job.</p>
   *
   */
  jobId: string | undefined;

  /**
   *
   *          <p>The name of the job.</p>
   *
   */
  jobName: string | undefined;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the job queue with which the job is associated.</p>
   *
   */
  jobQueue: string | undefined;

  /**
   *
   *          <p>An object representing the details of a node that is associated with a multi-node parallel job.</p>
   *
   */
  nodeDetails?: NodeDetails;

  /**
   *
   *          <p>An object representing the node properties of a multi-node parallel job.</p>
   *
   */
  nodeProperties?: NodeProperties;

  /**
   *
   *          <p>Additional parameters passed to the job that replace parameter substitution placeholders or override any
   *    corresponding parameter defaults from the job definition.</p>
   *
   */
  parameters?: { [key: string]: string };

  /**
   *
   *          <p>The retry strategy to use for this job if an attempt fails.</p>
   *
   */
  retryStrategy?: RetryStrategy;

  /**
   *
   *          <p>The Unix timestamp (in seconds and milliseconds) for when the job was started (when the job transitioned from
   *    the <code>STARTING</code> state to the <code>RUNNING</code> state).</p>
   *
   */
  startedAt: number | undefined;

  /**
   *
   *          <p>The current status for the job.</p>
   *          <note>
   *             <p>If your jobs do not progress to <code>STARTING</code>, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#job_stuck_in_runnable">Jobs Stuck in RUNNABLE
   *      Status</a> in the troubleshooting section of the <i>AWS Batch User Guide</i>.</p>
   *          </note>
   *
   */
  status: JobStatus | string | undefined;

  /**
   *
   *          <p>A short, human-readable string to provide additional details about the current status of the job.</p>
   *
   */
  statusReason?: string;

  /**
   *
   *          <p>The Unix timestamp (in seconds and milliseconds) for when the job was stopped (when the job transitioned from
   *    the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>
   *
   */
  stoppedAt?: number;

  /**
   *
   *          <p>The timeout configuration for the job.</p>
   *
   */
  timeout?: JobTimeout;
}

export namespace JobDetail {
  export function isa(o: any): o is JobDetail {
    return _smithy.isa(o, "JobDetail");
  }
}

/**
 *
 *          <p>An object representing the details of an AWS Batch job queue.</p>
 *
 */
export interface JobQueueDetail {
  __type?: "JobQueueDetail";
  /**
   *
   *          <p>The compute environments that are attached to the job queue and the order in which job placement is preferred.
   *    Compute environments are selected for job placement in ascending order.</p>
   *
   */
  computeEnvironmentOrder: Array<ComputeEnvironmentOrder> | undefined;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the job queue.</p>
   *
   */
  jobQueueArn: string | undefined;

  /**
   *
   *          <p>The name of the job queue.</p>
   *
   */
  jobQueueName: string | undefined;

  /**
   *
   *          <p>The priority of the job queue.</p>
   *
   */
  priority: number | undefined;

  /**
   *
   *          <p>Describes the ability of the queue to accept new jobs.</p>
   *
   */
  state: JQState | string | undefined;

  /**
   *
   *          <p>The status of the job queue (for example, <code>CREATING</code> or <code>VALID</code>).</p>
   *
   */
  status?: JQStatus | string;

  /**
   *
   *          <p>A short, human-readable string to provide additional details about the current status of the job queue.</p>
   *
   */
  statusReason?: string;
}

export namespace JobQueueDetail {
  export function isa(o: any): o is JobQueueDetail {
    return _smithy.isa(o, "JobQueueDetail");
  }
}

export enum JobStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNABLE = "RUNNABLE",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  SUBMITTED = "SUBMITTED",
  SUCCEEDED = "SUCCEEDED"
}

/**
 *
 *          <p>An object representing summary details of a job.</p>
 *
 */
export interface JobSummary {
  __type?: "JobSummary";
  /**
   *
   *          <p>The array properties of the job, if it is an array job.</p>
   *
   */
  arrayProperties?: ArrayPropertiesSummary;

  /**
   *
   *          <p>An object representing the details of the container that is associated with the job.</p>
   *
   */
  container?: ContainerSummary;

  /**
   *
   *          <p>The Unix timestamp for when the job was created. For non-array jobs and parent array jobs, this is when the job
   *    entered the <code>SUBMITTED</code> state (at the time <a>SubmitJob</a> was called). For array child jobs,
   *    this is when the child job was spawned by its parent and entered the <code>PENDING</code> state.</p>
   *
   */
  createdAt?: number;

  /**
   *
   *          <p>The ID of the job.</p>
   *
   */
  jobId: string | undefined;

  /**
   *
   *          <p>The name of the job.</p>
   *
   */
  jobName: string | undefined;

  /**
   *
   *          <p>The node properties for a single node in a job summary list.</p>
   *
   */
  nodeProperties?: NodePropertiesSummary;

  /**
   *
   *          <p>The Unix timestamp for when the job was started (when the job transitioned from the <code>STARTING</code> state
   *    to the <code>RUNNING</code> state).</p>
   *
   */
  startedAt?: number;

  /**
   *
   *          <p>The current status for the job.</p>
   *
   */
  status?: JobStatus | string;

  /**
   *
   *          <p>A short, human-readable string to provide additional details about the current status of the job.</p>
   *
   */
  statusReason?: string;

  /**
   *
   *          <p>The Unix timestamp for when the job was stopped (when the job transitioned from the <code>RUNNING</code> state
   *    to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>
   *
   */
  stoppedAt?: number;
}

export namespace JobSummary {
  export function isa(o: any): o is JobSummary {
    return _smithy.isa(o, "JobSummary");
  }
}

/**
 *
 *          <p>An object representing a job timeout configuration.</p>
 *
 */
export interface JobTimeout {
  __type?: "JobTimeout";
  /**
   *
   *          <p>The time duration in seconds (measured from the job attempt's <code>startedAt</code> timestamp) after which
   *    AWS Batch terminates your jobs if they have not finished.</p>
   *
   */
  attemptDurationSeconds?: number;
}

export namespace JobTimeout {
  export function isa(o: any): o is JobTimeout {
    return _smithy.isa(o, "JobTimeout");
  }
}

/**
 *
 *          <p>A key-value pair object.</p>
 *
 */
export interface KeyValuePair {
  __type?: "KeyValuePair";
  /**
   *
   *          <p>The name of the key-value pair. For environment variables, this is the name of the environment variable.</p>
   *
   */
  name?: string;

  /**
   *
   *          <p>The value of the key-value pair. For environment variables, this is the value of the environment
   *    variable.</p>
   *
   */
  value?: string;
}

export namespace KeyValuePair {
  export function isa(o: any): o is KeyValuePair {
    return _smithy.isa(o, "KeyValuePair");
  }
}

/**
 *
 *          <p>An object representing a launch template associated with a compute resource. You must specify either the launch
 *    template ID or launch template name in the request, but not both.</p>
 *
 */
export interface LaunchTemplateSpecification {
  __type?: "LaunchTemplateSpecification";
  /**
   *
   *          <p>The ID of the launch template.</p>
   *
   */
  launchTemplateId?: string;

  /**
   *
   *          <p>The name of the launch template.</p>
   *
   */
  launchTemplateName?: string;

  /**
   *
   *          <p>The version number of the launch template.</p>
   *          <p>Default: The default version of the launch template.</p>
   *
   */
  version?: string;
}

export namespace LaunchTemplateSpecification {
  export function isa(o: any): o is LaunchTemplateSpecification {
    return _smithy.isa(o, "LaunchTemplateSpecification");
  }
}

/**
 *
 *          <p>Linux-specific modifications that are applied to the container, such as details for device mappings.</p>
 *
 */
export interface LinuxParameters {
  __type?: "LinuxParameters";
  /**
   *
   *          <p>Any host devices to expose to the container. This parameter maps to <code>Devices</code> in the
   *    <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--device</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *
   */
  devices?: Array<Device>;
}

export namespace LinuxParameters {
  export function isa(o: any): o is LinuxParameters {
    return _smithy.isa(o, "LinuxParameters");
  }
}

export interface ListJobsRequest {
  __type?: "ListJobsRequest";
  /**
   *
   *          <p>The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the
   *    specified array.</p>
   *
   */
  arrayJobId?: string;

  /**
   *
   *          <p>The name or full Amazon Resource Name (ARN) of the job queue with which to list jobs.</p>
   *
   */
  jobQueue?: string;

  /**
   *
   *          <p>The job status with which to filter jobs in the specified queue. If you do not specify a status, only
   *     <code>RUNNING</code> jobs are returned.</p>
   *
   */
  jobStatus?: JobStatus | string;

  /**
   *
   *          <p>The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is
   *    used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page along with a
   *     <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another
   *     <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between
   *    1 and 100. If this parameter is not used, then <code>ListJobs</code> returns up to
   *    100 results and a <code>nextToken</code> value if applicable.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all
   *    nodes that are associated with the specified job.</p>
   *
   */
  multiNodeJobId?: string;

  /**
   *
   *          <p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where
   *     <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the
   *    end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when
   *    there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   *
   */
  nextToken?: string;
}

export namespace ListJobsRequest {
  export function isa(o: any): o is ListJobsRequest {
    return _smithy.isa(o, "ListJobsRequest");
  }
}

export interface ListJobsResponse extends $MetadataBearer {
  __type?: "ListJobsResponse";
  /**
   *
   *          <p>A list of job summaries that match the request.</p>
   *
   */
  jobSummaryList: Array<JobSummary> | undefined;

  /**
   *
   *          <p>The <code>nextToken</code> value to include in a future <code>ListJobs</code> request. When the results of a
   *     <code>ListJobs</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of
   *    results. This value is <code>null</code> when there are no more results to return.</p>
   *
   */
  nextToken?: string;
}

export namespace ListJobsResponse {
  export function isa(o: any): o is ListJobsResponse {
    return _smithy.isa(o, "ListJobsResponse");
  }
}

/**
 *
 *          <p>Details on a Docker volume mount point that is used in a job's container properties. This parameter maps to
 *     <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a
 *     container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run.</p>
 *
 */
export interface MountPoint {
  __type?: "MountPoint";
  /**
   *
   *          <p>The path on the container at which to mount the host volume.</p>
   *
   */
  containerPath?: string;

  /**
   *
   *          <p>If this value is <code>true</code>, the container has read-only access to the volume; otherwise, the container
   *    can write to the volume. The default value is <code>false</code>.</p>
   *
   */
  readOnly?: boolean;

  /**
   *
   *          <p>The name of the volume to mount.</p>
   *
   */
  sourceVolume?: string;
}

export namespace MountPoint {
  export function isa(o: any): o is MountPoint {
    return _smithy.isa(o, "MountPoint");
  }
}

/**
 *
 *          <p>An object representing the elastic network interface for a multi-node parallel job node.</p>
 *
 */
export interface NetworkInterface {
  __type?: "NetworkInterface";
  /**
   *
   *          <p>The attachment ID for the network interface.</p>
   *
   */
  attachmentId?: string;

  /**
   *
   *          <p>The private IPv6 address for the network interface.</p>
   *
   */
  ipv6Address?: string;

  /**
   *
   *          <p>The private IPv4 address for the network interface.</p>
   *
   */
  privateIpv4Address?: string;
}

export namespace NetworkInterface {
  export function isa(o: any): o is NetworkInterface {
    return _smithy.isa(o, "NetworkInterface");
  }
}

/**
 *
 *          <p>An object representing the details of a multi-node parallel job node.</p>
 *
 */
export interface NodeDetails {
  __type?: "NodeDetails";
  /**
   *
   *          <p>Specifies whether the current node is the main node for a multi-node parallel job.</p>
   *
   */
  isMainNode?: boolean;

  /**
   *
   *          <p>The node index for the node. Node index numbering begins at zero. This index is also available on the node with
   *    the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.</p>
   *
   */
  nodeIndex?: number;
}

export namespace NodeDetails {
  export function isa(o: any): o is NodeDetails {
    return _smithy.isa(o, "NodeDetails");
  }
}

/**
 *
 *          <p>Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API
 *    operation.</p>
 *
 */
export interface NodeOverrides {
  __type?: "NodeOverrides";
  /**
   *
   *          <p>The node property overrides for the job.</p>
   *
   */
  nodePropertyOverrides?: Array<NodePropertyOverride>;

  /**
   *
   *          <p>The number of nodes to use with a multi-node parallel job. This value overrides the number of nodes that are
   *    specified in the job definition. To use this override:</p>
   *          <ul>
   *             <li>
   *                <p>There must be at least one node range in your job definition that has an open upper boundary (such as
   *       <code>:</code> or <code>n:</code>).</p>
   *             </li>
   *             <li>
   *                <p>The lower boundary of the node range specified in the job definition must be fewer than the number of nodes
   *      specified in the override.</p>
   *             </li>
   *             <li>
   *                <p>The main node index specified in the job definition must be fewer than the number of nodes specified in the
   *      override.</p>
   *             </li>
   *          </ul>
   *
   */
  numNodes?: number;
}

export namespace NodeOverrides {
  export function isa(o: any): o is NodeOverrides {
    return _smithy.isa(o, "NodeOverrides");
  }
}

/**
 *
 *          <p>An object representing the node properties of a multi-node parallel job.</p>
 *
 */
export interface NodeProperties {
  __type?: "NodeProperties";
  /**
   *
   *          <p>Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer
   *    than the number of nodes.</p>
   *
   */
  mainNode: number | undefined;

  /**
   *
   *          <p>A list of node ranges and their properties associated with a multi-node parallel job.</p>
   *
   */
  nodeRangeProperties: Array<NodeRangeProperty> | undefined;

  /**
   *
   *          <p>The number of nodes associated with a multi-node parallel job.</p>
   *
   */
  numNodes: number | undefined;
}

export namespace NodeProperties {
  export function isa(o: any): o is NodeProperties {
    return _smithy.isa(o, "NodeProperties");
  }
}

/**
 *
 *          <p>An object representing the properties of a node that is associated with a multi-node parallel job.</p>
 *
 */
export interface NodePropertiesSummary {
  __type?: "NodePropertiesSummary";
  /**
   *
   *          <p>Specifies whether the current node is the main node for a multi-node parallel job.</p>
   *
   */
  isMainNode?: boolean;

  /**
   *
   *          <p>The node index for the node. Node index numbering begins at zero. This index is also available on the node with
   *    the <code>AWS_BATCH_JOB_NODE_INDEX</code> environment variable.</p>
   *
   */
  nodeIndex?: number;

  /**
   *
   *          <p>The number of nodes associated with a multi-node parallel job.</p>
   *
   */
  numNodes?: number;
}

export namespace NodePropertiesSummary {
  export function isa(o: any): o is NodePropertiesSummary {
    return _smithy.isa(o, "NodePropertiesSummary");
  }
}

/**
 *
 *          <p>Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API
 *    operation.</p>
 *
 */
export interface NodePropertyOverride {
  __type?: "NodePropertyOverride";
  /**
   *
   *          <p>The overrides that should be sent to a node range.</p>
   *
   */
  containerOverrides?: ContainerOverrides;

  /**
   *
   *          <p>The range of nodes, using node index values, with which to override. A range of <code>0:3</code> indicates nodes
   *    with index values of <code>0</code> through <code>3</code>. If the starting range value is omitted (<code>:n</code>),
   *    then <code>0</code> is used to start the range. If the ending range value is omitted (<code>n:</code>), then the
   *    highest possible node index is used to end the range.</p>
   *
   */
  targetNodes: string | undefined;
}

export namespace NodePropertyOverride {
  export function isa(o: any): o is NodePropertyOverride {
    return _smithy.isa(o, "NodePropertyOverride");
  }
}

/**
 *
 *          <p>An object representing the properties of the node range for a multi-node parallel job.</p>
 *
 */
export interface NodeRangeProperty {
  __type?: "NodeRangeProperty";
  /**
   *
   *          <p>The container details for the node range.</p>
   *
   */
  container?: ContainerProperties;

  /**
   *
   *          <p>The range of nodes, using node index values. A range of <code>0:3</code> indicates nodes with index values of
   *     <code>0</code> through <code>3</code>. If the starting range value is omitted (<code>:n</code>), then <code>0</code>
   *    is used to start the range. If the ending range value is omitted (<code>n:</code>), then the highest possible node
   *    index is used to end the range. Your accumulative node ranges must account for all nodes (0:n). You may nest node
   *    ranges, for example 0:10 and 4:5, in which case the 4:5 range properties override the 0:10 properties.</p>
   *
   */
  targetNodes: string | undefined;
}

export namespace NodeRangeProperty {
  export function isa(o: any): o is NodeRangeProperty {
    return _smithy.isa(o, "NodeRangeProperty");
  }
}

export interface RegisterJobDefinitionRequest {
  __type?: "RegisterJobDefinitionRequest";
  /**
   *
   *          <p>An object with various properties specific to single-node container-based jobs. If the job definition's
   *     <code>type</code> parameter is <code>container</code>, then you must specify either <code>containerProperties</code>
   *    or <code>nodeProperties</code>.</p>
   *
   */
  containerProperties?: ContainerProperties;

  /**
   *
   *          <p>The name of the job definition to register. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and
   *    underscores are allowed.</p>
   *
   */
  jobDefinitionName: string | undefined;

  /**
   *
   *          <p>An object with various properties specific to multi-node parallel jobs. If you specify node properties for a
   *    job, it becomes a multi-node parallel job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-parallel-jobs.html">Multi-node Parallel Jobs</a> in the
   *     <i>AWS Batch User Guide</i>. If the job definition's <code>type</code> parameter is
   *    <code>container</code>, then you must specify either <code>containerProperties</code> or
   *    <code>nodeProperties</code>.</p>
   *
   */
  nodeProperties?: NodeProperties;

  /**
   *
   *          <p>Default parameter substitution placeholders to set in the job definition. Parameters are specified as a
   *    key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults
   *    from the job definition.</p>
   *
   */
  parameters?: { [key: string]: string };

  /**
   *
   *          <p>The retry strategy to use for failed jobs that are submitted with this job definition. Any retry strategy that
   *    is specified during a <a>SubmitJob</a> operation overrides the retry strategy defined here. If a job is
   *    terminated due to a timeout, it is not retried.</p>
   *
   */
  retryStrategy?: RetryStrategy;

  /**
   *
   *          <p>The timeout configuration for jobs that are submitted with this job definition, after which AWS Batch terminates
   *    your jobs if they have not finished. If a job is terminated due to a timeout, it is not retried. The minimum value
   *    for the timeout is 60 seconds. Any timeout configuration that is specified during a <a>SubmitJob</a>
   *    operation overrides the timeout configuration defined here. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html">Job Timeouts</a> in the
   *     <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   */
  timeout?: JobTimeout;

  /**
   *
   *          <p>The type of job definition.</p>
   *
   */
  type: JobDefinitionType | string | undefined;
}

export namespace RegisterJobDefinitionRequest {
  export function isa(o: any): o is RegisterJobDefinitionRequest {
    return _smithy.isa(o, "RegisterJobDefinitionRequest");
  }
}

export interface RegisterJobDefinitionResponse extends $MetadataBearer {
  __type?: "RegisterJobDefinitionResponse";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the job definition.</p>
   *
   */
  jobDefinitionArn: string | undefined;

  /**
   *
   *          <p>The name of the job definition.</p>
   *
   */
  jobDefinitionName: string | undefined;

  /**
   *
   *          <p>The revision of the job definition.</p>
   *
   */
  revision: number | undefined;
}

export namespace RegisterJobDefinitionResponse {
  export function isa(o: any): o is RegisterJobDefinitionResponse {
    return _smithy.isa(o, "RegisterJobDefinitionResponse");
  }
}

/**
 *
 *          <p>The type and amount of a resource to assign to a container. Currently, the only supported resource type is
 *     <code>GPU</code>.</p>
 *
 */
export interface ResourceRequirement {
  __type?: "ResourceRequirement";
  /**
   *
   *          <p>The type of resource to assign to a container. Currently, the only supported resource type is
   *    <code>GPU</code>.</p>
   *
   */
  type: ResourceType | string | undefined;

  /**
   *
   *          <p>The number of physical GPUs to reserve for the container. The number of GPUs reserved for all containers in a
   *    job should not exceed the number of available GPUs on the compute resource that the job is launched on.</p>
   *
   */
  value: string | undefined;
}

export namespace ResourceRequirement {
  export function isa(o: any): o is ResourceRequirement {
    return _smithy.isa(o, "ResourceRequirement");
  }
}

export enum ResourceType {
  GPU = "GPU"
}

/**
 *
 *          <p>The retry strategy associated with a job.</p>
 *
 */
export interface RetryStrategy {
  __type?: "RetryStrategy";
  /**
   *
   *          <p>The number of times to move a job to the <code>RUNNABLE</code> status. You may specify between 1 and 10
   *    attempts. If the value of <code>attempts</code> is greater than one, the job is retried on failure the same number of
   *    attempts as the value.</p>
   *
   */
  attempts?: number;
}

export namespace RetryStrategy {
  export function isa(o: any): o is RetryStrategy {
    return _smithy.isa(o, "RetryStrategy");
  }
}

/**
 *
 *          <p>These errors are usually caused by a server issue.</p>
 *
 */
export interface ServerException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ServerException";
  name: "ServerException";
  $fault: "server";
  message?: string;
}

export namespace ServerException {
  export function isa(o: any): o is ServerException {
    return _smithy.isa(o, "ServerException");
  }
}

export interface SubmitJobRequest {
  __type?: "SubmitJobRequest";
  /**
   *
   *          <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and
   *    10,000. If you specify array properties for a job, it becomes an array job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/array_jobs.html">Array Jobs</a> in the
   *     <i>AWS Batch User Guide</i>.</p>
   *
   */
  arrayProperties?: ArrayProperties;

  /**
   *
   *          <p>A list of container overrides in JSON format that specify the name of a container in the specified job
   *    definition and the overrides it should receive. You can override the default command for a container (that is
   *    specified in the job definition or the Docker image) with a <code>command</code> override. You can also override
   *    existing environment variables (that are specified in the job definition or Docker image) on a container or add new
   *    environment variables to it with an <code>environment</code> override.</p>
   *
   */
  containerOverrides?: ContainerOverrides;

  /**
   *
   *          <p>A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a
   *     <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job
   *    completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job
   *    ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each
   *    dependency to complete before it can begin.</p>
   *
   */
  dependsOn?: Array<JobDependency>;

  /**
   *
   *          <p>The job definition used by this job. This value can be either a <code>name:revision</code> or the Amazon Resource Name (ARN) for
   *    the job definition.</p>
   *
   */
  jobDefinition: string | undefined;

  /**
   *
   *          <p>The name of the job. The first character must be alphanumeric, and up to 128 letters (uppercase and lowercase),
   *    numbers, hyphens, and underscores are allowed.</p>
   *
   */
  jobName: string | undefined;

  /**
   *
   *          <p>The job queue into which the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the
   *    queue.</p>
   *
   */
  jobQueue: string | undefined;

  /**
   *
   *          <p>A list of node overrides in JSON format that specify the node range to target and the container overrides for
   *    that node range.</p>
   *
   */
  nodeOverrides?: NodeOverrides;

  /**
   *
   *          <p>Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job
   *    definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request
   *    override any corresponding parameter defaults from the job definition.</p>
   *
   */
  parameters?: { [key: string]: string };

  /**
   *
   *          <p>The retry strategy to use for failed jobs from this <a>SubmitJob</a> operation. When a retry strategy
   *    is specified here, it overrides the retry strategy defined in the job definition.</p>
   *
   */
  retryStrategy?: RetryStrategy;

  /**
   *
   *          <p>The timeout configuration for this <a>SubmitJob</a> operation. You can specify a timeout duration
   *    after which AWS Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it is
   *    not retried. The minimum value for the timeout is 60 seconds. This configuration overrides any timeout configuration
   *    specified in the job definition. For array jobs, child jobs have the same timeout configuration as the parent job.
   *    For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html">Job
   *     Timeouts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   */
  timeout?: JobTimeout;
}

export namespace SubmitJobRequest {
  export function isa(o: any): o is SubmitJobRequest {
    return _smithy.isa(o, "SubmitJobRequest");
  }
}

export interface SubmitJobResponse extends $MetadataBearer {
  __type?: "SubmitJobResponse";
  /**
   *
   *          <p>The unique identifier for the job.</p>
   *
   */
  jobId: string | undefined;

  /**
   *
   *          <p>The name of the job.</p>
   *
   */
  jobName: string | undefined;
}

export namespace SubmitJobResponse {
  export function isa(o: any): o is SubmitJobResponse {
    return _smithy.isa(o, "SubmitJobResponse");
  }
}

export interface TerminateJobRequest {
  __type?: "TerminateJobRequest";
  /**
   *
   *          <p>The AWS Batch job ID of the job to terminate.</p>
   *
   */
  jobId: string | undefined;

  /**
   *
   *          <p>A message to attach to the job that explains the reason for canceling it. This message is returned by future
   *     <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity
   *    logs.</p>
   *
   */
  reason: string | undefined;
}

export namespace TerminateJobRequest {
  export function isa(o: any): o is TerminateJobRequest {
    return _smithy.isa(o, "TerminateJobRequest");
  }
}

export interface TerminateJobResponse extends $MetadataBearer {
  __type?: "TerminateJobResponse";
}

export namespace TerminateJobResponse {
  export function isa(o: any): o is TerminateJobResponse {
    return _smithy.isa(o, "TerminateJobResponse");
  }
}

/**
 *
 *          <p>The <code>ulimit</code> settings to pass to the container.</p>
 *
 */
export interface Ulimit {
  __type?: "Ulimit";
  /**
   *
   *          <p>The hard limit for the <code>ulimit</code> type.</p>
   *
   */
  hardLimit: number | undefined;

  /**
   *
   *          <p>The <code>type</code> of the <code>ulimit</code>.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The soft limit for the <code>ulimit</code> type.</p>
   *
   */
  softLimit: number | undefined;
}

export namespace Ulimit {
  export function isa(o: any): o is Ulimit {
    return _smithy.isa(o, "Ulimit");
  }
}

export interface UpdateComputeEnvironmentRequest {
  __type?: "UpdateComputeEnvironmentRequest";
  /**
   *
   *          <p>The name or full Amazon Resource Name (ARN) of the compute environment to update.</p>
   *
   */
  computeEnvironment: string | undefined;

  /**
   *
   *          <p>Details of the compute resources managed by the compute environment. Required for a managed compute
   *    environment.</p>
   *
   */
  computeResources?: ComputeResourceUpdate;

  /**
   *
   *          <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your
   *    behalf.</p>
   *          <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN
   *    (this is recommended) or prefix the role name with the path.</p>
   *          <note>
   *             <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path
   *     prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the
   *      <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service
   *     role when you create compute environments.</p>
   *          </note>
   *
   */
  serviceRole?: string;

  /**
   *
   *          <p>The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs
   *    from a queue and scale in or out automatically based on the workload demand of its associated queues.</p>
   *
   */
  state?: CEState | string;
}

export namespace UpdateComputeEnvironmentRequest {
  export function isa(o: any): o is UpdateComputeEnvironmentRequest {
    return _smithy.isa(o, "UpdateComputeEnvironmentRequest");
  }
}

export interface UpdateComputeEnvironmentResponse extends $MetadataBearer {
  __type?: "UpdateComputeEnvironmentResponse";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   *
   */
  computeEnvironmentArn?: string;

  /**
   *
   *          <p>The name of the compute environment.</p>
   *
   */
  computeEnvironmentName?: string;
}

export namespace UpdateComputeEnvironmentResponse {
  export function isa(o: any): o is UpdateComputeEnvironmentResponse {
    return _smithy.isa(o, "UpdateComputeEnvironmentResponse");
  }
}

export interface UpdateJobQueueRequest {
  __type?: "UpdateJobQueueRequest";
  /**
   *
   *          <p>Details the set of compute environments mapped to a job queue and their order relative to each other. This is
   *    one of the parameters used by the job scheduler to determine which compute environment should execute a given
   *    job.</p>
   *
   */
  computeEnvironmentOrder?: Array<ComputeEnvironmentOrder>;

  /**
   *
   *          <p>The name or the Amazon Resource Name (ARN) of the job queue.</p>
   *
   */
  jobQueue: string | undefined;

  /**
   *
   *          <p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the
   *     <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is
   *    determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling
   *    preference over a job queue with a priority value of <code>1</code>.</p>
   *
   */
  priority?: number;

  /**
   *
   *          <p>Describes the queue's ability to accept new jobs.</p>
   *
   */
  state?: JQState | string;
}

export namespace UpdateJobQueueRequest {
  export function isa(o: any): o is UpdateJobQueueRequest {
    return _smithy.isa(o, "UpdateJobQueueRequest");
  }
}

export interface UpdateJobQueueResponse extends $MetadataBearer {
  __type?: "UpdateJobQueueResponse";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the job queue.</p>
   *
   */
  jobQueueArn?: string;

  /**
   *
   *          <p>The name of the job queue.</p>
   *
   */
  jobQueueName?: string;
}

export namespace UpdateJobQueueResponse {
  export function isa(o: any): o is UpdateJobQueueResponse {
    return _smithy.isa(o, "UpdateJobQueueResponse");
  }
}

/**
 *
 *          <p>A data volume used in a job's container properties.</p>
 *
 */
export interface Volume {
  __type?: "Volume";
  /**
   *
   *          <p>The contents of the <code>host</code> parameter determine whether your data volume persists on the host
   *    container instance and where it is stored. If the host parameter is empty, then the Docker daemon assigns a host path
   *    for your data volume. However, the data is not guaranteed to persist after the containers associated with it stop
   *    running.</p>
   *
   */
  host?: Host;

  /**
   *
   *          <p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. This name is referenced in the <code>sourceVolume</code>
   *    parameter of container definition <code>mountPoints</code>.</p>
   *
   */
  name?: string;
}

export namespace Volume {
  export function isa(o: any): o is Volume {
    return _smithy.isa(o, "Volume");
  }
}
