/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
  BigDecimal: { input: any; output: any; }
  DayOfWeek: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  ZonedDateTIme: { input: any; output: any; }
};

export type AcademiesChildTag = AcademiesTag & {
  __typename?: 'AcademiesChildTag';
  canBeDeleted: Scalars['Boolean']['output'];
  children: AcademiesChildTagsConnection;
  coordinates: AcademiesTagCoordinates;
  data: AcademiesTagData;
  id: Scalars['ID']['output'];
  kind: AcademiesTagKind;
  subId: Scalars['ID']['output'];
};


export type AcademiesChildTagChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type AcademiesChildTagsConnection = {
  __typename?: 'AcademiesChildTagsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AcademiesChildTagsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AcademiesChildTagsEdge = {
  __typename?: 'AcademiesChildTagsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AcademiesChildTag;
};

export type AcademiesCreateBranchRootInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type AcademiesCreateBranchRootPayload = {
  __typename?: 'AcademiesCreateBranchRootPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: OfferWrappersEdge;
};

export type AcademiesRootTag = AcademiesTag & {
  __typename?: 'AcademiesRootTag';
  canBeDeleted: Scalars['Boolean']['output'];
  children: AcademiesChildTagsConnection;
  data: AcademiesTagData;
  id: Scalars['ID']['output'];
  kind: AcademiesTagKind;
  subId: Scalars['ID']['output'];
};


export type AcademiesRootTagChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type AcademiesRootTagsConnection = {
  __typename?: 'AcademiesRootTagsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AcademiesRootTagsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AcademiesRootTagsEdge = {
  __typename?: 'AcademiesRootTagsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AcademiesRootTag;
};

export type AcademiesTag = {
  canBeDeleted: Scalars['Boolean']['output'];
  children: AcademiesChildTagsConnection;
  data: AcademiesTagData;
  id: Scalars['ID']['output'];
  kind: AcademiesTagKind;
};


