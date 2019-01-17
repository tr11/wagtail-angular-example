export type Maybe<T> = T | null;

/** An enumeration. */
export enum MainMenuMaxLevels {
  A_1 = "A_1",
  A_2 = "A_2",
  A_3 = "A_3",
  A_4 = "A_4"
}
/** An enumeration. */
export enum FlatMenuMaxLevels {
  A_1 = "A_1",
  A_2 = "A_2",
  A_3 = "A_3",
  A_4 = "A_4"
}

/** The `DateTime` scalar type represents a DateTime value as specified by [iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
export type DateTime = any;

/** The `Date` scalar type represents a Date value as specified by [iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
export type Date = any;

/** The `Time` scalar type represents a Time value as specified by [iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
export type Time = any;

/** UUID */
export type Uuid = any;

/** The `GenericScalar` scalar type represents a generic GraphQL scalar value that could be: String, Boolean, Int, Float, List or Object. */
export type GenericScalar = any;

// ====================================================
// Documents
// ====================================================

export namespace PageTypeQuery {
  export type Variables = {
    url?: Maybe<string>;
  };

  export type Query = {
    __typename?: "Query";

    page: Maybe<Page>;
  };

  export type Page = {
    __typename: "PageInterface";

    urlPath: Maybe<string>;
  };
}

export namespace PageDetailsQuery {
  export type Variables = {
    url?: Maybe<string>;
  };

  export type Query = {
    __typename?: "Query";

    page: Maybe<Page>;
  };

  export type Page = {
    __typename: "PageInterface";

    title: string;

    urlPath: Maybe<string>;

    seoTitle: Maybe<string>;
  };
}

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

export interface PageInterface {
  id: number;

  title: string;

  urlPath?: Maybe<string>;

  contentType?: Maybe<string>;

  slug: string;

  path?: Maybe<string>;

  depth?: Maybe<number>;

  seoTitle?: Maybe<string>;

  numchild?: Maybe<number>;

  revision?: Maybe<number>;

  firstPublishedAt?: Maybe<DateTime>;

  lastPublishedAt?: Maybe<DateTime>;

  latestRevisionCreatedAt?: Maybe<DateTime>;

  live?: Maybe<boolean>;

  goLiveAt?: Maybe<DateTime>;

  expireAt?: Maybe<DateTime>;

  expired?: Maybe<boolean>;

  locked?: Maybe<boolean>;

  draftTitle?: Maybe<string>;

  hasUnpublishedChanges?: Maybe<boolean>;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  snippets?: Maybe<(Maybe<Snippet>)[]>;

  pages?: Maybe<(Maybe<PageInterface>)[]>;

  page?: Maybe<PageInterface>;

  preview?: Maybe<PageInterface>;

  previewAdd?: Maybe<PageInterface>;

  showInMenus?: Maybe<(Maybe<PageLink>)[]>;

  mainMenu?: Maybe<(Maybe<Menu>)[]>;

  secondaryMenu?: Maybe<SecondaryMenu>;

  secondaryMenus?: Maybe<(Maybe<SecondaryMenu>)[]>;

  root?: Maybe<Site>;

  images?: Maybe<(Maybe<Image>)[]>;

  image?: Maybe<Image>;

  documents?: Maybe<(Maybe<Document>)[]>;

  document?: Maybe<Document>;

  user?: Maybe<User>;

  format?: Maybe<string>;
}

export interface TestApp_2Advert {
  id: string;

  url?: Maybe<string>;

  text: string;
}

export interface TestApp_2App2Snippet {
  id: string;

  text: string;
}

export interface PageLink extends PageInterface {
  id: number;

  path?: Maybe<string>;

  depth?: Maybe<number>;

  numchild?: Maybe<number>;

  title: string;

  draftTitle?: Maybe<string>;

  slug: string;

  contentType?: Maybe<string>;

  live?: Maybe<boolean>;

  hasUnpublishedChanges?: Maybe<boolean>;

  urlPath?: Maybe<string>;

  owner?: Maybe<User>;

  seoTitle?: Maybe<string>;
  /** Whether a link to this page will appear in automatically generated menus */
  showInMenus: boolean;

  searchDescription: string;

  goLiveAt?: Maybe<DateTime>;

  expireAt?: Maybe<DateTime>;

  expired?: Maybe<boolean>;