export type AcademiesTagChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Data only accessible by the admin */
export type AcademiesTagAdminMutationSchema = {
  __typename?: 'AcademiesTagAdminMutationSchema';
  createAndAppendChildTag?: Maybe<CreateAndAppendChildTagPayload>;
  createRootTag?: Maybe<CreateRootTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  editTag?: Maybe<EditTagPayload>;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminMutationSchemaCreateAndAppendChildTagArgs = {
  input: CreateAndAppendChildTagInput;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminMutationSchemaCreateRootTagArgs = {
  input: CreateRootTagInput;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminMutationSchemaDeleteTagArgs = {
  input: DeleteTagInput;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminMutationSchemaEditTagArgs = {
  input: EditTagInput;
};

/** Data only accessible by the admin */
export type AcademiesTagAdminSchema = {
  __typename?: 'AcademiesTagAdminSchema';
  RootTags: AcademiesRootTagsConnection;
  SelectTags: AcademiesTagsConnection;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminSchemaRootTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isClickable?: InputMaybe<Scalars['Boolean']['input']>;
  isTopic?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminSchemaSelectTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isClickable?: InputMaybe<Scalars['Boolean']['input']>;
  isRoot?: InputMaybe<Scalars['Boolean']['input']>;
  isTopic?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AcademiesTagCoordinates = {
  __typename?: 'AcademiesTagCoordinates';
  parent?: Maybe<AcademiesTag>;
  root?: Maybe<AcademiesRootTag>;
};

export type AcademiesTagData = {
  __typename?: 'AcademiesTagData';
  isClickable: Scalars['Boolean']['output'];
  isTopic: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export enum AcademiesTagKind {
  Child = 'Child',
  Root = 'Root'
}

export type AcademiesTagQueries = {
  __typename?: 'AcademiesTagQueries';
  AcademiesTags: AcademiesRootTagsConnection;
};


export type AcademiesTagQueriesAcademiesTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type AcademiesTagsConnection = {
  __typename?: 'AcademiesTagsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AcademiesTagsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AcademiesTagsEdge = {
  __typename?: 'AcademiesTagsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AcademiesTag;
};

export type AcceptInvitationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type AcceptInvitationPayload = {
  __typename?: 'AcceptInvitationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AcceptInviteWithNewUserInput = {
  adsOptIn: Scalars['Boolean']['input'];
  branch?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  rawPassword: Scalars['String']['input'];
  teamSize?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type AcceptInviteWithNewUserPayload = {
  __typename?: 'AcceptInviteWithNewUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  loginResult: LoginResult;
};

export type Account = Node & {
  __typename?: 'Account';
  extension: AccountExtension;
  groupAssociations: Array<AccountGroupAssociation>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  registeredAt: Scalars['ZonedDateTIme']['output'];
};

/** A connection to a list of items. */
export type AccountConnection = {
  __typename?: 'AccountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccountEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AccountEdge = {
  __typename?: 'AccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Account;
};

export type AccountExtension = {
  doNotUse: Scalars['String']['output'];
};

export type AccountExtensionImpl = AccountExtension & {
  __typename?: 'AccountExtensionImpl';
  doNotUse: Scalars['String']['output'];
  licenses: LicenseConnection;
  users: UserInAccountConnection;
};


export type AccountExtensionImplLicensesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AccountExtensionImplUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AccountGroup = Node & {
  __typename?: 'AccountGroup';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isBuiltIn: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission>;
};

export type AccountGroupAssociation = {
  __typename?: 'AccountGroupAssociation';
  group?: Maybe<AccountGroup>;
};

/** A connection to a list of items. */
export type AccountGroupsConnection = {
  __typename?: 'AccountGroupsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccountGroupsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AccountGroupsEdge = {
  __typename?: 'AccountGroupsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AccountGroup;
};

export type AccountPermissions = {
  __typename?: 'AccountPermissions';
  accountRef: Scalars['ID']['output'];
  permissions: Array<Permission>;
};

export type AcknowledgePublishingV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  publishingId: Scalars['ID']['input'];
};

export type AcknowledgePublishingV2Payload = {
  __typename?: 'AcknowledgePublishingV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  publishing: PublishingV2;
};

export type ActivateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type ActivateUserPayload = {
  __typename?: 'ActivateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ActiveAsyncContentSubmissionDefinition = AsyncContentSubmissionDefinition & ContentSubmissionDefinition & {
  __typename?: 'ActiveAsyncContentSubmissionDefinition';
  contentKind: ContentKind;
  element?: Maybe<AsyncLearnElement>;
  status: ContentSubmissionStatus;
};

export type ActiveELearningContentSubmissionDefinition = ContentSubmissionDefinition & ELearningContentSubmissionDefinition & {
  __typename?: 'ActiveELearningContentSubmissionDefinition';
  canGoToNext: Scalars['Boolean']['output'];
  canGoToPrevious: Scalars['Boolean']['output'];
  contentKind: ContentKind;
  currentElementState?: Maybe<ElementState>;
  progress: ELearningContentSubmissionProgress;
  relativeProgress: ELearningContentSubmissionRelativeProgress;
  status: ContentSubmissionStatus;
};

export type ActiveELearningContentSubmissionProgress = ELearningContentSubmissionProgress & {
  __typename?: 'ActiveELearningContentSubmissionProgress';
  currentElementIndex: Scalars['Int']['output'];
  isAtLastElement: Scalars['Boolean']['output'];
  numElements: Scalars['Int']['output'];
  percentage: Scalars['Int']['output'];
};

export type AddAfterDateTimeDoNotRewardTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type AddAfterDateTimeDoNotRewardTreeConfigPayload = {
  __typename?: 'AddAfterDateTimeDoNotRewardTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddAfterDateTimeVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type AddAfterDateTimeVisibilityTreeConfigPayload = {
  __typename?: 'AddAfterDateTimeVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddBlockPermanentlyRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
  maximumTries: Scalars['Int']['input'];
};

export type AddBlockPermanentlyRestartIfFailedContentConfigPayload = {
  __typename?: 'AddBlockPermanentlyRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type AddBlockTemporarilyRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
  daysToBlock: Scalars['Int']['input'];
};

export type AddBlockTemporarilyRestartIfFailedContentConfigPayload = {
  __typename?: 'AddBlockTemporarilyRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type AddCanAfterStartingTreeStartContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type AddCanAfterStartingTreeStartContentConfigPayload = {
  __typename?: 'AddCanAfterStartingTreeStartContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddCanIfUnlockedStartContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type AddCanIfUnlockedStartContentConfigPayload = {
  __typename?: 'AddCanIfUnlockedStartContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddCanNotRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type AddCanNotRestartIfFailedContentConfigPayload = {
  __typename?: 'AddCanNotRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type AddColumnToMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  columnTitle: Scalars['String']['input'];
  correctAnswerContent: Scalars['String']['input'];
  matrixElementId: Scalars['ID']['input'];
};

export type AddColumnToMatrixElementPayload = {
  __typename?: 'AddColumnToMatrixElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type AddDefaultFileAttachmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  descriptionOpt?: InputMaybe<Scalars['String']['input']>;
  fileId: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  titleOpt?: InputMaybe<Scalars['String']['input']>;
};

export type AddDefaultFileAttachmentPayload = {
  __typename?: 'AddDefaultFileAttachmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  node: TreeNode;
};

export type AddDoNotRewardTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddDoNotRewardTreeConfigPayload = {
  __typename?: 'AddDoNotRewardTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddExternalLicenseRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  data: ExternalLicenseRewardDataInput;
};

export type AddExternalLicenseRewardPayload = {
  __typename?: 'AddExternalLicenseRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddHideVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddHideVisibilityTreeConfigPayload = {
  __typename?: 'AddHideVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddIhkCertificateRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type AddIhkCertificateRewardPayload = {
  __typename?: 'AddIHKCertificateRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddIfRepeatedDoNotRewardTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddIfRepeatedDoNotRewardTreeConfigPayload = {
  __typename?: 'AddIfRepeatedDoNotRewardTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddNotAfterDateTimeVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type AddNotAfterDateTimeVisibilityTreeConfigPayload = {
  __typename?: 'AddNotAfterDateTimeVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddOnlyAdminsVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddOnlyAdminsVisibilityTreeConfigPayload = {
  __typename?: 'AddOnlyAdminsVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddOnlyEditorsVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddOnlyEditorsVisibilityTreeConfigPayload = {
  __typename?: 'AddOnlyEditorsVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddOnlyIfTreeStateVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddOnlyIfTreeStateVisibilityTreeConfigPayload = {
  __typename?: 'AddOnlyIfTreeStateVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddOrderItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderElementId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type AddOrderItemPayload = {
  __typename?: 'AddOrderItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderElement: OrderElement;
};

export type AddParticipantAdminInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type AddParticipantAdminPayload = {
  __typename?: 'AddParticipantAdminPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddParticipantToBookingAsCoachInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type AddParticipantToBookingAsCoachPayload = {
  __typename?: 'AddParticipantToBookingAsCoachPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddParticipantToMyBookingInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type AddParticipantToMyBookingPayload = {
  __typename?: 'AddParticipantToMyBookingPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddPodcastHotspotToImageMapElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  durationInSec: Scalars['Int']['input'];
  imageMapElementId: Scalars['ID']['input'];
  podcastFileId: Scalars['ID']['input'];
  xInPixel: Scalars['Int']['input'];
  yInPixel: Scalars['Int']['input'];
};

export type AddPodcastHotspotToImageMapElementPayload = {
  __typename?: 'AddPodcastHotspotToImageMapElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  imageMapElement: ImageMapElement;
};

export type AddProductSelectionConditionInput = {
  amount: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  limitedCartDiscountId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type AddProductSelectionConditionPayload = {
  __typename?: 'AddProductSelectionConditionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  limitedCartDiscount: LimitedCartDiscount;
};

export type AddRowToMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  correctAnswerContent: Scalars['String']['input'];
  matrixElementId: Scalars['ID']['input'];
  rowTitle: Scalars['String']['input'];
};

export type AddRowToMatrixElementPayload = {
  __typename?: 'AddRowToMatrixElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type AddTextHotspotToImageMapElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageMapElementId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  xInPixel: Scalars['Int']['input'];
  yInPixel: Scalars['Int']['input'];
};

export type AddTextHotspotToImageMapElementPayload = {
  __typename?: 'AddTextHotspotToImageMapElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  imageMapElement: ImageMapElement;
};

export type AddUserToAccountAdminInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type AddUserToAccountAdminPayload = {
  __typename?: 'AddUserToAccountAdminPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userInAccount: UserInAccountEdge;
};

export type AddWordNoteInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  note: Scalars['String']['input'];
  wordId: Scalars['ID']['input'];
};

export type AddWordNotePayload = {
  __typename?: 'AddWordNotePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  inventory: WordInventory;
};

export type AddWordPackageRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  data: WordPackageRewardDataInput;
};

export type AddWordPackageRewardPayload = {
  __typename?: 'AddWordPackageRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddWordProficienciesRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type AddWordProficienciesRewardPayload = {
  __typename?: 'AddWordProficienciesRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddWordToPackageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  explanation: Scalars['String']['input'];
  translation?: InputMaybe<Scalars['String']['input']>;
  word: Scalars['String']['input'];
  wordPackageId: Scalars['ID']['input'];
};

export type AddWordToPackagePayload = {
  __typename?: 'AddWordToPackagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  wordPackage: WordPackage;
};

export type AddWrongAnswerInMatrixElementCellInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matrixCellId: Scalars['ID']['input'];
  matrixElementId: Scalars['ID']['input'];
  wrongAnswerContent: Scalars['String']['input'];
};

export type AddWrongAnswerInMatrixElementCellPayload = {
  __typename?: 'AddWrongAnswerInMatrixElementCellPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  lineOne: Scalars['String']['output'];
  lineTwo: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
};

export type AddressInput = {
  city: Scalars['String']['input'];
  lineOne: Scalars['String']['input'];
  lineTwo: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
};

/** Data only accessible by the admin */
export type AdminMutationType = {
  __typename?: 'AdminMutationType';
  AcademiesTag: AcademiesTagAdminMutationSchema;
  AsyncContent: AsyncContentAdminMutationSchema;
  Auth: AuthAdminMutationSchema;
  Billing: BillingAdminMutationSchema;
  Caching: CachingAdminMutationSchema;
  Coaching: CoachingAdminMutationSchema;
  ElearningV2: ElearningV2AdminMutationSchema;
  Email: EmailAdminMutationSchema;
  Files: FilesAdminMutationSchema;
  Instructor: InstructorAdminMutationSchema;
  Notification: NotificationAdminMutationSchema;
  PublishingV2: PublishingV2AdminMutationSchema;
  Settings: SettingsAdminMutationSchema;
  Staging: StagingAdminMutationSchema;
  Tag: TagAdminMutationSchema;
  Tree: TreeAdminMutationSchema;
  Vocab: VocabAdminMutationSchema;
};

/** Data only accessible by the admin */
export type AdminQueryType = {
  __typename?: 'AdminQueryType';
  AcademiesTag: AcademiesTagAdminSchema;
  AsyncContent: AsyncContentAdminSchema;
  Auth: AuthAdminSchema;
  Billing: BillingAdminSchema;
  Coaching: CoachingAdminSchema;
  Email: EmailAdminSchema;
  FeedbackV2: FeedbackV2AdminSchema;
  Files: FilesAdminSchema;
  Instructor: InstructorAdminSchema;
  LearnV2: LearnV2AdminSchema;
  Management: ManagementAdminSchema;
  Notification: NotificationAdminSchema;
  OfferWrapper: OfferWrapperAdminSchema;
  Settings: SettingsAdminSchema;
  Tag: TagAdminSchema;
  Tree: TreeAdminSchema;
  Vocab: VocabAdminSchema;
};

export type AdvertisementConfiguration = {
  __typename?: 'AdvertisementConfiguration';
  isFeatured: Scalars['Boolean']['output'];
};

export type AfterDateTimeDoNotRewardTreeConfig = RewardTreeConfig & {
  __typename?: 'AfterDateTimeDoNotRewardTreeConfig';
  configType: RewardTreeConfigType;
  dateTime: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type AfterDateTimeDoShowAnswerTreeConfig = ShowAnswerTreeConfig & {
  __typename?: 'AfterDateTimeDoShowAnswerTreeConfig';
  configType: ShowAnswerTreeConfigType;
  dateTime: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type AfterDateTimeVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'AfterDateTimeVisibilityTreeConfig';
  configType: VisibilityTreeConfigType;
  dateTime: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type AlwaysPassContentConfig = PassContentConfig & {
  __typename?: 'AlwaysPassContentConfig';
  configType: PassContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type AlwaysRestartContinueContentConfig = ContinueContentConfig & {
  __typename?: 'AlwaysRestartContinueContentConfig';
  configType: ContinueContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type AnonymizeAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type AnonymizeAccountPayload = {
  __typename?: 'AnonymizeAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type AnonymizeMyUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type AnonymizeMyUserPayload = {
  __typename?: 'AnonymizeMyUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AnswerMatrixElementCell = MatrixElementCell & {
  __typename?: 'AnswerMatrixElementCell';
  correctAnswer: MatrixElementCellCorrectAnswer;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: MatrixElementCellKind;
  wrongAnswers: Array<MatrixElementCellWrongAnswer>;
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type AnswerMatrixLearnElementCell = MatrixLearnElementCell & {
  __typename?: 'AnswerMatrixLearnElementCell';
  answers: Array<MatrixLearnElementAnswer>;
  kind: MatrixElementCellKind;
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type AnswerOptionV2 = {
  __typename?: 'AnswerOptionV2';
  answer: Scalars['String']['output'];
  image?: Maybe<File>;
  isCorrect: Scalars['Boolean']['output'];
};

export type AnswerOptionV2Input = {
  answer: Scalars['String']['input'];
  imageRef?: InputMaybe<Scalars['ID']['input']>;
  isCorrect: Scalars['Boolean']['input'];
};

export type AnswerOptionWithoutCorrect = {
  __typename?: 'AnswerOptionWithoutCorrect';
  answer: Scalars['String']['output'];
  image?: Maybe<File>;
};

export enum AnsweringTypeV2 {
  AllowMultipleAnswersAllCorrectMustBeGiven = 'allowMultipleAnswersAllCorrectMustBeGiven',
  AllowMultipleAnswersOnlySomeCorrectMustBeGiven = 'allowMultipleAnswersOnlySomeCorrectMustBeGiven',
  AllowOnlyOneAnswer = 'allowOnlyOneAnswer'
}

export type AppleIapData = PaymentProviderData & {
  __typename?: 'AppleIAPData';
  dataType: PaymentProviderDataType;
  paymentMethod: PaymentMethodType;
  receipt: Scalars['String']['output'];
};

/** Data only accessible by the admin */
export type AsyncContentAdminMutationSchema = {
  __typename?: 'AsyncContentAdminMutationSchema';
  createUploadAsyncElement?: Maybe<CreateUploadAsyncElementPayload>;
  editUploadAsyncElement?: Maybe<EditUploadAsyncElementPayload>;
  evaluateUploadAsyncElementTask?: Maybe<EvaluateUploadAsyncElementTaskPayload>;
};


/** Data only accessible by the admin */
export type AsyncContentAdminMutationSchemaCreateUploadAsyncElementArgs = {
  input: CreateUploadAsyncElementInput;
};


/** Data only accessible by the admin */
export type AsyncContentAdminMutationSchemaEditUploadAsyncElementArgs = {
  input: EditUploadAsyncElementInput;
};


/** Data only accessible by the admin */
export type AsyncContentAdminMutationSchemaEvaluateUploadAsyncElementTaskArgs = {
  input: EvaluateUploadAsyncElementTaskInput;
};

/** Data only accessible by the admin */
export type AsyncContentAdminSchema = {
  __typename?: 'AsyncContentAdminSchema';
  GetAsyncElementTasks: AsyncElementTasksConnection;
};


/** Data only accessible by the admin */
export type AsyncContentAdminSchemaGetAsyncElementTasksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AsyncContentMutations = {
  __typename?: 'AsyncContentMutations';
  submitUploadAsyncElement?: Maybe<SubmitUploadAsyncElementPayload>;
};


export type AsyncContentMutationsSubmitUploadAsyncElementArgs = {
  input: SubmitUploadAsyncElementInput;
};

export type AsyncContentSubmissionDefinition = {
  contentKind: ContentKind;
  element?: Maybe<AsyncLearnElement>;
  status: ContentSubmissionStatus;
};

export type AsyncContentTypeDefinition = ContentTypeDefinition & TypeDefinition & {
  __typename?: 'AsyncContentTypeDefinition';
  contentKind: ContentKind;
  continueConfig: ContinueContentConfig;
  definitionType: TypeDefinitionType;
  element?: Maybe<AsyncElement>;
  extension: ContentExtension;
  passConfig: PassContentConfig;
  restartIfFailedConfigs: Array<RestartIfFailedContentConfig>;
  restartIfPassedConfig: RestartIfPassedContentConfig;
  rewardConfig: RewardContentConfig;
  rewards: Array<Reward>;
  startConfigs: Array<StartContentConfig>;
};

export type AsyncElement = {
  assignedEvaluator?: Maybe<User>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: AsyncElementKind;
  taskDescription?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export enum AsyncElementKind {
  Upload = 'upload'
}

export type AsyncElementTask = {
  assignedEvaluator?: Maybe<User>;
  elementKind: AsyncElementKind;
  extension: AsyncElementTaskExtension;
  id: Scalars['ID']['output'];
  status: AsyncElementTaskStatus;
  submissionInfo: AsyncElementTaskSubmissionInfo;
};

export type AsyncElementTaskExtension = {
  doNotUse: Scalars['String']['output'];
};

export type AsyncElementTaskExtensionImpl = AsyncElementTaskExtension & {
  __typename?: 'AsyncElementTaskExtensionImpl';
  doNotUse: Scalars['String']['output'];
  hierarchy?: Maybe<AsyncElementTaskHierarchy>;
};

export type AsyncElementTaskHierarchy = {
  __typename?: 'AsyncElementTaskHierarchy';
  asyncContentTitle: Scalars['String']['output'];
  branchTitle: Scalars['String']['output'];
  rootTitle: Scalars['String']['output'];
};

export enum AsyncElementTaskStatus {
  Evaluated = 'Evaluated',
  Fresh = 'Fresh'
}

export type AsyncElementTaskSubmissionInfo = {
  __typename?: 'AsyncElementTaskSubmissionInfo';
  at: Scalars['ZonedDateTIme']['output'];
  by?: Maybe<User>;
};

/** A connection to a list of items. */
export type AsyncElementTasksConnection = {
  __typename?: 'AsyncElementTasksConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AsyncElementTasksEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AsyncElementTasksEdge = {
  __typename?: 'AsyncElementTasksEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AsyncElementTask;
};

export type AsyncLearnElement = {
  elementKind: AsyncElementKind;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  taskDescription: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type AtHeadTreeAdvancementResult = TreeAdvancementResult & {
  __typename?: 'AtHeadTreeAdvancementResult';
  status: TreeAdvancementStatus;
};

export type Attachment = {
  __typename?: 'Attachment';
  attachmentType?: Maybe<AttachmentTypeEnum>;
  descriptionOpt?: Maybe<Scalars['String']['output']>;
  file?: Maybe<File>;
  fileRef: Scalars['ID']['output'];
  titleOpt?: Maybe<Scalars['String']['output']>;
};

export enum AttachmentKind {
  DefaultFile = 'DefaultFile'
}

export enum AttachmentTypeEnum {
  DoesNotExist = 'doesNotExist'
}

export type AttachmentV2 = {
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: AttachmentKind;
  title?: Maybe<Scalars['String']['output']>;
};

/** Data only accessible by the admin */
export type AuthAdminMutationSchema = {
  __typename?: 'AuthAdminMutationSchema';
  addUserToAccount?: Maybe<AddUserToAccountAdminPayload>;
  anonymizeAccountAdmin?: Maybe<AnonymizeAccountPayload>;
  anonymizeUser?: Maybe<DeleteUserPayload>;
  createAccount?: Maybe<CreateAccountPayload>;
  createUserInAccount?: Maybe<CreateUserInAccountPayload>;
  editUser?: Maybe<EditUserPayload>;
  loginAsUserJwt?: Maybe<LoginAsUserJwtPayload>;
  removeUserFromAccount?: Maybe<RemoveUserFromAccountPayload>;
  setAccountGroups?: Maybe<SetAccountGroupsPayload>;
  setAccountName?: Maybe<SetAccountNamePayload>;
  setUserInAccountGroups?: Maybe<SetUserInAccountGroupsPayload>;
  triggerResendActivation?: Maybe<TriggerResendActivationPayload>;
  triggerResetPassword?: Maybe<TriggerResetPasswordPayload>;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaAddUserToAccountArgs = {
  input: AddUserToAccountAdminInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaAnonymizeAccountAdminArgs = {
  input: AnonymizeAccountInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaAnonymizeUserArgs = {
  input: DeleteUserInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaCreateAccountArgs = {
  input: CreateAccountInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaCreateUserInAccountArgs = {
  input: CreateUserInAccountInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaEditUserArgs = {
  input: EditUserInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaLoginAsUserJwtArgs = {
  input: LoginAsUserJwtInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaRemoveUserFromAccountArgs = {
  input: RemoveUserFromAccountInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaSetAccountGroupsArgs = {
  input: SetAccountGroupsInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaSetAccountNameArgs = {
  input: SetAccountNameInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaSetUserInAccountGroupsArgs = {
  input: SetUserInAccountGroupsInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaTriggerResendActivationArgs = {
  input: TriggerResendActivationInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaTriggerResetPasswordArgs = {
  input: TriggerResetPasswordInput;
};

/** Data only accessible by the admin */
export type AuthAdminSchema = {
  __typename?: 'AuthAdminSchema';
  Accounts: AccountConnection;
  GetUserInAccountGroups: Array<UserInAccountGroup>;
  SearchEditors: UserConnection;
  SelectAccounts: AccountConnection;
  SelectUsers: UserConnection;
  Users: UserConnection;
};


/** Data only accessible by the admin */
export type AuthAdminSchemaAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type AuthAdminSchemaGetUserInAccountGroupsArgs = {
  id: Scalars['ID']['input'];
};


/** Data only accessible by the admin */
export type AuthAdminSchemaSearchEditorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByNameOrEmail?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type AuthAdminSchemaSelectAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nameOpt?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type AuthAdminSchemaSelectUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByAccountId?: InputMaybe<Scalars['ID']['input']>;
  filterByNameOrEmail?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type AuthAdminSchemaUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByAccountId?: InputMaybe<Scalars['ID']['input']>;
  filterByNameOrEmail?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AuthMutations = {
  __typename?: 'AuthMutations';
  acceptInvitation?: Maybe<AcceptInvitationPayload>;
  acceptInvitationWithNewUser?: Maybe<AcceptInviteWithNewUserPayload>;
  activateUser?: Maybe<ActivateUserPayload>;
  deleteInvitation?: Maybe<DeleteInvitationPayload>;
  forgotPassword?: Maybe<ForgotPasswordPayload>;
  inviteUserToAccount?: Maybe<InviteUserToAccountPayload>;
  login?: Maybe<LoginPayload>;
  loginJwt?: Maybe<LoginJwtPayload>;
  registerUser?: Maybe<RegisterUserPayload>;
  removeUserFromMyAccount?: Maybe<RemoveUserFromMyAccountPayload>;
  resendActivation?: Maybe<ResendActivationPayload>;
  resetPasswordAndActivate?: Maybe<ResetPasswordAndActivatePayload>;
  switchAccount?: Maybe<SwitchAccountPayload>;
};


export type AuthMutationsAcceptInvitationArgs = {
  input: AcceptInvitationInput;
};


export type AuthMutationsAcceptInvitationWithNewUserArgs = {
  input: AcceptInviteWithNewUserInput;
};


export type AuthMutationsActivateUserArgs = {
  input: ActivateUserInput;
};


export type AuthMutationsDeleteInvitationArgs = {
  input: DeleteInvitationInput;
};


export type AuthMutationsForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type AuthMutationsInviteUserToAccountArgs = {
  input: InviteUserToAccountInput;
};


export type AuthMutationsLoginArgs = {
  input: LoginInput;
};


export type AuthMutationsLoginJwtArgs = {
  input: LoginJwtInput;
};


export type AuthMutationsRegisterUserArgs = {
  input: RegisterUserInput;
};


export type AuthMutationsRemoveUserFromMyAccountArgs = {
  input: RemoveUserFromMyAccountInput;
};


export type AuthMutationsResendActivationArgs = {
  input: ResendActivationInput;
};


export type AuthMutationsResetPasswordAndActivateArgs = {
  input: ResetPasswordAndActivateInput;
};


export type AuthMutationsSwitchAccountArgs = {
  input: SwitchAccountInput;
};

export type AuthQueries = {
  __typename?: 'AuthQueries';
  InvitationByToken?: Maybe<Invitation>;
  InvitationsToAccount: InvitationConnection;
};


export type AuthQueriesInvitationByTokenArgs = {
  token: Scalars['String']['input'];
};


export type AuthQueriesInvitationsToAccountArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Data partaining to the current user */
export type AuthViewerMutationSchema = {
  __typename?: 'AuthViewerMutationSchema';
  anonymizeMyUser?: Maybe<AnonymizeMyUserPayload>;
};


/** Data partaining to the current user */
export type AuthViewerMutationSchemaAnonymizeMyUserArgs = {
  input: AnonymizeMyUserInput;
};

/** Data partaining to the current user */
export type AuthViewerSchema = {
  __typename?: 'AuthViewerSchema';
  UsersInMyAccount: UserConnection;
  currentUser?: Maybe<CurrentUser>;
};


/** Data partaining to the current user */
export type AuthViewerSchemaUsersInMyAccountArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Availability = Node & {
  __typename?: 'Availability';
  booking: BookingInterface;
  coachProfile?: Maybe<CoachProfile>;
  data: AvailabilityData;
  feedback?: Maybe<CoachFeedback>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type AvailabilityConnection = {
  __typename?: 'AvailabilityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AvailabilityEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AvailabilityData = {
  __typename?: 'AvailabilityData';
  endDateTime: Scalars['ZonedDateTIme']['output'];
  startDateTime: Scalars['ZonedDateTIme']['output'];
};

export type AvailabilityDataInput = {
  endDateTime: Scalars['ZonedDateTIme']['input'];
  startDateTime: Scalars['ZonedDateTIme']['input'];
};

/** An edge in a connection. */
export type AvailabilityEdge = {
  __typename?: 'AvailabilityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Availability;
};

export type AvailabilitySchedule = Node & {
  __typename?: 'AvailabilitySchedule';
  coachRef: Scalars['ID']['output'];
  data: ScheduleData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type AvailabilityScheduleConnection = {
  __typename?: 'AvailabilityScheduleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AvailabilityScheduleEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AvailabilityScheduleDayAndTimes = {
  __typename?: 'AvailabilityScheduleDayAndTimes';
  dayOfWeek: Scalars['DayOfWeek']['output'];
  timeSlots: Array<Scalars['LocalTime']['output']>;
};

/** An edge in a connection. */
export type AvailabilityScheduleEdge = {
  __typename?: 'AvailabilityScheduleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AvailabilitySchedule;
};

export type BaseData = {
  __typename?: 'BaseData';
  address: Address;
  birthDate: Scalars['LocalDate']['output'];
  birthPlace: Scalars['String']['output'];
  gender: Gender;
  nationality: Scalars['String']['output'];
};

/** Data only accessible by the admin */
export type BillingAdminMutationSchema = {
  __typename?: 'BillingAdminMutationSchema';
  addProductSelectionCondition?: Maybe<AddProductSelectionConditionPayload>;
  createCoachingLicenseDefinition?: Maybe<CreateCoachingLicenseDefinitionPayload>;
  createContractPartner?: Maybe<CreateContractPartnerPayload>;
  createDiscountCode?: Maybe<CreateDiscountCodePayload>;
  createEuroDiscountAction?: Maybe<CreateEuroDiscountActionPayload>;
  createExternalLicense?: Maybe<CreateExternalLicensePayload>;
  createExternalLicensePool?: Maybe<CreateExternalLicensePoolPayload>;
  createLicenseProduct?: Maybe<CreateLicenseProductPayload>;
  createLicenses?: Maybe<CreateLicensesPayload>;
  createLimitedCartDiscount?: Maybe<CreateLimitedCartDiscountPayload>;
  createMicroLearningLicenseDefinition?: Maybe<CreateMicroLearningLicenseDefinitionPayload>;
  createPercentageDiscountAction?: Maybe<CreatePercentageDiscountActionPayload>;
  createRandomDiscountCodes?: Maybe<CreateRandomDiscountCodesPayload>;
  createTreeLicenseDefinition?: Maybe<CreateTreeLicenseDefinitionPayload>;
  deleteCondition?: Maybe<DeleteConditionPayload>;
  deleteContractPartner?: Maybe<DeleteContractPartnerPayload>;
  deleteDiscountAction?: Maybe<DeleteDiscountActionPayload>;
  deleteDiscountCode?: Maybe<DeleteDiscountCodePayload>;
  deleteExternalLicense?: Maybe<DeleteExternalLicensePayload>;
  deleteExternalLicensePool?: Maybe<DeleteExternalLicensePoolPayload>;
  deleteLicense?: Maybe<DeleteLicensePayload>;
  deleteLicenseDefinition?: Maybe<DeleteLicenseDefinitionPayload>;
  deleteLimitedCartDiscount?: Maybe<DeleteLimitedCartDiscountPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  editCoachingLicenseDefinitionAdminMutation?: Maybe<EditCoachingLicenseDefinitionAdminMutationPayload>;
  editContractPartnerData?: Maybe<EditContractPartnerDataPayload>;
  editDiscountCode?: Maybe<EditDiscountCodePayload>;
  editEuroDiscountAction?: Maybe<EditEuroDiscountActionPayload>;
  editExternalLicense?: Maybe<EditExternalLicensePayload>;
  editExternalLicensePool?: Maybe<EditExternalLicensePoolPayload>;
  editLicenseProduct?: Maybe<EditLicenseProductPayload>;
  editLimitedCartDiscount?: Maybe<EditLimitedCartDiscountPayload>;
  editMicroLicenseDefinitionAdminMutation?: Maybe<EditMicroLearningLicenseDefinitionAdminMutationPayload>;
  editPercentageDiscountAction?: Maybe<EditPercentageDiscountActionPayload>;
  editProductSelectionCondition?: Maybe<EditProductSelectionConditionPayload>;
  editTreeLicenseDefinitionAdminMutation?: Maybe<EditTreeLicenseDefinitionAdminMutationPayload>;
  generateAbsoluteCartLink?: Maybe<GenerateAbsoluteCartLinkPayload>;
  issueExternalLicense?: Maybe<IssueExternalLicensePayload>;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaAddProductSelectionConditionArgs = {
  input: AddProductSelectionConditionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateCoachingLicenseDefinitionArgs = {
  input: CreateCoachingLicenseDefinitionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateContractPartnerArgs = {
  input: CreateContractPartnerInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateDiscountCodeArgs = {
  input: CreateDiscountCodeInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateEuroDiscountActionArgs = {
  input: CreateEuroDiscountActionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateExternalLicenseArgs = {
  input: CreateExternalLicenseInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateExternalLicensePoolArgs = {
  input: CreateExternalLicensePoolInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateLicenseProductArgs = {
  input: CreateLicenseProductInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateLicensesArgs = {
  input: CreateLicensesInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateLimitedCartDiscountArgs = {
  input: CreateLimitedCartDiscountInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateMicroLearningLicenseDefinitionArgs = {
  input: CreateMicroLearningLicenseDefinitionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreatePercentageDiscountActionArgs = {
  input: CreatePercentageDiscountActionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateRandomDiscountCodesArgs = {
  input: CreateRandomDiscountCodesInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateTreeLicenseDefinitionArgs = {
  input: CreateTreeLicenseDefinitionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteConditionArgs = {
  input: DeleteConditionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteContractPartnerArgs = {
  input: DeleteContractPartnerInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteDiscountActionArgs = {
  input: DeleteDiscountActionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteDiscountCodeArgs = {
  input: DeleteDiscountCodeInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteExternalLicenseArgs = {
  input: DeleteExternalLicenseInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteExternalLicensePoolArgs = {
  input: DeleteExternalLicensePoolInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteLicenseArgs = {
  input: DeleteLicenseInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteLicenseDefinitionArgs = {
  input: DeleteLicenseDefinitionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteLimitedCartDiscountArgs = {
  input: DeleteLimitedCartDiscountInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteProductArgs = {
  input: DeleteProductInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditCoachingLicenseDefinitionAdminMutationArgs = {
  input: EditCoachingLicenseDefinitionAdminMutationInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditContractPartnerDataArgs = {
  input: EditContractPartnerDataInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditDiscountCodeArgs = {
  input: EditDiscountCodeInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditEuroDiscountActionArgs = {
  input: EditEuroDiscountActionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditExternalLicenseArgs = {
  input: EditExternalLicenseInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditExternalLicensePoolArgs = {
  input: EditExternalLicensePoolInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditLicenseProductArgs = {
  input: EditLicenseProductInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditLimitedCartDiscountArgs = {
  input: EditLimitedCartDiscountInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditMicroLicenseDefinitionAdminMutationArgs = {
  input: EditMicroLearningLicenseDefinitionAdminMutationInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditPercentageDiscountActionArgs = {
  input: EditPercentageDiscountActionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditProductSelectionConditionArgs = {
  input: EditProductSelectionConditionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditTreeLicenseDefinitionAdminMutationArgs = {
  input: EditTreeLicenseDefinitionAdminMutationInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaGenerateAbsoluteCartLinkArgs = {
  input: GenerateAbsoluteCartLinkInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaIssueExternalLicenseArgs = {
  input: IssueExternalLicenseInput;
};

/** Data only accessible by the admin */
export type BillingAdminSchema = {
  __typename?: 'BillingAdminSchema';
  ContractPartners: ContractPartnersConnection;
  DiscountActions: DiscountActionsConnection;
  DiscountsMultiselect: DiscountCodesV2Connection;
  GetExternalLicensePools: ExternalLicensePoolsConnection;
  GetExternalLicenses: ExternalLicensesConnection;
  LimitedCartDiscounts: LimitedCartDiscountConnection;
  Orders: OrdersConnection;
  SearchLicenseDefinitions: LicenseDefinitionConnection;
  SearchProducts: ProductsConnection;
  selectDiscountCodes: DiscountCodesV2Connection;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaContractPartnersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaDiscountActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByActionTitle?: InputMaybe<Scalars['String']['input']>;
  filterByCode?: InputMaybe<Scalars['String']['input']>;
  filterByDiscountTypeKind?: InputMaybe<DiscountTypeKindInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaDiscountsMultiselectArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  codeOpt?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaGetExternalLicensePoolsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nameOpt?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaGetExternalLicensesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isIssued?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pool?: InputMaybe<Scalars['ID']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaLimitedCartDiscountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaOrdersArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaSearchLicenseDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeMicroLearnings?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nameMatchRegex?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaSearchProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isHiddenOpt?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  titleOpt?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaSelectDiscountCodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type BillingDetails = {
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  customerType: CustomerType;
  firstName: Scalars['String']['output'];
  houseNumber: Scalars['String']['output'];
  invoiceEmail: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  salutation: SalutationType;
  street: Scalars['String']['output'];
};

export type BillingDetailsUpdate = HistoryEventInterface & {
  __typename?: 'BillingDetailsUpdate';
  kind: HistoryEventType;
};

export type BillingMutations = {
  __typename?: 'BillingMutations';
  changePaymentDate?: Maybe<ChangePaymentDatePayload>;
  changePaymentMethod?: Maybe<ChangePaymentMethodPayload>;
  createOrder?: Maybe<CreateOrderPayload>;
  payOrder?: Maybe<PayOrderPayload>;
  payOrderViaIAP?: Maybe<PayOrderViaIapPayload>;
  updateBusinessBillingDetails?: Maybe<UpdateBusinessBillingDetailsPayload>;
  updateCart?: Maybe<UpdateCartPayload>;
  updatePrivateBillingDetails?: Maybe<UpdatePrivateBillingDetailsPayload>;
};


export type BillingMutationsChangePaymentDateArgs = {
  input: ChangePaymentDateInput;
};


export type BillingMutationsChangePaymentMethodArgs = {
  input: ChangePaymentMethodInput;
};


export type BillingMutationsCreateOrderArgs = {
  input: CreateOrderInput;
};


export type BillingMutationsPayOrderArgs = {
  input: PayOrderInput;
};


export type BillingMutationsPayOrderViaIapArgs = {
  input: PayOrderViaIapInput;
};


export type BillingMutationsUpdateBusinessBillingDetailsArgs = {
  input: UpdateBusinessBillingDetailsInput;
};


export type BillingMutationsUpdateCartArgs = {
  input: UpdateCartInput;
};


export type BillingMutationsUpdatePrivateBillingDetailsArgs = {
  input: UpdatePrivateBillingDetailsInput;
};

/** Data partaining to the current user */
export type BillingViewerSchema = {
  __typename?: 'BillingViewerSchema';
  LicensesGroupedByDefinition: LicensesGroupedByDefinitionConnection;
  ViewerOrders: OrdersConnection;
};


/** Data partaining to the current user */
export type BillingViewerSchemaLicensesGroupedByDefinitionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data partaining to the current user */
export type BillingViewerSchemaViewerOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockPermanentlyRestartIfFailedContentConfig = RestartIfFailedContentConfig & {
  __typename?: 'BlockPermanentlyRestartIfFailedContentConfig';
  configType: RestartIfFailedContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  maximumTries: Scalars['Int']['output'];
};

export type BlockTemporarilyRestartIfFailedContentConfig = RestartIfFailedContentConfig & {
  __typename?: 'BlockTemporarilyRestartIfFailedContentConfig';
  configType: RestartIfFailedContentConfigType;
  daysToBlock: Scalars['Int']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type BlockedByTreeContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'BlockedByTreeContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus;
};

export type BlockoutDate = {
  __typename?: 'BlockoutDate';
  from: Scalars['ZonedDateTIme']['output'];
  to: Scalars['ZonedDateTIme']['output'];
};

export type BlockoutDateInput = {
  from: Scalars['ZonedDateTIme']['input'];
  to: Scalars['ZonedDateTIme']['input'];
};

export type BookCoachingInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingId: Scalars['ID']['input'];
};

export type BookCoachingPayload = {
  __typename?: 'BookCoachingPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type BookTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootId: Scalars['ID']['input'];
};

export type BookTreePayload = {
  __typename?: 'BookTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  root: LearnOpportunityV2;
};

export type BookedForGroup = BookingInterface & {
  __typename?: 'BookedForGroup';
  kind: BookingKind;
  msTeamsLink: Scalars['String']['output'];
  offer?: Maybe<CoachingOffer>;
  participants: Array<Participant>;
};

export type BookedOneToOne = BookingInterface & {
  __typename?: 'BookedOneToOne';
  kind: BookingKind;
  msTeamsLink: Scalars['String']['output'];
  offer?: Maybe<CoachingOffer>;
  participant: Participant;
};

export type BookingInterface = {
  kind: BookingKind;
};

export enum BookingKind {
  BookedForGroup = 'BookedForGroup',
  BookedOneToOne = 'BookedOneToOne',
  NotBooked = 'NotBooked'
}

export type BranchTypeDefinition = TypeDefinition & {
  __typename?: 'BranchTypeDefinition';
  childRefs: Array<Scalars['ID']['output']>;
  definitionType: TypeDefinitionType;
};

export type BusinessBillingDetails = BillingDetails & {
  __typename?: 'BusinessBillingDetails';
  city: Scalars['String']['output'];
  company: Scalars['String']['output'];
  companyDetails?: Maybe<Scalars['String']['output']>;
  companyType: CompanyType;
  country: Scalars['String']['output'];
  customerType: CustomerType;
  firstName: Scalars['String']['output'];
  houseNumber: Scalars['String']['output'];
  invoiceEmail: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  salutation: SalutationType;
  street: Scalars['String']['output'];
};

export type BusinessData = {
  __typename?: 'BusinessData';
  bic?: Maybe<Scalars['String']['output']>;
  employerNumber?: Maybe<Scalars['String']['output']>;
  iban?: Maybe<Scalars['String']['output']>;
  insuranceNumber?: Maybe<Scalars['String']['output']>;
  taxNumber?: Maybe<Scalars['String']['output']>;
};

export type BusinessDataInput = {
  bic?: InputMaybe<Scalars['String']['input']>;
  employerNumber?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  insuranceNumber?: InputMaybe<Scalars['String']['input']>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Data only accessible by the admin */
export type CachingAdminMutationSchema = {
  __typename?: 'CachingAdminMutationSchema';
  clearCache?: Maybe<ClearCachePayload>;
};


/** Data only accessible by the admin */
export type CachingAdminMutationSchemaClearCacheArgs = {
  input: ClearCacheInput;
};

export type CanAfterStartingTreeStartContentConfig = StartContentConfig & {
  __typename?: 'CanAfterStartingTreeStartContentConfig';
  configType: StartContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanBeRestartedAfterFailedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanBeRestartedAfterFailedContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus;
};

export type CanBeRestartedAfterPassedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanBeRestartedAfterPassedContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus;
};

export type CanBeStartedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanBeStartedContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus;
};

export type CanBeStartedTreeAdvancementResult = TreeAdvancementResult & {
  __typename?: 'CanBeStartedTreeAdvancementResult';
  status: TreeAdvancementStatus;
};

export type CanBeStartedViewerTreeState = ViewerTreeState & {
  __typename?: 'CanBeStartedViewerTreeState';
  kind: ViewerTreeStateKind;
};

export type CanContinueContentConfig = ContinueContentConfig & {
  __typename?: 'CanContinueContentConfig';
  configType: ContinueContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanIfInTreeFlowStartContentConfig = StartContentConfig & {
  __typename?: 'CanIfInTreeFlowStartContentConfig';
  configType: StartContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanIfUnlockedStartContentConfig = StartContentConfig & {
  __typename?: 'CanIfUnlockedStartContentConfig';
  configType: StartContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanNotBeRestartedAfterFailedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanNotBeRestartedAfterFailedContentNodeAdvancementResult';
  isPermanentlyBlocked: Scalars['Boolean']['output'];
  isTemporarilyBlockedUntil?: Maybe<Scalars['ZonedDateTIme']['output']>;
  reasonConfigTypes: Array<Scalars['String']['output']>;
  status: ContentNodeAdvancementStatus;
};

export type CanNotBeRestartedAfterPassedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanNotBeRestartedAfterPassedContentNodeAdvancementResult';
  reasonConfigTypes: Array<Scalars['String']['output']>;
  status: ContentNodeAdvancementStatus;
};

export type CanNotBeStartedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanNotBeStartedContentNodeAdvancementResult';
  reasonConfigTypes: Array<Scalars['String']['output']>;
  status: ContentNodeAdvancementStatus;
};

export type CanNotBeStartedTreeAdvancementResult = TreeAdvancementResult & {
  __typename?: 'CanNotBeStartedTreeAdvancementResult';
  reasonConfigTypes: Array<Scalars['String']['output']>;
  status: TreeAdvancementStatus;
};

export type CanNotBeStartedViewerTreeState = ViewerTreeState & {
  __typename?: 'CanNotBeStartedViewerTreeState';
  kind: ViewerTreeStateKind;
  reasonConfigTypes: Array<Scalars['String']['output']>;
};

export type CanNotRestartIfFailedContentConfig = RestartIfFailedContentConfig & {
  __typename?: 'CanNotRestartIfFailedContentConfig';
  configType: RestartIfFailedContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanNotRestartIfPassedContentConfig = RestartIfPassedContentConfig & {
  __typename?: 'CanNotRestartIfPassedContentConfig';
  configType: RestartIfPassedContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanNotStartContentConfig = StartContentConfig & {
  __typename?: 'CanNotStartContentConfig';
  configType: StartContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanNotStartTreeConfig = StartTreeConfig & {
  __typename?: 'CanNotStartTreeConfig';
  configType: StartTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanRestartIfPassedContentConfig = RestartIfPassedContentConfig & {
  __typename?: 'CanRestartIfPassedContentConfig';
  configType: RestartIfPassedContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanShowElementAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
};

export type CanShowElementAnswerPayload = {
  __typename?: 'CanShowElementAnswerPayload';
  can: Scalars['Boolean']['output'];
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CanSubmitElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  elementId: Scalars['ID']['input'];
};

export type CanSubmitElementPayload = {
  __typename?: 'CanSubmitElementPayload';
  can: Scalars['Boolean']['output'];
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CancelBookingAsCoachInput = {
  availabilityId: Scalars['ID']['input'];
  cancellationComment?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CancelBookingAsCoachPayload = {
  __typename?: 'CancelBookingAsCoachPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CancelBookingAsParticipantInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CancelBookingAsParticipantPayload = {
  __typename?: 'CancelBookingAsParticipantPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type Cart = {
  __typename?: 'Cart';
  discountCodeRefusals: Array<Refusal>;
  items: Array<Item>;
  otherAvailableProducts: ProductsConnection;
  paymentDates: Array<Scalars['ZonedDateTIme']['output']>;
  selection: Selection;
  totals: CartTotals;
};


export type CartOtherAvailableProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CartBulkDiscount = Item & {
  __typename?: 'CartBulkDiscount';
  discountPercentage: Scalars['BigDecimal']['output'];
  eligibleProductCount: Scalars['Int']['output'];
  itemType: ItemType;
};

export type CartClickout = {
  __typename?: 'CartClickout';
  absoluteLink: Scalars['String']['output'];
  netPrice: Price;
  relativeLink: Scalars['String']['output'];
};

export type CartDiscount = Item & {
  __typename?: 'CartDiscount';
  code: Scalars['String']['output'];
  itemType: ItemType;
  title: Scalars['String']['output'];
  validUntil?: Maybe<Scalars['ZonedDateTIme']['output']>;
  value: DiscountActionCalcType;
};

export type CartGlobalDiscount = Item & {
  __typename?: 'CartGlobalDiscount';
  itemType: ItemType;
  title: Scalars['String']['output'];
  value: DiscountActionCalcType;
};

export type CartLimitedDiscount = Item & {
  __typename?: 'CartLimitedDiscount';
  itemType: ItemType;
  title: Scalars['String']['output'];
  value: DiscountActionCalcType;
};

export type CartLinkProductsInput = {
  amount: Scalars['Int']['input'];
  productId: Scalars['ID']['input'];
};

export type CartProduct = Item & {
  __typename?: 'CartProduct';
  amount: Scalars['Int']['output'];
  individualPrice: Price;
  itemType: ItemType;
  product?: Maybe<Product>;
  totalPrice: Price;
};

export type CartSelectionInput = {
  createdByUser?: InputMaybe<Scalars['ID']['input']>;
  selectedDiscountCodes: Array<Scalars['String']['input']>;
  selectedProducts: Array<SelectedProductInput>;
};

export type CartTotals = {
  __typename?: 'CartTotals';
  appliedDiscount?: Maybe<Price>;
  appliedDiscountPercentage?: Maybe<Scalars['BigDecimal']['output']>;
  appliedMoneyDiscount?: Maybe<Scalars['BigDecimal']['output']>;
  includingAllDiscounts: Price;
  monthlyOptions: Array<MonthlyOption>;
  withoutDiscounts: Price;
};

export type CartUpdate = HistoryEventInterface & {
  __typename?: 'CartUpdate';
  kind: HistoryEventType;
};

export type CategoryResult = {
  __typename?: 'CategoryResult';
  benchmark?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  result?: Maybe<Scalars['Float']['output']>;
};

export type ChangePaymentDateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  paymentDate: Scalars['ZonedDateTIme']['input'];
};

export type ChangePaymentDatePayload = {
  __typename?: 'ChangePaymentDatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type ChangePaymentMethodInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  paymentMethodType: PaymentMethodType;
  paymentType: PaymentType;
  rateCount?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangePaymentMethodPayload = {
  __typename?: 'ChangePaymentMethodPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type ChildStructureDefinition = StructureDefinition & {
  __typename?: 'ChildStructureDefinition';
  coordinates: CoordinatesV2;
  definitionType: StructureType;
  title: Scalars['String']['output'];
};

export type CleanUpUserInputRelatedToStagingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CleanUpUserInputRelatedToStagingPayload = {
  __typename?: 'CleanUpUserInputRelatedToStagingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ClearCacheInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ClearCachePayload = {
  __typename?: 'ClearCachePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CloneTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type CloneTreePayload = {
  __typename?: 'CloneTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  clonedRootNode: TreeNodesEdge;
};

export type ClozeAnswer = {
  __typename?: 'ClozeAnswer';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type ClozePart = ClozeTextPart & {
  __typename?: 'ClozePart';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: ClozeTextPartKind;
};

export type ClozeTextElementV2 = ElementV2 & {
  __typename?: 'ClozeTextElementV2';
  additionalWords: Array<Scalars['String']['output']>;
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ClozeTextInputElementState = ElementState & InputElementState & {
  __typename?: 'ClozeTextInputElementState';
  checkedAnswers: Array<Scalars['ID']['output']>;
  element: LearnElement;
  kind: ElementStateKind;
};

export type ClozeTextLearnElement = LearnElement & {
  __typename?: 'ClozeTextLearnElement';
  elementType: ElementTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  parts: Array<ClozeTextPart>;
  shuffledAnswers: Array<ClozeAnswer>;
  title: Scalars['String']['output'];
};

export type ClozeTextPart = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: ClozeTextPartKind;
};

export enum ClozeTextPartKind {
  Cloze = 'cloze',
  Text = 'text'
}

export type ClozeTextShowAnswerElementState = ElementState & ShowAnswerElementState & {
  __typename?: 'ClozeTextShowAnswerElementState';
  correctAnswers: Array<Scalars['ID']['output']>;
  element: LearnElement;
  kind: ElementStateKind;
  lastCheckedAnswers: Array<Scalars['ID']['output']>;
};

export type CoachFeedback = Node & {
  __typename?: 'CoachFeedback';
  coach?: Maybe<User>;
  createdAt: Scalars['ZonedDateTIme']['output'];
  data: CoachingFeedbackData;
  feedbackGiver?: Maybe<User>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type CoachFeedbackConnection = {
  __typename?: 'CoachFeedbackConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CoachFeedbackEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CoachFeedbackEdge = {
  __typename?: 'CoachFeedbackEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CoachFeedback;
};

export type CoachProfile = Node & {
  __typename?: 'CoachProfile';
  averageFeedbackScore: Scalars['Float']['output'];
  baseData: BaseData;
  businessData: BusinessData;
  coach?: Maybe<User>;
  coachAccountId: Scalars['ID']['output'];
  feedbacks: CoachFeedbackConnection;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  profileData: ProfileData;
};


export type CoachProfileFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CoachProfileBaseData = {
  address: AddressInput;
  birthDate: Scalars['LocalDate']['input'];
  birthPlace: Scalars['String']['input'];
  gender: Gender;
  nationality: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type CoachProfileConnection = {
  __typename?: 'CoachProfileConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CoachProfileEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CoachProfileEdge = {
  __typename?: 'CoachProfileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CoachProfile;
};

export type CoachStatement = Node & {
  __typename?: 'CoachStatement';
  billingDetails?: Maybe<BillingDetails>;
  coachAccountId: Scalars['ID']['output'];
  createdAt: Scalars['ZonedDateTIme']['output'];
  creditNoteData?: Maybe<CreditNoteData>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  lineItems: Array<SessionLineItem>;
};

/** A connection to a list of items. */
export type CoachStatementConnection = {
  __typename?: 'CoachStatementConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CoachStatementEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CoachStatementEdge = {
  __typename?: 'CoachStatementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CoachStatement;
};

/** Data only accessible by the admin */
export type CoachingAdminMutationSchema = {
  __typename?: 'CoachingAdminMutationSchema';
  addParticipant?: Maybe<AddParticipantAdminPayload>;
  createAvailability?: Maybe<CreateAvailabilityPayload>;
  createCoachProfile?: Maybe<CreateCoachProfilePayload>;
  createCoachingOffer?: Maybe<CreateCoachingOfferPayload>;
  deleteAvailability?: Maybe<DeleteAvailabilityPayload>;
  deleteCoachProfile?: Maybe<DeleteCoachProfilePayload>;
  deleteCoachingOffer?: Maybe<DeleteCoachingOfferPayload>;
  editAssociatedCoaches?: Maybe<EditAssociatedCoachesPayload>;
  editAvailability?: Maybe<EditAvailabilityPayload>;
  editAvailabilitySchedule?: Maybe<EditAvailabilitySchedulePayload>;
  editBaseData?: Maybe<EditBaseDataPayload>;
  editBusinessData?: Maybe<EditBusinessDataPayload>;
  editCoachingRemuneration?: Maybe<EditRenumerationPayload>;
  editGroupSetting?: Maybe<EditOneToOneSettingPayload>;
  editOfferDescription?: Maybe<EditOfferDescriptionPayload>;
  editProfileData?: Maybe<EditProfileDataPayload>;
  registerParticipationAdmin?: Maybe<RegisterParticipationAdminPayload>;
  removeParticipant?: Maybe<RemoveParticipantAdminPayload>;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaAddParticipantArgs = {
  input: AddParticipantAdminInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaCreateAvailabilityArgs = {
  input: CreateAvailabilityInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaCreateCoachProfileArgs = {
  input: CreateCoachProfileInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaCreateCoachingOfferArgs = {
  input: CreateCoachingOfferInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaDeleteAvailabilityArgs = {
  input: DeleteAvailabilityInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaDeleteCoachProfileArgs = {
  input: DeleteCoachProfileInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaDeleteCoachingOfferArgs = {
  input: DeleteCoachingOfferInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditAssociatedCoachesArgs = {
  input: EditAssociatedCoachesInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditAvailabilityArgs = {
  input: EditAvailabilityInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditAvailabilityScheduleArgs = {
  input: EditAvailabilityScheduleInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditBaseDataArgs = {
  input: EditBaseDataInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditBusinessDataArgs = {
  input: EditBusinessDataInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditCoachingRemunerationArgs = {
  input: EditRenumerationInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditGroupSettingArgs = {
  input: EditOneToOneSettingInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditOfferDescriptionArgs = {
  input: EditOfferDescriptionInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditProfileDataArgs = {
  input: EditProfileDataInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaRegisterParticipationAdminArgs = {
  input: RegisterParticipationAdminInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaRemoveParticipantArgs = {
  input: RemoveParticipantAdminInput;
};

/** Data only accessible by the admin */
export type CoachingAdminSchema = {
  __typename?: 'CoachingAdminSchema';
  Availabilities: AvailabilityConnection;
  AvailabilitySchedules: AvailabilityScheduleConnection;
  CoachFeedbacks: CoachFeedbackConnection;
  CoachProfiles: CoachProfileConnection;
  CoachStatements: CoachStatementConnection;
  CoachingOffers: CoachingOfferConnection;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByCoachIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  filterByMaxDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByMinDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByParticipantIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  onlyBooked?: InputMaybe<Scalars['Boolean']['input']>;
  onlyFree?: InputMaybe<Scalars['Boolean']['input']>;
  onlyNeedConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaAvailabilitySchedulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByCoaches?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaCoachFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaCoachProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByUserId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaCoachStatementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByAccountId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaCoachingOffersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CoachingFeedbackData = {
  __typename?: 'CoachingFeedbackData';
  comment?: Maybe<Scalars['String']['output']>;
  score: Scalars['Int']['output'];
};

export type CoachingLicenseDefinitionData = LicenseDefinitionData & {
  __typename?: 'CoachingLicenseDefinitionData';
  coachingInfo?: Maybe<LicenseDefinitionCoachingInfo>;
  kind: LicenseDefinitionDataKind;
  name: Scalars['String']['output'];
};

export type CoachingLicenseDefinitionDataInput = {
  coachingId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CoachingMutations = {
  __typename?: 'CoachingMutations';
  addParticipantToBookingAsCoach?: Maybe<AddParticipantToBookingAsCoachPayload>;
  addParticipantToMyBooking?: Maybe<AddParticipantToMyBookingPayload>;
  bookCoaching?: Maybe<BookCoachingPayload>;
  cancelBookingAsCoach?: Maybe<CancelBookingAsCoachPayload>;
  cancelBookingAsParticipant?: Maybe<CancelBookingAsParticipantPayload>;
  createMyAvailability?: Maybe<CreateMyAvailabilityPayload>;
  deleteMyAvailability?: Maybe<DeleteMyAvailabilityPayload>;
  editMyAvailability?: Maybe<EditMyAvailabilityPayload>;
  editMyAvailabilitySchedule?: Maybe<EditMyAvailabilitySchedulePayload>;
  editMyBaseData?: Maybe<EditMyBaseDataPayload>;
  editMyBusinessData?: Maybe<EditMyBusinessDataPayload>;
  editMyProfileData?: Maybe<EditMyProfileDataPayload>;
  leaveFeedback?: Maybe<LeaveFeedbackPayload>;
  registerParticipation?: Maybe<RegisterParticipationPayload>;
  removeParticipantFromBookingAsCoach?: Maybe<RemoveParticipantFromBookingAsCoachPayload>;
  removeParticipantFromMyBooking?: Maybe<RemoveParticipantFromMyBookingPayload>;
};


export type CoachingMutationsAddParticipantToBookingAsCoachArgs = {
  input: AddParticipantToBookingAsCoachInput;
};


export type CoachingMutationsAddParticipantToMyBookingArgs = {
  input: AddParticipantToMyBookingInput;
};


export type CoachingMutationsBookCoachingArgs = {
  input: BookCoachingInput;
};


export type CoachingMutationsCancelBookingAsCoachArgs = {
  input: CancelBookingAsCoachInput;
};


export type CoachingMutationsCancelBookingAsParticipantArgs = {
  input: CancelBookingAsParticipantInput;
};


export type CoachingMutationsCreateMyAvailabilityArgs = {
  input: CreateMyAvailabilityInput;
};


export type CoachingMutationsDeleteMyAvailabilityArgs = {
  input: DeleteMyAvailabilityInput;
};


export type CoachingMutationsEditMyAvailabilityArgs = {
  input: EditMyAvailabilityInput;
};


export type CoachingMutationsEditMyAvailabilityScheduleArgs = {
  input: EditMyAvailabilityScheduleInput;
};


export type CoachingMutationsEditMyBaseDataArgs = {
  input: EditMyBaseDataInput;
};


export type CoachingMutationsEditMyBusinessDataArgs = {
  input: EditMyBusinessDataInput;
};


export type CoachingMutationsEditMyProfileDataArgs = {
  input: EditMyProfileDataInput;
};


export type CoachingMutationsLeaveFeedbackArgs = {
  input: LeaveFeedbackInput;
};


export type CoachingMutationsRegisterParticipationArgs = {
  input: RegisterParticipationInput;
};


export type CoachingMutationsRemoveParticipantFromBookingAsCoachArgs = {
  input: RemoveParticipantFromBookingAsCoachInput;
};


export type CoachingMutationsRemoveParticipantFromMyBookingArgs = {
  input: RemoveParticipantFromMyBookingInput;
};

export type CoachingOffer = Node & {
  __typename?: 'CoachingOffer';
  associatedCoaches: Array<CoachProfile>;
  cartClickout?: Maybe<CartClickout>;
  description?: Maybe<CoachingOfferDescription>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  licenseAvailability: LicenseAvailability;
  remunerationData: CoachingOfferRemunerationData;
  setting: CoachingSetting;
};

/** A connection to a list of items. */
export type CoachingOfferConnection = {
  __typename?: 'CoachingOfferConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CoachingOfferEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CoachingOfferDescription = {
  __typename?: 'CoachingOfferDescription';
  contents?: Maybe<Scalars['String']['output']>;
  contractPartner?: Maybe<ContractPartner>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<File>;
  isVisible: Scalars['Boolean']['output'];
  licenseProduct?: Maybe<LicenseProduct>;
  modules?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  shortDescription?: Maybe<Scalars['String']['output']>;
  tags: Array<AcademiesTag>;
};

export type CoachingOfferDescriptionInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  contractPartnerId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  isVisible: Scalars['Boolean']['input'];
  licenseProductId?: InputMaybe<Scalars['ID']['input']>;
  modules?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  tagIds: Array<Scalars['ID']['input']>;
};

/** An edge in a connection. */
export type CoachingOfferEdge = {
  __typename?: 'CoachingOfferEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CoachingOffer;
};

export type CoachingOfferRemunerationData = {
  kind: CoachingOfferRemunerationDataKind;
};

export enum CoachingOfferRemunerationDataKind {
  NotRemunerated = 'NotRemunerated',
  PerSession = 'PerSession'
}

export type CoachingOfferRemunerationDataNotRemunerated = CoachingOfferRemunerationData & {
  __typename?: 'CoachingOfferRemunerationDataNotRemunerated';
  kind: CoachingOfferRemunerationDataKind;
};

export type CoachingOfferRemunerationDataPerSession = CoachingOfferRemunerationData & {
  __typename?: 'CoachingOfferRemunerationDataPerSession';
  additionalInformation?: Maybe<Scalars['String']['output']>;
  kind: CoachingOfferRemunerationDataKind;
  sessionRate: Price;
};

export type CoachingOfferWrapper = OfferWrapper & {
  __typename?: 'CoachingOfferWrapper';
  coaching?: Maybe<CoachingOffer>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: OfferWrapperKind;
};

export type CoachingQueries = {
  __typename?: 'CoachingQueries';
  CoachAvailabilities: AvailabilityConnection;
  CoachingOffersToCoach: CoachingOfferConnection;
  FreeAvailabilities: AvailabilityConnection;
};


export type CoachingQueriesCoachAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByMaxDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByMinDate?: InputMaybe<Scalars['LocalDate']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  onlyBooked?: InputMaybe<Scalars['Boolean']['input']>;
  onlyFree?: InputMaybe<Scalars['Boolean']['input']>;
  onlyNeedConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CoachingQueriesCoachingOffersToCoachArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  coachProfileId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CoachingQueriesFreeAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByCoach?: InputMaybe<Scalars['ID']['input']>;
  filterByMaxDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByMinDate?: InputMaybe<Scalars['LocalDate']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CoachingSetting = {
  kind: CoachingSettingKind;
};

export enum CoachingSettingKind {
  Group = 'Group',
  OneToOne = 'OneToOne'
}

/** Data partaining to the current user */
export type CoachingViewerSchema = {
  __typename?: 'CoachingViewerSchema';
  CoachCoachingAppointments: AvailabilityConnection;
  CoachingOffers: CoachingOfferConnection;
  MyAvailabilitySchedule?: Maybe<AvailabilitySchedule>;
  MyCoachProfile?: Maybe<CoachProfile>;
  MyCoachingAppointments: AvailabilityConnection;
};


/** Data partaining to the current user */
export type CoachingViewerSchemaCoachCoachingAppointmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByMaxDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByMinDate?: InputMaybe<Scalars['LocalDate']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data partaining to the current user */
export type CoachingViewerSchemaCoachingOffersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data partaining to the current user */
export type CoachingViewerSchemaMyCoachingAppointmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByMaxDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByMinDate?: InputMaybe<Scalars['LocalDate']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CommunicationSettings = {
  __typename?: 'CommunicationSettings';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  sendExpirationNoticeEmails: Scalars['Boolean']['output'];
  sendExpirationNoticeNotifications: Scalars['Boolean']['output'];
  sendInformRetryEmails: Scalars['Boolean']['output'];
  sendInformRetryNotifications: Scalars['Boolean']['output'];
};

export enum CompanyType {
  Ag = 'Ag',
  Einzelunternehmen = 'Einzelunternehmen',
  Ev = 'Ev',
  Gbr = 'Gbr',
  Gmbh = 'Gmbh',
  GmbhCoKg = 'GmbhCoKg',
  Kg = 'Kg',
  OeffentlicheEinrichtung = 'OeffentlicheEinrichtung',
  Ohg = 'Ohg',
  Ug = 'Ug'
}

export enum CompanyTypeInput {
  Ag = 'Ag',
  Einzelunternehmen = 'Einzelunternehmen',
  Ev = 'Ev',
  Gbr = 'Gbr',
  Gmbh = 'Gmbh',
  GmbhCoKg = 'GmbhCoKg',
  Kg = 'Kg',
  OeffentlicheEinrichtung = 'OeffentlicheEinrichtung',
  Ohg = 'Ohg',
  Ug = 'Ug'
}

export type ContentConfigConsequences = {
  __typename?: 'ContentConfigConsequences';
  isBlockedPermanentlyAfterNumFailedTries?: Maybe<Scalars['Int']['output']>;
  isBlockedTemporarilyForNumDaysAfterOneFailedTry?: Maybe<Scalars['Int']['output']>;
  percentageRequiredToPass?: Maybe<Scalars['Int']['output']>;
};

export type ContentExtension = {
  doNotUse: Scalars['String']['output'];
};

export type ContentExtensionImpl = ContentExtension & {
  __typename?: 'ContentExtensionImpl';
  doNotUse: Scalars['String']['output'];
};

export enum ContentKind {
  Async = 'Async',
  ELearning = 'ELearning'
}

export type ContentNodeAdvancementResult = {
  status: ContentNodeAdvancementStatus;
};

export enum ContentNodeAdvancementStatus {
  BlockedByTree = 'BlockedByTree',
  CanBeRestartedAfterFailed = 'CanBeRestartedAfterFailed',
  CanBeRestartedAfterPassed = 'CanBeRestartedAfterPassed',
  CanBeStarted = 'CanBeStarted',
  CanNotBeRestartedAfterFailed = 'CanNotBeRestartedAfterFailed',
  CanNotBeRestartedAfterPassed = 'CanNotBeRestartedAfterPassed',
  CanNotBeStarted = 'CanNotBeStarted',
  Continue = 'Continue',
  NotContentNode = 'NotContentNode',
  ViolatesTreeFlow = 'ViolatesTreeFlow'
}

export type ContentSubmission = Node & {
  __typename?: 'ContentSubmission';
  definition: ContentSubmissionDefinition;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  lastUpdated?: Maybe<Scalars['ZonedDateTIme']['output']>;
  learnOpportunity?: Maybe<LearnOpportunityV2>;
  startedAt: Scalars['ZonedDateTIme']['output'];
};

export type ContentSubmissionDefinition = {
  contentKind: ContentKind;
  status: ContentSubmissionStatus;
};

export enum ContentSubmissionStatus {
  Active = 'active',
  Failed = 'failed',
  Passed = 'passed'
}

/** A connection to a list of items. */
export type ContentSubmissionsConnection = {
  __typename?: 'ContentSubmissionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContentSubmissionsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContentSubmissionsEdge = {
  __typename?: 'ContentSubmissionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContentSubmission;
};

export type ContentTypeDefinition = {
  contentKind: ContentKind;
  continueConfig: ContinueContentConfig;
  definitionType: TypeDefinitionType;
  extension: ContentExtension;
  passConfig: PassContentConfig;
  restartIfFailedConfigs: Array<RestartIfFailedContentConfig>;
  restartIfPassedConfig: RestartIfPassedContentConfig;
  rewardConfig: RewardContentConfig;
  rewards: Array<Reward>;
  startConfigs: Array<StartContentConfig>;
};

export type ContinueContentConfig = {
  configType: ContinueContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum ContinueContentConfigType {
  ContinueContentAlwaysRestart = 'ContinueContent_AlwaysRestart',
  ContinueContentCan = 'ContinueContent_Can'
}

export type ContinueContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'ContinueContentNodeAdvancementResult';
  activeContentSubmissionId: Scalars['ID']['output'];
  status: ContentNodeAdvancementStatus;
};

export type ContractPartner = Node & {
  __typename?: 'ContractPartner';
  data: ContractPartnerData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  shareAmountPercentage: Scalars['Int']['output'];
};

export type ContractPartnerData = {
  __typename?: 'ContractPartnerData';
  association?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  houseNumber?: Maybe<Scalars['String']['output']>;
  linkToAGB?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  taxNumber?: Maybe<Scalars['String']['output']>;
};

export type ContractPartnerDataInput = {
  association: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  linkToAGB?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  street: Scalars['String']['input'];
  taxNumber: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type ContractPartnersConnection = {
  __typename?: 'ContractPartnersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContractPartnersEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContractPartnersEdge = {
  __typename?: 'ContractPartnersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContractPartner;
};

export type CoordinatesV2 = {
  __typename?: 'CoordinatesV2';
  parentRef?: Maybe<Scalars['ID']['output']>;
};

export type CreateAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateAccountPayload = {
  __typename?: 'CreateAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: AccountEdge;
};

export type CreateAndAppendChildTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TagDataInput;
  parentId: Scalars['ID']['input'];
};

export type CreateAndAppendChildTagPayload = {
  __typename?: 'CreateAndAppendChildTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: AcademiesChildTagsEdge;
};

export type CreateAvailabilityInput = {
  availabilityData: AvailabilityDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachAccountRef: Scalars['ID']['input'];
  coachRef: Scalars['ID']['input'];
};

export type CreateAvailabilityPayload = {
  __typename?: 'CreateAvailabilityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: AvailabilityEdge;
};

export type CreateBranchChildInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  parentBranchId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateBranchChildPayload = {
  __typename?: 'CreateBranchChildPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createdChildNode: TreeNode;
  tree: Tree;
};

export type CreateBranchRootInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateBranchRootPayload = {
  __typename?: 'CreateBranchRootPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createdRootNode: TreeNodesEdge;
  tree: Tree;
};

export type CreateClozeTextElementV2Input = {
  additionalWords: Array<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateClozeTextElementV2Payload = {
  __typename?: 'CreateClozeTextElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateCoachProfileInput = {
  accountId: Scalars['ID']['input'];
  baseData: CoachProfileBaseData;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateCoachProfilePayload = {
  __typename?: 'CreateCoachProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: CoachProfileEdge;
};

export type CreateCoachStatementsFromUnbilledInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCoachStatementsFromUnbilledPayload = {
  __typename?: 'CreateCoachStatementsFromUnbilledPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateCoachingLicenseDefinitionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: CoachingLicenseDefinitionDataInput;
};

export type CreateCoachingLicenseDefinitionPayload = {
  __typename?: 'CreateCoachingLicenseDefinitionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: LicenseDefinitionEdge;
};

export type CreateCoachingOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kind: CoachingSettingKind;
};

export type CreateCoachingOfferPayload = {
  __typename?: 'CreateCoachingOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: OfferWrappersEdge;
};

export type CreateContentChildInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentKind: Scalars['String']['input'];
  parentBranchId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateContentChildPayload = {
  __typename?: 'CreateContentChildPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createdChildNode: TreeNode;
  tree: Tree;
};

export type CreateContentRootNodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentKind: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateContentRootNodePayload = {
  __typename?: 'CreateContentRootNodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createdRootNode: TreeNodesEdge;
  tree: Tree;
};

export type CreateContractPartnerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ContractPartnerDataInput;
  shareAmountPercentage: Scalars['Int']['input'];
};

export type CreateContractPartnerPayload = {
  __typename?: 'CreateContractPartnerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ContractPartnersEdge;
};

export type CreateDiscountCodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  discountActionId: Scalars['ID']['input'];
};

export type CreateDiscountCodePayload = {
  __typename?: 'CreateDiscountCodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edges: Array<DiscountCodesV2Edge>;
};

export type CreateDynamicVocabElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateDynamicVocabElementPayload = {
  __typename?: 'CreateDynamicVocabElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateEnhancedTextElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  readMore?: InputMaybe<Scalars['String']['input']>;
  readMoreButtonText?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateEnhancedTextElementPayload = {
  __typename?: 'CreateEnhancedTextElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateEuroDiscountActionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateEuroDiscountActionPayload = {
  __typename?: 'CreateEuroDiscountActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: DiscountActionsEdge;
};

export type CreateExternalLicenseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ExternalLicenseDataInput;
  poolId: Scalars['ID']['input'];
};

export type CreateExternalLicensePayload = {
  __typename?: 'CreateExternalLicensePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ExternalLicensesEdge;
};

export type CreateExternalLicensePoolInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ExternalLicensePoolDataInput;
};

export type CreateExternalLicensePoolPayload = {
  __typename?: 'CreateExternalLicensePoolPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ExternalLicensePoolsEdge;
};

export type CreateFileElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  fileId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type CreateFileElementV2Payload = {
  __typename?: 'CreateFileElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateGlobalVocabElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateGlobalVocabElementPayload = {
  __typename?: 'CreateGlobalVocabElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateImageMapElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateImageMapElementPayload = {
  __typename?: 'CreateImageMapElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
};

export type CreateInstructorImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: InstructorImplInput;
};

export type CreateInstructorImplPayload = {
  __typename?: 'CreateInstructorImplPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: InstructorImplsEdge;
};

export type CreateLicenseProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateLicenseProductPayload = {
  __typename?: 'CreateLicenseProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ProductsEdge;
};

export type CreateLicensesInput = {
  accountId: Scalars['ID']['input'];
  amount: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type CreateLicensesPayload = {
  __typename?: 'CreateLicensesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edges: Array<LicenseEdge>;
};

export type CreateLimitedCartDiscountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLimitedCartDiscountPayload = {
  __typename?: 'CreateLimitedCartDiscountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: LimitedCartDiscountEdge;
};

export type CreateMarkMistakesElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateMarkMistakesElementPayload = {
  __typename?: 'CreateMarkMistakesElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
};

export type CreateMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  correctAnswer: Scalars['String']['input'];
  eLearningContentId: Scalars['ID']['input'];
  firstColumnTitle: Scalars['String']['input'];
  firstRowTitle: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateMatrixElementPayload = {
  __typename?: 'CreateMatrixElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
};

export type CreateMicroLearningLicenseDefinitionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: MicroLearningLicenseDefinitionDataInput;
};

export type CreateMicroLearningLicenseDefinitionPayload = {
  __typename?: 'CreateMicroLearningLicenseDefinitionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: LicenseDefinitionEdge;
};

export type CreateMultipleChoiceElementV2Input = {
  answerOptions: Array<AnswerOptionV2Input>;
  answeringType: Scalars['String']['input'];
  answeringTypeText?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  imageId?: InputMaybe<Scalars['ID']['input']>;
  question: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateMultipleChoiceElementV2Payload = {
  __typename?: 'CreateMultipleChoiceElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateMyAvailabilityInput = {
  availabilityData: AvailabilityDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMyAvailabilityPayload = {
  __typename?: 'CreateMyAvailabilityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: AvailabilityEdge;
};

export type CreateOrderElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateOrderElementPayload = {
  __typename?: 'CreateOrderElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateOrderInput = {
  cartSelection?: InputMaybe<CartSelectionInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderPayload = {
  __typename?: 'CreateOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type CreatePercentageDiscountActionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreatePercentageDiscountActionPayload = {
  __typename?: 'CreatePercentageDiscountActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: DiscountActionsEdge;
};

export type CreatePersonalizedEmailTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: PersonalizedEmailTemplateInput;
};

export type CreatePersonalizedEmailTemplatePayload = {
  __typename?: 'CreatePersonalizedEmailTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: PersonalizedEmailTemplatesEdge;
};

export type CreatePersonalizedNotificationTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: PersonalizedNotificationTemplateInput;
};

export type CreatePersonalizedNotificationTemplatePayload = {
  __typename?: 'CreatePersonalizedNotificationTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: PersonalizedNotificationTemplatesEdge;
};

export type CreatePodcastElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreatePodcastElementV2Payload = {
  __typename?: 'CreatePodcastElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreatePodcastWithTimestampInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentId: Scalars['ID']['input'];
  podcastFileId?: InputMaybe<Scalars['ID']['input']>;
  timestampsWithImage: Array<TimestampWithImageInput>;
  title: Scalars['String']['input'];
};

export type CreatePodcastWithTimestampPayload = {
  __typename?: 'CreatePodcastWithTimestampPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
};

export type CreatePotentialAnalysisClickoutInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  shortTest: Scalars['Boolean']['input'];
};

export type CreatePotentialAnalysisClickoutPayload = {
  __typename?: 'CreatePotentialAnalysisClickoutPayload';
  clickout: Scalars['String']['output'];
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateRandomDiscountCodesInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountActionId: Scalars['ID']['input'];
  number: Scalars['Int']['input'];
};

export type CreateRandomDiscountCodesPayload = {
  __typename?: 'CreateRandomDiscountCodesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edges: Array<DiscountCodesV2Edge>;
};

export type CreateRootTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TagDataInput;
};

export type CreateRootTagPayload = {
  __typename?: 'CreateRootTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: AcademiesRootTagsEdge;
};

export type CreateTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TagInput;
};

export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: TagsEdge;
};

export type CreateTextElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateTextElementV2Payload = {
  __typename?: 'CreateTextElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateTreeLicenseDefinitionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TreeLicenseDefinitionDataInput;
};

export type CreateTreeLicenseDefinitionPayload = {
  __typename?: 'CreateTreeLicenseDefinitionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: LicenseDefinitionEdge;
};

export type CreateUploadAsyncElementInput = {
  asyncContentId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateUploadAsyncElementPayload = {
  __typename?: 'CreateUploadAsyncElementPayload';
  asyncContent: TreeNode;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateUserInAccountInput = {
  accountId: Scalars['ID']['input'];
  adsOptIn: Scalars['Boolean']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserInAccountPayload = {
  __typename?: 'CreateUserInAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userInAccount: UserInAccountEdge;
};

export type CreateVideoElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  vimeoId: Scalars['String']['input'];
};

export type CreateVideoElementV2Payload = {
  __typename?: 'CreateVideoElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateWordPackageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: WordPackageDataInput;
};

export type CreateWordPackagePayload = {
  __typename?: 'CreateWordPackagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: WordPackageEdge;
};

export type CreditNoteData = {
  __typename?: 'CreditNoteData';
  creditNoteFile?: Maybe<File>;
  creditNoteId: Scalars['String']['output'];
  creditNoteNumber: Scalars['String']['output'];
};

export type CreditNoteSentUpdate = HistoryEventInterface & {
  __typename?: 'CreditNoteSentUpdate';
  creditNoteId: Scalars['String']['output'];
  creditNoteNumber: Scalars['String']['output'];
  kind: HistoryEventType;
};

export type CurrentElementELearningContentConfig = {
  configType: CurrentElementELearningContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum CurrentElementELearningContentConfigType {
  CurrentElementELearningContentDefault = 'CurrentElementELearningContent_Default',
  CurrentElementELearningContentShowAnswersInBetween = 'CurrentElementELearningContent_ShowAnswersInBetween'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  accounts: Array<Account>;
  permissionsInAccount: Array<Permission>;
  user: User;
};

export enum CustomerType {
  Business = 'Business',
  Private = 'Private'
}

export type DayAndTimesInput = {
  dayOfWeek: Scalars['DayOfWeek']['input'];
  timeSlots: Array<Scalars['LocalTime']['input']>;
};

export type DefaultCurrentElementELearningContentConfig = CurrentElementELearningContentConfig & {
  __typename?: 'DefaultCurrentElementELearningContentConfig';
  configType: CurrentElementELearningContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type DefaultFileAttachment = AttachmentV2 & FileAttachment & {
  __typename?: 'DefaultFileAttachment';
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<File>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: AttachmentKind;
  title?: Maybe<Scalars['String']['output']>;
};

export type DefaultPaymentProviderData = PaymentProviderData & {
  __typename?: 'DefaultPaymentProviderData';
  dataType: PaymentProviderDataType;
  paymentMethod: PaymentMethodType;
};

export type DeleteAvailabilityInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteAvailabilityPayload = {
  __typename?: 'DeleteAvailabilityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteCoachProfileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteCoachProfilePayload = {
  __typename?: 'DeleteCoachProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteCoachingOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteCoachingOfferPayload = {
  __typename?: 'DeleteCoachingOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteConditionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  conditionId: Scalars['ID']['input'];
  limitedCartDiscountId: Scalars['ID']['input'];
};

export type DeleteConditionPayload = {
  __typename?: 'DeleteConditionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  limitedCartDiscount: LimitedCartDiscount;
};

export type DeleteContractPartnerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteContractPartnerPayload = {
  __typename?: 'DeleteContractPartnerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteDiscountActionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteDiscountActionPayload = {
  __typename?: 'DeleteDiscountActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteDiscountCodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteDiscountCodePayload = {
  __typename?: 'DeleteDiscountCodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  elementId: Scalars['ID']['input'];
};

export type DeleteElementV2Payload = {
  __typename?: 'DeleteElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type DeleteExternalLicenseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteExternalLicensePayload = {
  __typename?: 'DeleteExternalLicensePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteExternalLicensePoolInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteExternalLicensePoolPayload = {
  __typename?: 'DeleteExternalLicensePoolPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type DeleteFileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteFilePayload = {
  __typename?: 'DeleteFilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteInstructorImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteInstructorImplPayload = {
  __typename?: 'DeleteInstructorImplPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteInvitationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  invitationId: Scalars['ID']['input'];
};

export type DeleteInvitationPayload = {
  __typename?: 'DeleteInvitationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteLicenseDefinitionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type DeleteLicenseDefinitionPayload = {
  __typename?: 'DeleteLicenseDefinitionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteLicenseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteLicensePayload = {
  __typename?: 'DeleteLicensePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteLimitedCartDiscountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteLimitedCartDiscountPayload = {
  __typename?: 'DeleteLimitedCartDiscountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteMyAvailabilityInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteMyAvailabilityPayload = {
  __typename?: 'DeleteMyAvailabilityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeletePersonalizedEmailTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeletePersonalizedEmailTemplatePayload = {
  __typename?: 'DeletePersonalizedEmailTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeletePersonalizedNotificationTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeletePersonalizedNotificationTemplatePayload = {
  __typename?: 'DeletePersonalizedNotificationTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteProductPayload = {
  __typename?: 'DeleteProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
  rewardId: Scalars['ID']['input'];
};

export type DeleteRewardPayload = {
  __typename?: 'DeleteRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type DeleteUnpublishedChildNodePlusDescendantsInput = {
  childNodeId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteUnpublishedChildNodePlusDescendantsPayload = {
  __typename?: 'DeleteUnpublishedChildNodePlusDescendantsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tree: Tree;
};

export type DeleteUnpublishedTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type DeleteUnpublishedTreePayload = {
  __typename?: 'DeleteUnpublishedTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNodeId: Scalars['ID']['output'];
};

export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteWordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  wordId: Scalars['ID']['input'];
  wordPackageId: Scalars['ID']['input'];
};

export type DeleteWordPackageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteWordPackagePayload = {
  __typename?: 'DeleteWordPackagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteWordPayload = {
  __typename?: 'DeleteWordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  wordPackage: WordPackage;
};

export type DirectFeedbackFlowELearningContentConfig = FlowELearningContentConfig & {
  __typename?: 'DirectFeedbackFlowELearningContentConfig';
  configType: FlowELearningContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  minNumTriesTillShowAnswer: Scalars['Int']['output'];
};

/** a discount action is a common wrapper of 0 - n discount codes. */
export type DiscountAction = Node & {
  __typename?: 'DiscountAction';
  calcType: DiscountActionCalcType;
  createdAt: Scalars['ZonedDateTIme']['output'];
  discountCodes: DiscountCodesV2Connection;
  discountCodesCSV: Scalars['String']['output'];
  discountType: DiscountType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  numUsages: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  usageLimitation: DiscountActionUsageLimitation;
  validUntil: DiscountActionValidUntil;
};


/** a discount action is a common wrapper of 0 - n discount codes. */
export type DiscountActionDiscountCodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DiscountActionAmountLimitation = {
  kind: DiscountActionAmountLimitationKind;
};

export enum DiscountActionAmountLimitationKind {
  Limited = 'limited',
  Unlimited = 'unlimited'
}

export type DiscountActionAmountLimited = DiscountActionAmountLimitation & {
  __typename?: 'DiscountActionAmountLimited';
  kind: DiscountActionAmountLimitationKind;
  max: Scalars['Int']['output'];
};

export type DiscountActionAmountUnlimited = DiscountActionAmountLimitation & {
  __typename?: 'DiscountActionAmountUnlimited';
  kind: DiscountActionAmountLimitationKind;
};

export type DiscountActionCalcType = {
  kind: DiscountActionCalcTypeKind;
};

export enum DiscountActionCalcTypeKind {
  Euro = 'euro',
  Percentage = 'percentage'
}

export type DiscountActionEuroCalcType = DiscountActionCalcType & {
  __typename?: 'DiscountActionEuroCalcType';
  euro: Scalars['BigDecimal']['output'];
  kind: DiscountActionCalcTypeKind;
};

export type DiscountActionPercentageCalcType = DiscountActionCalcType & {
  __typename?: 'DiscountActionPercentageCalcType';
  kind: DiscountActionCalcTypeKind;
  percentage: Scalars['BigDecimal']['output'];
};

export type DiscountActionUsageLimitation = {
  kind: DiscountActionUsageLimitationKind;
};

export enum DiscountActionUsageLimitationKind {
  Limited = 'limited',
  Unlimited = 'unlimited'
}

export type DiscountActionUsageLimited = DiscountActionUsageLimitation & {
  __typename?: 'DiscountActionUsageLimited';
  kind: DiscountActionUsageLimitationKind;
  maxAmountOfUsages: DiscountActionAmountLimitation;
  maxAmountOfUsagesPerAccount: DiscountActionAmountLimitation;
  onlyForAccountIds: Array<Scalars['ID']['output']>;
  onlyForProductIds: Array<Scalars['ID']['output']>;
};

export type DiscountActionUsageUnlimited = DiscountActionUsageLimitation & {
  __typename?: 'DiscountActionUsageUnlimited';
  kind: DiscountActionUsageLimitationKind;
};

export type DiscountActionValidUntil = {
  kind: DiscountActionValidUntilKind;
};

export type DiscountActionValidUntilDateTime = DiscountActionValidUntil & {
  __typename?: 'DiscountActionValidUntilDateTime';
  dateTime: Scalars['ZonedDateTIme']['output'];
  kind: DiscountActionValidUntilKind;
};

export type DiscountActionValidUntilForever = DiscountActionValidUntil & {
  __typename?: 'DiscountActionValidUntilForever';
  kind: DiscountActionValidUntilKind;
};

export enum DiscountActionValidUntilKind {
  UntilDateTime = 'untilDateTime',
  UntilForever = 'untilForever'
}

/** A connection to a list of items. */
export type DiscountActionsConnection = {
  __typename?: 'DiscountActionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DiscountActionsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DiscountActionsEdge = {
  __typename?: 'DiscountActionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DiscountAction;
};

/** a discount code. */
export type DiscountCode = Node & {
  __typename?: 'DiscountCode';
  code: Scalars['String']['output'];
  createdAt: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  numUsages: Scalars['Int']['output'];
  searchUsages: SearchDiscountCodeUsagesResult;
};


/** a discount code. */
export type DiscountCodeSearchUsagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByUsedAtFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByUsedToFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DiscountCodeUsage = Node & {
  __typename?: 'DiscountCodeUsage';
  at: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  order?: Maybe<Order>;
};

/** A connection to a list of items. */
export type DiscountCodeUsagesConnection = {
  __typename?: 'DiscountCodeUsagesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DiscountCodeUsagesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DiscountCodeUsagesEdge = {
  __typename?: 'DiscountCodeUsagesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DiscountCodeUsage;
};

/** A connection to a list of items. */
export type DiscountCodesV2Connection = {
  __typename?: 'DiscountCodesV2Connection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DiscountCodesV2Edge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DiscountCodesV2Edge = {
  __typename?: 'DiscountCodesV2Edge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DiscountCode;
};

export type DiscountType = {
  kind: DiscountTypeKind;
};

export enum DiscountTypeKind {
  System = 'system',
  User = 'user'
}

export enum DiscountTypeKindInput {
  System = 'system',
  User = 'user'
}

export type DisplayMatrixElementCell = MatrixElementCell & {
  __typename?: 'DisplayMatrixElementCell';
  content: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: MatrixElementCellKind;
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type DisplayMatrixLearnElementCell = MatrixLearnElementCell & {
  __typename?: 'DisplayMatrixLearnElementCell';
  content: Scalars['String']['output'];
  kind: MatrixElementCellKind;
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export enum DisplayType {
  DisplayedToEveryone = 'displayedToEveryone',
  DisplayedToSpecificUsers = 'displayedToSpecificUsers',
  NotDisplayed = 'notDisplayed'
}

export type DoNotRewardTreeConfig = RewardTreeConfig & {
  __typename?: 'DoNotRewardTreeConfig';
  configType: RewardTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type DoNotShowAnswerTreeConfig = ShowAnswerTreeConfig & {
  __typename?: 'DoNotShowAnswerTreeConfig';
  configType: ShowAnswerTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type DoRewardContentConfig = RewardContentConfig & {
  __typename?: 'DoRewardContentConfig';
  configType: RewardContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type DynamicVocabElement = ElementV2 & {
  __typename?: 'DynamicVocabElement';
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  numDecoy: Scalars['Int']['output'];
  numWords: DynamicVocabElementNumWords;
  packageSelections: Array<VocabTrainWordPackageSelection>;
  title: Scalars['String']['output'];
};

export type DynamicVocabElementNumWords = {
  kind: DynamicVocabElementNumWordsKind;
};

export type DynamicVocabElementNumWordsAll = DynamicVocabElementNumWords & {
  __typename?: 'DynamicVocabElementNumWordsAll';
  kind: DynamicVocabElementNumWordsKind;
};

export enum DynamicVocabElementNumWordsKind {
  All = 'All',
  Num = 'Num'
}

export type ELearningContentSubmissionDefinition = {
  contentKind: ContentKind;
  progress: ELearningContentSubmissionProgress;
  relativeProgress: ELearningContentSubmissionRelativeProgress;
  status: ContentSubmissionStatus;
};

export type ELearningContentSubmissionProgress = {
  percentage: Scalars['Int']['output'];
};

export type ELearningContentSubmissionRelativeProgress = {
  __typename?: 'ELearningContentSubmissionRelativeProgress';
  numCorrect: Scalars['Int']['output'];
  numElements: Scalars['Int']['output'];
  percentageCorrect: Scalars['Int']['output'];
};

export type ELearningContentTypeDefinition = ContentTypeDefinition & TypeDefinition & {
  __typename?: 'ELearningContentTypeDefinition';
  contentKind: ContentKind;
  continueConfig: ContinueContentConfig;
  currentElementConfig: CurrentElementELearningContentConfig;
  definitionType: TypeDefinitionType;
  elements: Array<ElementV2>;
  extension: ContentExtension;
  flowConfig: FlowELearningContentConfig;
  passConfig: PassContentConfig;
  restartIfFailedConfigs: Array<RestartIfFailedContentConfig>;
  restartIfPassedConfig: RestartIfPassedContentConfig;
  rewardConfig: RewardContentConfig;
  rewards: Array<Reward>;
  startConfigs: Array<StartContentConfig>;
};

export type ELearningMutations = {
  __typename?: 'ELearningMutations';
  canShowElementAnswer?: Maybe<CanShowElementAnswerPayload>;
  canSubmitElement?: Maybe<CanSubmitElementPayload>;
  goToNextElement?: Maybe<GoToNextElementPayload>;
  goToPreviousElement?: Maybe<GoToPreviousElementPayload>;
  showElementAnswerElement?: Maybe<ShowElementAnswerElementPayload>;
};


export type ELearningMutationsCanShowElementAnswerArgs = {
  input: CanShowElementAnswerInput;
};


export type ELearningMutationsCanSubmitElementArgs = {
  input: CanSubmitElementInput;
};


export type ELearningMutationsGoToNextElementArgs = {
  input: GoToNextElementInput;
};


export type ELearningMutationsGoToPreviousElementArgs = {
  input: GoToPreviousElementInput;
};


export type ELearningMutationsShowElementAnswerElementArgs = {
  input: ShowElementAnswerElementInput;
};

export type EditAfterDateTimeDoNotRewardTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  newDateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type EditAfterDateTimeDoNotRewardTreeConfigPayload = {
  __typename?: 'EditAfterDateTimeDoNotRewardTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type EditAfterDateTimeDoShowAnswerTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  newDateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type EditAfterDateTimeDoShowAnswerTreeConfigPayload = {
  __typename?: 'EditAfterDateTimeDoShowAnswerTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type EditAfterDateTimeVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  newDateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type EditAfterDateTimeVisibilityTreeConfigPayload = {
  __typename?: 'EditAfterDateTimeVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type EditAssociatedCoachesInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  potentialCancellationMessage: Scalars['String']['input'];
};

export type EditAssociatedCoachesPayload = {
  __typename?: 'EditAssociatedCoachesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type EditAvailabilityInput = {
  availabilityData: AvailabilityDataInput;
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditAvailabilityPayload = {
  __typename?: 'EditAvailabilityPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditAvailabilityScheduleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachAccountId: Scalars['ID']['input'];
  coachId: Scalars['ID']['input'];
  scheduleData: ScheduleDataInput;
};

export type EditAvailabilitySchedulePayload = {
  __typename?: 'EditAvailabilitySchedulePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  schedule: AvailabilitySchedule;
};

export type EditBaseDataInput = {
  baseData: CoachProfileBaseData;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachProfileId: Scalars['ID']['input'];
};

export type EditBaseDataPayload = {
  __typename?: 'EditBaseDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: CoachProfileEdge;
};

export type EditBlockPermanentlyRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentNodeId: Scalars['ID']['input'];
  newMaximumTries: Scalars['Int']['input'];
};

export type EditBlockPermanentlyRestartIfFailedContentConfigPayload = {
  __typename?: 'EditBlockPermanentlyRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type EditBlockTemporarilyRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentNodeId: Scalars['ID']['input'];
  newDaysToBlock: Scalars['Int']['input'];
};

export type EditBlockTemporarilyRestartIfFailedContentConfigPayload = {
  __typename?: 'EditBlockTemporarilyRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type EditBusinessDataInput = {
  businessData: BusinessDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachProfileId: Scalars['ID']['input'];
};

export type EditBusinessDataPayload = {
  __typename?: 'EditBusinessDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: CoachProfileEdge;
};

export type EditClozeTextElementV2Input = {
  additionalWords: Array<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clozeTextElementId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditClozeTextElementV2Payload = {
  __typename?: 'EditClozeTextElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  clozeTextElement: ClozeTextElementV2;
  eLearningContentNode: TreeNode;
};

export type EditCoachingLicenseDefinitionAdminMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: CoachingLicenseDefinitionDataInput;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type EditCoachingLicenseDefinitionAdminMutationPayload = {
  __typename?: 'EditCoachingLicenseDefinitionAdminMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  licenseDefinition: LicenseDefinition;
};

export type EditContractPartnerDataInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ContractPartnerDataInput;
  id: Scalars['ID']['input'];
  shareAmountPercentage: Scalars['Int']['input'];
};

export type EditContractPartnerDataPayload = {
  __typename?: 'EditContractPartnerDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contractPartner: ContractPartner;
};

export type EditDefaultFileAttachmentInput = {
  attachmentId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  descriptionOpt?: InputMaybe<Scalars['String']['input']>;
  fileId: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  titleOpt?: InputMaybe<Scalars['String']['input']>;
};

export type EditDefaultFileAttachmentPayload = {
  __typename?: 'EditDefaultFileAttachmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  node: TreeNode;
};

export type EditDirectFeedbackFlowELearningContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentId: Scalars['ID']['input'];
  minNumTriesTillShowAnswer: Scalars['Int']['input'];
};

export type EditDirectFeedbackFlowELearningContentConfigPayload = {
  __typename?: 'EditDirectFeedbackFlowELearningContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type EditDiscountCodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountCodeId: Scalars['ID']['input'];
  newCode: Scalars['String']['input'];
};

export type EditDiscountCodePayload = {
  __typename?: 'EditDiscountCodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discountCode: DiscountCode;
};

export type EditDynamicVocabElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  elementId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  wordPackageIds: Array<Scalars['ID']['input']>;
};

export type EditDynamicVocabElementPayload = {
  __typename?: 'EditDynamicVocabElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dynamicVocabElement: DynamicVocabElement;
  eLearningContentNode: TreeNode;
};

export type EditEnhancedTextElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enhancedTextElementId: Scalars['ID']['input'];
  readMore?: InputMaybe<Scalars['String']['input']>;
  readMoreButtonText?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditEnhancedTextElementPayload = {
  __typename?: 'EditEnhancedTextElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  enhancedTextElement: EnhancedTextElement;
};

export type EditEuroDiscountActionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountActionId: Scalars['ID']['input'];
  newDiscountType: Scalars['String']['input'];
  newEuro: Scalars['BigDecimal']['input'];
  newTitle: Scalars['String']['input'];
  newUsageLimitation?: InputMaybe<UpdateUsageLimited>;
  newValidUntil?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
};

export type EditEuroDiscountActionPayload = {
  __typename?: 'EditEuroDiscountActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discountAction: DiscountAction;
};

export type EditExternalLicenseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ExternalLicenseDataInput;
  externalLicenseId: Scalars['ID']['input'];
};

export type EditExternalLicensePayload = {
  __typename?: 'EditExternalLicensePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalLicense: ExternalLicense;
};

export type EditExternalLicensePoolInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ExternalLicensePoolDataInput;
  id: Scalars['ID']['input'];
};

export type EditExternalLicensePoolPayload = {
  __typename?: 'EditExternalLicensePoolPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalLicensePool: ExternalLicensePool;
};

export type EditExternalLicenseRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  newData: ExternalLicenseRewardDataInput;
  rewardId: Scalars['ID']['input'];
};

export type EditExternalLicenseRewardPayload = {
  __typename?: 'EditExternalLicenseRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type EditFileElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fileElementId: Scalars['ID']['input'];
  fileId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type EditFileElementV2Payload = {
  __typename?: 'EditFileElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  fileElement: FileElementV2;
};

export type EditGlobalVocabElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  elementId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type EditGlobalVocabElementPayload = {
  __typename?: 'EditGlobalVocabElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  globalVocabElement: GlobalVocabElement;
};

export type EditImageMapElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageMapElementId: Scalars['ID']['input'];
  newTitle: Scalars['String']['input'];
};

export type EditImageMapElementPayload = {
  __typename?: 'EditImageMapElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  imageMapElement: ImageMapElement;
};

export type EditLicenseProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  costUnit?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isHidden: Scalars['Boolean']['input'];
  licenseDefinitionAmount?: InputMaybe<Scalars['Int']['input']>;
  licenseDefinitionId: Scalars['ID']['input'];
  price: PriceInput;
  title: Scalars['String']['input'];
};

export type EditLicenseProductPayload = {
  __typename?: 'EditLicenseProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  product: LicenseProduct;
};

export type EditLimitedCartDiscountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  limitedCartDiscountId: Scalars['ID']['input'];
  percentageValue: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type EditLimitedCartDiscountPayload = {
  __typename?: 'EditLimitedCartDiscountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  limitedCartDiscount: LimitedCartDiscount;
};

export type EditMarkMistakesElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  markMistakesElementId: Scalars['ID']['input'];
  newText: Scalars['String']['input'];
  newTitle: Scalars['String']['input'];
};

export type EditMarkMistakesElementPayload = {
  __typename?: 'EditMarkMistakesElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  markMistakesElement: MarkMistakesElement;
};

export type EditMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matrixElementId: Scalars['ID']['input'];
  newTitle: Scalars['String']['input'];
};

export type EditMatrixElementPayload = {
  __typename?: 'EditMatrixElementPayload';
  MatrixElement: MatrixElement;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
};

export type EditMicroLearningLicenseDefinitionAdminMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: MicroLearningLicenseDefinitionDataInput;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type EditMicroLearningLicenseDefinitionAdminMutationPayload = {
  __typename?: 'EditMicroLearningLicenseDefinitionAdminMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  licenseDefinition: LicenseDefinition;
};

export type EditMultipleChoiceElementV2Input = {
  answerOptions: Array<AnswerOptionV2Input>;
  answeringType: Scalars['String']['input'];
  answeringTypeText?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageIdOpt?: InputMaybe<Scalars['ID']['input']>;
  multipleChoiceElementId: Scalars['ID']['input'];
  question: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditMultipleChoiceElementV2Payload = {
  __typename?: 'EditMultipleChoiceElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  multipleChoiceElement: MultipleChoiceElementV2;
};

export type EditMyAvailabilityInput = {
  availabilityData: AvailabilityDataInput;
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditMyAvailabilityPayload = {
  __typename?: 'EditMyAvailabilityPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditMyAvailabilityScheduleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  scheduleData: ScheduleDataInput;
};

export type EditMyAvailabilitySchedulePayload = {
  __typename?: 'EditMyAvailabilitySchedulePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  schedule: AvailabilitySchedule;
};

export type EditMyBaseDataInput = {
  baseData: CoachProfileBaseData;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditMyBaseDataPayload = {
  __typename?: 'EditMyBaseDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachProfile: CoachProfile;
};

export type EditMyBusinessDataInput = {
  businessData: BusinessDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditMyBusinessDataPayload = {
  __typename?: 'EditMyBusinessDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachProfile: CoachProfile;
};

export type EditMyProfileDataInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  profileData: ProfileDataInput;
};

export type EditMyProfileDataPayload = {
  __typename?: 'EditMyProfileDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachProfile: CoachProfile;
};

export type EditNodeCoreInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  instructorIds: Array<Scalars['ID']['input']>;
  nodeId: Scalars['ID']['input'];
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type EditNodeCorePayload = {
  __typename?: 'EditNodeCorePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  editedNode: TreeNode;
};

export type EditNotAfterDateTimeVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  newDateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type EditNotAfterDateTimeVisibilityTreeConfigPayload = {
  __typename?: 'EditNotAfterDateTimeVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type EditOfferDescriptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description: CoachingOfferDescriptionInput;
  id: Scalars['ID']['input'];
};

export type EditOfferDescriptionPayload = {
  __typename?: 'EditOfferDescriptionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type EditOnPercentagePassContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentNodeId: Scalars['ID']['input'];
  newRequiredPercentage: Scalars['Int']['input'];
};

export type EditOnPercentagePassContentConfigPayload = {
  __typename?: 'EditOnPercentagePassContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type EditOneToOneSettingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  setting: GroupCoachingSettingInput;
};

export type EditOneToOneSettingPayload = {
  __typename?: 'EditOneToOneSettingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type EditOrderElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newAnsweringTypeTextOpt?: InputMaybe<Scalars['String']['input']>;
  newTitle: Scalars['String']['input'];
  orderElementId: Scalars['ID']['input'];
};

export type EditOrderElementPayload = {
  __typename?: 'EditOrderElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  orderElement: OrderElement;
};

export type EditOrderItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newText: Scalars['String']['input'];
  orderElementId: Scalars['ID']['input'];
  orderItemId: Scalars['ID']['input'];
};

export type EditOrderItemPayload = {
  __typename?: 'EditOrderItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderElement: OrderElement;
};

export type EditPercentageDiscountActionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountActionId: Scalars['ID']['input'];
  newDiscountType: Scalars['String']['input'];
  newPercentage: Scalars['BigDecimal']['input'];
  newTitle: Scalars['String']['input'];
  newUsageLimitation?: InputMaybe<UpdateUsageLimited>;
  newValidUntil?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
};

export type EditPercentageDiscountActionPayload = {
  __typename?: 'EditPercentageDiscountActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discountAction: DiscountAction;
};

export type EditPodcastHotspotInImageMapElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idxForEdit: Scalars['Int']['input'];
  imageMapElementId: Scalars['ID']['input'];
  newDurationInSec: Scalars['Int']['input'];
  newPodcastFileId: Scalars['ID']['input'];
  newXInPixel: Scalars['Int']['input'];
  newYInPixel: Scalars['Int']['input'];
};

export type EditPodcastHotspotInImageMapElementPayload = {
  __typename?: 'EditPodcastHotspotInImageMapElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  imageMapElement: ImageMapElement;
};

export type EditPodcastWithTimestampInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  elementId: Scalars['ID']['input'];
  newPodcastFileId: Scalars['ID']['input'];
  newTimestampsWithImage: Array<TimestampWithImageInput>;
  newTitle: Scalars['String']['input'];
};

export type EditPodcastWithTimestampPayload = {
  __typename?: 'EditPodcastWithTimestampPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  podcastWithTimestampElement: PodcastWithTimestamp;
};

export type EditPodigeePodcastElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  lengthInSeconds: Scalars['Int']['input'];
  podigeePodcastElementId: Scalars['ID']['input'];
  podigeeUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditPodigeePodcastElementV2Payload = {
  __typename?: 'EditPodigeePodcastElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  podigeePodcastElement: PodcastElementV2;
};

export type EditProductSelectionConditionInput = {
  amount: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  conditionId: Scalars['ID']['input'];
  limitedCartDiscountId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type EditProductSelectionConditionPayload = {
  __typename?: 'EditProductSelectionConditionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  limitedCartDiscount: LimitedCartDiscount;
};

export type EditProfileDataInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachProfileId: Scalars['ID']['input'];
  profileData: ProfileDataInput;
};

export type EditProfileDataPayload = {
  __typename?: 'EditProfileDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: CoachProfileEdge;
};

export type EditRenumerationInput = {
  additionalInformation?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  sessionRate: PriceInput;
};

export type EditRenumerationPayload = {
  __typename?: 'EditRenumerationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type EditRootNodePartInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstReleasedAt?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  iconId?: InputMaybe<Scalars['ID']['input']>;
  rootNodeId: Scalars['ID']['input'];
  searchWords?: InputMaybe<Scalars['String']['input']>;
  tagIds: Array<Scalars['ID']['input']>;
};

export type EditRootNodePartPayload = {
  __typename?: 'EditRootNodePartPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  editedNode: TreeNode;
};

export type EditTextElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  textElementId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type EditTextElementV2Payload = {
  __typename?: 'EditTextElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  textElement: TextElementV2;
};

export type EditTextHotspotInImageMapElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idxForEdit: Scalars['Int']['input'];
  imageMapElementId: Scalars['ID']['input'];
  newText: Scalars['String']['input'];
  newXInPixel: Scalars['Int']['input'];
  newYInPixel: Scalars['Int']['input'];
};

export type EditTextHotspotInImageMapElementPayload = {
  __typename?: 'EditTextHotspotInImageMapElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  imageMapElement: ImageMapElement;
};

export type EditTreeLicenseDefinitionAdminMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TreeLicenseDefinitionDataInput;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type EditTreeLicenseDefinitionAdminMutationPayload = {
  __typename?: 'EditTreeLicenseDefinitionAdminMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  licenseDefinition: LicenseDefinition;
};

export type EditUploadAsyncElementInput = {
  assignedEvaluator: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  taskDescription: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditUploadAsyncElementPayload = {
  __typename?: 'EditUploadAsyncElementPayload';
  asyncContent: TreeNode;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  uploadAsyncElement: UploadAsyncElement;
};

export type EditUserInput = {
  activated: Scalars['Boolean']['input'];
  adsOptIn: Scalars['Boolean']['input'];
  branch?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  imageId?: InputMaybe<Scalars['ID']['input']>;
  lastName: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  teamSize?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type EditUserPayload = {
  __typename?: 'EditUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type EditVideoElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  videoElementId: Scalars['ID']['input'];
  vimeoId: Scalars['String']['input'];
};

export type EditVideoElementV2Payload = {
  __typename?: 'EditVideoElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  videoElement: VideoElement;
};

export type EditVimeoPodcastElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  vimeoId: Scalars['String']['input'];
  vimeoPodcastElementId: Scalars['ID']['input'];
};

export type EditVimeoPodcastElementV2Payload = {
  __typename?: 'EditVimeoPodcastElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  vimeoPodcastElement: PodcastElementV2;
};

export type EditWordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  explanation: Scalars['String']['input'];
  translation?: InputMaybe<Scalars['String']['input']>;
  word: Scalars['String']['input'];
  wordId: Scalars['ID']['input'];
  wordPackageId: Scalars['ID']['input'];
};

export type EditWordPackageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: WordPackageDataInput;
  wordPackageId: Scalars['ID']['input'];
};

export type EditWordPackagePayload = {
  __typename?: 'EditWordPackagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  wordPackage: WordPackage;
};

export type EditWordPackageRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  newData: WordPackageRewardDataInput;
  rewardId: Scalars['ID']['input'];
};

export type EditWordPackageRewardPayload = {
  __typename?: 'EditWordPackageRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type EditWordPayload = {
  __typename?: 'EditWordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  wordPackage: WordPackage;
};

export type EditWrongAnswerInMatrixElementCellInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matrixCellId: Scalars['ID']['input'];
  matrixElementId: Scalars['ID']['input'];
  wrongAnswerContent: Scalars['String']['input'];
  wrongAnswerId: Scalars['ID']['input'];
};

export type EditWrongAnswerInMatrixElementCellPayload = {
  __typename?: 'EditWrongAnswerInMatrixElementCellPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchema = {
  __typename?: 'ElearningV2AdminMutationSchema';
  addColumnToMatrixElement?: Maybe<AddColumnToMatrixElementPayload>;
  addOrderItem?: Maybe<AddOrderItemPayload>;
  addPodcastHotspotToImageMapElement?: Maybe<AddPodcastHotspotToImageMapElementPayload>;
  addRowToMatrixElement?: Maybe<AddRowToMatrixElementPayload>;
  addTextHotspotToImageMapElement?: Maybe<AddTextHotspotToImageMapElementPayload>;
  addWrongAnswerInMatrixElementCell?: Maybe<AddWrongAnswerInMatrixElementCellPayload>;
  createClozeTextElement?: Maybe<CreateClozeTextElementV2Payload>;
  createDynamicVocabElement?: Maybe<CreateDynamicVocabElementPayload>;
  createEnhancedTextElement?: Maybe<CreateEnhancedTextElementPayload>;
  createFileElement?: Maybe<CreateFileElementV2Payload>;
  createGlobalVocabElement?: Maybe<CreateGlobalVocabElementPayload>;
  createImageMapElement?: Maybe<CreateImageMapElementPayload>;
  createMarkMistakesElement?: Maybe<CreateMarkMistakesElementPayload>;
  createMatrixElement?: Maybe<CreateMatrixElementPayload>;
  createMultipleChoiceElement?: Maybe<CreateMultipleChoiceElementV2Payload>;
  createOrderElement?: Maybe<CreateOrderElementPayload>;
  createPodcastElement?: Maybe<CreatePodcastElementV2Payload>;
  createPodcastWithTimestampElement?: Maybe<CreatePodcastWithTimestampPayload>;
  createTextElement?: Maybe<CreateTextElementV2Payload>;
  createVideoElement?: Maybe<CreateVideoElementV2Payload>;
  deleteElement?: Maybe<DeleteElementV2Payload>;
  editClozeTextElement?: Maybe<EditClozeTextElementV2Payload>;
  editDynamicVocabElement?: Maybe<EditDynamicVocabElementPayload>;
  editEnhancedTextElement?: Maybe<EditEnhancedTextElementPayload>;
  editFileElement?: Maybe<EditFileElementV2Payload>;
  editGlobalVocabElement?: Maybe<EditGlobalVocabElementPayload>;
  editImageMapElement?: Maybe<EditImageMapElementPayload>;
  editMarkMistakesElement?: Maybe<EditMarkMistakesElementPayload>;
  editMatrixElement?: Maybe<EditMatrixElementPayload>;
  editMultipleChoiceElement?: Maybe<EditMultipleChoiceElementV2Payload>;
  editOrderElement?: Maybe<EditOrderElementPayload>;
  editOrderItem?: Maybe<EditOrderItemPayload>;
  editPodcastHotspotInImageMapElement?: Maybe<EditPodcastHotspotInImageMapElementPayload>;
  editPodcastWithTimestampElement?: Maybe<EditPodcastWithTimestampPayload>;
  editPodigeePodcastElement?: Maybe<EditPodigeePodcastElementV2Payload>;
  editTextElement?: Maybe<EditTextElementV2Payload>;
  editTextHotspotInImageMapElement?: Maybe<EditTextHotspotInImageMapElementPayload>;
  editVideoElement?: Maybe<EditVideoElementV2Payload>;
  editVimeoPodcastElement?: Maybe<EditVimeoPodcastElementV2Payload>;
  editWrongAnswerInMatrixElementCell?: Maybe<EditWrongAnswerInMatrixElementCellPayload>;
  getVideoData?: Maybe<GetVideoDataV2Payload>;
  moveOrderItems?: Maybe<MoveOrderItemsPayload>;
  rearrangeElements?: Maybe<RearrangeElementsV2Payload>;
  removeColumnFromMatrixElement?: Maybe<RemoveColumnFromMatrixElementPayload>;
  removeHotspotFromImageMapElement?: Maybe<RemoveHotspotFromImageMapElementPayload>;
  removeOrderItem?: Maybe<RemoveOrderItemPayload>;
  removeRowFromMatrixElement?: Maybe<RemoveRowFromMatrixElementPayload>;
  removeWrongAnswerFromMatrixElementCell?: Maybe<RemoveWrongAnswerFromMatrixElementCellPayload>;
  setCorrectAnswerInMatrixElementCell?: Maybe<SetCorrectAnswerInMatrixElementCellPayload>;
  setMatrixElementColumnTitle?: Maybe<SetMatrixElementColumnTitlePayload>;
  setMatrixElementRowTitle?: Maybe<SetMatrixElementRowTitlePayload>;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaAddColumnToMatrixElementArgs = {
  input: AddColumnToMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaAddOrderItemArgs = {
  input: AddOrderItemInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaAddPodcastHotspotToImageMapElementArgs = {
  input: AddPodcastHotspotToImageMapElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaAddRowToMatrixElementArgs = {
  input: AddRowToMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaAddTextHotspotToImageMapElementArgs = {
  input: AddTextHotspotToImageMapElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaAddWrongAnswerInMatrixElementCellArgs = {
  input: AddWrongAnswerInMatrixElementCellInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateClozeTextElementArgs = {
  input: CreateClozeTextElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateDynamicVocabElementArgs = {
  input: CreateDynamicVocabElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateEnhancedTextElementArgs = {
  input: CreateEnhancedTextElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateFileElementArgs = {
  input: CreateFileElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateGlobalVocabElementArgs = {
  input: CreateGlobalVocabElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateImageMapElementArgs = {
  input: CreateImageMapElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateMarkMistakesElementArgs = {
  input: CreateMarkMistakesElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateMatrixElementArgs = {
  input: CreateMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateMultipleChoiceElementArgs = {
  input: CreateMultipleChoiceElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateOrderElementArgs = {
  input: CreateOrderElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreatePodcastElementArgs = {
  input: CreatePodcastElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreatePodcastWithTimestampElementArgs = {
  input: CreatePodcastWithTimestampInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateTextElementArgs = {
  input: CreateTextElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateVideoElementArgs = {
  input: CreateVideoElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaDeleteElementArgs = {
  input: DeleteElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditClozeTextElementArgs = {
  input: EditClozeTextElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditDynamicVocabElementArgs = {
  input: EditDynamicVocabElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditEnhancedTextElementArgs = {
  input: EditEnhancedTextElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditFileElementArgs = {
  input: EditFileElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditGlobalVocabElementArgs = {
  input: EditGlobalVocabElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditImageMapElementArgs = {
  input: EditImageMapElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditMarkMistakesElementArgs = {
  input: EditMarkMistakesElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditMatrixElementArgs = {
  input: EditMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditMultipleChoiceElementArgs = {
  input: EditMultipleChoiceElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditOrderElementArgs = {
  input: EditOrderElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditOrderItemArgs = {
  input: EditOrderItemInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditPodcastHotspotInImageMapElementArgs = {
  input: EditPodcastHotspotInImageMapElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditPodcastWithTimestampElementArgs = {
  input: EditPodcastWithTimestampInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditPodigeePodcastElementArgs = {
  input: EditPodigeePodcastElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditTextElementArgs = {
  input: EditTextElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditTextHotspotInImageMapElementArgs = {
  input: EditTextHotspotInImageMapElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditVideoElementArgs = {
  input: EditVideoElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditVimeoPodcastElementArgs = {
  input: EditVimeoPodcastElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditWrongAnswerInMatrixElementCellArgs = {
  input: EditWrongAnswerInMatrixElementCellInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaGetVideoDataArgs = {
  input: GetVideoDataV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaMoveOrderItemsArgs = {
  input: MoveOrderItemsInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRearrangeElementsArgs = {
  input: RearrangeElementsV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRemoveColumnFromMatrixElementArgs = {
  input: RemoveColumnFromMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRemoveHotspotFromImageMapElementArgs = {
  input: RemoveHotspotFromImageMapElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRemoveOrderItemArgs = {
  input: RemoveOrderItemInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRemoveRowFromMatrixElementArgs = {
  input: RemoveRowFromMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRemoveWrongAnswerFromMatrixElementCellArgs = {
  input: RemoveWrongAnswerFromMatrixElementCellInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaSetCorrectAnswerInMatrixElementCellArgs = {
  input: SetCorrectAnswerInMatrixElementCellInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaSetMatrixElementColumnTitleArgs = {
  input: SetMatrixElementColumnTitleInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaSetMatrixElementRowTitleArgs = {
  input: SetMatrixElementRowTitleInput;
};

export type ElementExtension = {
  doNotUse: Scalars['String']['output'];
};

export type ElementExtensionImpl = ElementExtension & {
  __typename?: 'ElementExtensionImpl';
  doNotUse: Scalars['String']['output'];
  points: Scalars['Int']['output'];
};

export type ElementState = {
  element: LearnElement;
  kind: ElementStateKind;
};

export enum ElementStateKind {
  Input = 'Input',
  InputAndIsCorrect = 'InputAndIsCorrect',
  ShowAnswer = 'ShowAnswer',
  Untouched = 'Untouched',
  UntouchedAndPreviouslyIncorrect = 'UntouchedAndPreviouslyIncorrect'
}

export enum ElementTypeV2 {
  ClozeText = 'clozeText',
  DynamicVocab = 'dynamicVocab',
  EnhancedText = 'enhancedText',
  File = 'file',
  GlobalVocab = 'globalVocab',
  ImageMap = 'imageMap',
  MarkMistakes = 'markMistakes',
  Matrix = 'matrix',
  MultipleChoice = 'multipleChoice',
  Order = 'order',
  Podcast = 'podcast',
  PodcastWithTimestamp = 'podcastWithTimestamp',
  Text = 'text',
  Video = 'video'
}

export type ElementV2 = {
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ElementsSummary = {
  __typename?: 'ElementsSummary';
  numExerciseElements: Scalars['Int']['output'];
  numFileElements: Scalars['Int']['output'];
  sumPodcastWithTimestampLengthInSec: Scalars['Int']['output'];
  sumTextLengthInSec: Scalars['Int']['output'];
  sumVideoLengthInSec: Scalars['Int']['output'];
};

/** Data only accessible by the admin */
export type EmailAdminMutationSchema = {
  __typename?: 'EmailAdminMutationSchema';
  createPersonalizedEmailTemplate?: Maybe<CreatePersonalizedEmailTemplatePayload>;
  deletePersonalizedEmailTemplate?: Maybe<DeletePersonalizedEmailTemplatePayload>;
  sendEmail?: Maybe<SendEmailPayload>;
  updatePersonalizedEmailTemplate?: Maybe<UpdatePersonalizedEmailTemplatePayload>;
};


/** Data only accessible by the admin */
export type EmailAdminMutationSchemaCreatePersonalizedEmailTemplateArgs = {
  input: CreatePersonalizedEmailTemplateInput;
};


/** Data only accessible by the admin */
export type EmailAdminMutationSchemaDeletePersonalizedEmailTemplateArgs = {
  input: DeletePersonalizedEmailTemplateInput;
};


/** Data only accessible by the admin */
export type EmailAdminMutationSchemaSendEmailArgs = {
  input: SendEmailInput;
};


/** Data only accessible by the admin */
export type EmailAdminMutationSchemaUpdatePersonalizedEmailTemplateArgs = {
  input: UpdatePersonalizedEmailTemplateInput;
};

/** Data only accessible by the admin */
export type EmailAdminSchema = {
  __typename?: 'EmailAdminSchema';
  AvailableSystemTemplates: Array<EmailTemplate>;
  PersonalizedEmailTemplates: PersonalizedEmailTemplatesConnection;
};


/** Data only accessible by the admin */
export type EmailAdminSchemaAvailableSystemTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type EmailAdminSchemaPersonalizedEmailTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  body: Scalars['String']['output'];
  key: Scalars['String']['output'];
  previewText: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  variables: Array<Scalars['String']['output']>;
};

/** Data partaining to the current user */
export type EmailViewerMutationSchema = {
  __typename?: 'EmailViewerMutationSchema';
  setCommunicationSettings?: Maybe<SetCommunicationSettingsPayload>;
};


/** Data partaining to the current user */
export type EmailViewerMutationSchemaSetCommunicationSettingsArgs = {
  input: SetCommunicationSettingsInput;
};

/** Data partaining to the current user */
export type EmailViewerSchema = {
  __typename?: 'EmailViewerSchema';
  CommunicationSettings: CommunicationSettings;
};

export type EmployerInvoicePaymentMethod = SelectedPaymentMethod & {
  __typename?: 'EmployerInvoicePaymentMethod';
  paymentMethodId: PaymentMethodType;
  selectedPaymentMethodType: SelectedPaymentMethodType;
};

export type EnhancedTextElement = ElementV2 & {
  __typename?: 'EnhancedTextElement';
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  readMore?: Maybe<Scalars['String']['output']>;
  readMoreButtonText?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type EnhancedTextLearnElement = LearnElement & {
  __typename?: 'EnhancedTextLearnElement';
  elementType: ElementTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  readMore?: Maybe<Scalars['String']['output']>;
  readMoreButtonText?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ErrorOccurredRewardResult = RewardResult & {
  __typename?: 'ErrorOccurredRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type EvaluateUploadAsyncElementTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fileId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export type EvaluateUploadAsyncElementTaskPayload = {
  __typename?: 'EvaluateUploadAsyncElementTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  evaluatedTask: EvaluatedUploadAsyncElementTask;
};

export type EvaluatedUploadAsyncElementTask = AsyncElementTask & Node & UploadAsyncElementTask & {
  __typename?: 'EvaluatedUploadAsyncElementTask';
  assignedEvaluator?: Maybe<User>;
  elementKind: AsyncElementKind;
  evaluation: UploadEvaluation;
  extension: AsyncElementTaskExtension;
  file?: Maybe<File>;
  id: Scalars['ID']['output'];
  status: AsyncElementTaskStatus;
  submissionInfo: AsyncElementTaskSubmissionInfo;
};

export type ExternalLicense = Node & {
  __typename?: 'ExternalLicense';
  data: ExternalLicenseData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  issuingInfo: ExternalLicenseIssuingInfoInterface;
  pool?: Maybe<ExternalLicensePool>;
};

export type ExternalLicenseData = {
  __typename?: 'ExternalLicenseData';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ExternalLicenseDataInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ExternalLicenseIssuedToUserIssuingInfoType = ExternalLicenseIssuingInfoInterface & {
  __typename?: 'ExternalLicenseIssuedToUserIssuingInfoType';
  hasBeenIssued: Scalars['Boolean']['output'];
  issuedAt: Scalars['ZonedDateTIme']['output'];
  issuedTo?: Maybe<User>;
  kind: ExternalLicenseIssuingInfoKind;
  validUntil: Scalars['ZonedDateTIme']['output'];
};

export type ExternalLicenseIssuingInfoInterface = {
  hasBeenIssued: Scalars['Boolean']['output'];
  kind: ExternalLicenseIssuingInfoKind;
};

export enum ExternalLicenseIssuingInfoKind {
  IssuedToUser = 'issuedToUser',
  NotIssued = 'notIssued'
}

export type ExternalLicenseNotIssuedIssuingInfoType = ExternalLicenseIssuingInfoInterface & {
  __typename?: 'ExternalLicenseNotIssuedIssuingInfoType';
  hasBeenIssued: Scalars['Boolean']['output'];
  kind: ExternalLicenseIssuingInfoKind;
};

export type ExternalLicensePool = Node & {
  __typename?: 'ExternalLicensePool';
  canBeDeleted: Scalars['Boolean']['output'];
  data: ExternalLicensePoolData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type ExternalLicensePoolData = {
  __typename?: 'ExternalLicensePoolData';
  link?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  usageInformation: Scalars['String']['output'];
  validNumDaysAfterIssuing: Scalars['Int']['output'];
};

export type ExternalLicensePoolDataInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  usageInformation: Scalars['String']['input'];
  validNumDaysAfterIssuing: Scalars['Int']['input'];
};

/** A connection to a list of items. */
export type ExternalLicensePoolsConnection = {
  __typename?: 'ExternalLicensePoolsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ExternalLicensePoolsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ExternalLicensePoolsEdge = {
  __typename?: 'ExternalLicensePoolsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ExternalLicensePool;
};

export type ExternalLicenseReward = Reward & {
  __typename?: 'ExternalLicenseReward';
  data: ExternalLicenseRewardData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind;
  superId: Scalars['ID']['output'];
};

export type ExternalLicenseRewardData = {
  __typename?: 'ExternalLicenseRewardData';
  pool?: Maybe<ExternalLicensePool>;
};

export type ExternalLicenseRewardDataInput = {
  pool: Scalars['ID']['input'];
};

export type ExternalLicenseRewardResult = RewardResult & {
  __typename?: 'ExternalLicenseRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

/** A connection to a list of items. */
export type ExternalLicensesConnection = {
  __typename?: 'ExternalLicensesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ExternalLicensesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ExternalLicensesEdge = {
  __typename?: 'ExternalLicensesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ExternalLicense;
};

export type FailedELearningContentSubmissionDefinition = ContentSubmissionDefinition & ELearningContentSubmissionDefinition & FinishedELearningContentSubmissionDefinitionInterface & {
  __typename?: 'FailedELearningContentSubmissionDefinition';
  contentKind: ContentKind;
  progress: ELearningContentSubmissionProgress;
  relativeProgress: ELearningContentSubmissionRelativeProgress;
  rewardResults: Array<RewardResult>;
  status: ContentSubmissionStatus;
};

export type FeedbackData = {
  comment?: InputMaybe<Scalars['String']['input']>;
  score: Scalars['Int']['input'];
};

export type FeedbackV2 = Node & {
  __typename?: 'FeedbackV2';
  body: Scalars['String']['output'];
  createdAt: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  learnOpportunity?: Maybe<LearnOpportunityV2>;
  screen?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

/** Data only accessible by the admin */
export type FeedbackV2AdminSchema = {
  __typename?: 'FeedbackV2AdminSchema';
  Feedbacks: FeedbacksConnection;
};


/** Data only accessible by the admin */
export type FeedbackV2AdminSchemaFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type FeedbackV2Mutations = {
  __typename?: 'FeedbackV2Mutations';
  leaveFeedback?: Maybe<LeaveFeedbackV2Payload>;
};


export type FeedbackV2MutationsLeaveFeedbackArgs = {
  input: LeaveFeedbackV2Input;
};

/** A connection to a list of items. */
export type FeedbacksConnection = {
  __typename?: 'FeedbacksConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FeedbacksEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FeedbacksEdge = {
  __typename?: 'FeedbacksEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: FeedbackV2;
};

export type File = Node & {
  __typename?: 'File';
  accessType: FileAccessType;
  fileSize: Scalars['Long']['output'];
  fileType: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  storageKey: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailKey?: Maybe<Scalars['String']['output']>;
  uploadDateTime: Scalars['ZonedDateTIme']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export enum FileAccessType {
  Public = 'public',
  SignedUrl = 'signedUrl'
}

export type FileAttachment = {
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<File>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: AttachmentKind;
  title?: Maybe<Scalars['String']['output']>;
};

export enum FileContentTypeV2 {
  Jpg = 'jpg',
  Pdf = 'pdf',
  Png = 'png'
}

export type FileElementV2 = ElementV2 & {
  __typename?: 'FileElementV2';
  elementType: ElementTypeV2;
  extension: ElementExtension;
  file?: Maybe<File>;
  fileContentType: FileContentTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type FileLearnElement = LearnElement & {
  __typename?: 'FileLearnElement';
  elementType: ElementTypeV2;
  file?: Maybe<File>;
  fileContentType: FileContentTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

/** Data only accessible by the admin */
export type FilesAdminMutationSchema = {
  __typename?: 'FilesAdminMutationSchema';
  deleteFile?: Maybe<DeleteFilePayload>;
};


/** Data only accessible by the admin */
export type FilesAdminMutationSchemaDeleteFileArgs = {
  input: DeleteFileInput;
};

/** Data only accessible by the admin */
export type FilesAdminSchema = {
  __typename?: 'FilesAdminSchema';
  Files: FilesConnection;
};


/** Data only accessible by the admin */
export type FilesAdminSchemaFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<Array<Scalars['String']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fromDateTimeInclusive?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tagsExcluded?: InputMaybe<Array<Scalars['String']['input']>>;
  tagsIncluded?: InputMaybe<Array<Scalars['String']['input']>>;
  toDateTimeInclusive?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
};

/** A connection to a list of items. */
export type FilesConnection = {
  __typename?: 'FilesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FilesEdge = {
  __typename?: 'FilesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: File;
};

export enum FilterByOfferWrapperKind {
  CoachingGroup = 'CoachingGroup',
  CoachingOneToOne = 'CoachingOneToOne',
  Educational = 'Educational',
  MicroLearning = 'MicroLearning'
}

export type FinishedAsyncContentSubmissionDefinitionInterface = {
  contentKind: ContentKind;
  element?: Maybe<AsyncLearnElement>;
  rewardResults: Array<RewardResult>;
  status: ContentSubmissionStatus;
};

export type FinishedELearningContentSubmissionDefinitionInterface = {
  contentKind: ContentKind;
  progress: ELearningContentSubmissionProgress;
  relativeProgress: ELearningContentSubmissionRelativeProgress;
  rewardResults: Array<RewardResult>;
  status: ContentSubmissionStatus;
};

export type FinishedELearningContentSubmissionProgress = ELearningContentSubmissionProgress & {
  __typename?: 'FinishedELearningContentSubmissionProgress';
  percentage: Scalars['Int']['output'];
};

export type FirstContentStartAtTreeConfig = StartAtTreeConfig & {
  __typename?: 'FirstContentStartAtTreeConfig';
  configType: StartAtTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type FlowELearningContentConfig = {
  configType: FlowELearningContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum FlowELearningContentConfigType {
  FlowELearningContentDirectFeedback = 'FlowELearningContent_DirectFeedback',
  FlowELearningContentShowAnswersInBetween = 'FlowELearningContent_ShowAnswersInBetween',
  FlowELearningContentSimplyContinue = 'FlowELearningContent_SimplyContinue'
}

export type ForgotPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type FreshUploadAsyncElementTask = AsyncElementTask & Node & UploadAsyncElementTask & {
  __typename?: 'FreshUploadAsyncElementTask';
  assignedEvaluator?: Maybe<User>;
  elementKind: AsyncElementKind;
  extension: AsyncElementTaskExtension;
  file?: Maybe<File>;
  id: Scalars['ID']['output'];
  status: AsyncElementTaskStatus;
  submissionInfo: AsyncElementTaskSubmissionInfo;
};

export type GamificationPoints = {
  id: Scalars['ID']['output'];
  kind: GamificationPointsKind;
  num: Scalars['Int']['output'];
  owner?: Maybe<User>;
  receivedAt: Scalars['ZonedDateTIme']['output'];
};

export type GamificationPointsAlreadyReceivedPointsRewardResult = RewardResult & {
  __typename?: 'GamificationPointsAlreadyReceivedPointsRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type GamificationPointsErrorOccurredRewardResult = RewardResult & {
  __typename?: 'GamificationPointsErrorOccurredRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export enum GamificationPointsKind {
  ReceivedByContent = 'ReceivedByContent'
}

export type GamificationPointsNoPointsReceivedRewardResult = RewardResult & {
  __typename?: 'GamificationPointsNoPointsReceivedRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type GamificationPointsNotPassedIhkTestFlowRewardResult = RewardResult & {
  __typename?: 'GamificationPointsNotPassedIHKTestFlowRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type GamificationPointsPointsReceivedRewardResult = RewardResult & {
  __typename?: 'GamificationPointsPointsReceivedRewardResult';
  kind: RewardResultKind;
  points?: Maybe<GamificationPointsReceivedByContent>;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type GamificationPointsReceivedByContent = GamificationPoints & {
  __typename?: 'GamificationPointsReceivedByContent';
  contentId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  kind: GamificationPointsKind;
  num: Scalars['Int']['output'];
  owner?: Maybe<User>;
  receivedAt: Scalars['ZonedDateTIme']['output'];
};

export type GamificationPointsReward = Reward & {
  __typename?: 'GamificationPointsReward';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind;
  superId: Scalars['ID']['output'];
};

export enum Gender {
  Diverse = 'Diverse',
  Female = 'Female',
  Male = 'Male',
  NotDefined = 'NotDefined'
}

export type GenerateAbsoluteCartLinkInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  selectedDiscountCodes: Array<Scalars['String']['input']>;
  selectedProducts: Array<CartLinkProductsInput>;
};

export type GenerateAbsoluteCartLinkPayload = {
  __typename?: 'GenerateAbsoluteCartLinkPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  link: Scalars['String']['output'];
};

export type GetActiveContentNodeOrFallbackRoot_ActiveContentNode = GetActiveContentNodeOrFallbackRoot_Result & {
  __typename?: 'GetActiveContentNodeOrFallbackRoot_ActiveContentNode';
  contentNode: LearnOpportunityV2;
  kind: GetActiveContentNodeOrFallbackRoot_ResultKind;
};

export type GetActiveContentNodeOrFallbackRoot_Empty = GetActiveContentNodeOrFallbackRoot_Result & {
  __typename?: 'GetActiveContentNodeOrFallbackRoot_Empty';
  kind: GetActiveContentNodeOrFallbackRoot_ResultKind;
};

export type GetActiveContentNodeOrFallbackRoot_FallbackRoot = GetActiveContentNodeOrFallbackRoot_Result & {
  __typename?: 'GetActiveContentNodeOrFallbackRoot_FallbackRoot';
  fallbackRoot: LearnOpportunityV2;
  kind: GetActiveContentNodeOrFallbackRoot_ResultKind;
};

export type GetActiveContentNodeOrFallbackRoot_Result = {
  kind: GetActiveContentNodeOrFallbackRoot_ResultKind;
};

export enum GetActiveContentNodeOrFallbackRoot_ResultKind {
  ActiveContentNode = 'ActiveContentNode',
  Empty = 'Empty',
  FallbackRoot = 'FallbackRoot'
}

export type GetVideoDataV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  vimeoId: Scalars['String']['input'];
};

export type GetVideoDataV2Payload = {
  __typename?: 'GetVideoDataV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  videoData?: Maybe<VideoDataV2>;
};

export type GlobalVocabElement = ElementV2 & {
  __typename?: 'GlobalVocabElement';
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type GoToNextElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
};

export type GoToNextElementPayload = {
  __typename?: 'GoToNextElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type GoToPreviousElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
};

export type GoToPreviousElementPayload = {
  __typename?: 'GoToPreviousElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type GoogleIapData = PaymentProviderData & {
  __typename?: 'GoogleIAPData';
  dataType: PaymentProviderDataType;
  orderId: Scalars['ID']['output'];
  paymentMethod: PaymentMethodType;
  receipt: Scalars['String']['output'];
};

export type GroupCoachingSetting = CoachingSetting & {
  __typename?: 'GroupCoachingSetting';
  kind: CoachingSettingKind;
  maxParticipants: Scalars['Int']['output'];
};

export type GroupCoachingSettingInput = {
  kind?: InputMaybe<CoachingSettingKind>;
  maxParticipants: Scalars['Int']['input'];
};

export type HideVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'HideVisibilityTreeConfig';
  configType: VisibilityTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type HistoryEventInterface = {
  kind: HistoryEventType;
};

export enum HistoryEventType {
  BillingDetailsUpdate = 'BillingDetailsUpdate',
  CartUpdate = 'CartUpdate',
  CreditNoteSentUpdate = 'CreditNoteSentUpdate',
  InvoiceSentUpdate = 'InvoiceSentUpdate',
  OrderCreationUpdate = 'OrderCreationUpdate',
  PaymentInProcessUpdate = 'PaymentInProcessUpdate',
  PaymentMethodUpdate = 'PaymentMethodUpdate',
  PurchaseUpdate = 'PurchaseUpdate'
}

export type IhkCertificateErrorOccurredRewardResult = RewardResult & {
  __typename?: 'IHKCertificateErrorOccurredRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type IhkCertificateNotPassedRewardResult = RewardResult & {
  __typename?: 'IHKCertificateNotPassedRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export enum IhkCertificateOrderStateKind {
  ErrorOccurred = 'ErrorOccurred',
  NotIhk = 'NotIHK',
  Ordered = 'Ordered',
  ReadyToOrder = 'ReadyToOrder',
  RewardNotAchievedYet = 'RewardNotAchievedYet'
}

export type IhkCertificateOrderUserDataInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  dateOfBirth: Scalars['LocalDate']['input'];
  firstName: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  salutation?: InputMaybe<Scalars['String']['input']>;
  street: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type IhkCertificateReadyToOrderRewardResult = RewardResult & {
  __typename?: 'IHKCertificateReadyToOrderRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type IhkCertificateReward = Reward & {
  __typename?: 'IHKCertificateReward';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind;
  superId: Scalars['ID']['output'];
};

export type IhkFlowPassContentConfig = PassContentConfig & {
  __typename?: 'IHKFlowPassContentConfig';
  configType: PassContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type IfRepeatedDoNotRewardContentConfig = RewardContentConfig & {
  __typename?: 'IfRepeatedDoNotRewardContentConfig';
  configType: RewardContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type IfRepeatedDoNotRewardTreeConfig = RewardTreeConfig & {
  __typename?: 'IfRepeatedDoNotRewardTreeConfig';
  configType: RewardTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type ImageMapElement = ElementV2 & {
  __typename?: 'ImageMapElement';
  elementType: ElementTypeV2;
  extension: ElementExtension;
  hotspots: Array<ImageMapElementHotspotInterface>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  imageFile?: Maybe<File>;
  title: Scalars['String']['output'];
};

export type ImageMapElementHotspotInterface = {
  kind: ImageMapElementHotspotKind;
  xInPixel: Scalars['Int']['output'];
  yInPixel: Scalars['Int']['output'];
};

export enum ImageMapElementHotspotKind {
  Podcast = 'Podcast',
  Text = 'Text'
}

export type ImageMapElementPodcastHotspot = ImageMapElementHotspotInterface & {
  __typename?: 'ImageMapElementPodcastHotspot';
  durationInSec: Scalars['Int']['output'];
  kind: ImageMapElementHotspotKind;
  podcastFileId?: Maybe<File>;
  xInPixel: Scalars['Int']['output'];
  yInPixel: Scalars['Int']['output'];
};

export type ImageMapElementTextHotspot = ImageMapElementHotspotInterface & {
  __typename?: 'ImageMapElementTextHotspot';
  kind: ImageMapElementHotspotKind;
  text: Scalars['String']['output'];
  xInPixel: Scalars['Int']['output'];
  yInPixel: Scalars['Int']['output'];
};

export type ImageMapLearnElement = LearnElement & {
  __typename?: 'ImageMapLearnElement';
  elementType: ElementTypeV2;
  hotspots: Array<ImageMapElementHotspotInterface>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  imageFile?: Maybe<File>;
  title: Scalars['String']['output'];
};

export type InputAndIsCorrectElementState = ElementState & {
  __typename?: 'InputAndIsCorrectElementState';
  element: LearnElement;
  inputElementState: InputElementState;
  isCorrect: Scalars['Boolean']['output'];
  kind: ElementStateKind;
};

export type InputElementState = {
  element: LearnElement;
  kind: ElementStateKind;
};

export type Instructor = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  superId: Scalars['ID']['output'];
};

/** Data only accessible by the admin */
export type InstructorAdminMutationSchema = {
  __typename?: 'InstructorAdminMutationSchema';
  createInstructorImpl?: Maybe<CreateInstructorImplPayload>;
  deleteInstructorImpl?: Maybe<DeleteInstructorImplPayload>;
  updateInstructorImpl?: Maybe<UpdateInstructorImplPayload>;
};


/** Data only accessible by the admin */
export type InstructorAdminMutationSchemaCreateInstructorImplArgs = {
  input: CreateInstructorImplInput;
};


/** Data only accessible by the admin */
export type InstructorAdminMutationSchemaDeleteInstructorImplArgs = {
  input: DeleteInstructorImplInput;
};


/** Data only accessible by the admin */
export type InstructorAdminMutationSchemaUpdateInstructorImplArgs = {
  input: UpdateInstructorImplInput;
};

/** Data only accessible by the admin */
export type InstructorAdminSchema = {
  __typename?: 'InstructorAdminSchema';
  InstructorImpls: InstructorImplsConnection;
};


/** Data only accessible by the admin */
export type InstructorAdminSchemaInstructorImplsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type InstructorImpl = Instructor & Node & {
  __typename?: 'InstructorImpl';
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  superId: Scalars['ID']['output'];
};

export type InstructorImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type InstructorImplsConnection = {
  __typename?: 'InstructorImplsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InstructorImplsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type InstructorImplsEdge = {
  __typename?: 'InstructorImplsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: InstructorImpl;
};

/** A connection to a list of items. */
export type InstructorsConnection = {
  __typename?: 'InstructorsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InstructorsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type InstructorsEdge = {
  __typename?: 'InstructorsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Instructor;
};

export type Invitation = {
  __typename?: 'Invitation';
  accountName?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  group?: Maybe<UserInAccountGroup>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  invitingUser?: Maybe<User>;
  invitingUserName?: Maybe<Scalars['String']['output']>;
  validUntil?: Maybe<Scalars['ZonedDateTIme']['output']>;
};

/** A connection to a list of items. */
export type InvitationConnection = {
  __typename?: 'InvitationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InvitationEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type InvitationEdge = {
  __typename?: 'InvitationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Invitation;
};

export type InviteUserToAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type InviteUserToAccountPayload = {
  __typename?: 'InviteUserToAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: InvitationEdge;
};

export type InvoiceAddress = {
  __typename?: 'InvoiceAddress';
  city: Scalars['String']['output'];
  companyDetails?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  country: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  houseNumber: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  street: Scalars['String']['output'];
};

export type InvoiceData = {
  __typename?: 'InvoiceData';
  invoiceFile?: Maybe<File>;
  invoiceId: Scalars['String']['output'];
  invoiceNumber?: Maybe<Scalars['String']['output']>;
};

export type InvoiceSentUpdate = HistoryEventInterface & {
  __typename?: 'InvoiceSentUpdate';
  invoiceId: Scalars['String']['output'];
  invoiceNumber: Scalars['String']['output'];
  kind: HistoryEventType;
};

export type IsFinishedTreeAdvancementResult = TreeAdvancementResult & {
  __typename?: 'IsFinishedTreeAdvancementResult';
  status: TreeAdvancementStatus;
};

export type IsFinishedViewerTreeState = ViewerTreeState & {
  __typename?: 'IsFinishedViewerTreeState';
  kind: ViewerTreeStateKind;
  startedAt: Scalars['ZonedDateTIme']['output'];
};

export type IsStartedViewerTreeState = ViewerTreeState & {
  __typename?: 'IsStartedViewerTreeState';
  headContentId: Scalars['ID']['output'];
  kind: ViewerTreeStateKind;
  startedAt: Scalars['ZonedDateTIme']['output'];
};

export type IssueExternalLicenseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalLicenseId: Scalars['ID']['input'];
  issuedToUser: Scalars['ID']['input'];
};

export type IssueExternalLicensePayload = {
  __typename?: 'IssueExternalLicensePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ExternalLicensesEdge;
};

export type Item = {
  itemType: ItemType;
};

export enum ItemType {
  CartBulkDiscount = 'CartBulkDiscount',
  CartDiscount = 'CartDiscount',
  CartGlobalDiscount = 'CartGlobalDiscount',
  CartLimitedDiscount = 'CartLimitedDiscount',
  CartProduct = 'CartProduct'
}

export type JwtLoginInformation = {
  __typename?: 'JwtLoginInformation';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type LearnAsyncContentTypeDefinition = LearnOpportunityContentTypeDefinition & LearnOpportunityTypeDefinition & {
  __typename?: 'LearnAsyncContentTypeDefinition';
  configConsequences: ContentConfigConsequences;
  contentKind: ContentKind;
  contentNodeAdvancementResult: ContentNodeAdvancementResult;
  definitionType: TypeDefinitionType;
  extension: LearnContentExtension;
  task?: Maybe<AsyncElementTask>;
  taskDescription?: Maybe<Scalars['String']['output']>;
};

export type LearnContentExtension = {
  doNotUse: Scalars['String']['output'];
};

export type LearnContentExtensionImpl = LearnContentExtension & {
  __typename?: 'LearnContentExtensionImpl';
  doNotUse: Scalars['String']['output'];
  elementsSummary?: Maybe<ElementsSummary>;
  image?: Maybe<File>;
  instructors: InstructorsConnection;
  isUnlockNecessaryToStart: Scalars['Boolean']['output'];
  receivableGamificationPoints: Scalars['Int']['output'];
  receivedGamificationPoints: Scalars['Int']['output'];
};


export type LearnContentExtensionImplInstructorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type LearnElement = {
  elementType: ElementTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type LearnMutations = {
  __typename?: 'LearnMutations';
  bookTree?: Maybe<BookTreePayload>;
  orderIHKCertificate?: Maybe<OrderIhkCertificatePayload>;
};


export type LearnMutationsBookTreeArgs = {
  input: BookTreeInput;
};


export type LearnMutationsOrderIhkCertificateArgs = {
  input: OrderIhkCertificateInput;
};

/** A connection to a list of items. */
export type LearnOpportunitiesV2Connection = {
  __typename?: 'LearnOpportunitiesV2Connection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LearnOpportunitiesV2Edge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LearnOpportunitiesV2Edge = {
  __typename?: 'LearnOpportunitiesV2Edge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LearnOpportunityV2;
};

export type LearnOpportunityBranchTypeDefinition = LearnOpportunityTypeDefinition & {
  __typename?: 'LearnOpportunityBranchTypeDefinition';
  children: Array<LearnOpportunityV2>;
  definitionType: TypeDefinitionType;
};

export type LearnOpportunityChildStructureDefinition = LearnOpportunityStructureDefinition & {
  __typename?: 'LearnOpportunityChildStructureDefinition';
  definitionType: StructureType;
  title: Scalars['String']['output'];
};

export type LearnOpportunityContentTypeDefinition = {
  configConsequences: ContentConfigConsequences;
  contentKind: ContentKind;
  contentNodeAdvancementResult: ContentNodeAdvancementResult;
  definitionType: TypeDefinitionType;
  extension: LearnContentExtension;
};

export type LearnOpportunityELearningContentTypeDefinition = LearnOpportunityContentTypeDefinition & LearnOpportunityTypeDefinition & {
  __typename?: 'LearnOpportunityELearningContentTypeDefinition';
  configConsequences: ContentConfigConsequences;
  containedElementTypes: Array<ElementTypeV2>;
  contentKind: ContentKind;
  contentNodeAdvancementResult: ContentNodeAdvancementResult;
  definitionType: TypeDefinitionType;
  extension: LearnContentExtension;
  showAnswerElements?: Maybe<Array<ElementV2>>;
};

export type LearnOpportunityRootExtension = {
  doNotUse: Scalars['String']['output'];
};

export type LearnOpportunityRootStructureDefinition = LearnOpportunityStructureDefinition & {
  __typename?: 'LearnOpportunityRootStructureDefinition';
  definitionType: StructureType;
  extension: LearnOpportunityRootExtension;
  icon?: Maybe<File>;
  progressPercentage?: Maybe<Scalars['Int']['output']>;
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  viewerTreeState: ViewerTreeState;
};

export type LearnOpportunityStructureDefinition = {
  definitionType: StructureType;
  title: Scalars['String']['output'];
};

export type LearnOpportunityTypeDefinition = {
  definitionType: TypeDefinitionType;
};

export type LearnOpportunityV2 = Node & {
  __typename?: 'LearnOpportunityV2';
  attachments: Array<Attachment>;
  attachmentsV2: Array<AttachmentV2>;
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  indexPath: Array<Scalars['Int']['output']>;
  instructors: Array<Instructor>;
  instructorsV2: InstructorsConnection;
  lengthInSecondsV2: Scalars['Int']['output'];
  nextContentNode?: Maybe<LearnOpportunityV2>;
  nextContentNodeId?: Maybe<Scalars['ID']['output']>;
  path: Array<LearnOpportunityV2>;
  previousContentNodeId?: Maybe<Scalars['ID']['output']>;
  root?: Maybe<LearnOpportunityV2>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  structureDefinition: LearnOpportunityStructureDefinition;
  treeAdvancementResult: TreeAdvancementResult;
  typeDefinition: LearnOpportunityTypeDefinition;
};


export type LearnOpportunityV2InstructorsV2Args = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type LearnQueries = {
  __typename?: 'LearnQueries';
  Tags: TagsConnection;
};


export type LearnQueriesTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Data only accessible by the admin */
export type LearnV2AdminSchema = {
  __typename?: 'LearnV2AdminSchema';
  GetContentSubmissions: ContentSubmissionsConnection;
  GetTreeStates: TreeStatesConnection;
  SearchLearnOpportunityV2: LearnOpportunitiesV2Connection;
};


/** Data only accessible by the admin */
export type LearnV2AdminSchemaGetContentSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  treeStateId: Scalars['ID']['input'];
};


/** Data only accessible by the admin */
export type LearnV2AdminSchemaGetTreeStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByRootNodeId?: InputMaybe<Scalars['ID']['input']>;
  filterByUserId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type LearnV2AdminSchemaSearchLearnOpportunityV2Args = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  titleMatchRegex?: InputMaybe<Scalars['String']['input']>;
};

export type LearnV2Mutations = {
  __typename?: 'LearnV2Mutations';
  restartContentNodeAfterFailed?: Maybe<RestartContentNodeAfterFailedPayload>;
  restartContentNodeAfterPassed?: Maybe<RestartContentNodeAfterPassedPayload>;
  startContentNode?: Maybe<StartContentNodePayload>;
  startTree?: Maybe<StartTreePayload>;
  submitClozeTextElement?: Maybe<SubmitClozeTextElementV2Payload>;
  submitDisplayElement?: Maybe<SubmitDisplayElementPayload>;
  submitMarkMistakesElement?: Maybe<SubmitMarkMistakesElementV2Payload>;
  submitMatrixElement?: Maybe<SubmitMatrixElementV2Payload>;
  submitMultipleChoiceElement?: Maybe<SubmitMultipleChoiceElementV2Payload>;
  submitOrderElement?: Maybe<SubmitOrderElementPayload>;
};


export type LearnV2MutationsRestartContentNodeAfterFailedArgs = {
  input: RestartContentNodeAfterFailedInput;
};


export type LearnV2MutationsRestartContentNodeAfterPassedArgs = {
  input: RestartContentNodeAfterPassedInput;
};


export type LearnV2MutationsStartContentNodeArgs = {
  input: StartContentNodeInput;
};


export type LearnV2MutationsStartTreeArgs = {
  input: StartTreeInput;
};


export type LearnV2MutationsSubmitClozeTextElementArgs = {
  input: SubmitClozeTextElementV2Input;
};


export type LearnV2MutationsSubmitDisplayElementArgs = {
  input: SubmitDisplayElementInput;
};


export type LearnV2MutationsSubmitMarkMistakesElementArgs = {
  input: SubmitMarkMistakesElementV2Input;
};


export type LearnV2MutationsSubmitMatrixElementArgs = {
  input: SubmitMatrixElementV2Input;
};


export type LearnV2MutationsSubmitMultipleChoiceElementArgs = {
  input: SubmitMultipleChoiceElementV2Input;
};


export type LearnV2MutationsSubmitOrderElementArgs = {
  input: SubmitOrderElementInput;
};

/** Data partaining to the current user */
export type LearnViewerSchema = {
  __typename?: 'LearnViewerSchema';
  getActiveContentNodeOrFallbackRoot: GetActiveContentNodeOrFallbackRoot_Result;
  getActiveRoots: Array<LearnOpportunityV2>;
};

export type LeaveFeedbackInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  feedbackData: FeedbackData;
};

export type LeaveFeedbackPayload = {
  __typename?: 'LeaveFeedbackPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type LeaveFeedbackV2Input = {
  body: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['ID']['input']>;
  screen?: InputMaybe<Scalars['String']['input']>;
};

export type LeaveFeedbackV2Payload = {
  __typename?: 'LeaveFeedbackV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type License = {
  __typename?: 'License';
  creationInfo: LicenseCreationInfo;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  licenseDefinition?: Maybe<LicenseDefinition>;
  usage: LicenseUsage;
};

export type LicenseAvailability = {
  kind: LicenseAvailabilityKind;
};

export type LicenseAvailabilityFreeLicensesAvailable = LicenseAvailability & {
  __typename?: 'LicenseAvailabilityFreeLicensesAvailable';
  kind: LicenseAvailabilityKind;
  numAvailable: Scalars['Int']['output'];
};

export enum LicenseAvailabilityKind {
  FreeLicensesAvailable = 'FreeLicensesAvailable',
  NoneAvailable = 'NoneAvailable'
}

export type LicenseAvailabilityNoneAvailableType = LicenseAvailability & {
  __typename?: 'LicenseAvailabilityNoneAvailableType';
  kind: LicenseAvailabilityKind;
};

/** A connection to a list of items. */
export type LicenseConnection = {
  __typename?: 'LicenseConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LicenseEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LicenseCreatedByAdmin = LicenseCreationInfo & {
  __typename?: 'LicenseCreatedByAdmin';
  createdAt: Scalars['ZonedDateTIme']['output'];
  creatorId: Scalars['ID']['output'];
  kind: LicenseCreationInfoKind;
};

export type LicenseCreatedByOrder = LicenseCreationInfo & {
  __typename?: 'LicenseCreatedByOrder';
  createdAt: Scalars['ZonedDateTIme']['output'];
  kind: LicenseCreationInfoKind;
  orderId: Scalars['ID']['output'];
};

export type LicenseCreatedByPotentialAnalysis = LicenseCreationInfo & {
  __typename?: 'LicenseCreatedByPotentialAnalysis';
  createdAt: Scalars['ZonedDateTIme']['output'];
  fromUserId: Scalars['ID']['output'];
  kind: LicenseCreationInfoKind;
};

export type LicenseCreatedByRegistration = LicenseCreationInfo & {
  __typename?: 'LicenseCreatedByRegistration';
  createdAt: Scalars['ZonedDateTIme']['output'];
  kind: LicenseCreationInfoKind;
  userId: Scalars['ID']['output'];
};

export type LicenseCreationInfo = {
  createdAt: Scalars['ZonedDateTIme']['output'];
  kind: LicenseCreationInfoKind;
};

export enum LicenseCreationInfoKind {
  Admin = 'Admin',
  Order = 'Order',
  PotentialAnalysis = 'PotentialAnalysis',
  Registration = 'Registration'
}

export type LicenseDefinition = Node & {
  __typename?: 'LicenseDefinition';
  data: LicenseDefinitionData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type LicenseDefinitionCoachingInfo = {
  __typename?: 'LicenseDefinitionCoachingInfo';
  coachingId: Scalars['ID']['output'];
  contractPartner?: Maybe<ContractPartner>;
  image?: Maybe<File>;
  title: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type LicenseDefinitionConnection = {
  __typename?: 'LicenseDefinitionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LicenseDefinitionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LicenseDefinitionData = {
  kind: LicenseDefinitionDataKind;
  name: Scalars['String']['output'];
};

export enum LicenseDefinitionDataKind {
  Coaching = 'Coaching',
  MicroLearning = 'MicroLearning',
  Tree = 'Tree'
}

/** An edge in a connection. */
export type LicenseDefinitionEdge = {
  __typename?: 'LicenseDefinitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LicenseDefinition;
};

export type LicenseDefinitionRootInfo = {
  __typename?: 'LicenseDefinitionRootInfo';
  contractPartner?: Maybe<ContractPartner>;
  image?: Maybe<File>;
  rootId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

/** An edge in a connection. */
export type LicenseEdge = {
  __typename?: 'LicenseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: License;
};

export type LicenseProduct = Node & Product & {
  __typename?: 'LicenseProduct';
  costUnit?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isHidden: Scalars['Boolean']['output'];
  licenseDefinition?: Maybe<LicenseDefinition>;
  licenseDefinitionAmount?: Maybe<Scalars['Int']['output']>;
  price: Price;
  productType: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LicenseUsage = {
  kind: LicenseUsageKind;
};

export type LicenseUsageFree = LicenseUsage & {
  __typename?: 'LicenseUsageFree';
  kind: LicenseUsageKind;
};

export enum LicenseUsageKind {
  Free = 'Free',
  UsedForCoaching = 'UsedForCoaching',
  UsedForTree = 'UsedForTree'
}

export type LicenseUsageUsedForCoaching = LicenseUsage & {
  __typename?: 'LicenseUsageUsedForCoaching';
  at: Scalars['ZonedDateTIme']['output'];
  forUser?: Maybe<User>;
  kind: LicenseUsageKind;
};

export type LicenseUsageUsedForTree = LicenseUsage & {
  __typename?: 'LicenseUsageUsedForTree';
  at: Scalars['ZonedDateTIme']['output'];
  forUser?: Maybe<User>;
  kind: LicenseUsageKind;
};

export type LicensesGroupedByDefinition = {
  __typename?: 'LicensesGroupedByDefinition';
  definition?: Maybe<LicenseDefinition>;
  numFree: Scalars['Int']['output'];
  numUsed: Scalars['Int']['output'];
  usedBy: Array<User>;
};

/** A connection to a list of items. */
export type LicensesGroupedByDefinitionConnection = {
  __typename?: 'LicensesGroupedByDefinitionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LicensesGroupedByDefinitionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LicensesGroupedByDefinitionEdge = {
  __typename?: 'LicensesGroupedByDefinitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LicensesGroupedByDefinition;
};

export type LimitedCartDiscount = Node & {
  __typename?: 'LimitedCartDiscount';
  conditions: Array<LimitedCartDiscountCondition>;
  createdAt: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  productSelectionConfig: ProductSelectionConfig;
  title: Scalars['String']['output'];
};

export type LimitedCartDiscountCondition = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: LimitedCartDiscountConditionKindEnum;
};

export enum LimitedCartDiscountConditionKindEnum {
  ProductSelectionCondition = 'ProductSelectionCondition'
}

/** A connection to a list of items. */
export type LimitedCartDiscountConnection = {
  __typename?: 'LimitedCartDiscountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LimitedCartDiscountEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LimitedCartDiscountEdge = {
  __typename?: 'LimitedCartDiscountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LimitedCartDiscount;
};

export type LoginAsUserJwtInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type LoginAsUserJwtPayload = {
  __typename?: 'LoginAsUserJwtPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  jwtTokens: JwtLoginInformation;
};

export type LoginInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginJwtInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginJwtPayload = {
  __typename?: 'LoginJwtPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  loginResult: LoginResult;
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  accounts: Array<Account>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  groupAssociations: Array<UserGroupAssociation>;
  permissionsInAccounts: Array<AccountPermissions>;
  token: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  firstLogin: Scalars['Boolean']['output'];
  jwtTokens: JwtLoginInformation;
};

/** Data only accessible by the admin */
export type ManagementAdminSchema = {
  __typename?: 'ManagementAdminSchema';
  AccountGroups: AccountGroupsConnection;
  UsersAdmin: UserConnection;
};


/** Data only accessible by the admin */
export type ManagementAdminSchemaAccountGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type ManagementAdminSchemaUsersAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  alwaysIncludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ManagementQueries = {
  __typename?: 'ManagementQueries';
  Groups: UserInAccountGroupsConnection;
};


export type ManagementQueriesGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type MandateInformation = {
  __typename?: 'MandateInformation';
  acceptanceDateTime: Scalars['ZonedDateTIme']['output'];
  mandateNumber: Scalars['String']['output'];
};

export type MarkMistakesElement = ElementV2 & {
  __typename?: 'MarkMistakesElement';
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type MarkMistakesInputElementState = ElementState & InputElementState & {
  __typename?: 'MarkMistakesInputElementState';
  checkedMistakeIndices: Array<Scalars['Int']['output']>;
  element: LearnElement;
  kind: ElementStateKind;
};

export type MarkMistakesLearnElement = LearnElement & {
  __typename?: 'MarkMistakesLearnElement';
  elementType: ElementTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  snippets: Array<MarkMistakes_Snippet>;
  title: Scalars['String']['output'];
};

export type MarkMistakesShowAnswerElementState = ElementState & ShowAnswerElementState & {
  __typename?: 'MarkMistakesShowAnswerElementState';
  correctMistakeIndices: Array<Scalars['Int']['output']>;
  element: LearnElement;
  kind: ElementStateKind;
  lastCheckedMistakeIndices?: Maybe<Array<Scalars['Int']['output']>>;
};

export type MarkMistakes_Snippet = {
  __typename?: 'MarkMistakes_Snippet';
  content: Scalars['String']['output'];
};

export type MatrixElement = ElementV2 & {
  __typename?: 'MatrixElement';
  cells: Array<MatrixElementCell>;
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type MatrixElementCell = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: MatrixElementCellKind;
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type MatrixElementCellAnswer = {
  content: Scalars['String']['output'];
  isCorrect: Scalars['Boolean']['output'];
};

export type MatrixElementCellCorrectAnswer = MatrixElementCellAnswer & {
  __typename?: 'MatrixElementCellCorrectAnswer';
  content: Scalars['String']['output'];
  isCorrect: Scalars['Boolean']['output'];
};

export enum MatrixElementCellKind {
  Answer = 'Answer',
  Display = 'Display'
}

export type MatrixElementCellWrongAnswer = MatrixElementCellAnswer & {
  __typename?: 'MatrixElementCellWrongAnswer';
  content: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isCorrect: Scalars['Boolean']['output'];
};

export type MatrixInputElementState = ElementState & InputElementState & {
  __typename?: 'MatrixInputElementState';
  checkedIndices: Array<MatrixLearnElementIndexCell>;
  element: LearnElement;
  kind: ElementStateKind;
};

export type MatrixLearnElement = LearnElement & {
  __typename?: 'MatrixLearnElement';
  cells: Array<MatrixLearnElementCell>;
  elementType: ElementTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type MatrixLearnElementAnswer = {
  __typename?: 'MatrixLearnElementAnswer';
  content: Scalars['String']['output'];
};

export type MatrixLearnElementCell = {
  kind: MatrixElementCellKind;
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type MatrixLearnElementIndexCell = {
  __typename?: 'MatrixLearnElementIndexCell';
  index: Scalars['Int']['output'];
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type MatrixShowAnswerElementState = ElementState & ShowAnswerElementState & {
  __typename?: 'MatrixShowAnswerElementState';
  correctIndices: Array<MatrixLearnElementIndexCell>;
  element: LearnElement;
  kind: ElementStateKind;
  lastCheckedIndices?: Maybe<Array<MatrixLearnElementIndexCell>>;
};

export type MicroLearningLicenseDefinitionData = LicenseDefinitionData & {
  __typename?: 'MicroLearningLicenseDefinitionData';
  kind: LicenseDefinitionDataKind;
  name: Scalars['String']['output'];
};

export type MicroLearningLicenseDefinitionDataInput = {
  name: Scalars['String']['input'];
};

export type MonthlyOption = {
  __typename?: 'MonthlyOption';
  closingRate: Price;
  downPayment: Price;
  financedAmount: Price;
  monthlyRate: Price;
  paymentMethodTypes: Array<PaymentMethodType>;
  rateCount: Scalars['Int']['output'];
  totalAmount: Price;
};

export type MonthlySelectedPaymentMethod = SelectedPaymentMethod & {
  __typename?: 'MonthlySelectedPaymentMethod';
  chosenOption: MonthlyOption;
  paymentMethodId: PaymentMethodType;
  selectedPaymentMethodType: SelectedPaymentMethodType;
};

export type MoveChildNodeInput = {
  childNodeId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newParentNodeId: Scalars['ID']['input'];
  previousSiblingChildNodeIdOpt?: InputMaybe<Scalars['ID']['input']>;
};

export type MoveChildNodePayload = {
  __typename?: 'MoveChildNodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tree: Tree;
};

export type MoveOrderItemsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderElementId: Scalars['ID']['input'];
  orderItemIds: Array<Scalars['ID']['input']>;
};

export type MoveOrderItemsPayload = {
  __typename?: 'MoveOrderItemsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderElement: OrderElement;
};

export type MultipleChoiceElementV2 = ElementV2 & {
  __typename?: 'MultipleChoiceElementV2';
  answerOptions: Array<AnswerOptionV2>;
  answeringType: AnsweringTypeV2;
  answeringTypeText?: Maybe<Scalars['String']['output']>;
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  question: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type MultipleChoiceInputElementState = ElementState & InputElementState & {
  __typename?: 'MultipleChoiceInputElementState';
  checkedAnswerIndices: Array<Scalars['Int']['output']>;
  element: LearnElement;
  kind: ElementStateKind;
};

export type MultipleChoiceLearnElement = LearnElement & {
  __typename?: 'MultipleChoiceLearnElement';
  answerOptions: Array<AnswerOptionWithoutCorrect>;
  answeringType: AnsweringTypeV2;
  answeringTypeText?: Maybe<Scalars['String']['output']>;
  elementType: ElementTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  question: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type MultipleChoiceShowAnswerElementState = ElementState & ShowAnswerElementState & {
  __typename?: 'MultipleChoiceShowAnswerElementState';
  correctAnswerIndices: Array<Scalars['Int']['output']>;
  element: LearnElement;
  kind: ElementStateKind;
  lastCheckedAnswerIndices?: Maybe<Array<Scalars['Int']['output']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Data only accessible by the admin */
  Admin: AdminMutationType;
  AsyncContent: AsyncContentMutations;
  Auth: AuthMutations;
  Billing: BillingMutations;
  Coaching: CoachingMutations;
  ELearning: ELearningMutations;
  FeedbackV2: FeedbackV2Mutations;
  Learn: LearnMutations;
  LearnV2: LearnV2Mutations;
  Notification: NotificationMutations;
  PotentialAnalysis: PotentialAnalysisMutations;
  /** Data partaining to the current user */
  Viewer: ViewerMutationType;
  Vocab: VocabMutations;
};

export type NoPodcastSourceV2 = PodcastSourceV2 & {
  __typename?: 'NoPodcastSourceV2';
  sourceType: PodcastSourceTypeV2;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
};

export type NotAfterDateTimeVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'NotAfterDateTimeVisibilityTreeConfig';
  configType: VisibilityTreeConfigType;
  dateTime: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type NotAtHeadTreeAdvancementResult = TreeAdvancementResult & {
  __typename?: 'NotAtHeadTreeAdvancementResult';
  headContentNodeId: Scalars['ID']['output'];
  headFirstElementType?: Maybe<ElementTypeV2>;
  status: TreeAdvancementStatus;
};

export type NotBooked = BookingInterface & {
  __typename?: 'NotBooked';
  kind: BookingKind;
};

export type NotContentNodeContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'NotContentNodeContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus;
};

export type NotPassedRewardResult = RewardResult & {
  __typename?: 'NotPassedRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type NotVisibleTreeAdvancementResult = TreeAdvancementResult & {
  __typename?: 'NotVisibleTreeAdvancementResult';
  reasonConfigTypes: Array<Scalars['String']['output']>;
  status: TreeAdvancementStatus;
};

export type NotVisibleViewerTreeState = ViewerTreeState & {
  __typename?: 'NotVisibleViewerTreeState';
  kind: ViewerTreeStateKind;
  reasonConfigTypes: Array<Scalars['String']['output']>;
};

/** Data only accessible by the admin */
export type NotificationAdminMutationSchema = {
  __typename?: 'NotificationAdminMutationSchema';
  createPersonalizedNotificationTemplate?: Maybe<CreatePersonalizedNotificationTemplatePayload>;
  deletePersonalizedNotificationTemplate?: Maybe<DeletePersonalizedNotificationTemplatePayload>;
  updatePersonalizedNotificationTemplate?: Maybe<UpdatePersonalizedNotificationTemplatePayload>;
};


/** Data only accessible by the admin */
export type NotificationAdminMutationSchemaCreatePersonalizedNotificationTemplateArgs = {
  input: CreatePersonalizedNotificationTemplateInput;
};


/** Data only accessible by the admin */
export type NotificationAdminMutationSchemaDeletePersonalizedNotificationTemplateArgs = {
  input: DeletePersonalizedNotificationTemplateInput;
};


/** Data only accessible by the admin */
export type NotificationAdminMutationSchemaUpdatePersonalizedNotificationTemplateArgs = {
  input: UpdatePersonalizedNotificationTemplateInput;
};

/** Data only accessible by the admin */
export type NotificationAdminSchema = {
  __typename?: 'NotificationAdminSchema';
  AvailableSystemTemplates: Array<NotificationTemplate>;
  PersonalizedNotificationTemplates: PersonalizedNotificationTemplatesConnection;
};


/** Data only accessible by the admin */
export type NotificationAdminSchemaAvailableSystemTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type NotificationAdminSchemaPersonalizedNotificationTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type NotificationMutations = {
  __typename?: 'NotificationMutations';
  registerForNotification?: Maybe<RegisterForNotificationPayload>;
};


export type NotificationMutationsRegisterForNotificationArgs = {
  input: RegisterForNotificationInput;
};

export enum NotificationServiceType {
  Apns = 'Apns',
  Gcm = 'Gcm'
}

export type NotificationTemplate = {
  __typename?: 'NotificationTemplate';
  key: Scalars['String']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  variables: Array<Scalars['String']['output']>;
};

export type OfferWrapper = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: OfferWrapperKind;
};

/** Data only accessible by the admin */
export type OfferWrapperAdminSchema = {
  __typename?: 'OfferWrapperAdminSchema';
  OfferWrappers: OfferWrappersConnection;
};


/** Data only accessible by the admin */
export type OfferWrapperAdminSchemaOfferWrappersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  kinds: Array<FilterByOfferWrapperKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  tagIds: Array<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export enum OfferWrapperKind {
  Coaching = 'Coaching',
  MicroLearning = 'MicroLearning',
  PublishedEducational = 'PublishedEducational',
  UnpublishedEducational = 'UnpublishedEducational'
}

export type OfferWrapperQueries = {
  __typename?: 'OfferWrapperQueries';
  OfferWrappers: OfferWrappersConnection;
};


export type OfferWrapperQueriesOfferWrappersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds: Array<FilterByOfferWrapperKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  tagIds: Array<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type OfferWrappersConnection = {
  __typename?: 'OfferWrappersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OfferWrappersEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OfferWrappersEdge = {
  __typename?: 'OfferWrappersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OfferWrapper;
};

export type OnPercentagePassContentConfig = PassContentConfig & {
  __typename?: 'OnPercentagePassContentConfig';
  configType: PassContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  requiredPercentage: Scalars['Int']['output'];
};

export type OneTimeSelectedPaymentMethod = SelectedPaymentMethod & {
  __typename?: 'OneTimeSelectedPaymentMethod';
  paymentMethodId: PaymentMethodType;
  selectedPaymentMethodType: SelectedPaymentMethodType;
  stripeData?: Maybe<StripeData>;
};

export type OneToOneCoachingSetting = CoachingSetting & {
  __typename?: 'OneToOneCoachingSetting';
  kind: CoachingSettingKind;
};

export type OnlyAdminsVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'OnlyAdminsVisibilityTreeConfig';
  configType: VisibilityTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyEditorsVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'OnlyEditorsVisibilityTreeConfig';
  configType: VisibilityTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyIfTreeStateVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'OnlyIfTreeStateVisibilityTreeConfig';
  configType: VisibilityTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyPermissionsImplVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'OnlyPermissionsImplVisibilityTreeConfig';
  configType: VisibilityTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type Order = Node & {
  __typename?: 'Order';
  allowedPaymentMethods: Array<PaymentMethodType>;
  billingDetails?: Maybe<BillingDetails>;
  cart?: Maybe<Cart>;
  createdAt: Scalars['ZonedDateTIme']['output'];
  creditNoteData?: Maybe<CreditNoteData>;
  history: OrderHistoriesConnection;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  invoiceData?: Maybe<InvoiceData>;
  paymentData?: Maybe<PaymentProviderData>;
  purchaser?: Maybe<Purchaser>;
  selectedPaymentDate?: Maybe<Scalars['ZonedDateTIme']['output']>;
  selectedPaymentMethod?: Maybe<SelectedPaymentMethod>;
  status: OrderStatus;
};


export type OrderHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderCreationUpdate = HistoryEventInterface & {
  __typename?: 'OrderCreationUpdate';
  kind: HistoryEventType;
};

export type OrderElement = ElementV2 & {
  __typename?: 'OrderElement';
  answeringTypeText?: Maybe<Scalars['String']['output']>;
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  orderItems: Array<OrderItem>;
  title: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type OrderHistoriesConnection = {
  __typename?: 'OrderHistoriesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrderHistoriesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrderHistoriesEdge = {
  __typename?: 'OrderHistoriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderHistory;
};

export type OrderHistory = {
  __typename?: 'OrderHistory';
  createdAt: Scalars['ZonedDateTIme']['output'];
  event: HistoryEventInterface;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  orderId: Scalars['ID']['output'];
  status: OrderStatus;
};

export type OrderIhkCertificateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootId: Scalars['ID']['input'];
  userData: IhkCertificateOrderUserDataInput;
};

export type OrderIhkCertificatePayload = {
  __typename?: 'OrderIHKCertificatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  root: LearnOpportunityV2;
};

export type OrderInputElementState = ElementState & InputElementState & {
  __typename?: 'OrderInputElementState';
  element: LearnElement;
  kind: ElementStateKind;
  selectedOrder: Array<Scalars['ID']['output']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type OrderLearnElement = LearnElement & {
  __typename?: 'OrderLearnElement';
  answeringTypeText?: Maybe<Scalars['String']['output']>;
  elementType: ElementTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  orderItems: Array<OrderItem>;
  title: Scalars['String']['output'];
};

export type OrderShowAnswerElementState = ElementState & ShowAnswerElementState & {
  __typename?: 'OrderShowAnswerElementState';
  correctOrder: Array<Scalars['ID']['output']>;
  element: LearnElement;
  kind: ElementStateKind;
  lastSelectedOrder: Array<Scalars['ID']['output']>;
};

export enum OrderStatus {
  HasBillingDetails = 'HasBillingDetails',
  HasCart = 'HasCart',
  HasPaymentDetails = 'HasPaymentDetails',
  PaymentReceived = 'PaymentReceived',
  Purchased = 'Purchased',
  Transient = 'Transient'
}

/** A connection to a list of items. */
export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrdersEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrdersEdge = {
  __typename?: 'OrdersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

export type PackageUnlock = {
  __typename?: 'PackageUnlock';
  unlockedAt: Scalars['ZonedDateTIme']['output'];
  wordPackage?: Maybe<WordPackage>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Participant = {
  __typename?: 'Participant';
  participationStatus: ParticipationStatus;
  user?: Maybe<User>;
};

export enum ParticipationStatus {
  Absent = 'Absent',
  AbsentExcused = 'AbsentExcused',
  NotConfirmed = 'NotConfirmed',
  Participated = 'Participated'
}

export type PassContentConfig = {
  configType: PassContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum PassContentConfigType {
  PassContentAlways = 'PassContent_Always',
  PassContentIhkFlow = 'PassContent_IHKFlow',
  PassContentOnPercentage = 'PassContent_OnPercentage'
}

export type PassedAsyncContentSubmissionDefinition = AsyncContentSubmissionDefinition & ContentSubmissionDefinition & FinishedAsyncContentSubmissionDefinitionInterface & {
  __typename?: 'PassedAsyncContentSubmissionDefinition';
  contentKind: ContentKind;
  element?: Maybe<AsyncLearnElement>;
  rewardResults: Array<RewardResult>;
  status: ContentSubmissionStatus;
};

export type PassedELearningContentSubmissionDefinition = ContentSubmissionDefinition & ELearningContentSubmissionDefinition & FinishedELearningContentSubmissionDefinitionInterface & {
  __typename?: 'PassedELearningContentSubmissionDefinition';
  contentKind: ContentKind;
  progress: ELearningContentSubmissionProgress;
  relativeProgress: ELearningContentSubmissionRelativeProgress;
  rewardResults: Array<RewardResult>;
  status: ContentSubmissionStatus;
};

export type PayOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};

export type PayOrderPayload = {
  __typename?: 'PayOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type PayOrderViaIapInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  receipt: Scalars['String']['input'];
  targetSystem: TargetSystem;
};

export type PayOrderViaIapPayload = {
  __typename?: 'PayOrderViaIAPPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type PaymentInProcessUpdate = HistoryEventInterface & {
  __typename?: 'PaymentInProcessUpdate';
  kind: HistoryEventType;
};

export enum PaymentMethodType {
  Card = 'Card',
  Giropay = 'Giropay',
  IapApple = 'IapApple',
  IapGoogle = 'IapGoogle',
  InvoicePartner = 'InvoicePartner',
  InvoiceTk = 'InvoiceTk',
  MonthlyPartner = 'MonthlyPartner',
  MonthlyTk = 'MonthlyTk',
  Paypal = 'Paypal',
  Sepa = 'Sepa',
  Sofort = 'Sofort'
}

export type PaymentMethodUpdate = HistoryEventInterface & {
  __typename?: 'PaymentMethodUpdate';
  kind: HistoryEventType;
};

export type PaymentProviderData = {
  dataType: PaymentProviderDataType;
  paymentMethod: PaymentMethodType;
};

export enum PaymentProviderDataType {
  AppleIap = 'AppleIap',
  Default = 'Default',
  GoogleIap = 'GoogleIap',
  Sepa = 'Sepa',
  Stripe = 'Stripe',
  StripeSepa = 'StripeSepa'
}

export enum PaymentType {
  EmployerInvoice = 'EmployerInvoice',
  MonthlyPayment = 'MonthlyPayment',
  OneTimePayment = 'OneTimePayment'
}

export type PercentageProductSelectionConfig = ProductSelectionConfig & {
  __typename?: 'PercentageProductSelectionConfig';
  kind: ProductSelectionConfigKindEnum;
  value: Scalars['Int']['output'];
};

export enum Permission {
  AccountPermissionAuthIsBusinessAccount = 'AccountPermission_Auth_IsBusinessAccount',
  AccountPermissionCoachingIsCoachAccount = 'AccountPermission_Coaching_IsCoachAccount',
  AccountPermissionSystemRoot = 'AccountPermission_System_Root',
  UserInAccountPermissionAsyncElementTaskAdminModify = 'UserInAccountPermission_AsyncElementTaskAdmin_Modify',
  UserInAccountPermissionAsyncElementTaskAdminRead = 'UserInAccountPermission_AsyncElementTaskAdmin_Read',
  UserInAccountPermissionAuthAdminMinimalRead = 'UserInAccountPermission_AuthAdmin_MinimalRead',
  UserInAccountPermissionAuthAdminModify = 'UserInAccountPermission_AuthAdmin_Modify',
  UserInAccountPermissionAuthAdminRead = 'UserInAccountPermission_AuthAdmin_Read',
  UserInAccountPermissionAuthModify = 'UserInAccountPermission_Auth_Modify',
  UserInAccountPermissionAuthRead = 'UserInAccountPermission_Auth_Read',
  UserInAccountPermissionCachingAdminModify = 'UserInAccountPermission_CachingAdmin_Modify',
  UserInAccountPermissionCoachBillingAdminRead = 'UserInAccountPermission_CoachBillingAdmin_Read',
  UserInAccountPermissionCoachFeedbackRead = 'UserInAccountPermission_CoachFeedback_Read',
  UserInAccountPermissionCoachingOfferAdminModify = 'UserInAccountPermission_CoachingOfferAdmin_Modify',
  UserInAccountPermissionCoachingOfferAdminRead = 'UserInAccountPermission_CoachingOfferAdmin_Read',
  UserInAccountPermissionCoachingModifyAvailability = 'UserInAccountPermission_Coaching_ModifyAvailability',
  UserInAccountPermissionCoachingModifyCoachProfiles = 'UserInAccountPermission_Coaching_ModifyCoachProfiles',
  UserInAccountPermissionCoachingReadAvailability = 'UserInAccountPermission_Coaching_ReadAvailability',
  UserInAccountPermissionCoachingReadCoachProfiles = 'UserInAccountPermission_Coaching_ReadCoachProfiles',
  UserInAccountPermissionContractPartnerAdminModify = 'UserInAccountPermission_ContractPartnerAdmin_Modify',
  UserInAccountPermissionContractPartnerAdminRead = 'UserInAccountPermission_ContractPartnerAdmin_Read',
  UserInAccountPermissionDiscountAdminModify = 'UserInAccountPermission_DiscountAdmin_Modify',
  UserInAccountPermissionDiscountAdminRead = 'UserInAccountPermission_DiscountAdmin_Read',
  UserInAccountPermissionEmailTemplates = 'UserInAccountPermission_Email_Templates',
  UserInAccountPermissionExternalLicenseAdminModify = 'UserInAccountPermission_ExternalLicenseAdmin_Modify',
  UserInAccountPermissionExternalLicenseAdminRead = 'UserInAccountPermission_ExternalLicenseAdmin_Read',
  UserInAccountPermissionFeedbacksReadFeedbacks = 'UserInAccountPermission_Feedbacks_ReadFeedbacks',
  UserInAccountPermissionFilesDelete = 'UserInAccountPermission_Files_Delete',
  UserInAccountPermissionGenerateCartLinkAdminModify = 'UserInAccountPermission_GenerateCartLinkAdmin_Modify',
  UserInAccountPermissionInstructorsCreateInstructors = 'UserInAccountPermission_Instructors_CreateInstructors',
  UserInAccountPermissionInstructorsDeleteInstructors = 'UserInAccountPermission_Instructors_DeleteInstructors',
  UserInAccountPermissionInstructorsReadInstructors = 'UserInAccountPermission_Instructors_ReadInstructors',
  UserInAccountPermissionInstructorsUpdateInstructors = 'UserInAccountPermission_Instructors_UpdateInstructors',
  UserInAccountPermissionLearnStatesReadLearnStates = 'UserInAccountPermission_LearnStates_ReadLearnStates',
  UserInAccountPermissionLicenseAdminModify = 'UserInAccountPermission_LicenseAdmin_Modify',
  UserInAccountPermissionLicenseAdminRead = 'UserInAccountPermission_LicenseAdmin_Read',
  UserInAccountPermissionLimitedCartDiscountAdminModify = 'UserInAccountPermission_LimitedCartDiscountAdmin_Modify',
  UserInAccountPermissionLimitedCartDiscountAdminRead = 'UserInAccountPermission_LimitedCartDiscountAdmin_Read',
  UserInAccountPermissionManagementManagement = 'UserInAccountPermission_Management_Management',
  UserInAccountPermissionNodesCreateNodes = 'UserInAccountPermission_Nodes_CreateNodes',
  UserInAccountPermissionNodesDeleteNodes = 'UserInAccountPermission_Nodes_DeleteNodes',
  UserInAccountPermissionNodesPublishNodes = 'UserInAccountPermission_Nodes_PublishNodes',
  UserInAccountPermissionNodesReadNodes = 'UserInAccountPermission_Nodes_ReadNodes',
  UserInAccountPermissionNodesUpdateNodes = 'UserInAccountPermission_Nodes_UpdateNodes',
  UserInAccountPermissionOfferAdminModify = 'UserInAccountPermission_OfferAdmin_Modify',
  UserInAccountPermissionOfferAdminRead = 'UserInAccountPermission_OfferAdmin_Read',
  UserInAccountPermissionOrderAdminModify = 'UserInAccountPermission_OrderAdmin_Modify',
  UserInAccountPermissionOrderAdminRead = 'UserInAccountPermission_OrderAdmin_Read',
  UserInAccountPermissionProductAdminModify = 'UserInAccountPermission_ProductAdmin_Modify',
  UserInAccountPermissionProductAdminRead = 'UserInAccountPermission_ProductAdmin_Read',
  UserInAccountPermissionSettingsAdminModify = 'UserInAccountPermission_SettingsAdmin_Modify',
  UserInAccountPermissionSettingsAdminRead = 'UserInAccountPermission_SettingsAdmin_Read',
  UserInAccountPermissionSubmissionsReadSubmissions = 'UserInAccountPermission_Submissions_ReadSubmissions',
  UserInAccountPermissionSystemOwner = 'UserInAccountPermission_System_Owner',
  UserInAccountPermissionTagAdminModify = 'UserInAccountPermission_TagAdmin_Modify',
  UserInAccountPermissionTagAdminRead = 'UserInAccountPermission_TagAdmin_Read',
  UserInAccountPermissionTagAdminSelect = 'UserInAccountPermission_TagAdmin_Select',
  UserInAccountPermissionTagsCreateTags = 'UserInAccountPermission_Tags_CreateTags',
  UserInAccountPermissionTagsDeleteTags = 'UserInAccountPermission_Tags_DeleteTags',
  UserInAccountPermissionTagsReadTags = 'UserInAccountPermission_Tags_ReadTags',
  UserInAccountPermissionTagsUpdateTags = 'UserInAccountPermission_Tags_UpdateTags',
  UserInAccountPermissionVocabAdminModifyWordPackages = 'UserInAccountPermission_VocabAdmin_ModifyWordPackages',
  UserInAccountPermissionVocabAdminReadWordPackages = 'UserInAccountPermission_VocabAdmin_ReadWordPackages'
}

export type PersonalizedEmailTemplate = Node & {
  __typename?: 'PersonalizedEmailTemplate';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  template: EmailTemplate;
};

export type PersonalizedEmailTemplateInput = {
  body: Scalars['String']['input'];
  key: Scalars['String']['input'];
  previewText: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  variables: Array<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type PersonalizedEmailTemplatesConnection = {
  __typename?: 'PersonalizedEmailTemplatesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonalizedEmailTemplatesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PersonalizedEmailTemplatesEdge = {
  __typename?: 'PersonalizedEmailTemplatesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PersonalizedEmailTemplate;
};

export type PersonalizedNotificationTemplate = Node & {
  __typename?: 'PersonalizedNotificationTemplate';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  template: NotificationTemplate;
};

export type PersonalizedNotificationTemplateInput = {
  key: Scalars['String']['input'];
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
  variables: Array<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type PersonalizedNotificationTemplatesConnection = {
  __typename?: 'PersonalizedNotificationTemplatesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonalizedNotificationTemplatesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PersonalizedNotificationTemplatesEdge = {
  __typename?: 'PersonalizedNotificationTemplatesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PersonalizedNotificationTemplate;
};

export type PingQueries = {
  __typename?: 'PingQueries';
  /** A simple endpoint to find out if the API is reachable */
  ping: Scalars['String']['output'];
};

export type PodcastElementV2 = ElementV2 & {
  __typename?: 'PodcastElementV2';
  durationInSeconds?: Maybe<Scalars['Int']['output']>;
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  podcastSource: PodcastSourceV2;
  releasedFileOpt?: Maybe<ReleasedFileV2>;
  releasedSubtitlesOpt?: Maybe<ReleasedSubtitlesV2>;
  title: Scalars['String']['output'];
};

export type PodcastLearnElement = LearnElement & {
  __typename?: 'PodcastLearnElement';
  durationInSeconds?: Maybe<Scalars['Int']['output']>;
  elementType: ElementTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  podcastSource: PodcastSourceV2;
  releasedFileOpt?: Maybe<ReleasedFileV2>;
  releasedSubtitlesOpt?: Maybe<ReleasedSubtitlesV2>;
  title: Scalars['String']['output'];
};

export enum PodcastSourceTypeV2 {
  None = 'none',
  Podigee = 'podigee',
  Vimeo = 'vimeo'
}

export type PodcastSourceV2 = {
  sourceType: PodcastSourceTypeV2;
};

export type PodcastWithTimestamp = ElementV2 & {
  __typename?: 'PodcastWithTimestamp';
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  podcastFile?: Maybe<File>;
  timestampsWithImage: Array<TimestampWithImage>;
  title: Scalars['String']['output'];
};

export type PodcastWithTimestampLearnElement = LearnElement & {
  __typename?: 'PodcastWithTimestampLearnElement';
  duration: Scalars['Int']['output'];
  elementType: ElementTypeV2;
  end: Scalars['Int']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  podcastFile: File;
  start: Scalars['Int']['output'];
  timestampsWithImage: Array<TimestampWithImage>;
  title: Scalars['String']['output'];
};

export type PodigeePodcastSourceV2 = PodcastSourceV2 & {
  __typename?: 'PodigeePodcastSourceV2';
  lengthInSeconds: Scalars['Int']['output'];
  podigeeUrl: Scalars['String']['output'];
  sourceType: PodcastSourceTypeV2;
};

export type PotentialAnalysisMutations = {
  __typename?: 'PotentialAnalysisMutations';
  createPotentialAnalysisClickout?: Maybe<CreatePotentialAnalysisClickoutPayload>;
};


export type PotentialAnalysisMutationsCreatePotentialAnalysisClickoutArgs = {
  input: CreatePotentialAnalysisClickoutInput;
};

export type PotentialAnalysisRegistrationDataInput = {
  language: Scalars['String']['input'];
  ptt: Scalars['Int']['input'];
  pttchk: Scalars['String']['input'];
  rvw: Scalars['Int']['input'];
  rvwchk: Scalars['String']['input'];
};

export type PotentialAnalysisResult = {
  __typename?: 'PotentialAnalysisResult';
  categoryResults: Array<CategoryResult>;
  isLongAnalysis: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  pdf?: Maybe<File>;
};

/** Data partaining to the current user */
export type PotentialAnalysisViewerSchema = {
  __typename?: 'PotentialAnalysisViewerSchema';
  MyPotentialAnalysisResult?: Maybe<PotentialAnalysisResult>;
};

export type Price = {
  __typename?: 'Price';
  grossPrice: Scalars['BigDecimal']['output'];
  netPrice: Scalars['BigDecimal']['output'];
  taxRatePercentage: Scalars['BigDecimal']['output'];
};

export type PriceInput = {
  grossPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  netPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  taxRatePercentage?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type PrivateBillingDetails = BillingDetails & {
  __typename?: 'PrivateBillingDetails';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  customerType: CustomerType;
  dateOfBirth: Scalars['ZonedDateTIme']['output'];
  firstName: Scalars['String']['output'];
  houseNumber: Scalars['String']['output'];
  invoiceAddress?: Maybe<InvoiceAddress>;
  invoiceEmail: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  salutation: SalutationType;
  street: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  id: Scalars['ID']['output'];
  isHidden: Scalars['Boolean']['output'];
  price: Price;
  productType: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ProductSelectionCondition = LimitedCartDiscountCondition & {
  __typename?: 'ProductSelectionCondition';
  amount: Scalars['Int']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: LimitedCartDiscountConditionKindEnum;
  product?: Maybe<Product>;
  productId: Scalars['ID']['output'];
};

export type ProductSelectionConfig = {
  kind: ProductSelectionConfigKindEnum;
};

export enum ProductSelectionConfigKindEnum {
  Percentage = 'Percentage'
}

/** A connection to a list of items. */
export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

export type ProfileData = {
  __typename?: 'ProfileData';
  avatar?: Maybe<File>;
  basicPersonal: ProfileDataBasicPersonal;
  certificateAnswer?: Maybe<Scalars['Int']['output']>;
  certificateFileIds: Array<File>;
  coachingStrongPointsTopics: Array<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  digitalAffinity1?: Maybe<Scalars['Boolean']['output']>;
  digitalAffinity2?: Maybe<Scalars['Boolean']['output']>;
  educationFreeText?: Maybe<Scalars['String']['output']>;
  educationMoreThan150h?: Maybe<Scalars['Boolean']['output']>;
  experience: ProfileDataExperience;
  jobTitles?: Maybe<Array<Scalars['String']['output']>>;
  languages: Array<Scalars['String']['output']>;
  methods: Array<Scalars['String']['output']>;
  personalPhilosophyCoachingStyle?: Maybe<Scalars['String']['output']>;
  personalPhilosophyVisionMission?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  referencesCoachingExperienceIds: Array<File>;
  referencesPublications?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<ProfileDataSocials>;
  studies?: Maybe<Scalars['String']['output']>;
};

export type ProfileDataBasicPersonal = {
  __typename?: 'ProfileDataBasicPersonal';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ProfileDataBasicPersonalInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileDataExperience = {
  __typename?: 'ProfileDataExperience';
  branches: Array<Scalars['String']['output']>;
  branchesSteps: Array<Scalars['String']['output']>;
  coachingFileIds: Array<File>;
  coachingHours?: Maybe<Scalars['Int']['output']>;
};

export type ProfileDataExperienceInput = {
  branches: Array<Scalars['String']['input']>;
  branchesSteps: Array<Scalars['String']['input']>;
  coachingFileIds: Array<Scalars['ID']['input']>;
  coachingHours?: InputMaybe<Scalars['Int']['input']>;
};

export type ProfileDataInput = {
  avatarId?: InputMaybe<Scalars['ID']['input']>;
  basicPersonal: ProfileDataBasicPersonalInput;
  certificateAnswer?: InputMaybe<Scalars['Int']['input']>;
  certificateFileIds: Array<Scalars['ID']['input']>;
  coachingStrongPointsTopics: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  digitalAffinity1?: InputMaybe<Scalars['Boolean']['input']>;
  digitalAffinity2?: InputMaybe<Scalars['Boolean']['input']>;
  educationFreeText?: InputMaybe<Scalars['String']['input']>;
  educationMoreThan150h?: InputMaybe<Scalars['Boolean']['input']>;
  experience: ProfileDataExperienceInput;
  jobTitles?: InputMaybe<Array<Scalars['String']['input']>>;
  languages: Array<Scalars['String']['input']>;
  methods: Array<Scalars['String']['input']>;
  personalPhilosophyCoachingStyle?: InputMaybe<Scalars['String']['input']>;
  personalPhilosophyVisionMission?: InputMaybe<Scalars['String']['input']>;
  quote?: InputMaybe<Scalars['String']['input']>;
  referencesCoachingExperienceIds: Array<Scalars['ID']['input']>;
  referencesPublications?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<ProfileDataSocialsInput>;
  studies?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileDataSocials = {
  __typename?: 'ProfileDataSocials';
  facebook?: Maybe<Scalars['String']['output']>;
  linkedIn?: Maybe<Scalars['String']['output']>;
  others?: Maybe<Array<Scalars['String']['output']>>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ProfileDataSocialsInput = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  others?: InputMaybe<Array<Scalars['String']['input']>>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type PublishedEducationalOfferWrapper = OfferWrapper & {
  __typename?: 'PublishedEducationalOfferWrapper';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: OfferWrapperKind;
  root?: Maybe<LearnOpportunityV2>;
};

export type PublishedRootExtensionImpl = LearnOpportunityRootExtension & {
  __typename?: 'PublishedRootExtensionImpl';
  cartClickout?: Maybe<CartClickout>;
  contractPartner?: Maybe<ContractPartner>;
  diploma?: Maybe<Scalars['String']['output']>;
  doNotUse: Scalars['String']['output'];
  ihkState: IhkCertificateOrderStateKind;
  isMicroLearning: Scalars['Boolean']['output'];
  learnGoals?: Maybe<Scalars['String']['output']>;
  licenseAvailability: LicenseAvailability;
  licenseProduct?: Maybe<LicenseProduct>;
  receivedGamificationPoints: Scalars['Int']['output'];
  reducedData?: Maybe<ReducedData>;
  systemTags: Array<SystemTag>;
  tags: Array<AcademiesTag>;
  trailer?: Maybe<StreamFile>;
  unlockInfo: UnlockInfo;
};

export type PublishingMessageV2 = {
  __typename?: 'PublishingMessageV2';
  additionalMessage?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  timestamp: Scalars['ZonedDateTIme']['output'];
};

export enum PublishingStatus {
  Acknowledged = 'acknowledged',
  Failed = 'failed',
  Inprogress = 'inprogress',
  Succeeded = 'succeeded'
}

export type PublishingUpdatedEventV2 = {
  __typename?: 'PublishingUpdatedEventV2';
  name: Scalars['String']['output'];
  publishing: PublishingV2;
  tree: Tree;
};

export type PublishingV2 = Node & {
  __typename?: 'PublishingV2';
  canBeAcknowledged: Scalars['Boolean']['output'];
  finishedAt?: Maybe<Scalars['ZonedDateTIme']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  initiatedAt: Scalars['ZonedDateTIme']['output'];
  messages: Array<PublishingMessageV2>;
  status: PublishingStatus;
};

/** Data only accessible by the admin */
export type PublishingV2AdminMutationSchema = {
  __typename?: 'PublishingV2AdminMutationSchema';
  acknowledgePublishingV2?: Maybe<AcknowledgePublishingV2Payload>;
  startPublishingV2?: Maybe<StartPublishingV2Payload>;
};


/** Data only accessible by the admin */
export type PublishingV2AdminMutationSchemaAcknowledgePublishingV2Args = {
  input: AcknowledgePublishingV2Input;
};


/** Data only accessible by the admin */
export type PublishingV2AdminMutationSchemaStartPublishingV2Args = {
  input: StartPublishingV2Input;
};

export type PurchaseUpdate = HistoryEventInterface & {
  __typename?: 'PurchaseUpdate';
  kind: HistoryEventType;
};

export type Purchaser = {
  __typename?: 'Purchaser';
  accountId: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  AcademiesTag: AcademiesTagQueries;
  /** Data only accessible by the admin */
  Admin: AdminQueryType;
  Auth: AuthQueries;
  Coaching: CoachingQueries;
  Learn: LearnQueries;
  Management: ManagementQueries;
  OfferWrapper: OfferWrapperQueries;
  Ping: PingQueries;
  /** Data partaining to the current user */
  Viewer: ViewerQueryType;
  Vocab: VocabQueries;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Fetches objects given their IDs */
  nodes: Array<Maybe<Node>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type RearrangeElementsV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  newElementIds: Array<Scalars['ID']['input']>;
};

export type RearrangeElementsV2Payload = {
  __typename?: 'RearrangeElementsV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type ReducedData = {
  __typename?: 'ReducedData';
  containsVideo: Scalars['Boolean']['output'];
  isIHK: Scalars['Boolean']['output'];
  numAttachments: Scalars['Int']['output'];
  numBranches: Scalars['Int']['output'];
  numContents: Scalars['Int']['output'];
  receivableGamificationPoints: Scalars['Int']['output'];
  videoDurationInSec: Scalars['Long']['output'];
};

export type Refusal = {
  __typename?: 'Refusal';
  code: Scalars['String']['output'];
  discountCodeId: Scalars['ID']['output'];
  refusalReason: RefusalReason;
  title: Scalars['String']['output'];
};

export enum RefusalReason {
  DuplicatedSystemCode = 'DuplicatedSystemCode',
  DuplicatedUserCode = 'DuplicatedUserCode',
  Expired = 'Expired',
  OverLimit = 'OverLimit',
  OverUserLimit = 'OverUserLimit',
  WrongAccount = 'WrongAccount',
  WrongProducts = 'WrongProducts'
}

export type RegisterForNotificationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  service: NotificationServiceType;
  token: Scalars['String']['input'];
};

export type RegisterForNotificationPayload = {
  __typename?: 'RegisterForNotificationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RegisterParticipationAdminInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
  participationStatus: ParticipationStatus;
};

export type RegisterParticipationAdminPayload = {
  __typename?: 'RegisterParticipationAdminPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RegisterParticipationInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
  participationStatus: ParticipationStatus;
};

export type RegisterParticipationPayload = {
  __typename?: 'RegisterParticipationPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RegisterUserInput = {
  adsOptIn: Scalars['Boolean']['input'];
  branch?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  potentialAnalysisRegistrationData?: InputMaybe<PotentialAnalysisRegistrationDataInput>;
  rawPassword: Scalars['String']['input'];
  teamSize?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  accountId: Scalars['ID']['output'];
  clientMutationId?: Maybe<Scalars['String']['output']>;
  firstLogin: Scalars['Boolean']['output'];
  userId: Scalars['ID']['output'];
};

export type ReleasedFileV2 = {
  __typename?: 'ReleasedFileV2';
  file?: Maybe<File>;
};

export type ReleasedSubtitlesV2 = {
  __typename?: 'ReleasedSubtitlesV2';
  subtitles?: Maybe<SubtitlesV2>;
  vimeoId: Scalars['String']['output'];
};

export type RemoveAttachmentInput = {
  attachmentId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  nodeId: Scalars['ID']['input'];
};

export type RemoveAttachmentPayload = {
  __typename?: 'RemoveAttachmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  node: TreeNode;
};

export type RemoveColumnFromMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idx: Scalars['Int']['input'];
  matrixElementId: Scalars['ID']['input'];
};

export type RemoveColumnFromMatrixElementPayload = {
  __typename?: 'RemoveColumnFromMatrixElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type RemoveHotspotFromImageMapElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idxForRemoval: Scalars['Int']['input'];
  imageMapElementId: Scalars['ID']['input'];
};

export type RemoveHotspotFromImageMapElementPayload = {
  __typename?: 'RemoveHotspotFromImageMapElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  imageMapElement: ImageMapElement;
};

export type RemoveOrderItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderElementId: Scalars['ID']['input'];
  orderItemId: Scalars['ID']['input'];
};

export type RemoveOrderItemPayload = {
  __typename?: 'RemoveOrderItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderElement: OrderElement;
};

export type RemoveParticipantAdminInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type RemoveParticipantAdminPayload = {
  __typename?: 'RemoveParticipantAdminPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveParticipantFromBookingAsCoachInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type RemoveParticipantFromBookingAsCoachPayload = {
  __typename?: 'RemoveParticipantFromBookingAsCoachPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveParticipantFromMyBookingInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type RemoveParticipantFromMyBookingPayload = {
  __typename?: 'RemoveParticipantFromMyBookingPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentNodeId: Scalars['ID']['input'];
};

export type RemoveRestartIfFailedContentConfigPayload = {
  __typename?: 'RemoveRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type RemoveRewardTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type RemoveRewardTreeConfigPayload = {
  __typename?: 'RemoveRewardTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type RemoveRowFromMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idx: Scalars['Int']['input'];
  matrixElementId: Scalars['ID']['input'];
};

export type RemoveRowFromMatrixElementPayload = {
  __typename?: 'RemoveRowFromMatrixElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type RemoveStartContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentNodeId: Scalars['ID']['input'];
};

export type RemoveStartContentConfigPayload = {
  __typename?: 'RemoveStartContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type RemoveStartTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type RemoveStartTreeConfigPayload = {
  __typename?: 'RemoveStartTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type RemoveUserFromAccountInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type RemoveUserFromAccountPayload = {
  __typename?: 'RemoveUserFromAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  removedUserId: Scalars['ID']['output'];
};

export type RemoveUserFromMyAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type RemoveUserFromMyAccountPayload = {
  __typename?: 'RemoveUserFromMyAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  removedUserId: Scalars['ID']['output'];
};

export type RemoveVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type RemoveVisibilityTreeConfigPayload = {
  __typename?: 'RemoveVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type RemoveWrongAnswerFromMatrixElementCellInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matrixCellId: Scalars['ID']['input'];
  matrixElementId: Scalars['ID']['input'];
  wrongAnswerId: Scalars['ID']['input'];
};

export type RemoveWrongAnswerFromMatrixElementCellPayload = {
  __typename?: 'RemoveWrongAnswerFromMatrixElementCellPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type ResendActivationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type ResendActivationPayload = {
  __typename?: 'ResendActivationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ResetAllStagingDataInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ResetAllStagingDataPayload = {
  __typename?: 'ResetAllStagingDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ResetPasswordAndActivateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ResetPasswordAndActivatePayload = {
  __typename?: 'ResetPasswordAndActivatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ResetStagingBillingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ResetStagingBillingPayload = {
  __typename?: 'ResetStagingBillingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ResetStagingUsersInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ResetStagingUsersPayload = {
  __typename?: 'ResetStagingUsersPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RestartContentNodeAfterFailedInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type RestartContentNodeAfterFailedPayload = {
  __typename?: 'RestartContentNodeAfterFailedPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type RestartContentNodeAfterPassedInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type RestartContentNodeAfterPassedPayload = {
  __typename?: 'RestartContentNodeAfterPassedPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type RestartIfFailedContentConfig = {
  configType: RestartIfFailedContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum RestartIfFailedContentConfigType {
  RestartIfFailedContentBlockPermanently = 'RestartIfFailedContent_BlockPermanently',
  RestartIfFailedContentBlockTemporarily = 'RestartIfFailedContent_BlockTemporarily',
  RestartIfFailedContentCanNot = 'RestartIfFailedContent_CanNot'
}

export type RestartIfPassedContentConfig = {
  configType: RestartIfPassedContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum RestartIfPassedContentConfigType {
  RestartIfPassedContentCan = 'RestartIfPassedContent_Can',
  RestartIfPassedContentCanNot = 'RestartIfPassedContent_CanNot'
}

export type Reward = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind;
  superId: Scalars['ID']['output'];
};

export type RewardContentConfig = {
  configType: RewardContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum RewardContentConfigType {
  RewardContentDo = 'RewardContent_Do',
  RewardContentIfRepeatedDoNot = 'RewardContent_IfRepeatedDoNot'
}

export enum RewardKind {
  ExternalLicense = 'ExternalLicense',
  GamificationPoints = 'GamificationPoints',
  IhkCertificate = 'IHKCertificate',
  WordPackage = 'WordPackage',
  WordProficiencies = 'WordProficiencies'
}

export type RewardResult = {
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export enum RewardResultKind {
  ExternalLicenseErrorOccurred = 'ExternalLicense_ErrorOccurred',
  ExternalLicenseIssuedToUser = 'ExternalLicense_IssuedToUser',
  ExternalLicenseNotPassed = 'ExternalLicense_NotPassed',
  GamificationPointsAlreadyReceivedPoints = 'GamificationPoints_AlreadyReceivedPoints',
  GamificationPointsErrorOccurred = 'GamificationPoints_ErrorOccurred',
  GamificationPointsNoPointsReceived = 'GamificationPoints_NoPointsReceived',
  GamificationPointsNotPassedIhkTestFlow = 'GamificationPoints_NotPassedIHKTestFlow',
  GamificationPointsPointsReceived = 'GamificationPoints_PointsReceived',
  IhkCertificateErrorOccurred = 'IHKCertificate_ErrorOccurred',
  IhkCertificateNotPassed = 'IHKCertificate_NotPassed',
  IhkCertificateReadyToOrder = 'IHKCertificate_ReadyToOrder',
  WordPackageErrorOccurred = 'WordPackage_ErrorOccurred',
  WordPackageNothingNewToUnlock = 'WordPackage_NothingNewToUnlock',
  WordPackagePackageUnlocked = 'WordPackage_PackageUnlocked',
  WordProficienciesErrorOccurred = 'WordProficiencies_ErrorOccurred',
  WordProficienciesProficienciesChanged = 'WordProficiencies_ProficienciesChanged'
}

export type RewardTreeConfig = {
  configType: RewardTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum RewardTreeConfigType {
  RewardTreeAfterDateTimeDoNot = 'RewardTree_AfterDateTimeDoNot',
  RewardTreeDoNot = 'RewardTree_DoNot',
  RewardTreeIfRepeatedDoNot = 'RewardTree_IfRepeatedDoNot'
}

export type RootCost = {
  __typename?: 'RootCost';
  price: Scalars['BigDecimal']['output'];
  supplier: Scalars['String']['output'];
};

export type RootCostInput = {
  price: Scalars['BigDecimal']['input'];
  supplier: Scalars['String']['input'];
};

export type RootExtension = {
  doNotUse: Scalars['String']['output'];
};

export type RootExtensionImpl = RootExtension & {
  __typename?: 'RootExtensionImpl';
  contractPartner?: Maybe<ContractPartner>;
  cost?: Maybe<RootCost>;
  diploma?: Maybe<Scalars['String']['output']>;
  doNotUse: Scalars['String']['output'];
  isMicroLearning: Scalars['Boolean']['output'];
  learnGoalsOpt?: Maybe<Scalars['String']['output']>;
  licenseProduct?: Maybe<LicenseProduct>;
  tags: Array<AcademiesTag>;
  trailerOpt?: Maybe<Scalars['String']['output']>;
};

export type RootNodeCursors = {
  __typename?: 'RootNodeCursors';
  relevancy?: Maybe<Scalars['Long']['output']>;
};

export type RootStructureDefinition = StructureDefinition & {
  __typename?: 'RootStructureDefinition';
  advertisementConfiguration?: Maybe<AdvertisementConfiguration>;
  coordinates: CoordinatesV2;
  cursors?: Maybe<RootNodeCursors>;
  definitionType: StructureType;
  displayType: DisplayType;
  extension: RootExtension;
  firstReleasedAt?: Maybe<Scalars['ZonedDateTIme']['output']>;
  icon?: Maybe<File>;
  rewardConfigs: Array<RewardTreeConfig>;
  searchWords?: Maybe<Scalars['String']['output']>;
  showAnswerConfig: ShowAnswerTreeConfig;
  startAtConfig: StartAtTreeConfig;
  startConfigs: Array<StartTreeConfig>;
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  visibilityConfigs: Array<VisibilityTreeConfig>;
};

export enum SalutationType {
  Divers = 'Divers',
  Mr = 'Mr',
  Mrs = 'Mrs'
}

export type ScheduleData = {
  __typename?: 'ScheduleData';
  blockoutDates: Array<BlockoutDate>;
  daysAndTimes: Array<AvailabilityScheduleDayAndTimes>;
};

export type ScheduleDataInput = {
  blockoutDates: Array<BlockoutDateInput>;
  daysAndTimes: Array<DayAndTimesInput>;
};

/** result of searching discount code usages. */
export type SearchDiscountCodeUsagesResult = {
  __typename?: 'SearchDiscountCodeUsagesResult';
  csv: Scalars['String']['output'];
  sumGrossPriceWithDiscounts: Scalars['BigDecimal']['output'];
  sumGrossPriceWithoutDiscounts: Scalars['BigDecimal']['output'];
  usages: DiscountCodeUsagesConnection;
};


/** result of searching discount code usages. */
export type SearchDiscountCodeUsagesResultUsagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SelectedPaymentMethod = {
  paymentMethodId: PaymentMethodType;
  selectedPaymentMethodType: SelectedPaymentMethodType;
};

export enum SelectedPaymentMethodType {
  EmployerInvoice = 'EmployerInvoice',
  MonthlyPayment = 'MonthlyPayment',
  OneTimePayment = 'OneTimePayment'
}

export type SelectedProduct = {
  __typename?: 'SelectedProduct';
  amount: Scalars['Int']['output'];
  product?: Maybe<Product>;
};

export type SelectedProductInput = {
  amount: Scalars['Int']['input'];
  productId: Scalars['ID']['input'];
};

export type Selection = {
  __typename?: 'Selection';
  createdByUser?: Maybe<User>;
  selectedDiscountCodes: Array<Scalars['String']['output']>;
  selectedProducts: Array<SelectedProduct>;
};

export type SendEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  personalizedEmailTemplateId: Scalars['ID']['input'];
};

export type SendEmailPayload = {
  __typename?: 'SendEmailPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SepaData = PaymentProviderData & {
  __typename?: 'SepaData';
  dataType: PaymentProviderDataType;
  iban: Scalars['String']['output'];
  mandateInformation: MandateInformation;
  paymentMethod: PaymentMethodType;
};

export type SessionLineItem = {
  __typename?: 'SessionLineItem';
  coach?: Maybe<User>;
  coachingOffer?: Maybe<CoachingOffer>;
  remuneration: Price;
  sessionFrom: Scalars['ZonedDateTIme']['output'];
  sessionTo: Scalars['ZonedDateTIme']['output'];
};

export type SetAccountGroupsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};

export type SetAccountGroupsPayload = {
  __typename?: 'SetAccountGroupsPayload';
  account: Account;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetAccountNameInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type SetAccountNamePayload = {
  __typename?: 'SetAccountNamePayload';
  account: Account;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetAdvertisementConfigurationV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  isFeatured: Scalars['Boolean']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type SetAdvertisementConfigurationV2Payload = {
  __typename?: 'SetAdvertisementConfigurationV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type SetAfterDateTimeDoShowAnswerTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type SetAfterDateTimeDoShowAnswerTreeConfigPayload = {
  __typename?: 'SetAfterDateTimeDoShowAnswerTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type SetAlwaysPassContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetAlwaysPassContentConfigPayload = {
  __typename?: 'SetAlwaysPassContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetAlwaysRestartContinueContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetAlwaysRestartContinueContentConfigPayload = {
  __typename?: 'SetAlwaysRestartContinueContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetCanContinueContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetCanContinueContentConfigPayload = {
  __typename?: 'SetCanContinueContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetCanNotRestartIfPassedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetCanNotRestartIfPassedContentConfigPayload = {
  __typename?: 'SetCanNotRestartIfPassedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetCanRestartIfPassedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetCanRestartIfPassedContentConfigPayload = {
  __typename?: 'SetCanRestartIfPassedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetCommunicationSettingsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  sendExpirationNoticeEmails: Scalars['Boolean']['input'];
  sendExpirationNoticeNotifications: Scalars['Boolean']['input'];
  sendInformRetryEmails: Scalars['Boolean']['input'];
  sendInformRetryNotifications: Scalars['Boolean']['input'];
};

export type SetCommunicationSettingsPayload = {
  __typename?: 'SetCommunicationSettingsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  communicationSettings: CommunicationSettings;
};

export type SetContractPartnerInRootExtensionImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contractPartner?: InputMaybe<Scalars['ID']['input']>;
  rootId: Scalars['ID']['input'];
};

export type SetContractPartnerInRootExtensionImplPayload = {
  __typename?: 'SetContractPartnerInRootExtensionImplPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  root: TreeNode;
};

export type SetCorrectAnswerInMatrixElementCellInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matrixCellId: Scalars['ID']['input'];
  matrixElementId: Scalars['ID']['input'];
  newCorrectAnswerContent: Scalars['String']['input'];
};

export type SetCorrectAnswerInMatrixElementCellPayload = {
  __typename?: 'SetCorrectAnswerInMatrixElementCellPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type SetDefaultCurrentElementELearningContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type SetDefaultCurrentElementELearningContentConfigPayload = {
  __typename?: 'SetDefaultCurrentElementELearningContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type SetDirectFeedbackFlowELearningContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  minNumTriesTillShowAnswer: Scalars['Int']['input'];
};

export type SetDirectFeedbackFlowELearningContentConfigPayload = {
  __typename?: 'SetDirectFeedbackFlowELearningContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type SetDoNotShowAnswerTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type SetDoNotShowAnswerTreeConfigPayload = {
  __typename?: 'SetDoNotShowAnswerTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type SetDoRewardContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetDoRewardContentConfigPayload = {
  __typename?: 'SetDoRewardContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetGlobalDiscountCodeIdInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountCodeId?: InputMaybe<Scalars['ID']['input']>;
};

export type SetGlobalDiscountCodeIdPayload = {
  __typename?: 'SetGlobalDiscountCodeIdPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  settings: Settings;
};

export type SetIhkFlowPassContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetIhkFlowPassContentConfigPayload = {
  __typename?: 'SetIHKFlowPassContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type SetIfRepeatedDoNotRewardContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetIfRepeatedDoNotRewardContentConfigPayload = {
  __typename?: 'SetIfRepeatedDoNotRewardContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetMatrixElementColumnTitleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idx: Scalars['Int']['input'];
  matrixElementId: Scalars['ID']['input'];
  newTitle: Scalars['String']['input'];
};

export type SetMatrixElementColumnTitlePayload = {
  __typename?: 'SetMatrixElementColumnTitlePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type SetMatrixElementRowTitleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idx: Scalars['Int']['input'];
  matrixElementId: Scalars['ID']['input'];
  newTitle: Scalars['String']['input'];
};

export type SetMatrixElementRowTitlePayload = {
  __typename?: 'SetMatrixElementRowTitlePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type SetOnPercentagePassContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
  requiredPercentage: Scalars['Int']['input'];
};

export type SetOnPercentagePassContentConfigPayload = {
  __typename?: 'SetOnPercentagePassContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetRootExtensionImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<RootCostInput>;
  diploma?: InputMaybe<Scalars['String']['input']>;
  isMicroLearning: Scalars['Boolean']['input'];
  learnGoals?: InputMaybe<Scalars['String']['input']>;
  licenseProductId?: InputMaybe<Scalars['ID']['input']>;
  rootId: Scalars['ID']['input'];
  tagIds: Array<Scalars['ID']['input']>;
  trailerVimeoId?: InputMaybe<Scalars['String']['input']>;
};

export type SetRootExtensionImplPayload = {
  __typename?: 'SetRootExtensionImplPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  root: TreeNode;
};

export type SetShowAnswersInBetweenCurrentElementELearningContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type SetShowAnswersInBetweenCurrentElementELearningContentConfigPayload = {
  __typename?: 'SetShowAnswersInBetweenCurrentElementELearningContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type SetSimplyContinueFlowELearningContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type SetSimplyContinueFlowELearningContentConfigPayload = {
  __typename?: 'SetSimplyContinueFlowELearningContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type SetUserInAccountGroupsInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupIds: Array<Scalars['ID']['input']>;
  userId: Scalars['ID']['input'];
};

export type SetUserInAccountGroupsPayload = {
  __typename?: 'SetUserInAccountGroupsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userInAccount: UserInAccountEdge;
};

export type Settings = {
  __typename?: 'Settings';
  globalDiscountCode?: Maybe<DiscountCode>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** Data only accessible by the admin */
export type SettingsAdminMutationSchema = {
  __typename?: 'SettingsAdminMutationSchema';
  setGlobalDiscountCodeId?: Maybe<SetGlobalDiscountCodeIdPayload>;
};


/** Data only accessible by the admin */
export type SettingsAdminMutationSchemaSetGlobalDiscountCodeIdArgs = {
  input: SetGlobalDiscountCodeIdInput;
};

/** Data only accessible by the admin */
export type SettingsAdminSchema = {
  __typename?: 'SettingsAdminSchema';
  Settings: Settings;
};


/** Data only accessible by the admin */
export type SettingsAdminSchemaSettingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ShowAnswerElementState = {
  element: LearnElement;
  kind: ElementStateKind;
};

export type ShowAnswerTreeConfig = {
  configType: ShowAnswerTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum ShowAnswerTreeConfigType {
  ShowAnswerTreeAfterDateTimeDo = 'ShowAnswerTree_AfterDateTimeDo',
  ShowAnswerTreeDoNot = 'ShowAnswerTree_DoNot'
}

export type ShowAnswersInBetweenCurrentElementELearningContentConfig = CurrentElementELearningContentConfig & {
  __typename?: 'ShowAnswersInBetweenCurrentElementELearningContentConfig';
  configType: CurrentElementELearningContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type ShowAnswersInBetweenFlowELearningContentConfig = FlowELearningContentConfig & {
  __typename?: 'ShowAnswersInBetweenFlowELearningContentConfig';
  configType: FlowELearningContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type ShowElementAnswerElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  inputElementId: Scalars['ID']['input'];
};

export type ShowElementAnswerElementPayload = {
  __typename?: 'ShowElementAnswerElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SimplyContinueFlowELearningContentConfig = FlowELearningContentConfig & {
  __typename?: 'SimplyContinueFlowELearningContentConfig';
  configType: FlowELearningContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** Data only accessible by the admin */
export type StagingAdminMutationSchema = {
  __typename?: 'StagingAdminMutationSchema';
  cleanUpUserInputRelatedToStaging?: Maybe<CleanUpUserInputRelatedToStagingPayload>;
  createCoachStatementsFromUnbilled?: Maybe<CreateCoachStatementsFromUnbilledPayload>;
  resetAllStagingData?: Maybe<ResetAllStagingDataPayload>;
  resetStagingBilling?: Maybe<ResetStagingBillingPayload>;
  resetStagingUsers?: Maybe<ResetStagingUsersPayload>;
};


/** Data only accessible by the admin */
export type StagingAdminMutationSchemaCleanUpUserInputRelatedToStagingArgs = {
  input: CleanUpUserInputRelatedToStagingInput;
};


/** Data only accessible by the admin */
export type StagingAdminMutationSchemaCreateCoachStatementsFromUnbilledArgs = {
  input: CreateCoachStatementsFromUnbilledInput;
};


/** Data only accessible by the admin */
export type StagingAdminMutationSchemaResetAllStagingDataArgs = {
  input: ResetAllStagingDataInput;
};


/** Data only accessible by the admin */
export type StagingAdminMutationSchemaResetStagingBillingArgs = {
  input: ResetStagingBillingInput;
};


/** Data only accessible by the admin */
export type StagingAdminMutationSchemaResetStagingUsersArgs = {
  input: ResetStagingUsersInput;
};

export type StartAtTreeConfig = {
  configType: StartAtTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum StartAtTreeConfigType {
  StartAtTreeFirstContentNode = 'StartAtTree_FirstContentNode'
}

export type StartContentConfig = {
  configType: StartContentConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum StartContentConfigType {
  StartContentCanAfterStartingTree = 'StartContent_CanAfterStartingTree',
  StartContentCanIfInTreeFlow = 'StartContent_CanIfInTreeFlow',
  StartContentCanIfUnlocked = 'StartContent_CanIfUnlocked',
  StartContentCanNot = 'StartContent_CanNot'
}

export type StartContentNodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type StartContentNodePayload = {
  __typename?: 'StartContentNodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type StartPublishingV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type StartPublishingV2Payload = {
  __typename?: 'StartPublishingV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tree: Tree;
};

export type StartStandaloneVocabTrainingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  numWords: Scalars['Int']['input'];
  words: Array<WordInPackageInput>;
};

export type StartStandaloneVocabTrainingPayload = {
  __typename?: 'StartStandaloneVocabTrainingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type StartTreeConfig = {
  configType: StartTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum StartTreeConfigType {
  StartTreeCanNot = 'StartTree_CanNot'
}

export type StartTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  nodeId: Scalars['ID']['input'];
  startAtContentNodeId?: InputMaybe<Scalars['ID']['input']>;
};

export type StartTreePayload = {
  __typename?: 'StartTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  learnOpportunity: LearnOpportunityV2;
};

export type StreamFile = {
  __typename?: 'StreamFile';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type StripeData = PaymentProviderData & {
  __typename?: 'StripeData';
  dataType: PaymentProviderDataType;
  paymentIntentId: Scalars['String']['output'];
  paymentIntentSecret: Scalars['String']['output'];
  paymentMethod: PaymentMethodType;
};

export type StripeSepaData = PaymentProviderData & {
  __typename?: 'StripeSepaData';
  dataType: PaymentProviderDataType;
  mandateInformation: MandateInformation;
  paymentIntentId: Scalars['String']['output'];
  paymentIntentSecret: Scalars['String']['output'];
  paymentMethod: PaymentMethodType;
};

export type StructureDefinition = {
  coordinates: CoordinatesV2;
  definitionType: StructureType;
  title: Scalars['String']['output'];
};

export enum StructureType {
  Child = 'child',
  Root = 'root'
}

export type SubmitClozeTextElementV2Input = {
  checkedAnswers: Array<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clozeTextElementId: Scalars['ID']['input'];
  contentSubmissionId: Scalars['ID']['input'];
};

export type SubmitClozeTextElementV2Payload = {
  __typename?: 'SubmitClozeTextElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitDisplayElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  displayElementId: Scalars['ID']['input'];
};

export type SubmitDisplayElementPayload = {
  __typename?: 'SubmitDisplayElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitMarkMistakesElementV2Input = {
  checkedMistakeIndices: Array<Scalars['Int']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  markMistakesElementId: Scalars['ID']['input'];
};

export type SubmitMarkMistakesElementV2Payload = {
  __typename?: 'SubmitMarkMistakesElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitMatrixElementV2Input = {
  checkedIndices: Array<SubmitMatrixIndexCellInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  matrixElementId: Scalars['ID']['input'];
};

export type SubmitMatrixElementV2Payload = {
  __typename?: 'SubmitMatrixElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitMatrixIndexCellInput = {
  index: Scalars['Int']['input'];
  xIdx: Scalars['Int']['input'];
  yIdx: Scalars['Int']['input'];
};

export type SubmitMultipleChoiceElementV2Input = {
  checkedAnswerIndices: Array<Scalars['Int']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  multipleChoiceElementId: Scalars['ID']['input'];
};

export type SubmitMultipleChoiceElementV2Payload = {
  __typename?: 'SubmitMultipleChoiceElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitOrderElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  order: Array<Scalars['ID']['input']>;
  orderElementId: Scalars['ID']['input'];
};

export type SubmitOrderElementPayload = {
  __typename?: 'SubmitOrderElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitUploadAsyncElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  fileId: Scalars['ID']['input'];
  uploadAsyncElementId: Scalars['ID']['input'];
};

export type SubmitUploadAsyncElementPayload = {
  __typename?: 'SubmitUploadAsyncElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeToPublishingUpdatesV2: PublishingUpdatedEventV2;
};

export enum SubtitleLanguage {
  De = 'de',
  En = 'en'
}

export type SubtitleV2 = {
  __typename?: 'SubtitleV2';
  endTime: Scalars['Long']['output'];
  startTime: Scalars['Long']['output'];
  text: Scalars['String']['output'];
};

export type SubtitlesForLanguage = {
  __typename?: 'SubtitlesForLanguage';
  language: SubtitleLanguage;
  subtitles: Array<VideoSubtitle>;
  transcriptFileId?: Maybe<File>;
};

export type SubtitlesV2 = {
  __typename?: 'SubtitlesV2';
  subtitles: Array<SubtitleV2>;
};

export type SwitchAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  refreshToken: Scalars['String']['input'];
  targetAccount: Scalars['ID']['input'];
};

export type SwitchAccountPayload = {
  __typename?: 'SwitchAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  jwtTokens: JwtLoginInformation;
};

export type SystemDiscountType = DiscountType & {
  __typename?: 'SystemDiscountType';
  kind: DiscountTypeKind;
};

export enum SystemTag {
  Finished = 'finished',
  FullAccess = 'fullAccess',
  New = 'new',
  TestAccess = 'testAccess'
}

export type Tag = Node & {
  __typename?: 'Tag';
  colorHex: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Data only accessible by the admin */
export type TagAdminMutationSchema = {
  __typename?: 'TagAdminMutationSchema';
  createTag?: Maybe<CreateTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
};


/** Data only accessible by the admin */
export type TagAdminMutationSchemaCreateTagArgs = {
  input: CreateTagInput;
};


/** Data only accessible by the admin */
export type TagAdminMutationSchemaDeleteTagArgs = {
  input: DeleteTagInput;
};


/** Data only accessible by the admin */
export type TagAdminMutationSchemaUpdateTagArgs = {
  input: UpdateTagInput;
};

/** Data only accessible by the admin */
export type TagAdminSchema = {
  __typename?: 'TagAdminSchema';
  Tags: TagsConnection;
};


/** Data only accessible by the admin */
export type TagAdminSchemaTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TagDataInput = {
  isClickable: Scalars['Boolean']['input'];
  isTopic: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type TagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  colorHex: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type TagsConnection = {
  __typename?: 'TagsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TagsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TagsEdge = {
  __typename?: 'TagsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Tag;
};

export enum TargetSystem {
  Android = 'android',
  Ios = 'ios'
}

export type TextElementV2 = ElementV2 & {
  __typename?: 'TextElementV2';
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TextLearnElement = LearnElement & {
  __typename?: 'TextLearnElement';
  elementType: ElementTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TextPart = ClozeTextPart & {
  __typename?: 'TextPart';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: ClozeTextPartKind;
  text: Scalars['String']['output'];
};

export type TimestampWithImage = {
  __typename?: 'TimestampWithImage';
  end: Scalars['Int']['output'];
  imageFile?: Maybe<File>;
  start: Scalars['Int']['output'];
};

export type TimestampWithImageInput = {
  end: Scalars['Int']['input'];
  imageFileId?: InputMaybe<Scalars['ID']['input']>;
  start: Scalars['Int']['input'];
};

export type Tree = {
  __typename?: 'Tree';
  activePublishing?: Maybe<PublishingV2>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  nodes: Array<TreeNode>;
  rootNode?: Maybe<TreeNode>;
};

/** Data only accessible by the admin */
export type TreeAdminMutationSchema = {
  __typename?: 'TreeAdminMutationSchema';
  AddOnlyIfTreeStateVisibilityTreeConfig?: Maybe<AddOnlyIfTreeStateVisibilityTreeConfigPayload>;
  EditDefaultFileAttachment?: Maybe<EditDefaultFileAttachmentPayload>;
  academiesCreateBranchRoot?: Maybe<AcademiesCreateBranchRootPayload>;
  addAfterDateTimeDoNotRewardTreeConfig?: Maybe<AddAfterDateTimeDoNotRewardTreeConfigPayload>;
  addAfterDateTimeVisibilityTreeConfig?: Maybe<AddAfterDateTimeVisibilityTreeConfigPayload>;
  addBlockPermanentlyRestartIfFailedContentConfig?: Maybe<AddBlockPermanentlyRestartIfFailedContentConfigPayload>;
  addBlockTemporarilyRestartIfFailedContentConfig?: Maybe<AddBlockTemporarilyRestartIfFailedContentConfigPayload>;
  addCanAfterStartingTreeStartContentConfig?: Maybe<AddCanAfterStartingTreeStartContentConfigPayload>;
  addCanIfUnlockedStartContentConfig?: Maybe<AddCanIfUnlockedStartContentConfigPayload>;
  addCanNotRestartIfFailedContentConfig?: Maybe<AddCanNotRestartIfFailedContentConfigPayload>;
  addDefaultFileAttachment?: Maybe<AddDefaultFileAttachmentPayload>;
  addDoNotRewardTreeConfig?: Maybe<AddDoNotRewardTreeConfigPayload>;
  addExternalLicenseReward?: Maybe<AddExternalLicenseRewardPayload>;
  addHideVisibilityTreeConfig?: Maybe<AddHideVisibilityTreeConfigPayload>;
  addIHKCertificateReward?: Maybe<AddIhkCertificateRewardPayload>;
  addIfRepeatedDoNotRewardTreeConfig?: Maybe<AddIfRepeatedDoNotRewardTreeConfigPayload>;
  addNotAfterDateTimeVisibilityTreeConfig?: Maybe<AddNotAfterDateTimeVisibilityTreeConfigPayload>;
  addOnlyAdminsVisibilityTreeConfig?: Maybe<AddOnlyAdminsVisibilityTreeConfigPayload>;
  addOnlyEditorsVisibilityTreeConfig?: Maybe<AddOnlyEditorsVisibilityTreeConfigPayload>;
  addWordPackageReward?: Maybe<AddWordPackageRewardPayload>;
  addWordProficienciesReward?: Maybe<AddWordProficienciesRewardPayload>;
  cloneTree?: Maybe<CloneTreePayload>;
  createBranchChild?: Maybe<CreateBranchChildPayload>;
  createBranchRoot?: Maybe<CreateBranchRootPayload>;
  createContentChild?: Maybe<CreateContentChildPayload>;
  createContentRoot?: Maybe<CreateContentRootNodePayload>;
  deleteReward?: Maybe<DeleteRewardPayload>;
  deleteUnpublishedChildNodePlusDescendants?: Maybe<DeleteUnpublishedChildNodePlusDescendantsPayload>;
  deleteUnpublishedTree?: Maybe<DeleteUnpublishedTreePayload>;
  editAfterDateTimeDoNotRewardTreeConfig?: Maybe<EditAfterDateTimeDoNotRewardTreeConfigPayload>;
  editAfterDateTimeDoShowAnswerTreeConfig?: Maybe<EditAfterDateTimeDoShowAnswerTreeConfigPayload>;
  editAfterDateTimeVisibilityTreeConfig?: Maybe<EditAfterDateTimeVisibilityTreeConfigPayload>;
  editBlockPermanentlyRestartIfFailedContentConfig?: Maybe<EditBlockPermanentlyRestartIfFailedContentConfigPayload>;
  editBlockTemporarilyRestartIfFailedContentConfig?: Maybe<EditBlockTemporarilyRestartIfFailedContentConfigPayload>;
  editDirectFeedbackFlowELearningContentConfig?: Maybe<EditDirectFeedbackFlowELearningContentConfigPayload>;
  editExternalLicenseReward?: Maybe<EditExternalLicenseRewardPayload>;
  editNodeCore?: Maybe<EditNodeCorePayload>;
  editNotAfterDateTimeVisibilityTreeConfig?: Maybe<EditNotAfterDateTimeVisibilityTreeConfigPayload>;
  editOnPercentagePassContentConfig?: Maybe<EditOnPercentagePassContentConfigPayload>;
  editRootNodePart?: Maybe<EditRootNodePartPayload>;
  editWordPackageReward?: Maybe<EditWordPackageRewardPayload>;
  moveChildNode?: Maybe<MoveChildNodePayload>;
  removeAttachment?: Maybe<RemoveAttachmentPayload>;
  removeRestartIfFailedContentConfig?: Maybe<RemoveRestartIfFailedContentConfigPayload>;
  removeRewardTreeConfig?: Maybe<RemoveRewardTreeConfigPayload>;
  removeStartContentConfig?: Maybe<RemoveStartContentConfigPayload>;
  removeStartTreeConfig?: Maybe<RemoveStartTreeConfigPayload>;
  removeVisibilityTreeConfig?: Maybe<RemoveVisibilityTreeConfigPayload>;
  setAdvertisementConfiguration?: Maybe<SetAdvertisementConfigurationV2Payload>;
  setAfterDateTimeDoShowAnswerTreeConfig?: Maybe<SetAfterDateTimeDoShowAnswerTreeConfigPayload>;
  setAlwaysPassContentConfig?: Maybe<SetAlwaysPassContentConfigPayload>;
  setAlwaysRestartContinueContentConfig?: Maybe<SetAlwaysRestartContinueContentConfigPayload>;
  setCanContinueContentConfig?: Maybe<SetCanContinueContentConfigPayload>;
  setCanNotRestartIfPassedContentConfig?: Maybe<SetCanNotRestartIfPassedContentConfigPayload>;
  setCanRestartIfPassedContentConfig?: Maybe<SetCanRestartIfPassedContentConfigPayload>;
  setContractPartnerInRootExtensionImpl?: Maybe<SetContractPartnerInRootExtensionImplPayload>;
  setDefaultCurrentElementELearningContentConfig?: Maybe<SetDefaultCurrentElementELearningContentConfigPayload>;
  setDirectFeedbackFlowELearningContentConfig?: Maybe<SetDirectFeedbackFlowELearningContentConfigPayload>;
  setDoNotShowAnswerTreeConfig?: Maybe<SetDoNotShowAnswerTreeConfigPayload>;
  setDoRewardContentConfig?: Maybe<SetDoRewardContentConfigPayload>;
  setIHKFlowPassContentConfig?: Maybe<SetIhkFlowPassContentConfigPayload>;
  setIfRepeatedDoNotRewardContentConfig?: Maybe<SetIfRepeatedDoNotRewardContentConfigPayload>;
  setOnPercentagePassContentConfig?: Maybe<SetOnPercentagePassContentConfigPayload>;
  setRootExtensionImpl?: Maybe<SetRootExtensionImplPayload>;
  setShowAnswersInBetweenCurrentElementELearningContentConfig?: Maybe<SetShowAnswersInBetweenCurrentElementELearningContentConfigPayload>;
  setSimplyContinueFlowELearningContentConfig?: Maybe<SetSimplyContinueFlowELearningContentConfigPayload>;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddOnlyIfTreeStateVisibilityTreeConfigArgs = {
  input: AddOnlyIfTreeStateVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditDefaultFileAttachmentArgs = {
  input: EditDefaultFileAttachmentInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAcademiesCreateBranchRootArgs = {
  input: AcademiesCreateBranchRootInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddAfterDateTimeDoNotRewardTreeConfigArgs = {
  input: AddAfterDateTimeDoNotRewardTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddAfterDateTimeVisibilityTreeConfigArgs = {
  input: AddAfterDateTimeVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddBlockPermanentlyRestartIfFailedContentConfigArgs = {
  input: AddBlockPermanentlyRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddBlockTemporarilyRestartIfFailedContentConfigArgs = {
  input: AddBlockTemporarilyRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddCanAfterStartingTreeStartContentConfigArgs = {
  input: AddCanAfterStartingTreeStartContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddCanIfUnlockedStartContentConfigArgs = {
  input: AddCanIfUnlockedStartContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddCanNotRestartIfFailedContentConfigArgs = {
  input: AddCanNotRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddDefaultFileAttachmentArgs = {
  input: AddDefaultFileAttachmentInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddDoNotRewardTreeConfigArgs = {
  input: AddDoNotRewardTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddExternalLicenseRewardArgs = {
  input: AddExternalLicenseRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddHideVisibilityTreeConfigArgs = {
  input: AddHideVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddIhkCertificateRewardArgs = {
  input: AddIhkCertificateRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddIfRepeatedDoNotRewardTreeConfigArgs = {
  input: AddIfRepeatedDoNotRewardTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddNotAfterDateTimeVisibilityTreeConfigArgs = {
  input: AddNotAfterDateTimeVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddOnlyAdminsVisibilityTreeConfigArgs = {
  input: AddOnlyAdminsVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddOnlyEditorsVisibilityTreeConfigArgs = {
  input: AddOnlyEditorsVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddWordPackageRewardArgs = {
  input: AddWordPackageRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddWordProficienciesRewardArgs = {
  input: AddWordProficienciesRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaCloneTreeArgs = {
  input: CloneTreeInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaCreateBranchChildArgs = {
  input: CreateBranchChildInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaCreateBranchRootArgs = {
  input: CreateBranchRootInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaCreateContentChildArgs = {
  input: CreateContentChildInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaCreateContentRootArgs = {
  input: CreateContentRootNodeInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaDeleteRewardArgs = {
  input: DeleteRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaDeleteUnpublishedChildNodePlusDescendantsArgs = {
  input: DeleteUnpublishedChildNodePlusDescendantsInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaDeleteUnpublishedTreeArgs = {
  input: DeleteUnpublishedTreeInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditAfterDateTimeDoNotRewardTreeConfigArgs = {
  input: EditAfterDateTimeDoNotRewardTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditAfterDateTimeDoShowAnswerTreeConfigArgs = {
  input: EditAfterDateTimeDoShowAnswerTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditAfterDateTimeVisibilityTreeConfigArgs = {
  input: EditAfterDateTimeVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditBlockPermanentlyRestartIfFailedContentConfigArgs = {
  input: EditBlockPermanentlyRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditBlockTemporarilyRestartIfFailedContentConfigArgs = {
  input: EditBlockTemporarilyRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditDirectFeedbackFlowELearningContentConfigArgs = {
  input: EditDirectFeedbackFlowELearningContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditExternalLicenseRewardArgs = {
  input: EditExternalLicenseRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditNodeCoreArgs = {
  input: EditNodeCoreInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditNotAfterDateTimeVisibilityTreeConfigArgs = {
  input: EditNotAfterDateTimeVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditOnPercentagePassContentConfigArgs = {
  input: EditOnPercentagePassContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditRootNodePartArgs = {
  input: EditRootNodePartInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditWordPackageRewardArgs = {
  input: EditWordPackageRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaMoveChildNodeArgs = {
  input: MoveChildNodeInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveAttachmentArgs = {
  input: RemoveAttachmentInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveRestartIfFailedContentConfigArgs = {
  input: RemoveRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveRewardTreeConfigArgs = {
  input: RemoveRewardTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveStartContentConfigArgs = {
  input: RemoveStartContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveStartTreeConfigArgs = {
  input: RemoveStartTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveVisibilityTreeConfigArgs = {
  input: RemoveVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetAdvertisementConfigurationArgs = {
  input: SetAdvertisementConfigurationV2Input;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetAfterDateTimeDoShowAnswerTreeConfigArgs = {
  input: SetAfterDateTimeDoShowAnswerTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetAlwaysPassContentConfigArgs = {
  input: SetAlwaysPassContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetAlwaysRestartContinueContentConfigArgs = {
  input: SetAlwaysRestartContinueContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetCanContinueContentConfigArgs = {
  input: SetCanContinueContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetCanNotRestartIfPassedContentConfigArgs = {
  input: SetCanNotRestartIfPassedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetCanRestartIfPassedContentConfigArgs = {
  input: SetCanRestartIfPassedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetContractPartnerInRootExtensionImplArgs = {
  input: SetContractPartnerInRootExtensionImplInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetDefaultCurrentElementELearningContentConfigArgs = {
  input: SetDefaultCurrentElementELearningContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetDirectFeedbackFlowELearningContentConfigArgs = {
  input: SetDirectFeedbackFlowELearningContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetDoNotShowAnswerTreeConfigArgs = {
  input: SetDoNotShowAnswerTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetDoRewardContentConfigArgs = {
  input: SetDoRewardContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetIhkFlowPassContentConfigArgs = {
  input: SetIhkFlowPassContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetIfRepeatedDoNotRewardContentConfigArgs = {
  input: SetIfRepeatedDoNotRewardContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetOnPercentagePassContentConfigArgs = {
  input: SetOnPercentagePassContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetRootExtensionImplArgs = {
  input: SetRootExtensionImplInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetShowAnswersInBetweenCurrentElementELearningContentConfigArgs = {
  input: SetShowAnswersInBetweenCurrentElementELearningContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetSimplyContinueFlowELearningContentConfigArgs = {
  input: SetSimplyContinueFlowELearningContentConfigInput;
};

/** Data only accessible by the admin */
export type TreeAdminSchema = {
  __typename?: 'TreeAdminSchema';
  GetContentNodes: TreeNodesConnection;
  GetRootNodes: TreeNodesConnection;
  Tree: Tree;
};


/** Data only accessible by the admin */
export type TreeAdminSchemaGetContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type TreeAdminSchemaGetRootNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByAttachmentId?: InputMaybe<Scalars['ID']['input']>;
  filterByCanBeRewardedFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByCanBeRewardedTo?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByIsReleased?: InputMaybe<Scalars['Boolean']['input']>;
  filterByIsVisibleFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByIsVisibleTo?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByReleasedAtFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByShowAnswersFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByShowAnswersTo?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByTagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  filterByTitleOrDescriptionOrShortDescription?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type TreeAdminSchemaTreeArgs = {
  rootId: Scalars['ID']['input'];
};

export type TreeAdvancementResult = {
  status: TreeAdvancementStatus;
};

export enum TreeAdvancementStatus {
  AtHead = 'AtHead',
  CanBeStarted = 'CanBeStarted',
  CanNotBeStarted = 'CanNotBeStarted',
  IsFinished = 'IsFinished',
  NotAtHead = 'NotAtHead',
  NotVisible = 'NotVisible'
}

export type TreeLicenseDefinitionData = LicenseDefinitionData & {
  __typename?: 'TreeLicenseDefinitionData';
  kind: LicenseDefinitionDataKind;
  name: Scalars['String']['output'];
  rootInfo?: Maybe<LicenseDefinitionRootInfo>;
};

export type TreeLicenseDefinitionDataInput = {
  name: Scalars['String']['input'];
  rootId: Scalars['ID']['input'];
};

export type TreeNode = Node & {
  __typename?: 'TreeNode';
  attachments: Array<AttachmentV2>;
  description?: Maybe<Scalars['String']['output']>;
  hasBeenPublishedOnce: Scalars['Boolean']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  imageId?: Maybe<Scalars['ID']['output']>;
  instructors: Array<Instructor>;
  parentId?: Maybe<Scalars['ID']['output']>;
  rootId: Scalars['ID']['output'];
  shortDescription?: Maybe<Scalars['String']['output']>;
  structureDefinition: StructureDefinition;
  typeDefinition: TypeDefinition;
  versioning: Versioning;
};

/** A connection to a list of items. */
export type TreeNodesConnection = {
  __typename?: 'TreeNodesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TreeNodesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TreeNodesEdge = {
  __typename?: 'TreeNodesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TreeNode;
};

export type TreeState = Node & {
  __typename?: 'TreeState';
  extension: TreeStateExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  progressPercentage: Scalars['Int']['output'];
  rootNode: TreeNode;
  startedAt: Scalars['ZonedDateTIme']['output'];
  status: TreeStateStatus;
  user?: Maybe<User>;
};

export type TreeStateExtension = {
  doNotUse: Scalars['String']['output'];
};

export enum TreeStateStatus {
  Finished = 'finished',
  Started = 'started'
}

/** A connection to a list of items. */
export type TreeStatesConnection = {
  __typename?: 'TreeStatesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TreeStatesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TreeStatesEdge = {
  __typename?: 'TreeStatesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TreeState;
};

export type TriggerResendActivationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type TriggerResendActivationPayload = {
  __typename?: 'TriggerResendActivationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type TriggerResetPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type TriggerResetPasswordPayload = {
  __typename?: 'TriggerResetPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type TypeDefinition = {
  definitionType: TypeDefinitionType;
};

export enum TypeDefinitionType {
  Branch = 'branch',
  Content = 'content'
}

export type UnlockInfo = {
  kind: UnlockInfoKind;
};

export type UnlockInfoDemo = UnlockInfo & {
  __typename?: 'UnlockInfoDemo';
  firstContentCoordinatesIndexPath: Array<Scalars['Int']['output']>;
  firstContentId: Scalars['ID']['output'];
  kind: UnlockInfoKind;
};

export type UnlockInfoFullAccess = UnlockInfo & {
  __typename?: 'UnlockInfoFullAccess';
  kind: UnlockInfoKind;
};

export enum UnlockInfoKind {
  Demo = 'Demo',
  ErrorOccurred = 'ErrorOccurred',
  FullAccess = 'FullAccess',
  WallNotFound = 'WallNotFound'
}

export type UnlockInfoWallNotFound = UnlockInfo & {
  __typename?: 'UnlockInfoWallNotFound';
  kind: UnlockInfoKind;
};

export type UnpublishedEducationalOfferWrapper = OfferWrapper & {
  __typename?: 'UnpublishedEducationalOfferWrapper';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: OfferWrapperKind;
  root?: Maybe<TreeNode>;
};

export type UntouchedAndPreviouslyIncorrectElementState = ElementState & {
  __typename?: 'UntouchedAndPreviouslyIncorrectElementState';
  element: LearnElement;
  kind: ElementStateKind;
};

export type UntouchedElementState = ElementState & {
  __typename?: 'UntouchedElementState';
  element: LearnElement;
  kind: ElementStateKind;
};

export type UpdateBusinessBillingDetailsInput = {
  city: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company: Scalars['String']['input'];
  companyDetails?: InputMaybe<Scalars['String']['input']>;
  companyType: CompanyTypeInput;
  country: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  invoiceEmail?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  phoneNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  street: Scalars['String']['input'];
};

export type UpdateBusinessBillingDetailsPayload = {
  __typename?: 'UpdateBusinessBillingDetailsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type UpdateCartInput = {
  cartSelection: CartSelectionInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};

export type UpdateCartPayload = {
  __typename?: 'UpdateCartPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type UpdateInstructorImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: InstructorImplInput;
  id: Scalars['ID']['input'];
};

export type UpdateInstructorImplPayload = {
  __typename?: 'UpdateInstructorImplPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: InstructorImplsEdge;
};

export type UpdatePersonalizedEmailTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: PersonalizedEmailTemplateInput;
  id: Scalars['ID']['input'];
};

export type UpdatePersonalizedEmailTemplatePayload = {
  __typename?: 'UpdatePersonalizedEmailTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: PersonalizedEmailTemplatesEdge;
};

export type UpdatePersonalizedNotificationTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: PersonalizedNotificationTemplateInput;
  id: Scalars['ID']['input'];
};

export type UpdatePersonalizedNotificationTemplatePayload = {
  __typename?: 'UpdatePersonalizedNotificationTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: PersonalizedNotificationTemplatesEdge;
};

export type UpdatePrivateBillingDetailsInput = {
  city: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  dateOfBirth: Scalars['ZonedDateTIme']['input'];
  firstName: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
  phoneNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  salutation: SalutationType;
  street: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePrivateBillingDetailsPayload = {
  __typename?: 'UpdatePrivateBillingDetailsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type UpdateTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TagInput;
  id: Scalars['ID']['input'];
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: TagsEdge;
};

export type UpdateUsageLimited = {
  maxAmountOfUsages?: InputMaybe<Scalars['Int']['input']>;
  maxAmountOfUsagesPerAccount?: InputMaybe<Scalars['Int']['input']>;
  onlyForAccountIds: Array<Scalars['ID']['input']>;
  onlyForProductIds: Array<Scalars['ID']['input']>;
};

export type UploadAsyncElement = AsyncElement & {
  __typename?: 'UploadAsyncElement';
  assignedEvaluator?: Maybe<User>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: AsyncElementKind;
  taskDescription?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type UploadAsyncElementTask = {
  assignedEvaluator?: Maybe<User>;
  elementKind: AsyncElementKind;
  extension: AsyncElementTaskExtension;
  file?: Maybe<File>;
  id: Scalars['ID']['output'];
  status: AsyncElementTaskStatus;
  submissionInfo: AsyncElementTaskSubmissionInfo;
};

export type UploadAsyncLearnElement = AsyncLearnElement & {
  __typename?: 'UploadAsyncLearnElement';
  elementKind: AsyncElementKind;
  file?: Maybe<File>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  taskDescription: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type UploadEvaluation = {
  __typename?: 'UploadEvaluation';
  file?: Maybe<File>;
  text?: Maybe<Scalars['String']['output']>;
};

export type User = Node & {
  __typename?: 'User';
  activated: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  extension: UserExtension;
  groupAssociations: Array<UserGroupAssociation>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  registeredAt: Scalars['ZonedDateTIme']['output'];
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserDiscountType = DiscountType & {
  __typename?: 'UserDiscountType';
  kind: DiscountTypeKind;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

export type UserExtension = {
  doNotUse: Scalars['String']['output'];
};

export type UserExtensionImpl = UserExtension & {
  __typename?: 'UserExtensionImpl';
  adsOptIn: Scalars['Boolean']['output'];
  avatar?: Maybe<File>;
  branch?: Maybe<Scalars['String']['output']>;
  doNotUse: Scalars['String']['output'];
  firstLogin: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  position?: Maybe<Scalars['String']['output']>;
  progressInPercent: Scalars['Int']['output'];
  sumGamificationPoints: Scalars['Int']['output'];
  teamSize?: Maybe<Scalars['String']['output']>;
};

export type UserGroupAssociation = {
  __typename?: 'UserGroupAssociation';
  account?: Maybe<Account>;
  group?: Maybe<UserInAccountGroup>;
};

export type UserInAccount = Node & {
  __typename?: 'UserInAccount';
  groups: Array<UserInAccountGroup>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  user: User;
};

/** A connection to a list of items. */
export type UserInAccountConnection = {
  __typename?: 'UserInAccountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserInAccountEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserInAccountEdge = {
  __typename?: 'UserInAccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserInAccount;
};

export type UserInAccountGroup = Node & {
  __typename?: 'UserInAccountGroup';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isBuiltIn: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission>;
};

/** A connection to a list of items. */
export type UserInAccountGroupsConnection = {
  __typename?: 'UserInAccountGroupsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserInAccountGroupsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserInAccountGroupsEdge = {
  __typename?: 'UserInAccountGroupsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserInAccountGroup;
};

export type Versioning = {
  __typename?: 'Versioning';
  draftVersion: Scalars['Int']['output'];
  releaseVersion: Scalars['Int']['output'];
};

export type VideoDataV2 = {
  __typename?: 'VideoDataV2';
  duration: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
  videoId: Scalars['String']['output'];
};

export type VideoElement = ElementV2 & {
  __typename?: 'VideoElement';
  elementType: ElementTypeV2;
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  vimeoId: Scalars['String']['output'];
};

export type VideoLearnElement = LearnElement & {
  __typename?: 'VideoLearnElement';
  durationInSec: Scalars['Int']['output'];
  elementType: ElementTypeV2;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  streamFile?: Maybe<StreamFile>;
  subtitles: Array<SubtitlesForLanguage>;
  thumbnailFile?: Maybe<File>;
  title: Scalars['String']['output'];
  videoFile?: Maybe<File>;
};

export type VideoSubtitle = {
  __typename?: 'VideoSubtitle';
  endTimeInSec: Scalars['Long']['output'];
  startTimeInSec: Scalars['Long']['output'];
  text: Scalars['String']['output'];
};

/** Data partaining to the current user */
export type ViewerMutationType = {
  __typename?: 'ViewerMutationType';
  Auth: AuthViewerMutationSchema;
  Email: EmailViewerMutationSchema;
};

/** Data partaining to the current user */
export type ViewerQueryType = {
  __typename?: 'ViewerQueryType';
  Auth: AuthViewerSchema;
  Billing: BillingViewerSchema;
  Coaching: CoachingViewerSchema;
  Email: EmailViewerSchema;
  Learn: LearnViewerSchema;
  PotentialAnalysis: PotentialAnalysisViewerSchema;
};

export type ViewerTreeState = {
  kind: ViewerTreeStateKind;
};

export enum ViewerTreeStateKind {
  CanBeStarted = 'CanBeStarted',
  CanNotBeStarted = 'CanNotBeStarted',
  IsFinished = 'IsFinished',
  IsStarted = 'IsStarted',
  NotVisible = 'NotVisible'
}

export type VimeoPodcastSourceV2 = PodcastSourceV2 & {
  __typename?: 'VimeoPodcastSourceV2';
  sourceType: PodcastSourceTypeV2;
  vimeoId: Scalars['String']['output'];
};

export type ViolatesTreeFlowContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'ViolatesTreeFlowContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus;
};

export type VisibilityTreeConfig = {
  configType: VisibilityTreeConfigType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum VisibilityTreeConfigType {
  VisibilityTreeAfterDateTime = 'VisibilityTree_AfterDateTime',
  VisibilityTreeHide = 'VisibilityTree_Hide',
  VisibilityTreeNotAfterDateTime = 'VisibilityTree_NotAfterDateTime',
  VisibilityTreeOnlyAdmins = 'VisibilityTree_OnlyAdmins',
  VisibilityTreeOnlyEditors = 'VisibilityTree_OnlyEditors',
  VisibilityTreeOnlyIfTreeState = 'VisibilityTree_OnlyIfTreeState',
  VisibilityTreeOnlyPermissionsImpl = 'VisibilityTree_OnlyPermissionsImpl'
}

/** Data only accessible by the admin */
export type VocabAdminMutationSchema = {
  __typename?: 'VocabAdminMutationSchema';
  addWordToPackage?: Maybe<AddWordToPackagePayload>;
  createWordPackage?: Maybe<CreateWordPackagePayload>;
  deleteWord?: Maybe<DeleteWordPayload>;
  deleteWordPackage?: Maybe<DeleteWordPackagePayload>;
  editWord?: Maybe<EditWordPayload>;
  editWordPackage?: Maybe<EditWordPackagePayload>;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaAddWordToPackageArgs = {
  input: AddWordToPackageInput;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaCreateWordPackageArgs = {
  input: CreateWordPackageInput;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaDeleteWordArgs = {
  input: DeleteWordInput;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaDeleteWordPackageArgs = {
  input: DeleteWordPackageInput;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaEditWordArgs = {
  input: EditWordInput;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaEditWordPackageArgs = {
  input: EditWordPackageInput;
};

/** Data only accessible by the admin */
export type VocabAdminSchema = {
  __typename?: 'VocabAdminSchema';
  WordPackages: WordPackageConnection;
};


/** Data only accessible by the admin */
export type VocabAdminSchemaWordPackagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  alwaysInclude?: InputMaybe<Array<Scalars['ID']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type VocabMutations = {
  __typename?: 'VocabMutations';
  addWordNote?: Maybe<AddWordNotePayload>;
  startStandaloneVocabTraining?: Maybe<StartStandaloneVocabTrainingPayload>;
};


export type VocabMutationsAddWordNoteArgs = {
  input: AddWordNoteInput;
};


export type VocabMutationsStartStandaloneVocabTrainingArgs = {
  input: StartStandaloneVocabTrainingInput;
};

export type VocabQueries = {
  __typename?: 'VocabQueries';
  MyWordInventory?: Maybe<WordInventory>;
};

export type VocabTrainWordPackageSelection = {
  kind: VocabTrainWordPackageSelectionKind;
  wordPackage?: Maybe<WordPackage>;
};

export type VocabTrainWordPackageSelectionFullPackage = VocabTrainWordPackageSelection & {
  __typename?: 'VocabTrainWordPackageSelectionFullPackage';
  kind: VocabTrainWordPackageSelectionKind;
  wordPackage?: Maybe<WordPackage>;
};

export enum VocabTrainWordPackageSelectionKind {
  FullPackage = 'FullPackage',
  SpecificWords = 'SpecificWords'
}

export type VocabTrainWordPackageSelectionSpecificWords = VocabTrainWordPackageSelection & {
  __typename?: 'VocabTrainWordPackageSelectionSpecificWords';
  kind: VocabTrainWordPackageSelectionKind;
  wordIds: Array<Scalars['ID']['output']>;
  wordPackage?: Maybe<WordPackage>;
};

export type Word = {
  __typename?: 'Word';
  explanation: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  translation?: Maybe<Scalars['String']['output']>;
  word: Scalars['String']['output'];
};

export type WordInPackageInput = {
  packageId: Scalars['ID']['input'];
  wordId: Scalars['ID']['input'];
};

export type WordInventory = {
  __typename?: 'WordInventory';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  notes: Array<WordNote>;
  packages: Array<PackageUnlock>;
  proficiencies: Array<WordProficiency>;
};

export type WordNote = {
  __typename?: 'WordNote';
  note: Scalars['String']['output'];
  wordId: Scalars['ID']['output'];
};

export type WordPackage = Node & {
  __typename?: 'WordPackage';
  associatedWords: Array<Word>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type WordPackageConnection = {
  __typename?: 'WordPackageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WordPackageEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WordPackageDataInput = {
  language: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** An edge in a connection. */
export type WordPackageEdge = {
  __typename?: 'WordPackageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WordPackage;
};

export type WordPackageErrorOccurredRewardResult = RewardResult & {
  __typename?: 'WordPackageErrorOccurredRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type WordPackageNothingNewToUnlockRewardResult = RewardResult & {
  __typename?: 'WordPackageNothingNewToUnlockRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
  wordPackage?: Maybe<WordPackage>;
};

export type WordPackageReward = Reward & {
  __typename?: 'WordPackageReward';
  data: WordPackageRewardData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind;
  superId: Scalars['ID']['output'];
};

export type WordPackageRewardData = {
  __typename?: 'WordPackageRewardData';
  wordPackage?: Maybe<WordPackage>;
};

export type WordPackageRewardDataInput = {
  wordPackageId: Scalars['ID']['input'];
};

export type WordPackageUnlockedRewardResult = RewardResult & {
  __typename?: 'WordPackageUnlockedRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
  wordPackage?: Maybe<WordPackage>;
};

export type WordProficienciesChangedRewardResult = RewardResult & {
  __typename?: 'WordProficienciesChangedRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type WordProficienciesErrorOccurredRewardResult = RewardResult & {
  __typename?: 'WordProficienciesErrorOccurredRewardResult';
  kind: RewardResultKind;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind;
};

export type WordProficienciesReward = Reward & {
  __typename?: 'WordProficienciesReward';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind;
  superId: Scalars['ID']['output'];
};

export type WordProficiency = {
  __typename?: 'WordProficiency';
  proficiencyLevel: Scalars['Int']['output'];
  wordId: Scalars['ID']['output'];
};

export type DeleteTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteTagPayload = {
  __typename?: 'deleteTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedId: Scalars['ID']['output'];
};

export type EditTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TagDataInput;
  id: Scalars['ID']['input'];
};

export type EditTagPayload = {
  __typename?: 'editTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tag: AcademiesTag;
};

export type LoginJwtMutationVariables = Exact<{
  input: LoginJwtInput;
}>;


export type LoginJwtMutation = { __typename?: 'Mutation', Auth: { __typename?: 'AuthMutations', loginJwt?: { __typename?: 'LoginJwtPayload', loginResult: { __typename?: 'LoginResult', jwtTokens: { __typename?: 'JwtLoginInformation', accessToken: string } } } | null } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', Viewer: { __typename?: 'ViewerQueryType', Auth: { __typename?: 'AuthViewerSchema', currentUser?: { __typename?: 'CurrentUser', user: { __typename?: 'User', name: string } } | null } } };

export type GetContentNodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContentNodesQuery = { __typename?: 'Query', Admin: { __typename?: 'AdminQueryType', Tree: { __typename?: 'TreeAdminSchema', GetContentNodes: { __typename?: 'TreeNodesConnection', edges?: Array<{ __typename?: 'TreeNodesEdge', node: { __typename?: 'TreeNode', id: string, structureDefinition: { __typename?: 'ChildStructureDefinition', title: string } | { __typename?: 'RootStructureDefinition', title: string } } } | null> | null } } } };


export const LoginJwtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginJwt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginJwtInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginJwt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwtTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginJwtMutation, LoginJwtMutationVariables>;
export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const GetContentNodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContentNodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetContentNodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"structureDefinition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContentNodesQuery, GetContentNodesQueryVariables>;