  locked?: Maybe<boolean>;

  firstPublishedAt?: Maybe<DateTime>;

  lastPublishedAt?: Maybe<DateTime>;

  latestRevisionCreatedAt?: Maybe<DateTime>;

  sitesRootedHere?: Maybe<(Maybe<Site>)[]>;

  homepage?: Maybe<TestApp_1HomePage>;

  pagetypea?: Maybe<TestApp_2PageTypeA>;

  mainmenuitemSet?: Maybe<(Maybe<MenuItem>)[]>;

  flatmenuitemSet?: Maybe<(Maybe<SecondaryMenuItem>)[]>;

  revision?: Maybe<number>;
}

export interface User {
  id: string;

  lastLogin?: Maybe<DateTime>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: boolean;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;

  firstName: string;

  lastName: string;

  email: string;
  /** Designates whether the user can log into this admin site. */
  isStaff: boolean;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: boolean;

  dateJoined: DateTime;

  ownedPages?: Maybe<(Maybe<Page>)[]>;

  imageSet?: Maybe<(Maybe<Image>)[]>;

  documentSet?: Maybe<(Maybe<Document>)[]>;
}

export interface Page extends PageInterface {
  id: number;

  path?: Maybe<string>;

  depth?: Maybe<number>;

  numchild?: Maybe<number>;

  title: string;

  draftTitle?: Maybe<string>;

  slug: string;

  contentType?: Maybe<string>;

  live?: Maybe<boolean>;

  hasUnpublishedChanges?: Maybe<boolean>;

  urlPath?: Maybe<string>;

  owner?: Maybe<User>;

  seoTitle?: Maybe<string>;
  /** Whether a link to this page will appear in automatically generated menus */
  showInMenus: boolean;

  searchDescription: string;

  goLiveAt?: Maybe<DateTime>;

  expireAt?: Maybe<DateTime>;

  expired?: Maybe<boolean>;

  locked?: Maybe<boolean>;

  firstPublishedAt?: Maybe<DateTime>;

  lastPublishedAt?: Maybe<DateTime>;

  latestRevisionCreatedAt?: Maybe<DateTime>;

  sitesRootedHere?: Maybe<(Maybe<Site>)[]>;

  homepage?: Maybe<TestApp_1HomePage>;

  pagetypea?: Maybe<TestApp_2PageTypeA>;

  mainmenuitemSet?: Maybe<(Maybe<MenuItem>)[]>;

  flatmenuitemSet?: Maybe<(Maybe<SecondaryMenuItem>)[]>;

  revision?: Maybe<number>;
}

export interface Site {
  id: string;

  hostname: string;
  /** Set this to something other than 80 if you need a specific port number to appear in URLs (e.g. development on port 8000). Does not affect request handling (so port forwarding still works). */
  port: number;
  /** Human-readable name for the site. */
  siteName?: Maybe<string>;

  rootPage: Page;
  /** If true, this site will handle requests for all other hostnames that do not have a site entry of their own */
  isDefaultSite: boolean;
}

export interface TestApp_1HomePage extends PageInterface {
  id: number;

  path?: Maybe<string>;

  depth?: Maybe<number>;

  numchild?: Maybe<number>;

  title: string;

  draftTitle?: Maybe<string>;

  slug: string;

  contentType?: Maybe<string>;

  live?: Maybe<boolean>;

  hasUnpublishedChanges?: Maybe<boolean>;

  urlPath?: Maybe<string>;

  owner?: Maybe<User>;

  seoTitle?: Maybe<string>;
  /** Whether a link to this page will appear in automatically generated menus */
  showInMenus: boolean;

  searchDescription: string;

  goLiveAt?: Maybe<DateTime>;

  expireAt?: Maybe<DateTime>;

  expired?: Maybe<boolean>;

  locked?: Maybe<boolean>;

  firstPublishedAt?: Maybe<DateTime>;

  lastPublishedAt?: Maybe<DateTime>;

  latestRevisionCreatedAt?: Maybe<DateTime>;

  pagePtr: Page;

  fieldChar?: Maybe<string>;

  fieldInt?: Maybe<number>;

  fieldBool: boolean;

  fieldDate?: Maybe<Date>;

  fieldDatetime?: Maybe<DateTime>;

  fieldUrl?: Maybe<string>;

  fieldDecimal?: Maybe<string>;

  fieldEmail?: Maybe<string>;

  fieldFloat?: Maybe<number>;

  fieldDuration?: Maybe<string>;

  fieldIntp?: Maybe<number>;

  fieldSmallintp?: Maybe<number>;

  fieldSmallint?: Maybe<number>;

  fieldText?: Maybe<string>;

  fieldTime?: Maybe<Time>;

  fieldIp?: Maybe<string>;

  fieldUuid?: Maybe<Uuid>;

  revision?: Maybe<number>;
}

export interface TestApp_2PageTypeA extends PageInterface {
  id: number;

  path?: Maybe<string>;

  depth?: Maybe<number>;

  numchild?: Maybe<number>;

  title: string;

  draftTitle?: Maybe<string>;

  slug: string;

  contentType?: Maybe<string>;

  live?: Maybe<boolean>;

  hasUnpublishedChanges?: Maybe<boolean>;

  urlPath?: Maybe<string>;

  owner?: Maybe<User>;

  seoTitle?: Maybe<string>;
  /** Whether a link to this page will appear in automatically generated menus */
  showInMenus: boolean;

  searchDescription: string;

  goLiveAt?: Maybe<DateTime>;

  expireAt?: Maybe<DateTime>;

  expired?: Maybe<boolean>;

  locked?: Maybe<boolean>;

  firstPublishedAt?: Maybe<DateTime>;

  lastPublishedAt?: Maybe<DateTime>;

  latestRevisionCreatedAt?: Maybe<DateTime>;

  pagePtr: Page;

  streamfield?: Maybe<(Maybe<TestApp_2PageTypeAStreamfieldType>)[]>;

  another?: Maybe<(Maybe<TestApp_2PageTypeAAnotherType>)[]>;

  third?: Maybe<(Maybe<TestApp_2PageTypeAThirdType>)[]>;

  links?: Maybe<(Maybe<TestApp_2PageTypeALinksType>)[]>;

  lists?: Maybe<(Maybe<TestApp_2PageTypeAListsType>)[]>;

  linksList?: Maybe<(Maybe<TestApp_2PageTypeALinksListType>)[]>;

  custom?: Maybe<(Maybe<TestApp_2PageTypeACustomType>)[]>;

  anotherCustom?: Maybe<(Maybe<TestApp_2PageTypeAAnotherCustomType>)[]>;

  customLists?: Maybe<(Maybe<TestApp_2PageTypeACustomListsType>)[]>;

  revision?: Maybe<number>;
}

export interface StringBlock {
  value?: Maybe<string>;

  field?: Maybe<string>;
}

export interface IntBlock {
  value?: Maybe<number>;

  field?: Maybe<string>;
}

export interface DateBlock {
  value?: Maybe<Date>;

  field?: Maybe<string>;
}

export interface BooleanBlock {
  value?: Maybe<boolean>;

  field?: Maybe<string>;
}

export interface FloatBlock {
  value?: Maybe<number>;

  field?: Maybe<string>;
}

export interface DateTimeBlock {
  value?: Maybe<DateTime>;

  field?: Maybe<string>;
}

export interface TimeBlock {
  value?: Maybe<Time>;

  field?: Maybe<string>;
}

export interface TestApp_2App2SnippetBlock {
  value?: Maybe<TestApp_2App2Snippet>;

  field?: Maybe<string>;
}

export interface ImageBlock {
  value?: Maybe<Image>;

  field?: Maybe<string>;
}

export interface Image {
  id: string;

  title: string;

  file: string;

  width: number;

  height: number;

  createdAt: DateTime;

  uploadedByUser?: Maybe<User>;

  fileSize?: Maybe<number>;

  fileHash: string;

  tags?: Maybe<(Maybe<string>)[]>;

  hasFocalPoint?: Maybe<boolean>;

  focalPoint?: Maybe<Rect>;

  url?: Maybe<string>;

  urlLink?: Maybe<string>;
}

export interface Rect {
  left?: Maybe<number>;

  top?: Maybe<number>;

  right?: Maybe<number>;

  bottom?: Maybe<number>;

  x?: Maybe<number>;

  y?: Maybe<number>;

  height?: Maybe<number>;

  width?: Maybe<number>;
}

export interface PageBlock {
  value?: Maybe<PageInterface>;

  field?: Maybe<string>;
}

export interface DateTimeListBlock {
  value?: Maybe<(Maybe<DateTime>)[]>;

  field?: Maybe<string>;
}

export interface DateListBlock {
  value?: Maybe<(Maybe<Date>)[]>;

  field?: Maybe<string>;
}

export interface TimeListBlock {
  value?: Maybe<(Maybe<Time>)[]>;

  field?: Maybe<string>;
}

export interface IntListBlock {
  value?: Maybe<(Maybe<number>)[]>;

  field?: Maybe<string>;
}

export interface StringListBlock {
  value?: Maybe<(Maybe<string>)[]>;

  field?: Maybe<string>;
}

export interface FloatListBlock {
  value?: Maybe<(Maybe<number>)[]>;

  field?: Maybe<string>;
}

export interface PageInterfaceListBlock {
  value?: Maybe<(Maybe<PageInterface>)[]>;

  field?: Maybe<string>;
}

export interface TestApp_2App2SnippetListBlock {
  value?: Maybe<(Maybe<TestApp_2App2Snippet>)[]>;

  field?: Maybe<string>;
}

export interface ImageListBlock {
  value?: Maybe<(Maybe<Image>)[]>;

  field?: Maybe<string>;
}

export interface TestApp_2CustomBlock1 {
  fieldChar?: Maybe<string>;

  fieldText?: Maybe<string>;

  fieldEmail?: Maybe<string>;

  fieldInt?: Maybe<number>;

  fieldFloat?: Maybe<number>;

  fieldDecimal?: Maybe<string>;

  fieldRegex?: Maybe<string>;

  fieldUrl?: Maybe<string>;

  fieldBool?: Maybe<boolean>;

  fieldDate?: Maybe<Date>;

  fieldTime?: Maybe<Time>;

  fieldDatetime?: Maybe<DateTime>;

  fieldRich?: Maybe<string>;

  fieldRaw?: Maybe<string>;

  fieldQuote?: Maybe<string>;

  fieldChoice?: Maybe<string>;

  fieldStatic?: Maybe<string>;

  fieldList?: Maybe<(Maybe<string>)[]>;

  fieldList2?: Maybe<(Maybe<TestApp_2CustomBlockInner>)[]>;

  field?: Maybe<string>;
}

export interface TestApp_2CustomBlockInner {
  fieldText?: Maybe<string>;

  field?: Maybe<string>;
}

export interface TestApp_2CustomBlock2 {
  fieldLink?: Maybe<PageInterface>;

  fieldLinkList?: Maybe<(Maybe<PageInterface>)[]>;

  fieldImage?: Maybe<Image>;

  fieldImageList?: Maybe<(Maybe<Image>)[]>;

  fieldSnippet?: Maybe<TestApp_2App2Snippet>;

  fieldSnippetList?: Maybe<(Maybe<TestApp_2App2Snippet>)[]>;

  field?: Maybe<string>;
}

export interface TestApp_2CustomBlock1ListBlock {
  value?: Maybe<(Maybe<TestApp_2CustomBlock1>)[]>;

  field?: Maybe<string>;
}

export interface TestApp_2CustomBlock2ListBlock {
  value?: Maybe<(Maybe<TestApp_2CustomBlock2>)[]>;

  field?: Maybe<string>;
}

export interface MenuItem {
  id: string;

  sortOrder?: Maybe<number>;

  linkPage?: Maybe<Page>;

  linkUrl?: Maybe<string>;
  /** Use this to optionally append a #hash or querystring to the above page's URL. */
  urlAppend: string;
  /** Use this field to optionally specify an additional value for each menu item, which you can then reference in custom menu templates. */
  handle: string;
  /** Provide the text to use for a custom URL, or set on an internal page link to use instead of the page's title. */
  linkText: string;
  /** NOTE: The sub-menu might not be displayed, even if checked. It depends on how the menu is used in this project's templates. */
  allowSubnav: boolean;

  menu: Menu;
}

export interface Menu {
  /** The maximum number of levels to display when rendering this menu. The value can be overidden by supplying a different <code>max_levels</code> value to the <code>{% main_menu %}</code> tag in your templates. */
  maxLevels: MainMenuMaxLevels;

  menuItems?: Maybe<(Maybe<MenuItem>)[]>;
}

export interface SecondaryMenuItem {
  sortOrder?: Maybe<number>;

  linkPage?: Maybe<Page>;

  linkUrl?: Maybe<string>;
  /** Use this to optionally append a #hash or querystring to the above page's URL. */
  urlAppend: string;
  /** Use this field to optionally specify an additional value for each menu item, which you can then reference in custom menu templates. */
  handle: string;
  /** Provide the text to use for a custom URL, or set on an internal page link to use instead of the page's title. */
  linkText: string;

  id: string;
  /** NOTE: The sub-menu might not be displayed, even if checked. It depends on how the menu is used in this project's templates. */
  allowSubnav: boolean;

  menu: SecondaryMenu;
}

export interface SecondaryMenu {
  /** For internal reference only. */
  title: string;
  /** Used to reference this menu in templates etc. Must be unique for the selected site. */
  handle: string;
  /** If supplied, appears above the menu when rendered. */
  heading: string;
  /** The maximum number of levels to display when rendering this menu. The value can be overidden by supplying a different <code>max_levels</code> value to the <code>{% flat_menu %}</code> tag in your templates. */
  maxLevels: FlatMenuMaxLevels;

  menuItems?: Maybe<(Maybe<SecondaryMenuItem>)[]>;
}

export interface Document {
  id: string;

  title: string;

  file: string;

  createdAt: DateTime;

  uploadedByUser?: Maybe<User>;

  fileSize?: Maybe<number>;

  fileHash: string;

  tags?: Maybe<(Maybe<string>)[]>;

  url?: Maybe<string>;

  filename?: Maybe<string>;

  fileExtension?: Maybe<string>;
}

export interface Mutation {
  login?: Maybe<LoginMutation>;

  logout?: Maybe<LogoutMutation>;
}

export interface LoginMutation {
  user?: Maybe<User>;
}

export interface LogoutMutation {
  user?: Maybe<User>;
}

export interface GenericScalarBlock {
  value?: Maybe<GenericScalar>;

  field?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface SnippetsQueryArgs {
  typename: string;
}
export interface PagesQueryArgs {
  parent?: Maybe<number>;
}
export interface PageQueryArgs {
  id?: Maybe<number>;

  url?: Maybe<string>;

  revision?: Maybe<number>;
}
export interface PreviewQueryArgs {
  id: number;
}
export interface PreviewAddQueryArgs {
  appName?: Maybe<string>;

  modelName?: Maybe<string>;

  parent: number;
}
export interface SecondaryMenuQueryArgs {
  handle: string;
}
export interface ImageQueryArgs {
  id: number;
}
export interface DocumentQueryArgs {
  id: number;
}
export interface UrlImageArgs {
  rendition?: Maybe<string>;
}
export interface UrlLinkImageArgs {
  rendition?: Maybe<string>;
}
export interface LoginMutationArgs {
  password: string;

  username: string;
}

// ====================================================
// Unions
// ====================================================

export type Snippet = TestApp_2Advert | TestApp_2App2Snippet;

export type TestApp_2PageTypeAStreamfieldType = StringBlock | IntBlock;

export type TestApp_2PageTypeAAnotherType = StringBlock | IntBlock;

export type TestApp_2PageTypeAThirdType =
  | DateBlock
  | IntBlock
  | BooleanBlock
  | StringBlock
  | FloatBlock
  | DateTimeBlock
  | TimeBlock;

export type TestApp_2PageTypeALinksType =
  | TestApp_2App2SnippetBlock
  | ImageBlock
  | PageBlock;

export type TestApp_2PageTypeAListsType =
  | DateTimeListBlock
  | DateListBlock
  | TimeListBlock
  | IntListBlock
  | StringListBlock
  | FloatListBlock;

export type TestApp_2PageTypeALinksListType =
  | PageInterfaceListBlock
  | TestApp_2App2SnippetListBlock
  | ImageListBlock;

export type TestApp_2PageTypeACustomType =
  | TestApp_2CustomBlock1
  | TestApp_2CustomBlock2;

export type TestApp_2PageTypeAAnotherCustomType =
  | TestApp_2CustomBlock1
  | TestApp_2CustomBlock2;

export type TestApp_2PageTypeACustomListsType =
  | TestApp_2CustomBlock1ListBlock
  | TestApp_2CustomBlock2ListBlock;
