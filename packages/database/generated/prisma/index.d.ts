
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventFormField
 * 
 */
export type EventFormField = $Result.DefaultSelection<Prisma.$EventFormFieldPayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model EventParticipant
 * 
 */
export type EventParticipant = $Result.DefaultSelection<Prisma.$EventParticipantPayload>
/**
 * Model ParticipantResponse
 * 
 */
export type ParticipantResponse = $Result.DefaultSelection<Prisma.$ParticipantResponsePayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model FollowUp
 * 
 */
export type FollowUp = $Result.DefaultSelection<Prisma.$FollowUpPayload>
/**
 * Model MessageLog
 * 
 */
export type MessageLog = $Result.DefaultSelection<Prisma.$MessageLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  MODERATOR: 'MODERATOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const PublicationStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  CANCELLED: 'CANCELLED'
};

export type PublicationStatus = (typeof PublicationStatus)[keyof typeof PublicationStatus]


export const FieldType: {
  TEXT: 'TEXT',
  NUMBER: 'NUMBER',
  SELECT: 'SELECT',
  CHECKBOX: 'CHECKBOX'
};

export type FieldType = (typeof FieldType)[keyof typeof FieldType]


export const RegistrationOrigin: {
  LINK: 'LINK',
  QR_CODE: 'QR_CODE',
  MANUAL: 'MANUAL'
};

export type RegistrationOrigin = (typeof RegistrationOrigin)[keyof typeof RegistrationOrigin]


export const QuestionStatus: {
  PENDING: 'PENDING',
  AI_APPROVED: 'AI_APPROVED',
  AI_REJECTED: 'AI_REJECTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  ANSWERED: 'ANSWERED'
};

export type QuestionStatus = (typeof QuestionStatus)[keyof typeof QuestionStatus]


export const FollowUpType: {
  WHATSAPP: 'WHATSAPP',
  EMAIL: 'EMAIL'
};

export type FollowUpType = (typeof FollowUpType)[keyof typeof FollowUpType]


export const MessageType: {
  CONFIRMATION: 'CONFIRMATION',
  REMINDER_24H: 'REMINDER_24H',
  REMINDER_1H: 'REMINDER_1H',
  QUESTION_REJECTED: 'QUESTION_REJECTED',
  QUESTION_CONFIRMED: 'QUESTION_CONFIRMED',
  FOLLOW_UP: 'FOLLOW_UP',
  CANCELLATION: 'CANCELLATION'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const MessageChannel: {
  WHATSAPP: 'WHATSAPP',
  EMAIL: 'EMAIL'
};

export type MessageChannel = (typeof MessageChannel)[keyof typeof MessageChannel]


export const MessageStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED'
};

export type MessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type PublicationStatus = $Enums.PublicationStatus

export const PublicationStatus: typeof $Enums.PublicationStatus

export type FieldType = $Enums.FieldType

export const FieldType: typeof $Enums.FieldType

export type RegistrationOrigin = $Enums.RegistrationOrigin

export const RegistrationOrigin: typeof $Enums.RegistrationOrigin

export type QuestionStatus = $Enums.QuestionStatus

export const QuestionStatus: typeof $Enums.QuestionStatus

export type FollowUpType = $Enums.FollowUpType

export const FollowUpType: typeof $Enums.FollowUpType

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type MessageChannel = $Enums.MessageChannel

export const MessageChannel: typeof $Enums.MessageChannel

export type MessageStatus = $Enums.MessageStatus

export const MessageStatus: typeof $Enums.MessageStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventFormField`: Exposes CRUD operations for the **EventFormField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventFormFields
    * const eventFormFields = await prisma.eventFormField.findMany()
    * ```
    */
  get eventFormField(): Prisma.EventFormFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventParticipant`: Exposes CRUD operations for the **EventParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventParticipants
    * const eventParticipants = await prisma.eventParticipant.findMany()
    * ```
    */
  get eventParticipant(): Prisma.EventParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantResponse`: Exposes CRUD operations for the **ParticipantResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipantResponses
    * const participantResponses = await prisma.participantResponse.findMany()
    * ```
    */
  get participantResponse(): Prisma.ParticipantResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.followUp`: Exposes CRUD operations for the **FollowUp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowUps
    * const followUps = await prisma.followUp.findMany()
    * ```
    */
  get followUp(): Prisma.FollowUpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageLog`: Exposes CRUD operations for the **MessageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageLogs
    * const messageLogs = await prisma.messageLog.findMany()
    * ```
    */
  get messageLog(): Prisma.MessageLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    User: 'User',
    Event: 'Event',
    EventFormField: 'EventFormField',
    Participant: 'Participant',
    EventParticipant: 'EventParticipant',
    ParticipantResponse: 'ParticipantResponse',
    Question: 'Question',
    Vote: 'Vote',
    FollowUp: 'FollowUp',
    MessageLog: 'MessageLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "user" | "event" | "eventFormField" | "participant" | "eventParticipant" | "participantResponse" | "question" | "vote" | "followUp" | "messageLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventFormField: {
        payload: Prisma.$EventFormFieldPayload<ExtArgs>
        fields: Prisma.EventFormFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFormFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFormFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload>
          }
          findFirst: {
            args: Prisma.EventFormFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFormFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload>
          }
          findMany: {
            args: Prisma.EventFormFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload>[]
          }
          create: {
            args: Prisma.EventFormFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload>
          }
          createMany: {
            args: Prisma.EventFormFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventFormFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload>[]
          }
          delete: {
            args: Prisma.EventFormFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload>
          }
          update: {
            args: Prisma.EventFormFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload>
          }
          deleteMany: {
            args: Prisma.EventFormFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventFormFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventFormFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload>[]
          }
          upsert: {
            args: Prisma.EventFormFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormFieldPayload>
          }
          aggregate: {
            args: Prisma.EventFormFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventFormField>
          }
          groupBy: {
            args: Prisma.EventFormFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventFormFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventFormFieldCountArgs<ExtArgs>
            result: $Utils.Optional<EventFormFieldCountAggregateOutputType> | number
          }
        }
      }
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      EventParticipant: {
        payload: Prisma.$EventParticipantPayload<ExtArgs>
        fields: Prisma.EventParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          findFirst: {
            args: Prisma.EventParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          findMany: {
            args: Prisma.EventParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          create: {
            args: Prisma.EventParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          createMany: {
            args: Prisma.EventParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          delete: {
            args: Prisma.EventParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          update: {
            args: Prisma.EventParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          deleteMany: {
            args: Prisma.EventParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          upsert: {
            args: Prisma.EventParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          aggregate: {
            args: Prisma.EventParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventParticipant>
          }
          groupBy: {
            args: Prisma.EventParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<EventParticipantCountAggregateOutputType> | number
          }
        }
      }
      ParticipantResponse: {
        payload: Prisma.$ParticipantResponsePayload<ExtArgs>
        fields: Prisma.ParticipantResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload>
          }
          findFirst: {
            args: Prisma.ParticipantResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload>
          }
          findMany: {
            args: Prisma.ParticipantResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload>[]
          }
          create: {
            args: Prisma.ParticipantResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload>
          }
          createMany: {
            args: Prisma.ParticipantResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload>[]
          }
          delete: {
            args: Prisma.ParticipantResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload>
          }
          update: {
            args: Prisma.ParticipantResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload>
          }
          deleteMany: {
            args: Prisma.ParticipantResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload>[]
          }
          upsert: {
            args: Prisma.ParticipantResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResponsePayload>
          }
          aggregate: {
            args: Prisma.ParticipantResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantResponse>
          }
          groupBy: {
            args: Prisma.ParticipantResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantResponseCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      FollowUp: {
        payload: Prisma.$FollowUpPayload<ExtArgs>
        fields: Prisma.FollowUpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowUpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowUpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          findFirst: {
            args: Prisma.FollowUpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowUpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          findMany: {
            args: Prisma.FollowUpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>[]
          }
          create: {
            args: Prisma.FollowUpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          createMany: {
            args: Prisma.FollowUpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowUpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>[]
          }
          delete: {
            args: Prisma.FollowUpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          update: {
            args: Prisma.FollowUpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          deleteMany: {
            args: Prisma.FollowUpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowUpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>[]
          }
          upsert: {
            args: Prisma.FollowUpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          aggregate: {
            args: Prisma.FollowUpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowUp>
          }
          groupBy: {
            args: Prisma.FollowUpGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowUpGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowUpCountArgs<ExtArgs>
            result: $Utils.Optional<FollowUpCountAggregateOutputType> | number
          }
        }
      }
      MessageLog: {
        payload: Prisma.$MessageLogPayload<ExtArgs>
        fields: Prisma.MessageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          findFirst: {
            args: Prisma.MessageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          findMany: {
            args: Prisma.MessageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          create: {
            args: Prisma.MessageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          createMany: {
            args: Prisma.MessageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          delete: {
            args: Prisma.MessageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          update: {
            args: Prisma.MessageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          deleteMany: {
            args: Prisma.MessageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          upsert: {
            args: Prisma.MessageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          aggregate: {
            args: Prisma.MessageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageLog>
          }
          groupBy: {
            args: Prisma.MessageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageLogCountArgs<ExtArgs>
            result: $Utils.Optional<MessageLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    user?: UserOmit
    event?: EventOmit
    eventFormField?: EventFormFieldOmit
    participant?: ParticipantOmit
    eventParticipant?: EventParticipantOmit
    participantResponse?: ParticipantResponseOmit
    question?: QuestionOmit
    vote?: VoteOmit
    followUp?: FollowUpOmit
    messageLog?: MessageLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    events: number
    users: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | OrganizationCountOutputTypeCountEventsArgs
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    formFields: number
    participants: number
    followUps: number
    messageLogs: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formFields?: boolean | EventCountOutputTypeCountFormFieldsArgs
    participants?: boolean | EventCountOutputTypeCountParticipantsArgs
    followUps?: boolean | EventCountOutputTypeCountFollowUpsArgs
    messageLogs?: boolean | EventCountOutputTypeCountMessageLogsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountFormFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventFormFieldWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountMessageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLogWhereInput
  }


  /**
   * Count Type EventFormFieldCountOutputType
   */

  export type EventFormFieldCountOutputType = {
    responses: number
  }

  export type EventFormFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | EventFormFieldCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * EventFormFieldCountOutputType without action
   */
  export type EventFormFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormFieldCountOutputType
     */
    select?: EventFormFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventFormFieldCountOutputType without action
   */
  export type EventFormFieldCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantResponseWhereInput
  }


  /**
   * Count Type ParticipantCountOutputType
   */

  export type ParticipantCountOutputType = {
    events: number
    messageLogs: number
    votes: number
  }

  export type ParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ParticipantCountOutputTypeCountEventsArgs
    messageLogs?: boolean | ParticipantCountOutputTypeCountMessageLogsArgs
    votes?: boolean | ParticipantCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: ParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountMessageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLogWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type EventParticipantCountOutputType
   */

  export type EventParticipantCountOutputType = {
    responses: number
    questions: number
  }

  export type EventParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | EventParticipantCountOutputTypeCountResponsesArgs
    questions?: boolean | EventParticipantCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * EventParticipantCountOutputType without action
   */
  export type EventParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipantCountOutputType
     */
    select?: EventParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventParticipantCountOutputType without action
   */
  export type EventParticipantCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantResponseWhereInput
  }

  /**
   * EventParticipantCountOutputType without action
   */
  export type EventParticipantCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    votes: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | QuestionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Organization$eventsArgs<ExtArgs>
    users?: boolean | Organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Organization$eventsArgs<ExtArgs>
    users?: boolean | Organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Organization$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly slug: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.events
   */
  export type Organization$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    organizationId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    organizationId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    organizationId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    organizationId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    organizationId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    organizationId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt: Date
    organizationId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    organizationId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "createdAt" | "organizationId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      createdAt: Date
      organizationId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly organizationId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    topic: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    slug: string | null
    publicationStatus: $Enums.PublicationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    topic: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    slug: string | null
    publicationStatus: $Enums.PublicationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    description: number
    topic: number
    date: number
    startTime: number
    endTime: number
    location: number
    slug: number
    publicationStatus: number
    createdAt: number
    updatedAt: number
    organizationId: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    topic?: true
    date?: true
    startTime?: true
    endTime?: true
    location?: true
    slug?: true
    publicationStatus?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    topic?: true
    date?: true
    startTime?: true
    endTime?: true
    location?: true
    slug?: true
    publicationStatus?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    topic?: true
    date?: true
    startTime?: true
    endTime?: true
    location?: true
    slug?: true
    publicationStatus?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    name: string
    description: string | null
    topic: string
    date: Date
    startTime: Date
    endTime: Date
    location: string | null
    slug: string
    publicationStatus: $Enums.PublicationStatus
    createdAt: Date
    updatedAt: Date
    organizationId: string
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    topic?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    slug?: boolean
    publicationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    formFields?: boolean | Event$formFieldsArgs<ExtArgs>
    participants?: boolean | Event$participantsArgs<ExtArgs>
    followUps?: boolean | Event$followUpsArgs<ExtArgs>
    messageLogs?: boolean | Event$messageLogsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    topic?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    slug?: boolean
    publicationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    topic?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    slug?: boolean
    publicationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    topic?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    slug?: boolean
    publicationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "topic" | "date" | "startTime" | "endTime" | "location" | "slug" | "publicationStatus" | "createdAt" | "updatedAt" | "organizationId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    formFields?: boolean | Event$formFieldsArgs<ExtArgs>
    participants?: boolean | Event$participantsArgs<ExtArgs>
    followUps?: boolean | Event$followUpsArgs<ExtArgs>
    messageLogs?: boolean | Event$messageLogsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      formFields: Prisma.$EventFormFieldPayload<ExtArgs>[]
      participants: Prisma.$EventParticipantPayload<ExtArgs>[]
      followUps: Prisma.$FollowUpPayload<ExtArgs>[]
      messageLogs: Prisma.$MessageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      topic: string
      date: Date
      startTime: Date
      endTime: Date
      location: string | null
      slug: string
      publicationStatus: $Enums.PublicationStatus
      createdAt: Date
      updatedAt: Date
      organizationId: string
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formFields<T extends Event$formFieldsArgs<ExtArgs> = {}>(args?: Subset<T, Event$formFieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Event$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Event$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followUps<T extends Event$followUpsArgs<ExtArgs> = {}>(args?: Subset<T, Event$followUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messageLogs<T extends Event$messageLogsArgs<ExtArgs> = {}>(args?: Subset<T, Event$messageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly topic: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly startTime: FieldRef<"Event", 'DateTime'>
    readonly endTime: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly slug: FieldRef<"Event", 'String'>
    readonly publicationStatus: FieldRef<"Event", 'PublicationStatus'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly organizationId: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.formFields
   */
  export type Event$formFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
    where?: EventFormFieldWhereInput
    orderBy?: EventFormFieldOrderByWithRelationInput | EventFormFieldOrderByWithRelationInput[]
    cursor?: EventFormFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventFormFieldScalarFieldEnum | EventFormFieldScalarFieldEnum[]
  }

  /**
   * Event.participants
   */
  export type Event$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    cursor?: EventParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * Event.followUps
   */
  export type Event$followUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    where?: FollowUpWhereInput
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    cursor?: FollowUpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * Event.messageLogs
   */
  export type Event$messageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    where?: MessageLogWhereInput
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    cursor?: MessageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventFormField
   */

  export type AggregateEventFormField = {
    _count: EventFormFieldCountAggregateOutputType | null
    _avg: EventFormFieldAvgAggregateOutputType | null
    _sum: EventFormFieldSumAggregateOutputType | null
    _min: EventFormFieldMinAggregateOutputType | null
    _max: EventFormFieldMaxAggregateOutputType | null
  }

  export type EventFormFieldAvgAggregateOutputType = {
    order: number | null
  }

  export type EventFormFieldSumAggregateOutputType = {
    order: number | null
  }

  export type EventFormFieldMinAggregateOutputType = {
    id: string | null
    label: string | null
    type: $Enums.FieldType | null
    required: boolean | null
    options: string | null
    order: number | null
    isDefault: boolean | null
    eventId: string | null
  }

  export type EventFormFieldMaxAggregateOutputType = {
    id: string | null
    label: string | null
    type: $Enums.FieldType | null
    required: boolean | null
    options: string | null
    order: number | null
    isDefault: boolean | null
    eventId: string | null
  }

  export type EventFormFieldCountAggregateOutputType = {
    id: number
    label: number
    type: number
    required: number
    options: number
    order: number
    isDefault: number
    eventId: number
    _all: number
  }


  export type EventFormFieldAvgAggregateInputType = {
    order?: true
  }

  export type EventFormFieldSumAggregateInputType = {
    order?: true
  }

  export type EventFormFieldMinAggregateInputType = {
    id?: true
    label?: true
    type?: true
    required?: true
    options?: true
    order?: true
    isDefault?: true
    eventId?: true
  }

  export type EventFormFieldMaxAggregateInputType = {
    id?: true
    label?: true
    type?: true
    required?: true
    options?: true
    order?: true
    isDefault?: true
    eventId?: true
  }

  export type EventFormFieldCountAggregateInputType = {
    id?: true
    label?: true
    type?: true
    required?: true
    options?: true
    order?: true
    isDefault?: true
    eventId?: true
    _all?: true
  }

  export type EventFormFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventFormField to aggregate.
     */
    where?: EventFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventFormFields to fetch.
     */
    orderBy?: EventFormFieldOrderByWithRelationInput | EventFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventFormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventFormFields
    **/
    _count?: true | EventFormFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventFormFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventFormFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventFormFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventFormFieldMaxAggregateInputType
  }

  export type GetEventFormFieldAggregateType<T extends EventFormFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateEventFormField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventFormField[P]>
      : GetScalarType<T[P], AggregateEventFormField[P]>
  }




  export type EventFormFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventFormFieldWhereInput
    orderBy?: EventFormFieldOrderByWithAggregationInput | EventFormFieldOrderByWithAggregationInput[]
    by: EventFormFieldScalarFieldEnum[] | EventFormFieldScalarFieldEnum
    having?: EventFormFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventFormFieldCountAggregateInputType | true
    _avg?: EventFormFieldAvgAggregateInputType
    _sum?: EventFormFieldSumAggregateInputType
    _min?: EventFormFieldMinAggregateInputType
    _max?: EventFormFieldMaxAggregateInputType
  }

  export type EventFormFieldGroupByOutputType = {
    id: string
    label: string
    type: $Enums.FieldType
    required: boolean
    options: string | null
    order: number
    isDefault: boolean
    eventId: string
    _count: EventFormFieldCountAggregateOutputType | null
    _avg: EventFormFieldAvgAggregateOutputType | null
    _sum: EventFormFieldSumAggregateOutputType | null
    _min: EventFormFieldMinAggregateOutputType | null
    _max: EventFormFieldMaxAggregateOutputType | null
  }

  type GetEventFormFieldGroupByPayload<T extends EventFormFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventFormFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventFormFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventFormFieldGroupByOutputType[P]>
            : GetScalarType<T[P], EventFormFieldGroupByOutputType[P]>
        }
      >
    >


  export type EventFormFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    options?: boolean
    order?: boolean
    isDefault?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    responses?: boolean | EventFormField$responsesArgs<ExtArgs>
    _count?: boolean | EventFormFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventFormField"]>

  export type EventFormFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    options?: boolean
    order?: boolean
    isDefault?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventFormField"]>

  export type EventFormFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    options?: boolean
    order?: boolean
    isDefault?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventFormField"]>

  export type EventFormFieldSelectScalar = {
    id?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    options?: boolean
    order?: boolean
    isDefault?: boolean
    eventId?: boolean
  }

  export type EventFormFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "type" | "required" | "options" | "order" | "isDefault" | "eventId", ExtArgs["result"]["eventFormField"]>
  export type EventFormFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    responses?: boolean | EventFormField$responsesArgs<ExtArgs>
    _count?: boolean | EventFormFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventFormFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventFormFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventFormFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventFormField"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      responses: Prisma.$ParticipantResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      type: $Enums.FieldType
      required: boolean
      options: string | null
      order: number
      isDefault: boolean
      eventId: string
    }, ExtArgs["result"]["eventFormField"]>
    composites: {}
  }

  type EventFormFieldGetPayload<S extends boolean | null | undefined | EventFormFieldDefaultArgs> = $Result.GetResult<Prisma.$EventFormFieldPayload, S>

  type EventFormFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFormFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventFormFieldCountAggregateInputType | true
    }

  export interface EventFormFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventFormField'], meta: { name: 'EventFormField' } }
    /**
     * Find zero or one EventFormField that matches the filter.
     * @param {EventFormFieldFindUniqueArgs} args - Arguments to find a EventFormField
     * @example
     * // Get one EventFormField
     * const eventFormField = await prisma.eventFormField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFormFieldFindUniqueArgs>(args: SelectSubset<T, EventFormFieldFindUniqueArgs<ExtArgs>>): Prisma__EventFormFieldClient<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventFormField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFormFieldFindUniqueOrThrowArgs} args - Arguments to find a EventFormField
     * @example
     * // Get one EventFormField
     * const eventFormField = await prisma.eventFormField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFormFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFormFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventFormFieldClient<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventFormField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldFindFirstArgs} args - Arguments to find a EventFormField
     * @example
     * // Get one EventFormField
     * const eventFormField = await prisma.eventFormField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFormFieldFindFirstArgs>(args?: SelectSubset<T, EventFormFieldFindFirstArgs<ExtArgs>>): Prisma__EventFormFieldClient<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventFormField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldFindFirstOrThrowArgs} args - Arguments to find a EventFormField
     * @example
     * // Get one EventFormField
     * const eventFormField = await prisma.eventFormField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFormFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFormFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventFormFieldClient<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventFormFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventFormFields
     * const eventFormFields = await prisma.eventFormField.findMany()
     * 
     * // Get first 10 EventFormFields
     * const eventFormFields = await prisma.eventFormField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventFormFieldWithIdOnly = await prisma.eventFormField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFormFieldFindManyArgs>(args?: SelectSubset<T, EventFormFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventFormField.
     * @param {EventFormFieldCreateArgs} args - Arguments to create a EventFormField.
     * @example
     * // Create one EventFormField
     * const EventFormField = await prisma.eventFormField.create({
     *   data: {
     *     // ... data to create a EventFormField
     *   }
     * })
     * 
     */
    create<T extends EventFormFieldCreateArgs>(args: SelectSubset<T, EventFormFieldCreateArgs<ExtArgs>>): Prisma__EventFormFieldClient<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventFormFields.
     * @param {EventFormFieldCreateManyArgs} args - Arguments to create many EventFormFields.
     * @example
     * // Create many EventFormFields
     * const eventFormField = await prisma.eventFormField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventFormFieldCreateManyArgs>(args?: SelectSubset<T, EventFormFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventFormFields and returns the data saved in the database.
     * @param {EventFormFieldCreateManyAndReturnArgs} args - Arguments to create many EventFormFields.
     * @example
     * // Create many EventFormFields
     * const eventFormField = await prisma.eventFormField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventFormFields and only return the `id`
     * const eventFormFieldWithIdOnly = await prisma.eventFormField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventFormFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, EventFormFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventFormField.
     * @param {EventFormFieldDeleteArgs} args - Arguments to delete one EventFormField.
     * @example
     * // Delete one EventFormField
     * const EventFormField = await prisma.eventFormField.delete({
     *   where: {
     *     // ... filter to delete one EventFormField
     *   }
     * })
     * 
     */
    delete<T extends EventFormFieldDeleteArgs>(args: SelectSubset<T, EventFormFieldDeleteArgs<ExtArgs>>): Prisma__EventFormFieldClient<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventFormField.
     * @param {EventFormFieldUpdateArgs} args - Arguments to update one EventFormField.
     * @example
     * // Update one EventFormField
     * const eventFormField = await prisma.eventFormField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventFormFieldUpdateArgs>(args: SelectSubset<T, EventFormFieldUpdateArgs<ExtArgs>>): Prisma__EventFormFieldClient<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventFormFields.
     * @param {EventFormFieldDeleteManyArgs} args - Arguments to filter EventFormFields to delete.
     * @example
     * // Delete a few EventFormFields
     * const { count } = await prisma.eventFormField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventFormFieldDeleteManyArgs>(args?: SelectSubset<T, EventFormFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventFormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventFormFields
     * const eventFormField = await prisma.eventFormField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventFormFieldUpdateManyArgs>(args: SelectSubset<T, EventFormFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventFormFields and returns the data updated in the database.
     * @param {EventFormFieldUpdateManyAndReturnArgs} args - Arguments to update many EventFormFields.
     * @example
     * // Update many EventFormFields
     * const eventFormField = await prisma.eventFormField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventFormFields and only return the `id`
     * const eventFormFieldWithIdOnly = await prisma.eventFormField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventFormFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, EventFormFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventFormField.
     * @param {EventFormFieldUpsertArgs} args - Arguments to update or create a EventFormField.
     * @example
     * // Update or create a EventFormField
     * const eventFormField = await prisma.eventFormField.upsert({
     *   create: {
     *     // ... data to create a EventFormField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventFormField we want to update
     *   }
     * })
     */
    upsert<T extends EventFormFieldUpsertArgs>(args: SelectSubset<T, EventFormFieldUpsertArgs<ExtArgs>>): Prisma__EventFormFieldClient<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventFormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldCountArgs} args - Arguments to filter EventFormFields to count.
     * @example
     * // Count the number of EventFormFields
     * const count = await prisma.eventFormField.count({
     *   where: {
     *     // ... the filter for the EventFormFields we want to count
     *   }
     * })
    **/
    count<T extends EventFormFieldCountArgs>(
      args?: Subset<T, EventFormFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventFormFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventFormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventFormFieldAggregateArgs>(args: Subset<T, EventFormFieldAggregateArgs>): Prisma.PrismaPromise<GetEventFormFieldAggregateType<T>>

    /**
     * Group by EventFormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventFormFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventFormFieldGroupByArgs['orderBy'] }
        : { orderBy?: EventFormFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventFormFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventFormFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventFormField model
   */
  readonly fields: EventFormFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventFormField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventFormFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends EventFormField$responsesArgs<ExtArgs> = {}>(args?: Subset<T, EventFormField$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventFormField model
   */
  interface EventFormFieldFieldRefs {
    readonly id: FieldRef<"EventFormField", 'String'>
    readonly label: FieldRef<"EventFormField", 'String'>
    readonly type: FieldRef<"EventFormField", 'FieldType'>
    readonly required: FieldRef<"EventFormField", 'Boolean'>
    readonly options: FieldRef<"EventFormField", 'String'>
    readonly order: FieldRef<"EventFormField", 'Int'>
    readonly isDefault: FieldRef<"EventFormField", 'Boolean'>
    readonly eventId: FieldRef<"EventFormField", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventFormField findUnique
   */
  export type EventFormFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which EventFormField to fetch.
     */
    where: EventFormFieldWhereUniqueInput
  }

  /**
   * EventFormField findUniqueOrThrow
   */
  export type EventFormFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which EventFormField to fetch.
     */
    where: EventFormFieldWhereUniqueInput
  }

  /**
   * EventFormField findFirst
   */
  export type EventFormFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which EventFormField to fetch.
     */
    where?: EventFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventFormFields to fetch.
     */
    orderBy?: EventFormFieldOrderByWithRelationInput | EventFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventFormFields.
     */
    cursor?: EventFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventFormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventFormFields.
     */
    distinct?: EventFormFieldScalarFieldEnum | EventFormFieldScalarFieldEnum[]
  }

  /**
   * EventFormField findFirstOrThrow
   */
  export type EventFormFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which EventFormField to fetch.
     */
    where?: EventFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventFormFields to fetch.
     */
    orderBy?: EventFormFieldOrderByWithRelationInput | EventFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventFormFields.
     */
    cursor?: EventFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventFormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventFormFields.
     */
    distinct?: EventFormFieldScalarFieldEnum | EventFormFieldScalarFieldEnum[]
  }

  /**
   * EventFormField findMany
   */
  export type EventFormFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which EventFormFields to fetch.
     */
    where?: EventFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventFormFields to fetch.
     */
    orderBy?: EventFormFieldOrderByWithRelationInput | EventFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventFormFields.
     */
    cursor?: EventFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventFormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventFormFields.
     */
    distinct?: EventFormFieldScalarFieldEnum | EventFormFieldScalarFieldEnum[]
  }

  /**
   * EventFormField create
   */
  export type EventFormFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a EventFormField.
     */
    data: XOR<EventFormFieldCreateInput, EventFormFieldUncheckedCreateInput>
  }

  /**
   * EventFormField createMany
   */
  export type EventFormFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventFormFields.
     */
    data: EventFormFieldCreateManyInput | EventFormFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventFormField createManyAndReturn
   */
  export type EventFormFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * The data used to create many EventFormFields.
     */
    data: EventFormFieldCreateManyInput | EventFormFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventFormField update
   */
  export type EventFormFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a EventFormField.
     */
    data: XOR<EventFormFieldUpdateInput, EventFormFieldUncheckedUpdateInput>
    /**
     * Choose, which EventFormField to update.
     */
    where: EventFormFieldWhereUniqueInput
  }

  /**
   * EventFormField updateMany
   */
  export type EventFormFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventFormFields.
     */
    data: XOR<EventFormFieldUpdateManyMutationInput, EventFormFieldUncheckedUpdateManyInput>
    /**
     * Filter which EventFormFields to update
     */
    where?: EventFormFieldWhereInput
    /**
     * Limit how many EventFormFields to update.
     */
    limit?: number
  }

  /**
   * EventFormField updateManyAndReturn
   */
  export type EventFormFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * The data used to update EventFormFields.
     */
    data: XOR<EventFormFieldUpdateManyMutationInput, EventFormFieldUncheckedUpdateManyInput>
    /**
     * Filter which EventFormFields to update
     */
    where?: EventFormFieldWhereInput
    /**
     * Limit how many EventFormFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventFormField upsert
   */
  export type EventFormFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the EventFormField to update in case it exists.
     */
    where: EventFormFieldWhereUniqueInput
    /**
     * In case the EventFormField found by the `where` argument doesn't exist, create a new EventFormField with this data.
     */
    create: XOR<EventFormFieldCreateInput, EventFormFieldUncheckedCreateInput>
    /**
     * In case the EventFormField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventFormFieldUpdateInput, EventFormFieldUncheckedUpdateInput>
  }

  /**
   * EventFormField delete
   */
  export type EventFormFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
    /**
     * Filter which EventFormField to delete.
     */
    where: EventFormFieldWhereUniqueInput
  }

  /**
   * EventFormField deleteMany
   */
  export type EventFormFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventFormFields to delete
     */
    where?: EventFormFieldWhereInput
    /**
     * Limit how many EventFormFields to delete.
     */
    limit?: number
  }

  /**
   * EventFormField.responses
   */
  export type EventFormField$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    where?: ParticipantResponseWhereInput
    orderBy?: ParticipantResponseOrderByWithRelationInput | ParticipantResponseOrderByWithRelationInput[]
    cursor?: ParticipantResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantResponseScalarFieldEnum | ParticipantResponseScalarFieldEnum[]
  }

  /**
   * EventFormField without action
   */
  export type EventFormFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: EventFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: EventFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormFieldInclude<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    createdAt: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string
    createdAt: Date
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    events?: boolean | Participant$eventsArgs<ExtArgs>
    messageLogs?: boolean | Participant$messageLogsArgs<ExtArgs>
    votes?: boolean | Participant$votesArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "createdAt", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Participant$eventsArgs<ExtArgs>
    messageLogs?: boolean | Participant$messageLogsArgs<ExtArgs>
    votes?: boolean | Participant$votesArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      events: Prisma.$EventParticipantPayload<ExtArgs>[]
      messageLogs: Prisma.$MessageLogPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Participant$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messageLogs<T extends Participant$messageLogsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$messageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Participant$votesArgs<ExtArgs> = {}>(args?: Subset<T, Participant$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'String'>
    readonly name: FieldRef<"Participant", 'String'>
    readonly phone: FieldRef<"Participant", 'String'>
    readonly email: FieldRef<"Participant", 'String'>
    readonly createdAt: FieldRef<"Participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant.events
   */
  export type Participant$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    cursor?: EventParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * Participant.messageLogs
   */
  export type Participant$messageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    where?: MessageLogWhereInput
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    cursor?: MessageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * Participant.votes
   */
  export type Participant$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model EventParticipant
   */

  export type AggregateEventParticipant = {
    _count: EventParticipantCountAggregateOutputType | null
    _min: EventParticipantMinAggregateOutputType | null
    _max: EventParticipantMaxAggregateOutputType | null
  }

  export type EventParticipantMinAggregateOutputType = {
    id: string | null
    origin: $Enums.RegistrationOrigin | null
    checkedIn: boolean | null
    checkedInAt: Date | null
    createdAt: Date | null
    eventId: string | null
    participantId: string | null
  }

  export type EventParticipantMaxAggregateOutputType = {
    id: string | null
    origin: $Enums.RegistrationOrigin | null
    checkedIn: boolean | null
    checkedInAt: Date | null
    createdAt: Date | null
    eventId: string | null
    participantId: string | null
  }

  export type EventParticipantCountAggregateOutputType = {
    id: number
    origin: number
    checkedIn: number
    checkedInAt: number
    createdAt: number
    eventId: number
    participantId: number
    _all: number
  }


  export type EventParticipantMinAggregateInputType = {
    id?: true
    origin?: true
    checkedIn?: true
    checkedInAt?: true
    createdAt?: true
    eventId?: true
    participantId?: true
  }

  export type EventParticipantMaxAggregateInputType = {
    id?: true
    origin?: true
    checkedIn?: true
    checkedInAt?: true
    createdAt?: true
    eventId?: true
    participantId?: true
  }

  export type EventParticipantCountAggregateInputType = {
    id?: true
    origin?: true
    checkedIn?: true
    checkedInAt?: true
    createdAt?: true
    eventId?: true
    participantId?: true
    _all?: true
  }

  export type EventParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipant to aggregate.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventParticipants
    **/
    _count?: true | EventParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventParticipantMaxAggregateInputType
  }

  export type GetEventParticipantAggregateType<T extends EventParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateEventParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventParticipant[P]>
      : GetScalarType<T[P], AggregateEventParticipant[P]>
  }




  export type EventParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithAggregationInput | EventParticipantOrderByWithAggregationInput[]
    by: EventParticipantScalarFieldEnum[] | EventParticipantScalarFieldEnum
    having?: EventParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventParticipantCountAggregateInputType | true
    _min?: EventParticipantMinAggregateInputType
    _max?: EventParticipantMaxAggregateInputType
  }

  export type EventParticipantGroupByOutputType = {
    id: string
    origin: $Enums.RegistrationOrigin
    checkedIn: boolean
    checkedInAt: Date | null
    createdAt: Date
    eventId: string
    participantId: string
    _count: EventParticipantCountAggregateOutputType | null
    _min: EventParticipantMinAggregateOutputType | null
    _max: EventParticipantMaxAggregateOutputType | null
  }

  type GetEventParticipantGroupByPayload<T extends EventParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], EventParticipantGroupByOutputType[P]>
        }
      >
    >


  export type EventParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origin?: boolean
    checkedIn?: boolean
    checkedInAt?: boolean
    createdAt?: boolean
    eventId?: boolean
    participantId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    responses?: boolean | EventParticipant$responsesArgs<ExtArgs>
    questions?: boolean | EventParticipant$questionsArgs<ExtArgs>
    _count?: boolean | EventParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origin?: boolean
    checkedIn?: boolean
    checkedInAt?: boolean
    createdAt?: boolean
    eventId?: boolean
    participantId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origin?: boolean
    checkedIn?: boolean
    checkedInAt?: boolean
    createdAt?: boolean
    eventId?: boolean
    participantId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectScalar = {
    id?: boolean
    origin?: boolean
    checkedIn?: boolean
    checkedInAt?: boolean
    createdAt?: boolean
    eventId?: boolean
    participantId?: boolean
  }

  export type EventParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "origin" | "checkedIn" | "checkedInAt" | "createdAt" | "eventId" | "participantId", ExtArgs["result"]["eventParticipant"]>
  export type EventParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    responses?: boolean | EventParticipant$responsesArgs<ExtArgs>
    questions?: boolean | EventParticipant$questionsArgs<ExtArgs>
    _count?: boolean | EventParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type EventParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $EventParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventParticipant"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      participant: Prisma.$ParticipantPayload<ExtArgs>
      responses: Prisma.$ParticipantResponsePayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      origin: $Enums.RegistrationOrigin
      checkedIn: boolean
      checkedInAt: Date | null
      createdAt: Date
      eventId: string
      participantId: string
    }, ExtArgs["result"]["eventParticipant"]>
    composites: {}
  }

  type EventParticipantGetPayload<S extends boolean | null | undefined | EventParticipantDefaultArgs> = $Result.GetResult<Prisma.$EventParticipantPayload, S>

  type EventParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventParticipantCountAggregateInputType | true
    }

  export interface EventParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventParticipant'], meta: { name: 'EventParticipant' } }
    /**
     * Find zero or one EventParticipant that matches the filter.
     * @param {EventParticipantFindUniqueArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventParticipantFindUniqueArgs>(args: SelectSubset<T, EventParticipantFindUniqueArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventParticipantFindUniqueOrThrowArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, EventParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindFirstArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventParticipantFindFirstArgs>(args?: SelectSubset<T, EventParticipantFindFirstArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindFirstOrThrowArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, EventParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventParticipants
     * const eventParticipants = await prisma.eventParticipant.findMany()
     * 
     * // Get first 10 EventParticipants
     * const eventParticipants = await prisma.eventParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventParticipantWithIdOnly = await prisma.eventParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventParticipantFindManyArgs>(args?: SelectSubset<T, EventParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventParticipant.
     * @param {EventParticipantCreateArgs} args - Arguments to create a EventParticipant.
     * @example
     * // Create one EventParticipant
     * const EventParticipant = await prisma.eventParticipant.create({
     *   data: {
     *     // ... data to create a EventParticipant
     *   }
     * })
     * 
     */
    create<T extends EventParticipantCreateArgs>(args: SelectSubset<T, EventParticipantCreateArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventParticipants.
     * @param {EventParticipantCreateManyArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventParticipantCreateManyArgs>(args?: SelectSubset<T, EventParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventParticipants and returns the data saved in the database.
     * @param {EventParticipantCreateManyAndReturnArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventParticipants and only return the `id`
     * const eventParticipantWithIdOnly = await prisma.eventParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, EventParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventParticipant.
     * @param {EventParticipantDeleteArgs} args - Arguments to delete one EventParticipant.
     * @example
     * // Delete one EventParticipant
     * const EventParticipant = await prisma.eventParticipant.delete({
     *   where: {
     *     // ... filter to delete one EventParticipant
     *   }
     * })
     * 
     */
    delete<T extends EventParticipantDeleteArgs>(args: SelectSubset<T, EventParticipantDeleteArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventParticipant.
     * @param {EventParticipantUpdateArgs} args - Arguments to update one EventParticipant.
     * @example
     * // Update one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventParticipantUpdateArgs>(args: SelectSubset<T, EventParticipantUpdateArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventParticipants.
     * @param {EventParticipantDeleteManyArgs} args - Arguments to filter EventParticipants to delete.
     * @example
     * // Delete a few EventParticipants
     * const { count } = await prisma.eventParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventParticipantDeleteManyArgs>(args?: SelectSubset<T, EventParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventParticipantUpdateManyArgs>(args: SelectSubset<T, EventParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventParticipants and returns the data updated in the database.
     * @param {EventParticipantUpdateManyAndReturnArgs} args - Arguments to update many EventParticipants.
     * @example
     * // Update many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventParticipants and only return the `id`
     * const eventParticipantWithIdOnly = await prisma.eventParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, EventParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventParticipant.
     * @param {EventParticipantUpsertArgs} args - Arguments to update or create a EventParticipant.
     * @example
     * // Update or create a EventParticipant
     * const eventParticipant = await prisma.eventParticipant.upsert({
     *   create: {
     *     // ... data to create a EventParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventParticipant we want to update
     *   }
     * })
     */
    upsert<T extends EventParticipantUpsertArgs>(args: SelectSubset<T, EventParticipantUpsertArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantCountArgs} args - Arguments to filter EventParticipants to count.
     * @example
     * // Count the number of EventParticipants
     * const count = await prisma.eventParticipant.count({
     *   where: {
     *     // ... the filter for the EventParticipants we want to count
     *   }
     * })
    **/
    count<T extends EventParticipantCountArgs>(
      args?: Subset<T, EventParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventParticipantAggregateArgs>(args: Subset<T, EventParticipantAggregateArgs>): Prisma.PrismaPromise<GetEventParticipantAggregateType<T>>

    /**
     * Group by EventParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventParticipantGroupByArgs['orderBy'] }
        : { orderBy?: EventParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventParticipant model
   */
  readonly fields: EventParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends EventParticipant$responsesArgs<ExtArgs> = {}>(args?: Subset<T, EventParticipant$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends EventParticipant$questionsArgs<ExtArgs> = {}>(args?: Subset<T, EventParticipant$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventParticipant model
   */
  interface EventParticipantFieldRefs {
    readonly id: FieldRef<"EventParticipant", 'String'>
    readonly origin: FieldRef<"EventParticipant", 'RegistrationOrigin'>
    readonly checkedIn: FieldRef<"EventParticipant", 'Boolean'>
    readonly checkedInAt: FieldRef<"EventParticipant", 'DateTime'>
    readonly createdAt: FieldRef<"EventParticipant", 'DateTime'>
    readonly eventId: FieldRef<"EventParticipant", 'String'>
    readonly participantId: FieldRef<"EventParticipant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventParticipant findUnique
   */
  export type EventParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant findUniqueOrThrow
   */
  export type EventParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant findFirst
   */
  export type EventParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant findFirstOrThrow
   */
  export type EventParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant findMany
   */
  export type EventParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipants to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant create
   */
  export type EventParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a EventParticipant.
     */
    data: XOR<EventParticipantCreateInput, EventParticipantUncheckedCreateInput>
  }

  /**
   * EventParticipant createMany
   */
  export type EventParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventParticipants.
     */
    data: EventParticipantCreateManyInput | EventParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventParticipant createManyAndReturn
   */
  export type EventParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many EventParticipants.
     */
    data: EventParticipantCreateManyInput | EventParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventParticipant update
   */
  export type EventParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a EventParticipant.
     */
    data: XOR<EventParticipantUpdateInput, EventParticipantUncheckedUpdateInput>
    /**
     * Choose, which EventParticipant to update.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant updateMany
   */
  export type EventParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventParticipants.
     */
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyInput>
    /**
     * Filter which EventParticipants to update
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number
  }

  /**
   * EventParticipant updateManyAndReturn
   */
  export type EventParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * The data used to update EventParticipants.
     */
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyInput>
    /**
     * Filter which EventParticipants to update
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventParticipant upsert
   */
  export type EventParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the EventParticipant to update in case it exists.
     */
    where: EventParticipantWhereUniqueInput
    /**
     * In case the EventParticipant found by the `where` argument doesn't exist, create a new EventParticipant with this data.
     */
    create: XOR<EventParticipantCreateInput, EventParticipantUncheckedCreateInput>
    /**
     * In case the EventParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventParticipantUpdateInput, EventParticipantUncheckedUpdateInput>
  }

  /**
   * EventParticipant delete
   */
  export type EventParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter which EventParticipant to delete.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant deleteMany
   */
  export type EventParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipants to delete
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to delete.
     */
    limit?: number
  }

  /**
   * EventParticipant.responses
   */
  export type EventParticipant$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    where?: ParticipantResponseWhereInput
    orderBy?: ParticipantResponseOrderByWithRelationInput | ParticipantResponseOrderByWithRelationInput[]
    cursor?: ParticipantResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantResponseScalarFieldEnum | ParticipantResponseScalarFieldEnum[]
  }

  /**
   * EventParticipant.questions
   */
  export type EventParticipant$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * EventParticipant without action
   */
  export type EventParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
  }


  /**
   * Model ParticipantResponse
   */

  export type AggregateParticipantResponse = {
    _count: ParticipantResponseCountAggregateOutputType | null
    _min: ParticipantResponseMinAggregateOutputType | null
    _max: ParticipantResponseMaxAggregateOutputType | null
  }

  export type ParticipantResponseMinAggregateOutputType = {
    id: string | null
    value: string | null
    eventParticipantId: string | null
    fieldId: string | null
  }

  export type ParticipantResponseMaxAggregateOutputType = {
    id: string | null
    value: string | null
    eventParticipantId: string | null
    fieldId: string | null
  }

  export type ParticipantResponseCountAggregateOutputType = {
    id: number
    value: number
    eventParticipantId: number
    fieldId: number
    _all: number
  }


  export type ParticipantResponseMinAggregateInputType = {
    id?: true
    value?: true
    eventParticipantId?: true
    fieldId?: true
  }

  export type ParticipantResponseMaxAggregateInputType = {
    id?: true
    value?: true
    eventParticipantId?: true
    fieldId?: true
  }

  export type ParticipantResponseCountAggregateInputType = {
    id?: true
    value?: true
    eventParticipantId?: true
    fieldId?: true
    _all?: true
  }

  export type ParticipantResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantResponse to aggregate.
     */
    where?: ParticipantResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantResponses to fetch.
     */
    orderBy?: ParticipantResponseOrderByWithRelationInput | ParticipantResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipantResponses
    **/
    _count?: true | ParticipantResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantResponseMaxAggregateInputType
  }

  export type GetParticipantResponseAggregateType<T extends ParticipantResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantResponse[P]>
      : GetScalarType<T[P], AggregateParticipantResponse[P]>
  }




  export type ParticipantResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantResponseWhereInput
    orderBy?: ParticipantResponseOrderByWithAggregationInput | ParticipantResponseOrderByWithAggregationInput[]
    by: ParticipantResponseScalarFieldEnum[] | ParticipantResponseScalarFieldEnum
    having?: ParticipantResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantResponseCountAggregateInputType | true
    _min?: ParticipantResponseMinAggregateInputType
    _max?: ParticipantResponseMaxAggregateInputType
  }

  export type ParticipantResponseGroupByOutputType = {
    id: string
    value: string
    eventParticipantId: string
    fieldId: string
    _count: ParticipantResponseCountAggregateOutputType | null
    _min: ParticipantResponseMinAggregateOutputType | null
    _max: ParticipantResponseMaxAggregateOutputType | null
  }

  type GetParticipantResponseGroupByPayload<T extends ParticipantResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantResponseGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    eventParticipantId?: boolean
    fieldId?: boolean
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
    field?: boolean | EventFormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantResponse"]>

  export type ParticipantResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    eventParticipantId?: boolean
    fieldId?: boolean
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
    field?: boolean | EventFormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantResponse"]>

  export type ParticipantResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    eventParticipantId?: boolean
    fieldId?: boolean
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
    field?: boolean | EventFormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantResponse"]>

  export type ParticipantResponseSelectScalar = {
    id?: boolean
    value?: boolean
    eventParticipantId?: boolean
    fieldId?: boolean
  }

  export type ParticipantResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "eventParticipantId" | "fieldId", ExtArgs["result"]["participantResponse"]>
  export type ParticipantResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
    field?: boolean | EventFormFieldDefaultArgs<ExtArgs>
  }
  export type ParticipantResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
    field?: boolean | EventFormFieldDefaultArgs<ExtArgs>
  }
  export type ParticipantResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
    field?: boolean | EventFormFieldDefaultArgs<ExtArgs>
  }

  export type $ParticipantResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipantResponse"
    objects: {
      eventParticipant: Prisma.$EventParticipantPayload<ExtArgs>
      field: Prisma.$EventFormFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      eventParticipantId: string
      fieldId: string
    }, ExtArgs["result"]["participantResponse"]>
    composites: {}
  }

  type ParticipantResponseGetPayload<S extends boolean | null | undefined | ParticipantResponseDefaultArgs> = $Result.GetResult<Prisma.$ParticipantResponsePayload, S>

  type ParticipantResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantResponseCountAggregateInputType | true
    }

  export interface ParticipantResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipantResponse'], meta: { name: 'ParticipantResponse' } }
    /**
     * Find zero or one ParticipantResponse that matches the filter.
     * @param {ParticipantResponseFindUniqueArgs} args - Arguments to find a ParticipantResponse
     * @example
     * // Get one ParticipantResponse
     * const participantResponse = await prisma.participantResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantResponseFindUniqueArgs>(args: SelectSubset<T, ParticipantResponseFindUniqueArgs<ExtArgs>>): Prisma__ParticipantResponseClient<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipantResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantResponseFindUniqueOrThrowArgs} args - Arguments to find a ParticipantResponse
     * @example
     * // Get one ParticipantResponse
     * const participantResponse = await prisma.participantResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantResponseClient<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResponseFindFirstArgs} args - Arguments to find a ParticipantResponse
     * @example
     * // Get one ParticipantResponse
     * const participantResponse = await prisma.participantResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantResponseFindFirstArgs>(args?: SelectSubset<T, ParticipantResponseFindFirstArgs<ExtArgs>>): Prisma__ParticipantResponseClient<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResponseFindFirstOrThrowArgs} args - Arguments to find a ParticipantResponse
     * @example
     * // Get one ParticipantResponse
     * const participantResponse = await prisma.participantResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantResponseClient<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipantResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantResponses
     * const participantResponses = await prisma.participantResponse.findMany()
     * 
     * // Get first 10 ParticipantResponses
     * const participantResponses = await prisma.participantResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantResponseWithIdOnly = await prisma.participantResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantResponseFindManyArgs>(args?: SelectSubset<T, ParticipantResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipantResponse.
     * @param {ParticipantResponseCreateArgs} args - Arguments to create a ParticipantResponse.
     * @example
     * // Create one ParticipantResponse
     * const ParticipantResponse = await prisma.participantResponse.create({
     *   data: {
     *     // ... data to create a ParticipantResponse
     *   }
     * })
     * 
     */
    create<T extends ParticipantResponseCreateArgs>(args: SelectSubset<T, ParticipantResponseCreateArgs<ExtArgs>>): Prisma__ParticipantResponseClient<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipantResponses.
     * @param {ParticipantResponseCreateManyArgs} args - Arguments to create many ParticipantResponses.
     * @example
     * // Create many ParticipantResponses
     * const participantResponse = await prisma.participantResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantResponseCreateManyArgs>(args?: SelectSubset<T, ParticipantResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipantResponses and returns the data saved in the database.
     * @param {ParticipantResponseCreateManyAndReturnArgs} args - Arguments to create many ParticipantResponses.
     * @example
     * // Create many ParticipantResponses
     * const participantResponse = await prisma.participantResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipantResponses and only return the `id`
     * const participantResponseWithIdOnly = await prisma.participantResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipantResponse.
     * @param {ParticipantResponseDeleteArgs} args - Arguments to delete one ParticipantResponse.
     * @example
     * // Delete one ParticipantResponse
     * const ParticipantResponse = await prisma.participantResponse.delete({
     *   where: {
     *     // ... filter to delete one ParticipantResponse
     *   }
     * })
     * 
     */
    delete<T extends ParticipantResponseDeleteArgs>(args: SelectSubset<T, ParticipantResponseDeleteArgs<ExtArgs>>): Prisma__ParticipantResponseClient<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipantResponse.
     * @param {ParticipantResponseUpdateArgs} args - Arguments to update one ParticipantResponse.
     * @example
     * // Update one ParticipantResponse
     * const participantResponse = await prisma.participantResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantResponseUpdateArgs>(args: SelectSubset<T, ParticipantResponseUpdateArgs<ExtArgs>>): Prisma__ParticipantResponseClient<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipantResponses.
     * @param {ParticipantResponseDeleteManyArgs} args - Arguments to filter ParticipantResponses to delete.
     * @example
     * // Delete a few ParticipantResponses
     * const { count } = await prisma.participantResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantResponseDeleteManyArgs>(args?: SelectSubset<T, ParticipantResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantResponses
     * const participantResponse = await prisma.participantResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantResponseUpdateManyArgs>(args: SelectSubset<T, ParticipantResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantResponses and returns the data updated in the database.
     * @param {ParticipantResponseUpdateManyAndReturnArgs} args - Arguments to update many ParticipantResponses.
     * @example
     * // Update many ParticipantResponses
     * const participantResponse = await prisma.participantResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipantResponses and only return the `id`
     * const participantResponseWithIdOnly = await prisma.participantResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipantResponse.
     * @param {ParticipantResponseUpsertArgs} args - Arguments to update or create a ParticipantResponse.
     * @example
     * // Update or create a ParticipantResponse
     * const participantResponse = await prisma.participantResponse.upsert({
     *   create: {
     *     // ... data to create a ParticipantResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantResponse we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantResponseUpsertArgs>(args: SelectSubset<T, ParticipantResponseUpsertArgs<ExtArgs>>): Prisma__ParticipantResponseClient<$Result.GetResult<Prisma.$ParticipantResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipantResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResponseCountArgs} args - Arguments to filter ParticipantResponses to count.
     * @example
     * // Count the number of ParticipantResponses
     * const count = await prisma.participantResponse.count({
     *   where: {
     *     // ... the filter for the ParticipantResponses we want to count
     *   }
     * })
    **/
    count<T extends ParticipantResponseCountArgs>(
      args?: Subset<T, ParticipantResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipantResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantResponseAggregateArgs>(args: Subset<T, ParticipantResponseAggregateArgs>): Prisma.PrismaPromise<GetParticipantResponseAggregateType<T>>

    /**
     * Group by ParticipantResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipantResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantResponseGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipantResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipantResponse model
   */
  readonly fields: ParticipantResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipantResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventParticipant<T extends EventParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventParticipantDefaultArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends EventFormFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventFormFieldDefaultArgs<ExtArgs>>): Prisma__EventFormFieldClient<$Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParticipantResponse model
   */
  interface ParticipantResponseFieldRefs {
    readonly id: FieldRef<"ParticipantResponse", 'String'>
    readonly value: FieldRef<"ParticipantResponse", 'String'>
    readonly eventParticipantId: FieldRef<"ParticipantResponse", 'String'>
    readonly fieldId: FieldRef<"ParticipantResponse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ParticipantResponse findUnique
   */
  export type ParticipantResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantResponse to fetch.
     */
    where: ParticipantResponseWhereUniqueInput
  }

  /**
   * ParticipantResponse findUniqueOrThrow
   */
  export type ParticipantResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantResponse to fetch.
     */
    where: ParticipantResponseWhereUniqueInput
  }

  /**
   * ParticipantResponse findFirst
   */
  export type ParticipantResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantResponse to fetch.
     */
    where?: ParticipantResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantResponses to fetch.
     */
    orderBy?: ParticipantResponseOrderByWithRelationInput | ParticipantResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantResponses.
     */
    cursor?: ParticipantResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantResponses.
     */
    distinct?: ParticipantResponseScalarFieldEnum | ParticipantResponseScalarFieldEnum[]
  }

  /**
   * ParticipantResponse findFirstOrThrow
   */
  export type ParticipantResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantResponse to fetch.
     */
    where?: ParticipantResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantResponses to fetch.
     */
    orderBy?: ParticipantResponseOrderByWithRelationInput | ParticipantResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantResponses.
     */
    cursor?: ParticipantResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantResponses.
     */
    distinct?: ParticipantResponseScalarFieldEnum | ParticipantResponseScalarFieldEnum[]
  }

  /**
   * ParticipantResponse findMany
   */
  export type ParticipantResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantResponses to fetch.
     */
    where?: ParticipantResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantResponses to fetch.
     */
    orderBy?: ParticipantResponseOrderByWithRelationInput | ParticipantResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipantResponses.
     */
    cursor?: ParticipantResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantResponses.
     */
    distinct?: ParticipantResponseScalarFieldEnum | ParticipantResponseScalarFieldEnum[]
  }

  /**
   * ParticipantResponse create
   */
  export type ParticipantResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipantResponse.
     */
    data: XOR<ParticipantResponseCreateInput, ParticipantResponseUncheckedCreateInput>
  }

  /**
   * ParticipantResponse createMany
   */
  export type ParticipantResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipantResponses.
     */
    data: ParticipantResponseCreateManyInput | ParticipantResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipantResponse createManyAndReturn
   */
  export type ParticipantResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipantResponses.
     */
    data: ParticipantResponseCreateManyInput | ParticipantResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantResponse update
   */
  export type ParticipantResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipantResponse.
     */
    data: XOR<ParticipantResponseUpdateInput, ParticipantResponseUncheckedUpdateInput>
    /**
     * Choose, which ParticipantResponse to update.
     */
    where: ParticipantResponseWhereUniqueInput
  }

  /**
   * ParticipantResponse updateMany
   */
  export type ParticipantResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipantResponses.
     */
    data: XOR<ParticipantResponseUpdateManyMutationInput, ParticipantResponseUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantResponses to update
     */
    where?: ParticipantResponseWhereInput
    /**
     * Limit how many ParticipantResponses to update.
     */
    limit?: number
  }

  /**
   * ParticipantResponse updateManyAndReturn
   */
  export type ParticipantResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * The data used to update ParticipantResponses.
     */
    data: XOR<ParticipantResponseUpdateManyMutationInput, ParticipantResponseUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantResponses to update
     */
    where?: ParticipantResponseWhereInput
    /**
     * Limit how many ParticipantResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantResponse upsert
   */
  export type ParticipantResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipantResponse to update in case it exists.
     */
    where: ParticipantResponseWhereUniqueInput
    /**
     * In case the ParticipantResponse found by the `where` argument doesn't exist, create a new ParticipantResponse with this data.
     */
    create: XOR<ParticipantResponseCreateInput, ParticipantResponseUncheckedCreateInput>
    /**
     * In case the ParticipantResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantResponseUpdateInput, ParticipantResponseUncheckedUpdateInput>
  }

  /**
   * ParticipantResponse delete
   */
  export type ParticipantResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
    /**
     * Filter which ParticipantResponse to delete.
     */
    where: ParticipantResponseWhereUniqueInput
  }

  /**
   * ParticipantResponse deleteMany
   */
  export type ParticipantResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantResponses to delete
     */
    where?: ParticipantResponseWhereInput
    /**
     * Limit how many ParticipantResponses to delete.
     */
    limit?: number
  }

  /**
   * ParticipantResponse without action
   */
  export type ParticipantResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResponse
     */
    select?: ParticipantResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResponse
     */
    omit?: ParticipantResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResponseInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    aiScore: number | null
  }

  export type QuestionSumAggregateOutputType = {
    aiScore: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    content: string | null
    aiApproved: boolean | null
    aiScore: number | null
    aiReason: string | null
    moderatorApproved: boolean | null
    status: $Enums.QuestionStatus | null
    createdAt: Date | null
    eventParticipantId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    content: string | null
    aiApproved: boolean | null
    aiScore: number | null
    aiReason: string | null
    moderatorApproved: boolean | null
    status: $Enums.QuestionStatus | null
    createdAt: Date | null
    eventParticipantId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    content: number
    aiApproved: number
    aiScore: number
    aiReason: number
    moderatorApproved: number
    status: number
    createdAt: number
    eventParticipantId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    aiScore?: true
  }

  export type QuestionSumAggregateInputType = {
    aiScore?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    content?: true
    aiApproved?: true
    aiScore?: true
    aiReason?: true
    moderatorApproved?: true
    status?: true
    createdAt?: true
    eventParticipantId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    content?: true
    aiApproved?: true
    aiScore?: true
    aiReason?: true
    moderatorApproved?: true
    status?: true
    createdAt?: true
    eventParticipantId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    content?: true
    aiApproved?: true
    aiScore?: true
    aiReason?: true
    moderatorApproved?: true
    status?: true
    createdAt?: true
    eventParticipantId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    content: string
    aiApproved: boolean | null
    aiScore: number | null
    aiReason: string | null
    moderatorApproved: boolean | null
    status: $Enums.QuestionStatus
    createdAt: Date
    eventParticipantId: string
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    aiApproved?: boolean
    aiScore?: boolean
    aiReason?: boolean
    moderatorApproved?: boolean
    status?: boolean
    createdAt?: boolean
    eventParticipantId?: boolean
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
    votes?: boolean | Question$votesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    aiApproved?: boolean
    aiScore?: boolean
    aiReason?: boolean
    moderatorApproved?: boolean
    status?: boolean
    createdAt?: boolean
    eventParticipantId?: boolean
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    aiApproved?: boolean
    aiScore?: boolean
    aiReason?: boolean
    moderatorApproved?: boolean
    status?: boolean
    createdAt?: boolean
    eventParticipantId?: boolean
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    content?: boolean
    aiApproved?: boolean
    aiScore?: boolean
    aiReason?: boolean
    moderatorApproved?: boolean
    status?: boolean
    createdAt?: boolean
    eventParticipantId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "aiApproved" | "aiScore" | "aiReason" | "moderatorApproved" | "status" | "createdAt" | "eventParticipantId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
    votes?: boolean | Question$votesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventParticipant?: boolean | EventParticipantDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      eventParticipant: Prisma.$EventParticipantPayload<ExtArgs>
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      aiApproved: boolean | null
      aiScore: number | null
      aiReason: string | null
      moderatorApproved: boolean | null
      status: $Enums.QuestionStatus
      createdAt: Date
      eventParticipantId: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventParticipant<T extends EventParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventParticipantDefaultArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends Question$votesArgs<ExtArgs> = {}>(args?: Subset<T, Question$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly content: FieldRef<"Question", 'String'>
    readonly aiApproved: FieldRef<"Question", 'Boolean'>
    readonly aiScore: FieldRef<"Question", 'Float'>
    readonly aiReason: FieldRef<"Question", 'String'>
    readonly moderatorApproved: FieldRef<"Question", 'Boolean'>
    readonly status: FieldRef<"Question", 'QuestionStatus'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly eventParticipantId: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.votes
   */
  export type Question$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    questionId: string | null
    participantId: string | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    questionId: string | null
    participantId: string | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    createdAt: number
    questionId: number
    participantId: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    createdAt?: true
    questionId?: true
    participantId?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    createdAt?: true
    questionId?: true
    participantId?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    createdAt?: true
    questionId?: true
    participantId?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    createdAt: Date
    questionId: string
    participantId: string
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    questionId?: boolean
    participantId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    questionId?: boolean
    participantId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    questionId?: boolean
    participantId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    createdAt?: boolean
    questionId?: boolean
    participantId?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "questionId" | "participantId", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      questionId: string
      participantId: string
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly createdAt: FieldRef<"Vote", 'DateTime'>
    readonly questionId: FieldRef<"Vote", 'String'>
    readonly participantId: FieldRef<"Vote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model FollowUp
   */

  export type AggregateFollowUp = {
    _count: FollowUpCountAggregateOutputType | null
    _min: FollowUpMinAggregateOutputType | null
    _max: FollowUpMaxAggregateOutputType | null
  }

  export type FollowUpMinAggregateOutputType = {
    id: string | null
    type: $Enums.FollowUpType | null
    content: string | null
    sentAt: Date | null
    createdAt: Date | null
    eventId: string | null
  }

  export type FollowUpMaxAggregateOutputType = {
    id: string | null
    type: $Enums.FollowUpType | null
    content: string | null
    sentAt: Date | null
    createdAt: Date | null
    eventId: string | null
  }

  export type FollowUpCountAggregateOutputType = {
    id: number
    type: number
    content: number
    sentAt: number
    createdAt: number
    eventId: number
    _all: number
  }


  export type FollowUpMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    sentAt?: true
    createdAt?: true
    eventId?: true
  }

  export type FollowUpMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    sentAt?: true
    createdAt?: true
    eventId?: true
  }

  export type FollowUpCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    sentAt?: true
    createdAt?: true
    eventId?: true
    _all?: true
  }

  export type FollowUpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowUp to aggregate.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowUps
    **/
    _count?: true | FollowUpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowUpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowUpMaxAggregateInputType
  }

  export type GetFollowUpAggregateType<T extends FollowUpAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowUp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowUp[P]>
      : GetScalarType<T[P], AggregateFollowUp[P]>
  }




  export type FollowUpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpWhereInput
    orderBy?: FollowUpOrderByWithAggregationInput | FollowUpOrderByWithAggregationInput[]
    by: FollowUpScalarFieldEnum[] | FollowUpScalarFieldEnum
    having?: FollowUpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowUpCountAggregateInputType | true
    _min?: FollowUpMinAggregateInputType
    _max?: FollowUpMaxAggregateInputType
  }

  export type FollowUpGroupByOutputType = {
    id: string
    type: $Enums.FollowUpType
    content: string
    sentAt: Date | null
    createdAt: Date
    eventId: string
    _count: FollowUpCountAggregateOutputType | null
    _min: FollowUpMinAggregateOutputType | null
    _max: FollowUpMaxAggregateOutputType | null
  }

  type GetFollowUpGroupByPayload<T extends FollowUpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowUpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowUpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowUpGroupByOutputType[P]>
            : GetScalarType<T[P], FollowUpGroupByOutputType[P]>
        }
      >
    >


  export type FollowUpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    sentAt?: boolean
    createdAt?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followUp"]>

  export type FollowUpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    sentAt?: boolean
    createdAt?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followUp"]>

  export type FollowUpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    sentAt?: boolean
    createdAt?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followUp"]>

  export type FollowUpSelectScalar = {
    id?: boolean
    type?: boolean
    content?: boolean
    sentAt?: boolean
    createdAt?: boolean
    eventId?: boolean
  }

  export type FollowUpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "content" | "sentAt" | "createdAt" | "eventId", ExtArgs["result"]["followUp"]>
  export type FollowUpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type FollowUpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type FollowUpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $FollowUpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowUp"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.FollowUpType
      content: string
      sentAt: Date | null
      createdAt: Date
      eventId: string
    }, ExtArgs["result"]["followUp"]>
    composites: {}
  }

  type FollowUpGetPayload<S extends boolean | null | undefined | FollowUpDefaultArgs> = $Result.GetResult<Prisma.$FollowUpPayload, S>

  type FollowUpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowUpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowUpCountAggregateInputType | true
    }

  export interface FollowUpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowUp'], meta: { name: 'FollowUp' } }
    /**
     * Find zero or one FollowUp that matches the filter.
     * @param {FollowUpFindUniqueArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowUpFindUniqueArgs>(args: SelectSubset<T, FollowUpFindUniqueArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FollowUp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowUpFindUniqueOrThrowArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowUpFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowUpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowUp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpFindFirstArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowUpFindFirstArgs>(args?: SelectSubset<T, FollowUpFindFirstArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowUp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpFindFirstOrThrowArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowUpFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowUpFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FollowUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowUps
     * const followUps = await prisma.followUp.findMany()
     * 
     * // Get first 10 FollowUps
     * const followUps = await prisma.followUp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followUpWithIdOnly = await prisma.followUp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowUpFindManyArgs>(args?: SelectSubset<T, FollowUpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FollowUp.
     * @param {FollowUpCreateArgs} args - Arguments to create a FollowUp.
     * @example
     * // Create one FollowUp
     * const FollowUp = await prisma.followUp.create({
     *   data: {
     *     // ... data to create a FollowUp
     *   }
     * })
     * 
     */
    create<T extends FollowUpCreateArgs>(args: SelectSubset<T, FollowUpCreateArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FollowUps.
     * @param {FollowUpCreateManyArgs} args - Arguments to create many FollowUps.
     * @example
     * // Create many FollowUps
     * const followUp = await prisma.followUp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowUpCreateManyArgs>(args?: SelectSubset<T, FollowUpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FollowUps and returns the data saved in the database.
     * @param {FollowUpCreateManyAndReturnArgs} args - Arguments to create many FollowUps.
     * @example
     * // Create many FollowUps
     * const followUp = await prisma.followUp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FollowUps and only return the `id`
     * const followUpWithIdOnly = await prisma.followUp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowUpCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowUpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FollowUp.
     * @param {FollowUpDeleteArgs} args - Arguments to delete one FollowUp.
     * @example
     * // Delete one FollowUp
     * const FollowUp = await prisma.followUp.delete({
     *   where: {
     *     // ... filter to delete one FollowUp
     *   }
     * })
     * 
     */
    delete<T extends FollowUpDeleteArgs>(args: SelectSubset<T, FollowUpDeleteArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FollowUp.
     * @param {FollowUpUpdateArgs} args - Arguments to update one FollowUp.
     * @example
     * // Update one FollowUp
     * const followUp = await prisma.followUp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpUpdateArgs>(args: SelectSubset<T, FollowUpUpdateArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FollowUps.
     * @param {FollowUpDeleteManyArgs} args - Arguments to filter FollowUps to delete.
     * @example
     * // Delete a few FollowUps
     * const { count } = await prisma.followUp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowUpDeleteManyArgs>(args?: SelectSubset<T, FollowUpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowUps
     * const followUp = await prisma.followUp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpUpdateManyArgs>(args: SelectSubset<T, FollowUpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowUps and returns the data updated in the database.
     * @param {FollowUpUpdateManyAndReturnArgs} args - Arguments to update many FollowUps.
     * @example
     * // Update many FollowUps
     * const followUp = await prisma.followUp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FollowUps and only return the `id`
     * const followUpWithIdOnly = await prisma.followUp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowUpUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowUpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FollowUp.
     * @param {FollowUpUpsertArgs} args - Arguments to update or create a FollowUp.
     * @example
     * // Update or create a FollowUp
     * const followUp = await prisma.followUp.upsert({
     *   create: {
     *     // ... data to create a FollowUp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowUp we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpUpsertArgs>(args: SelectSubset<T, FollowUpUpsertArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FollowUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpCountArgs} args - Arguments to filter FollowUps to count.
     * @example
     * // Count the number of FollowUps
     * const count = await prisma.followUp.count({
     *   where: {
     *     // ... the filter for the FollowUps we want to count
     *   }
     * })
    **/
    count<T extends FollowUpCountArgs>(
      args?: Subset<T, FollowUpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowUpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowUpAggregateArgs>(args: Subset<T, FollowUpAggregateArgs>): Prisma.PrismaPromise<GetFollowUpAggregateType<T>>

    /**
     * Group by FollowUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowUpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowUpGroupByArgs['orderBy'] }
        : { orderBy?: FollowUpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowUpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowUpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowUp model
   */
  readonly fields: FollowUpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowUp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowUpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FollowUp model
   */
  interface FollowUpFieldRefs {
    readonly id: FieldRef<"FollowUp", 'String'>
    readonly type: FieldRef<"FollowUp", 'FollowUpType'>
    readonly content: FieldRef<"FollowUp", 'String'>
    readonly sentAt: FieldRef<"FollowUp", 'DateTime'>
    readonly createdAt: FieldRef<"FollowUp", 'DateTime'>
    readonly eventId: FieldRef<"FollowUp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FollowUp findUnique
   */
  export type FollowUpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp findUniqueOrThrow
   */
  export type FollowUpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp findFirst
   */
  export type FollowUpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowUps.
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowUps.
     */
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * FollowUp findFirstOrThrow
   */
  export type FollowUpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowUps.
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowUps.
     */
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * FollowUp findMany
   */
  export type FollowUpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUps to fetch.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowUps.
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowUps.
     */
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * FollowUp create
   */
  export type FollowUpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * The data needed to create a FollowUp.
     */
    data: XOR<FollowUpCreateInput, FollowUpUncheckedCreateInput>
  }

  /**
   * FollowUp createMany
   */
  export type FollowUpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowUps.
     */
    data: FollowUpCreateManyInput | FollowUpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FollowUp createManyAndReturn
   */
  export type FollowUpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * The data used to create many FollowUps.
     */
    data: FollowUpCreateManyInput | FollowUpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FollowUp update
   */
  export type FollowUpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * The data needed to update a FollowUp.
     */
    data: XOR<FollowUpUpdateInput, FollowUpUncheckedUpdateInput>
    /**
     * Choose, which FollowUp to update.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp updateMany
   */
  export type FollowUpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowUps.
     */
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyInput>
    /**
     * Filter which FollowUps to update
     */
    where?: FollowUpWhereInput
    /**
     * Limit how many FollowUps to update.
     */
    limit?: number
  }

  /**
   * FollowUp updateManyAndReturn
   */
  export type FollowUpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * The data used to update FollowUps.
     */
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyInput>
    /**
     * Filter which FollowUps to update
     */
    where?: FollowUpWhereInput
    /**
     * Limit how many FollowUps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FollowUp upsert
   */
  export type FollowUpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * The filter to search for the FollowUp to update in case it exists.
     */
    where: FollowUpWhereUniqueInput
    /**
     * In case the FollowUp found by the `where` argument doesn't exist, create a new FollowUp with this data.
     */
    create: XOR<FollowUpCreateInput, FollowUpUncheckedCreateInput>
    /**
     * In case the FollowUp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpUpdateInput, FollowUpUncheckedUpdateInput>
  }

  /**
   * FollowUp delete
   */
  export type FollowUpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter which FollowUp to delete.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp deleteMany
   */
  export type FollowUpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowUps to delete
     */
    where?: FollowUpWhereInput
    /**
     * Limit how many FollowUps to delete.
     */
    limit?: number
  }

  /**
   * FollowUp without action
   */
  export type FollowUpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
  }


  /**
   * Model MessageLog
   */

  export type AggregateMessageLog = {
    _count: MessageLogCountAggregateOutputType | null
    _min: MessageLogMinAggregateOutputType | null
    _max: MessageLogMaxAggregateOutputType | null
  }

  export type MessageLogMinAggregateOutputType = {
    id: string | null
    type: $Enums.MessageType | null
    channel: $Enums.MessageChannel | null
    status: $Enums.MessageStatus | null
    content: string | null
    sentAt: Date | null
    error: string | null
    createdAt: Date | null
    participantId: string | null
    eventId: string | null
  }

  export type MessageLogMaxAggregateOutputType = {
    id: string | null
    type: $Enums.MessageType | null
    channel: $Enums.MessageChannel | null
    status: $Enums.MessageStatus | null
    content: string | null
    sentAt: Date | null
    error: string | null
    createdAt: Date | null
    participantId: string | null
    eventId: string | null
  }

  export type MessageLogCountAggregateOutputType = {
    id: number
    type: number
    channel: number
    status: number
    content: number
    sentAt: number
    error: number
    createdAt: number
    participantId: number
    eventId: number
    _all: number
  }


  export type MessageLogMinAggregateInputType = {
    id?: true
    type?: true
    channel?: true
    status?: true
    content?: true
    sentAt?: true
    error?: true
    createdAt?: true
    participantId?: true
    eventId?: true
  }

  export type MessageLogMaxAggregateInputType = {
    id?: true
    type?: true
    channel?: true
    status?: true
    content?: true
    sentAt?: true
    error?: true
    createdAt?: true
    participantId?: true
    eventId?: true
  }

  export type MessageLogCountAggregateInputType = {
    id?: true
    type?: true
    channel?: true
    status?: true
    content?: true
    sentAt?: true
    error?: true
    createdAt?: true
    participantId?: true
    eventId?: true
    _all?: true
  }

  export type MessageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLog to aggregate.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageLogs
    **/
    _count?: true | MessageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageLogMaxAggregateInputType
  }

  export type GetMessageLogAggregateType<T extends MessageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageLog[P]>
      : GetScalarType<T[P], AggregateMessageLog[P]>
  }




  export type MessageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLogWhereInput
    orderBy?: MessageLogOrderByWithAggregationInput | MessageLogOrderByWithAggregationInput[]
    by: MessageLogScalarFieldEnum[] | MessageLogScalarFieldEnum
    having?: MessageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageLogCountAggregateInputType | true
    _min?: MessageLogMinAggregateInputType
    _max?: MessageLogMaxAggregateInputType
  }

  export type MessageLogGroupByOutputType = {
    id: string
    type: $Enums.MessageType
    channel: $Enums.MessageChannel
    status: $Enums.MessageStatus
    content: string
    sentAt: Date | null
    error: string | null
    createdAt: Date
    participantId: string
    eventId: string
    _count: MessageLogCountAggregateOutputType | null
    _min: MessageLogMinAggregateOutputType | null
    _max: MessageLogMaxAggregateOutputType | null
  }

  type GetMessageLogGroupByPayload<T extends MessageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageLogGroupByOutputType[P]>
            : GetScalarType<T[P], MessageLogGroupByOutputType[P]>
        }
      >
    >


  export type MessageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    channel?: boolean
    status?: boolean
    content?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
    participantId?: boolean
    eventId?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    channel?: boolean
    status?: boolean
    content?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
    participantId?: boolean
    eventId?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    channel?: boolean
    status?: boolean
    content?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
    participantId?: boolean
    eventId?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectScalar = {
    id?: boolean
    type?: boolean
    channel?: boolean
    status?: boolean
    content?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
    participantId?: boolean
    eventId?: boolean
  }

  export type MessageLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "channel" | "status" | "content" | "sentAt" | "error" | "createdAt" | "participantId" | "eventId", ExtArgs["result"]["messageLog"]>
  export type MessageLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type MessageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type MessageLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $MessageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageLog"
    objects: {
      participant: Prisma.$ParticipantPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.MessageType
      channel: $Enums.MessageChannel
      status: $Enums.MessageStatus
      content: string
      sentAt: Date | null
      error: string | null
      createdAt: Date
      participantId: string
      eventId: string
    }, ExtArgs["result"]["messageLog"]>
    composites: {}
  }

  type MessageLogGetPayload<S extends boolean | null | undefined | MessageLogDefaultArgs> = $Result.GetResult<Prisma.$MessageLogPayload, S>

  type MessageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageLogCountAggregateInputType | true
    }

  export interface MessageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageLog'], meta: { name: 'MessageLog' } }
    /**
     * Find zero or one MessageLog that matches the filter.
     * @param {MessageLogFindUniqueArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageLogFindUniqueArgs>(args: SelectSubset<T, MessageLogFindUniqueArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageLogFindUniqueOrThrowArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindFirstArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageLogFindFirstArgs>(args?: SelectSubset<T, MessageLogFindFirstArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindFirstOrThrowArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageLogs
     * const messageLogs = await prisma.messageLog.findMany()
     * 
     * // Get first 10 MessageLogs
     * const messageLogs = await prisma.messageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageLogFindManyArgs>(args?: SelectSubset<T, MessageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageLog.
     * @param {MessageLogCreateArgs} args - Arguments to create a MessageLog.
     * @example
     * // Create one MessageLog
     * const MessageLog = await prisma.messageLog.create({
     *   data: {
     *     // ... data to create a MessageLog
     *   }
     * })
     * 
     */
    create<T extends MessageLogCreateArgs>(args: SelectSubset<T, MessageLogCreateArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageLogs.
     * @param {MessageLogCreateManyArgs} args - Arguments to create many MessageLogs.
     * @example
     * // Create many MessageLogs
     * const messageLog = await prisma.messageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageLogCreateManyArgs>(args?: SelectSubset<T, MessageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageLogs and returns the data saved in the database.
     * @param {MessageLogCreateManyAndReturnArgs} args - Arguments to create many MessageLogs.
     * @example
     * // Create many MessageLogs
     * const messageLog = await prisma.messageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageLogs and only return the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageLog.
     * @param {MessageLogDeleteArgs} args - Arguments to delete one MessageLog.
     * @example
     * // Delete one MessageLog
     * const MessageLog = await prisma.messageLog.delete({
     *   where: {
     *     // ... filter to delete one MessageLog
     *   }
     * })
     * 
     */
    delete<T extends MessageLogDeleteArgs>(args: SelectSubset<T, MessageLogDeleteArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageLog.
     * @param {MessageLogUpdateArgs} args - Arguments to update one MessageLog.
     * @example
     * // Update one MessageLog
     * const messageLog = await prisma.messageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageLogUpdateArgs>(args: SelectSubset<T, MessageLogUpdateArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageLogs.
     * @param {MessageLogDeleteManyArgs} args - Arguments to filter MessageLogs to delete.
     * @example
     * // Delete a few MessageLogs
     * const { count } = await prisma.messageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageLogDeleteManyArgs>(args?: SelectSubset<T, MessageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageLogs
     * const messageLog = await prisma.messageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageLogUpdateManyArgs>(args: SelectSubset<T, MessageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLogs and returns the data updated in the database.
     * @param {MessageLogUpdateManyAndReturnArgs} args - Arguments to update many MessageLogs.
     * @example
     * // Update many MessageLogs
     * const messageLog = await prisma.messageLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageLogs and only return the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageLog.
     * @param {MessageLogUpsertArgs} args - Arguments to update or create a MessageLog.
     * @example
     * // Update or create a MessageLog
     * const messageLog = await prisma.messageLog.upsert({
     *   create: {
     *     // ... data to create a MessageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageLog we want to update
     *   }
     * })
     */
    upsert<T extends MessageLogUpsertArgs>(args: SelectSubset<T, MessageLogUpsertArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogCountArgs} args - Arguments to filter MessageLogs to count.
     * @example
     * // Count the number of MessageLogs
     * const count = await prisma.messageLog.count({
     *   where: {
     *     // ... the filter for the MessageLogs we want to count
     *   }
     * })
    **/
    count<T extends MessageLogCountArgs>(
      args?: Subset<T, MessageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageLogAggregateArgs>(args: Subset<T, MessageLogAggregateArgs>): Prisma.PrismaPromise<GetMessageLogAggregateType<T>>

    /**
     * Group by MessageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageLogGroupByArgs['orderBy'] }
        : { orderBy?: MessageLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageLog model
   */
  readonly fields: MessageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageLog model
   */
  interface MessageLogFieldRefs {
    readonly id: FieldRef<"MessageLog", 'String'>
    readonly type: FieldRef<"MessageLog", 'MessageType'>
    readonly channel: FieldRef<"MessageLog", 'MessageChannel'>
    readonly status: FieldRef<"MessageLog", 'MessageStatus'>
    readonly content: FieldRef<"MessageLog", 'String'>
    readonly sentAt: FieldRef<"MessageLog", 'DateTime'>
    readonly error: FieldRef<"MessageLog", 'String'>
    readonly createdAt: FieldRef<"MessageLog", 'DateTime'>
    readonly participantId: FieldRef<"MessageLog", 'String'>
    readonly eventId: FieldRef<"MessageLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MessageLog findUnique
   */
  export type MessageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog findUniqueOrThrow
   */
  export type MessageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog findFirst
   */
  export type MessageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog findFirstOrThrow
   */
  export type MessageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog findMany
   */
  export type MessageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLogs to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog create
   */
  export type MessageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageLog.
     */
    data: XOR<MessageLogCreateInput, MessageLogUncheckedCreateInput>
  }

  /**
   * MessageLog createMany
   */
  export type MessageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageLogs.
     */
    data: MessageLogCreateManyInput | MessageLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageLog createManyAndReturn
   */
  export type MessageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * The data used to create many MessageLogs.
     */
    data: MessageLogCreateManyInput | MessageLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageLog update
   */
  export type MessageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageLog.
     */
    data: XOR<MessageLogUpdateInput, MessageLogUncheckedUpdateInput>
    /**
     * Choose, which MessageLog to update.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog updateMany
   */
  export type MessageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageLogs.
     */
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyInput>
    /**
     * Filter which MessageLogs to update
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to update.
     */
    limit?: number
  }

  /**
   * MessageLog updateManyAndReturn
   */
  export type MessageLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * The data used to update MessageLogs.
     */
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyInput>
    /**
     * Filter which MessageLogs to update
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageLog upsert
   */
  export type MessageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageLog to update in case it exists.
     */
    where: MessageLogWhereUniqueInput
    /**
     * In case the MessageLog found by the `where` argument doesn't exist, create a new MessageLog with this data.
     */
    create: XOR<MessageLogCreateInput, MessageLogUncheckedCreateInput>
    /**
     * In case the MessageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageLogUpdateInput, MessageLogUncheckedUpdateInput>
  }

  /**
   * MessageLog delete
   */
  export type MessageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter which MessageLog to delete.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog deleteMany
   */
  export type MessageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLogs to delete
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to delete.
     */
    limit?: number
  }

  /**
   * MessageLog without action
   */
  export type MessageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    organizationId: 'organizationId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    topic: 'topic',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    location: 'location',
    slug: 'slug',
    publicationStatus: 'publicationStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventFormFieldScalarFieldEnum: {
    id: 'id',
    label: 'label',
    type: 'type',
    required: 'required',
    options: 'options',
    order: 'order',
    isDefault: 'isDefault',
    eventId: 'eventId'
  };

  export type EventFormFieldScalarFieldEnum = (typeof EventFormFieldScalarFieldEnum)[keyof typeof EventFormFieldScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const EventParticipantScalarFieldEnum: {
    id: 'id',
    origin: 'origin',
    checkedIn: 'checkedIn',
    checkedInAt: 'checkedInAt',
    createdAt: 'createdAt',
    eventId: 'eventId',
    participantId: 'participantId'
  };

  export type EventParticipantScalarFieldEnum = (typeof EventParticipantScalarFieldEnum)[keyof typeof EventParticipantScalarFieldEnum]


  export const ParticipantResponseScalarFieldEnum: {
    id: 'id',
    value: 'value',
    eventParticipantId: 'eventParticipantId',
    fieldId: 'fieldId'
  };

  export type ParticipantResponseScalarFieldEnum = (typeof ParticipantResponseScalarFieldEnum)[keyof typeof ParticipantResponseScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    content: 'content',
    aiApproved: 'aiApproved',
    aiScore: 'aiScore',
    aiReason: 'aiReason',
    moderatorApproved: 'moderatorApproved',
    status: 'status',
    createdAt: 'createdAt',
    eventParticipantId: 'eventParticipantId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    questionId: 'questionId',
    participantId: 'participantId'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const FollowUpScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    eventId: 'eventId'
  };

  export type FollowUpScalarFieldEnum = (typeof FollowUpScalarFieldEnum)[keyof typeof FollowUpScalarFieldEnum]


  export const MessageLogScalarFieldEnum: {
    id: 'id',
    type: 'type',
    channel: 'channel',
    status: 'status',
    content: 'content',
    sentAt: 'sentAt',
    error: 'error',
    createdAt: 'createdAt',
    participantId: 'participantId',
    eventId: 'eventId'
  };

  export type MessageLogScalarFieldEnum = (typeof MessageLogScalarFieldEnum)[keyof typeof MessageLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'PublicationStatus'
   */
  export type EnumPublicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublicationStatus'>
    


  /**
   * Reference to a field of type 'PublicationStatus[]'
   */
  export type ListEnumPublicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublicationStatus[]'>
    


  /**
   * Reference to a field of type 'FieldType'
   */
  export type EnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType'>
    


  /**
   * Reference to a field of type 'FieldType[]'
   */
  export type ListEnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RegistrationOrigin'
   */
  export type EnumRegistrationOriginFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationOrigin'>
    


  /**
   * Reference to a field of type 'RegistrationOrigin[]'
   */
  export type ListEnumRegistrationOriginFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationOrigin[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'QuestionStatus'
   */
  export type EnumQuestionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionStatus'>
    


  /**
   * Reference to a field of type 'QuestionStatus[]'
   */
  export type ListEnumQuestionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionStatus[]'>
    


  /**
   * Reference to a field of type 'FollowUpType'
   */
  export type EnumFollowUpTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowUpType'>
    


  /**
   * Reference to a field of type 'FollowUpType[]'
   */
  export type ListEnumFollowUpTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowUpType[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'MessageChannel'
   */
  export type EnumMessageChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageChannel'>
    


  /**
   * Reference to a field of type 'MessageChannel[]'
   */
  export type ListEnumMessageChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageChannel[]'>
    


  /**
   * Reference to a field of type 'MessageStatus'
   */
  export type EnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus'>
    


  /**
   * Reference to a field of type 'MessageStatus[]'
   */
  export type ListEnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    slug?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    events?: EventListRelationFilter
    users?: UserListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    events?: EventListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "slug">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    slug?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: StringFilter<"User"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: StringFilter<"User"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organizationId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    organizationId?: StringWithAggregatesFilter<"User"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    topic?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    slug?: StringFilter<"Event"> | string
    publicationStatus?: EnumPublicationStatusFilter<"Event"> | $Enums.PublicationStatus
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    organizationId?: StringFilter<"Event"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    formFields?: EventFormFieldListRelationFilter
    participants?: EventParticipantListRelationFilter
    followUps?: FollowUpListRelationFilter
    messageLogs?: MessageLogListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    topic?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrderInput | SortOrder
    slug?: SortOrder
    publicationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    formFields?: EventFormFieldOrderByRelationAggregateInput
    participants?: EventParticipantOrderByRelationAggregateInput
    followUps?: FollowUpOrderByRelationAggregateInput
    messageLogs?: MessageLogOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    topic?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    publicationStatus?: EnumPublicationStatusFilter<"Event"> | $Enums.PublicationStatus
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    organizationId?: StringFilter<"Event"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    formFields?: EventFormFieldListRelationFilter
    participants?: EventParticipantListRelationFilter
    followUps?: FollowUpListRelationFilter
    messageLogs?: MessageLogListRelationFilter
  }, "id" | "slug">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    topic?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrderInput | SortOrder
    slug?: SortOrder
    publicationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    topic?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    slug?: StringWithAggregatesFilter<"Event"> | string
    publicationStatus?: EnumPublicationStatusWithAggregatesFilter<"Event"> | $Enums.PublicationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    organizationId?: StringWithAggregatesFilter<"Event"> | string
  }

  export type EventFormFieldWhereInput = {
    AND?: EventFormFieldWhereInput | EventFormFieldWhereInput[]
    OR?: EventFormFieldWhereInput[]
    NOT?: EventFormFieldWhereInput | EventFormFieldWhereInput[]
    id?: StringFilter<"EventFormField"> | string
    label?: StringFilter<"EventFormField"> | string
    type?: EnumFieldTypeFilter<"EventFormField"> | $Enums.FieldType
    required?: BoolFilter<"EventFormField"> | boolean
    options?: StringNullableFilter<"EventFormField"> | string | null
    order?: IntFilter<"EventFormField"> | number
    isDefault?: BoolFilter<"EventFormField"> | boolean
    eventId?: StringFilter<"EventFormField"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    responses?: ParticipantResponseListRelationFilter
  }

  export type EventFormFieldOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    options?: SortOrderInput | SortOrder
    order?: SortOrder
    isDefault?: SortOrder
    eventId?: SortOrder
    event?: EventOrderByWithRelationInput
    responses?: ParticipantResponseOrderByRelationAggregateInput
  }

  export type EventFormFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventFormFieldWhereInput | EventFormFieldWhereInput[]
    OR?: EventFormFieldWhereInput[]
    NOT?: EventFormFieldWhereInput | EventFormFieldWhereInput[]
    label?: StringFilter<"EventFormField"> | string
    type?: EnumFieldTypeFilter<"EventFormField"> | $Enums.FieldType
    required?: BoolFilter<"EventFormField"> | boolean
    options?: StringNullableFilter<"EventFormField"> | string | null
    order?: IntFilter<"EventFormField"> | number
    isDefault?: BoolFilter<"EventFormField"> | boolean
    eventId?: StringFilter<"EventFormField"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    responses?: ParticipantResponseListRelationFilter
  }, "id">

  export type EventFormFieldOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    options?: SortOrderInput | SortOrder
    order?: SortOrder
    isDefault?: SortOrder
    eventId?: SortOrder
    _count?: EventFormFieldCountOrderByAggregateInput
    _avg?: EventFormFieldAvgOrderByAggregateInput
    _max?: EventFormFieldMaxOrderByAggregateInput
    _min?: EventFormFieldMinOrderByAggregateInput
    _sum?: EventFormFieldSumOrderByAggregateInput
  }

  export type EventFormFieldScalarWhereWithAggregatesInput = {
    AND?: EventFormFieldScalarWhereWithAggregatesInput | EventFormFieldScalarWhereWithAggregatesInput[]
    OR?: EventFormFieldScalarWhereWithAggregatesInput[]
    NOT?: EventFormFieldScalarWhereWithAggregatesInput | EventFormFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventFormField"> | string
    label?: StringWithAggregatesFilter<"EventFormField"> | string
    type?: EnumFieldTypeWithAggregatesFilter<"EventFormField"> | $Enums.FieldType
    required?: BoolWithAggregatesFilter<"EventFormField"> | boolean
    options?: StringNullableWithAggregatesFilter<"EventFormField"> | string | null
    order?: IntWithAggregatesFilter<"EventFormField"> | number
    isDefault?: BoolWithAggregatesFilter<"EventFormField"> | boolean
    eventId?: StringWithAggregatesFilter<"EventFormField"> | string
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: StringFilter<"Participant"> | string
    name?: StringFilter<"Participant"> | string
    phone?: StringFilter<"Participant"> | string
    email?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    events?: EventParticipantListRelationFilter
    messageLogs?: MessageLogListRelationFilter
    votes?: VoteListRelationFilter
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    events?: EventParticipantOrderByRelationAggregateInput
    messageLogs?: MessageLogOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    name?: StringFilter<"Participant"> | string
    email?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    events?: EventParticipantListRelationFilter
    messageLogs?: MessageLogListRelationFilter
    votes?: VoteListRelationFilter
  }, "id" | "phone">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participant"> | string
    name?: StringWithAggregatesFilter<"Participant"> | string
    phone?: StringWithAggregatesFilter<"Participant"> | string
    email?: StringWithAggregatesFilter<"Participant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
  }

  export type EventParticipantWhereInput = {
    AND?: EventParticipantWhereInput | EventParticipantWhereInput[]
    OR?: EventParticipantWhereInput[]
    NOT?: EventParticipantWhereInput | EventParticipantWhereInput[]
    id?: StringFilter<"EventParticipant"> | string
    origin?: EnumRegistrationOriginFilter<"EventParticipant"> | $Enums.RegistrationOrigin
    checkedIn?: BoolFilter<"EventParticipant"> | boolean
    checkedInAt?: DateTimeNullableFilter<"EventParticipant"> | Date | string | null
    createdAt?: DateTimeFilter<"EventParticipant"> | Date | string
    eventId?: StringFilter<"EventParticipant"> | string
    participantId?: StringFilter<"EventParticipant"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    responses?: ParticipantResponseListRelationFilter
    questions?: QuestionListRelationFilter
  }

  export type EventParticipantOrderByWithRelationInput = {
    id?: SortOrder
    origin?: SortOrder
    checkedIn?: SortOrder
    checkedInAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    participantId?: SortOrder
    event?: EventOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
    responses?: ParticipantResponseOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type EventParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_participantId?: EventParticipantEventIdParticipantIdCompoundUniqueInput
    AND?: EventParticipantWhereInput | EventParticipantWhereInput[]
    OR?: EventParticipantWhereInput[]
    NOT?: EventParticipantWhereInput | EventParticipantWhereInput[]
    origin?: EnumRegistrationOriginFilter<"EventParticipant"> | $Enums.RegistrationOrigin
    checkedIn?: BoolFilter<"EventParticipant"> | boolean
    checkedInAt?: DateTimeNullableFilter<"EventParticipant"> | Date | string | null
    createdAt?: DateTimeFilter<"EventParticipant"> | Date | string
    eventId?: StringFilter<"EventParticipant"> | string
    participantId?: StringFilter<"EventParticipant"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    responses?: ParticipantResponseListRelationFilter
    questions?: QuestionListRelationFilter
  }, "id" | "eventId_participantId">

  export type EventParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    origin?: SortOrder
    checkedIn?: SortOrder
    checkedInAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    participantId?: SortOrder
    _count?: EventParticipantCountOrderByAggregateInput
    _max?: EventParticipantMaxOrderByAggregateInput
    _min?: EventParticipantMinOrderByAggregateInput
  }

  export type EventParticipantScalarWhereWithAggregatesInput = {
    AND?: EventParticipantScalarWhereWithAggregatesInput | EventParticipantScalarWhereWithAggregatesInput[]
    OR?: EventParticipantScalarWhereWithAggregatesInput[]
    NOT?: EventParticipantScalarWhereWithAggregatesInput | EventParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventParticipant"> | string
    origin?: EnumRegistrationOriginWithAggregatesFilter<"EventParticipant"> | $Enums.RegistrationOrigin
    checkedIn?: BoolWithAggregatesFilter<"EventParticipant"> | boolean
    checkedInAt?: DateTimeNullableWithAggregatesFilter<"EventParticipant"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventParticipant"> | Date | string
    eventId?: StringWithAggregatesFilter<"EventParticipant"> | string
    participantId?: StringWithAggregatesFilter<"EventParticipant"> | string
  }

  export type ParticipantResponseWhereInput = {
    AND?: ParticipantResponseWhereInput | ParticipantResponseWhereInput[]
    OR?: ParticipantResponseWhereInput[]
    NOT?: ParticipantResponseWhereInput | ParticipantResponseWhereInput[]
    id?: StringFilter<"ParticipantResponse"> | string
    value?: StringFilter<"ParticipantResponse"> | string
    eventParticipantId?: StringFilter<"ParticipantResponse"> | string
    fieldId?: StringFilter<"ParticipantResponse"> | string
    eventParticipant?: XOR<EventParticipantScalarRelationFilter, EventParticipantWhereInput>
    field?: XOR<EventFormFieldScalarRelationFilter, EventFormFieldWhereInput>
  }

  export type ParticipantResponseOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    eventParticipantId?: SortOrder
    fieldId?: SortOrder
    eventParticipant?: EventParticipantOrderByWithRelationInput
    field?: EventFormFieldOrderByWithRelationInput
  }

  export type ParticipantResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParticipantResponseWhereInput | ParticipantResponseWhereInput[]
    OR?: ParticipantResponseWhereInput[]
    NOT?: ParticipantResponseWhereInput | ParticipantResponseWhereInput[]
    value?: StringFilter<"ParticipantResponse"> | string
    eventParticipantId?: StringFilter<"ParticipantResponse"> | string
    fieldId?: StringFilter<"ParticipantResponse"> | string
    eventParticipant?: XOR<EventParticipantScalarRelationFilter, EventParticipantWhereInput>
    field?: XOR<EventFormFieldScalarRelationFilter, EventFormFieldWhereInput>
  }, "id">

  export type ParticipantResponseOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    eventParticipantId?: SortOrder
    fieldId?: SortOrder
    _count?: ParticipantResponseCountOrderByAggregateInput
    _max?: ParticipantResponseMaxOrderByAggregateInput
    _min?: ParticipantResponseMinOrderByAggregateInput
  }

  export type ParticipantResponseScalarWhereWithAggregatesInput = {
    AND?: ParticipantResponseScalarWhereWithAggregatesInput | ParticipantResponseScalarWhereWithAggregatesInput[]
    OR?: ParticipantResponseScalarWhereWithAggregatesInput[]
    NOT?: ParticipantResponseScalarWhereWithAggregatesInput | ParticipantResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParticipantResponse"> | string
    value?: StringWithAggregatesFilter<"ParticipantResponse"> | string
    eventParticipantId?: StringWithAggregatesFilter<"ParticipantResponse"> | string
    fieldId?: StringWithAggregatesFilter<"ParticipantResponse"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    aiApproved?: BoolNullableFilter<"Question"> | boolean | null
    aiScore?: FloatNullableFilter<"Question"> | number | null
    aiReason?: StringNullableFilter<"Question"> | string | null
    moderatorApproved?: BoolNullableFilter<"Question"> | boolean | null
    status?: EnumQuestionStatusFilter<"Question"> | $Enums.QuestionStatus
    createdAt?: DateTimeFilter<"Question"> | Date | string
    eventParticipantId?: StringFilter<"Question"> | string
    eventParticipant?: XOR<EventParticipantScalarRelationFilter, EventParticipantWhereInput>
    votes?: VoteListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    aiApproved?: SortOrderInput | SortOrder
    aiScore?: SortOrderInput | SortOrder
    aiReason?: SortOrderInput | SortOrder
    moderatorApproved?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    eventParticipantId?: SortOrder
    eventParticipant?: EventParticipantOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    content?: StringFilter<"Question"> | string
    aiApproved?: BoolNullableFilter<"Question"> | boolean | null
    aiScore?: FloatNullableFilter<"Question"> | number | null
    aiReason?: StringNullableFilter<"Question"> | string | null
    moderatorApproved?: BoolNullableFilter<"Question"> | boolean | null
    status?: EnumQuestionStatusFilter<"Question"> | $Enums.QuestionStatus
    createdAt?: DateTimeFilter<"Question"> | Date | string
    eventParticipantId?: StringFilter<"Question"> | string
    eventParticipant?: XOR<EventParticipantScalarRelationFilter, EventParticipantWhereInput>
    votes?: VoteListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    aiApproved?: SortOrderInput | SortOrder
    aiScore?: SortOrderInput | SortOrder
    aiReason?: SortOrderInput | SortOrder
    moderatorApproved?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    eventParticipantId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    content?: StringWithAggregatesFilter<"Question"> | string
    aiApproved?: BoolNullableWithAggregatesFilter<"Question"> | boolean | null
    aiScore?: FloatNullableWithAggregatesFilter<"Question"> | number | null
    aiReason?: StringNullableWithAggregatesFilter<"Question"> | string | null
    moderatorApproved?: BoolNullableWithAggregatesFilter<"Question"> | boolean | null
    status?: EnumQuestionStatusWithAggregatesFilter<"Question"> | $Enums.QuestionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    eventParticipantId?: StringWithAggregatesFilter<"Question"> | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    questionId?: StringFilter<"Vote"> | string
    participantId?: StringFilter<"Vote"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    participantId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    questionId_participantId?: VoteQuestionIdParticipantIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    questionId?: StringFilter<"Vote"> | string
    participantId?: StringFilter<"Vote"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id" | "questionId_participantId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    participantId?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
    questionId?: StringWithAggregatesFilter<"Vote"> | string
    participantId?: StringWithAggregatesFilter<"Vote"> | string
  }

  export type FollowUpWhereInput = {
    AND?: FollowUpWhereInput | FollowUpWhereInput[]
    OR?: FollowUpWhereInput[]
    NOT?: FollowUpWhereInput | FollowUpWhereInput[]
    id?: StringFilter<"FollowUp"> | string
    type?: EnumFollowUpTypeFilter<"FollowUp"> | $Enums.FollowUpType
    content?: StringFilter<"FollowUp"> | string
    sentAt?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    createdAt?: DateTimeFilter<"FollowUp"> | Date | string
    eventId?: StringFilter<"FollowUp"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type FollowUpOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type FollowUpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FollowUpWhereInput | FollowUpWhereInput[]
    OR?: FollowUpWhereInput[]
    NOT?: FollowUpWhereInput | FollowUpWhereInput[]
    type?: EnumFollowUpTypeFilter<"FollowUp"> | $Enums.FollowUpType
    content?: StringFilter<"FollowUp"> | string
    sentAt?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    createdAt?: DateTimeFilter<"FollowUp"> | Date | string
    eventId?: StringFilter<"FollowUp"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type FollowUpOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    _count?: FollowUpCountOrderByAggregateInput
    _max?: FollowUpMaxOrderByAggregateInput
    _min?: FollowUpMinOrderByAggregateInput
  }

  export type FollowUpScalarWhereWithAggregatesInput = {
    AND?: FollowUpScalarWhereWithAggregatesInput | FollowUpScalarWhereWithAggregatesInput[]
    OR?: FollowUpScalarWhereWithAggregatesInput[]
    NOT?: FollowUpScalarWhereWithAggregatesInput | FollowUpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FollowUp"> | string
    type?: EnumFollowUpTypeWithAggregatesFilter<"FollowUp"> | $Enums.FollowUpType
    content?: StringWithAggregatesFilter<"FollowUp"> | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"FollowUp"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FollowUp"> | Date | string
    eventId?: StringWithAggregatesFilter<"FollowUp"> | string
  }

  export type MessageLogWhereInput = {
    AND?: MessageLogWhereInput | MessageLogWhereInput[]
    OR?: MessageLogWhereInput[]
    NOT?: MessageLogWhereInput | MessageLogWhereInput[]
    id?: StringFilter<"MessageLog"> | string
    type?: EnumMessageTypeFilter<"MessageLog"> | $Enums.MessageType
    channel?: EnumMessageChannelFilter<"MessageLog"> | $Enums.MessageChannel
    status?: EnumMessageStatusFilter<"MessageLog"> | $Enums.MessageStatus
    content?: StringFilter<"MessageLog"> | string
    sentAt?: DateTimeNullableFilter<"MessageLog"> | Date | string | null
    error?: StringNullableFilter<"MessageLog"> | string | null
    createdAt?: DateTimeFilter<"MessageLog"> | Date | string
    participantId?: StringFilter<"MessageLog"> | string
    eventId?: StringFilter<"MessageLog"> | string
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type MessageLogOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    content?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    participantId?: SortOrder
    eventId?: SortOrder
    participant?: ParticipantOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type MessageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageLogWhereInput | MessageLogWhereInput[]
    OR?: MessageLogWhereInput[]
    NOT?: MessageLogWhereInput | MessageLogWhereInput[]
    type?: EnumMessageTypeFilter<"MessageLog"> | $Enums.MessageType
    channel?: EnumMessageChannelFilter<"MessageLog"> | $Enums.MessageChannel
    status?: EnumMessageStatusFilter<"MessageLog"> | $Enums.MessageStatus
    content?: StringFilter<"MessageLog"> | string
    sentAt?: DateTimeNullableFilter<"MessageLog"> | Date | string | null
    error?: StringNullableFilter<"MessageLog"> | string | null
    createdAt?: DateTimeFilter<"MessageLog"> | Date | string
    participantId?: StringFilter<"MessageLog"> | string
    eventId?: StringFilter<"MessageLog"> | string
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type MessageLogOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    content?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    participantId?: SortOrder
    eventId?: SortOrder
    _count?: MessageLogCountOrderByAggregateInput
    _max?: MessageLogMaxOrderByAggregateInput
    _min?: MessageLogMinOrderByAggregateInput
  }

  export type MessageLogScalarWhereWithAggregatesInput = {
    AND?: MessageLogScalarWhereWithAggregatesInput | MessageLogScalarWhereWithAggregatesInput[]
    OR?: MessageLogScalarWhereWithAggregatesInput[]
    NOT?: MessageLogScalarWhereWithAggregatesInput | MessageLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageLog"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"MessageLog"> | $Enums.MessageType
    channel?: EnumMessageChannelWithAggregatesFilter<"MessageLog"> | $Enums.MessageChannel
    status?: EnumMessageStatusWithAggregatesFilter<"MessageLog"> | $Enums.MessageStatus
    content?: StringWithAggregatesFilter<"MessageLog"> | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"MessageLog"> | Date | string | null
    error?: StringNullableWithAggregatesFilter<"MessageLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MessageLog"> | Date | string
    participantId?: StringWithAggregatesFilter<"MessageLog"> | string
    eventId?: StringWithAggregatesFilter<"MessageLog"> | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    organizationId: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    organizationId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutEventsInput
    formFields?: EventFormFieldCreateNestedManyWithoutEventInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    followUps?: FollowUpCreateNestedManyWithoutEventInput
    messageLogs?: MessageLogCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    formFields?: EventFormFieldUncheckedCreateNestedManyWithoutEventInput
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    followUps?: FollowUpUncheckedCreateNestedManyWithoutEventInput
    messageLogs?: MessageLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput
    formFields?: EventFormFieldUpdateManyWithoutEventNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    followUps?: FollowUpUpdateManyWithoutEventNestedInput
    messageLogs?: MessageLogUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    formFields?: EventFormFieldUncheckedUpdateManyWithoutEventNestedInput
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    followUps?: FollowUpUncheckedUpdateManyWithoutEventNestedInput
    messageLogs?: MessageLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type EventFormFieldCreateInput = {
    id?: string
    label: string
    type: $Enums.FieldType
    required?: boolean
    options?: string | null
    order: number
    isDefault?: boolean
    event: EventCreateNestedOneWithoutFormFieldsInput
    responses?: ParticipantResponseCreateNestedManyWithoutFieldInput
  }

  export type EventFormFieldUncheckedCreateInput = {
    id?: string
    label: string
    type: $Enums.FieldType
    required?: boolean
    options?: string | null
    order: number
    isDefault?: boolean
    eventId: string
    responses?: ParticipantResponseUncheckedCreateNestedManyWithoutFieldInput
  }

  export type EventFormFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutFormFieldsNestedInput
    responses?: ParticipantResponseUpdateManyWithoutFieldNestedInput
  }

  export type EventFormFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
    responses?: ParticipantResponseUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type EventFormFieldCreateManyInput = {
    id?: string
    label: string
    type: $Enums.FieldType
    required?: boolean
    options?: string | null
    order: number
    isDefault?: boolean
    eventId: string
  }

  export type EventFormFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventFormFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    events?: EventParticipantCreateNestedManyWithoutParticipantInput
    messageLogs?: MessageLogCreateNestedManyWithoutParticipantInput
    votes?: VoteCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    events?: EventParticipantUncheckedCreateNestedManyWithoutParticipantInput
    messageLogs?: MessageLogUncheckedCreateNestedManyWithoutParticipantInput
    votes?: VoteUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventParticipantUpdateManyWithoutParticipantNestedInput
    messageLogs?: MessageLogUpdateManyWithoutParticipantNestedInput
    votes?: VoteUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    messageLogs?: MessageLogUncheckedUpdateManyWithoutParticipantNestedInput
    votes?: VoteUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantCreateManyInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
  }

  export type ParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantCreateInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutParticipantsInput
    participant: ParticipantCreateNestedOneWithoutEventsInput
    responses?: ParticipantResponseCreateNestedManyWithoutEventParticipantInput
    questions?: QuestionCreateNestedManyWithoutEventParticipantInput
  }

  export type EventParticipantUncheckedCreateInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    eventId: string
    participantId: string
    responses?: ParticipantResponseUncheckedCreateNestedManyWithoutEventParticipantInput
    questions?: QuestionUncheckedCreateNestedManyWithoutEventParticipantInput
  }

  export type EventParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutEventsNestedInput
    responses?: ParticipantResponseUpdateManyWithoutEventParticipantNestedInput
    questions?: QuestionUpdateManyWithoutEventParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    responses?: ParticipantResponseUncheckedUpdateManyWithoutEventParticipantNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutEventParticipantNestedInput
  }

  export type EventParticipantCreateManyInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    eventId: string
    participantId: string
  }

  export type EventParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantResponseCreateInput = {
    id?: string
    value: string
    eventParticipant: EventParticipantCreateNestedOneWithoutResponsesInput
    field: EventFormFieldCreateNestedOneWithoutResponsesInput
  }

  export type ParticipantResponseUncheckedCreateInput = {
    id?: string
    value: string
    eventParticipantId: string
    fieldId: string
  }

  export type ParticipantResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    eventParticipant?: EventParticipantUpdateOneRequiredWithoutResponsesNestedInput
    field?: EventFormFieldUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ParticipantResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    eventParticipantId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantResponseCreateManyInput = {
    id?: string
    value: string
    eventParticipantId: string
    fieldId: string
  }

  export type ParticipantResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    eventParticipantId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    content: string
    aiApproved?: boolean | null
    aiScore?: number | null
    aiReason?: string | null
    moderatorApproved?: boolean | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    eventParticipant: EventParticipantCreateNestedOneWithoutQuestionsInput
    votes?: VoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    content: string
    aiApproved?: boolean | null
    aiScore?: number | null
    aiReason?: string | null
    moderatorApproved?: boolean | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    eventParticipantId: string
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventParticipant?: EventParticipantUpdateOneRequiredWithoutQuestionsNestedInput
    votes?: VoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventParticipantId?: StringFieldUpdateOperationsInput | string
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    content: string
    aiApproved?: boolean | null
    aiScore?: number | null
    aiReason?: string | null
    moderatorApproved?: boolean | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    eventParticipantId: string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventParticipantId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateInput = {
    id?: string
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutVotesInput
    participant: ParticipantCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    questionId: string
    participantId: string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutVotesNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManyInput = {
    id?: string
    createdAt?: Date | string
    questionId: string
    participantId: string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowUpCreateInput = {
    id?: string
    type: $Enums.FollowUpType
    content: string
    sentAt?: Date | string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutFollowUpsInput
  }

  export type FollowUpUncheckedCreateInput = {
    id?: string
    type: $Enums.FollowUpType
    content: string
    sentAt?: Date | string | null
    createdAt?: Date | string
    eventId: string
  }

  export type FollowUpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFollowUpTypeFieldUpdateOperationsInput | $Enums.FollowUpType
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutFollowUpsNestedInput
  }

  export type FollowUpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFollowUpTypeFieldUpdateOperationsInput | $Enums.FollowUpType
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowUpCreateManyInput = {
    id?: string
    type: $Enums.FollowUpType
    content: string
    sentAt?: Date | string | null
    createdAt?: Date | string
    eventId: string
  }

  export type FollowUpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFollowUpTypeFieldUpdateOperationsInput | $Enums.FollowUpType
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFollowUpTypeFieldUpdateOperationsInput | $Enums.FollowUpType
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageLogCreateInput = {
    id?: string
    type: $Enums.MessageType
    channel: $Enums.MessageChannel
    status: $Enums.MessageStatus
    content: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutMessageLogsInput
    event: EventCreateNestedOneWithoutMessageLogsInput
  }

  export type MessageLogUncheckedCreateInput = {
    id?: string
    type: $Enums.MessageType
    channel: $Enums.MessageChannel
    status: $Enums.MessageStatus
    content: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
    participantId: string
    eventId: string
  }

  export type MessageLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    channel?: EnumMessageChannelFieldUpdateOperationsInput | $Enums.MessageChannel
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutMessageLogsNestedInput
    event?: EventUpdateOneRequiredWithoutMessageLogsNestedInput
  }

  export type MessageLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    channel?: EnumMessageChannelFieldUpdateOperationsInput | $Enums.MessageChannel
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageLogCreateManyInput = {
    id?: string
    type: $Enums.MessageType
    channel: $Enums.MessageChannel
    status: $Enums.MessageStatus
    content: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
    participantId: string
    eventId: string
  }

  export type MessageLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    channel?: EnumMessageChannelFieldUpdateOperationsInput | $Enums.MessageChannel
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    channel?: EnumMessageChannelFieldUpdateOperationsInput | $Enums.MessageChannel
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organizationId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organizationId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organizationId?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPublicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationStatus | EnumPublicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationStatusFilter<$PrismaModel> | $Enums.PublicationStatus
  }

  export type EventFormFieldListRelationFilter = {
    every?: EventFormFieldWhereInput
    some?: EventFormFieldWhereInput
    none?: EventFormFieldWhereInput
  }

  export type EventParticipantListRelationFilter = {
    every?: EventParticipantWhereInput
    some?: EventParticipantWhereInput
    none?: EventParticipantWhereInput
  }

  export type FollowUpListRelationFilter = {
    every?: FollowUpWhereInput
    some?: FollowUpWhereInput
    none?: FollowUpWhereInput
  }

  export type MessageLogListRelationFilter = {
    every?: MessageLogWhereInput
    some?: MessageLogWhereInput
    none?: MessageLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventFormFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowUpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    topic?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    slug?: SortOrder
    publicationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    topic?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    slug?: SortOrder
    publicationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    topic?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    slug?: SortOrder
    publicationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPublicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationStatus | EnumPublicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublicationStatusFilter<$PrismaModel>
    _max?: NestedEnumPublicationStatusFilter<$PrismaModel>
  }

  export type EnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type ParticipantResponseListRelationFilter = {
    every?: ParticipantResponseWhereInput
    some?: ParticipantResponseWhereInput
    none?: ParticipantResponseWhereInput
  }

  export type ParticipantResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventFormFieldCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    options?: SortOrder
    order?: SortOrder
    isDefault?: SortOrder
    eventId?: SortOrder
  }

  export type EventFormFieldAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EventFormFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    options?: SortOrder
    order?: SortOrder
    isDefault?: SortOrder
    eventId?: SortOrder
  }

  export type EventFormFieldMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    options?: SortOrder
    order?: SortOrder
    isDefault?: SortOrder
    eventId?: SortOrder
  }

  export type EventFormFieldSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRegistrationOriginFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationOrigin | EnumRegistrationOriginFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationOrigin[] | ListEnumRegistrationOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationOrigin[] | ListEnumRegistrationOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationOriginFilter<$PrismaModel> | $Enums.RegistrationOrigin
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ParticipantScalarRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventParticipantEventIdParticipantIdCompoundUniqueInput = {
    eventId: string
    participantId: string
  }

  export type EventParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    checkedIn?: SortOrder
    checkedInAt?: SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    participantId?: SortOrder
  }

  export type EventParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    checkedIn?: SortOrder
    checkedInAt?: SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    participantId?: SortOrder
  }

  export type EventParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    checkedIn?: SortOrder
    checkedInAt?: SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    participantId?: SortOrder
  }

  export type EnumRegistrationOriginWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationOrigin | EnumRegistrationOriginFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationOrigin[] | ListEnumRegistrationOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationOrigin[] | ListEnumRegistrationOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationOriginWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationOrigin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationOriginFilter<$PrismaModel>
    _max?: NestedEnumRegistrationOriginFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventParticipantScalarRelationFilter = {
    is?: EventParticipantWhereInput
    isNot?: EventParticipantWhereInput
  }

  export type EventFormFieldScalarRelationFilter = {
    is?: EventFormFieldWhereInput
    isNot?: EventFormFieldWhereInput
  }

  export type ParticipantResponseCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    eventParticipantId?: SortOrder
    fieldId?: SortOrder
  }

  export type ParticipantResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    eventParticipantId?: SortOrder
    fieldId?: SortOrder
  }

  export type ParticipantResponseMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    eventParticipantId?: SortOrder
    fieldId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumQuestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[] | ListEnumQuestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionStatus[] | ListEnumQuestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionStatusFilter<$PrismaModel> | $Enums.QuestionStatus
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    aiApproved?: SortOrder
    aiScore?: SortOrder
    aiReason?: SortOrder
    moderatorApproved?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    eventParticipantId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    aiScore?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    aiApproved?: SortOrder
    aiScore?: SortOrder
    aiReason?: SortOrder
    moderatorApproved?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    eventParticipantId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    aiApproved?: SortOrder
    aiScore?: SortOrder
    aiReason?: SortOrder
    moderatorApproved?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    eventParticipantId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    aiScore?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumQuestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[] | ListEnumQuestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionStatus[] | ListEnumQuestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionStatusFilter<$PrismaModel>
    _max?: NestedEnumQuestionStatusFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type VoteQuestionIdParticipantIdCompoundUniqueInput = {
    questionId: string
    participantId: string
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    participantId?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    participantId?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    participantId?: SortOrder
  }

  export type EnumFollowUpTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpType | EnumFollowUpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FollowUpType[] | ListEnumFollowUpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowUpType[] | ListEnumFollowUpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowUpTypeFilter<$PrismaModel> | $Enums.FollowUpType
  }

  export type FollowUpCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
  }

  export type FollowUpMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
  }

  export type FollowUpMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
  }

  export type EnumFollowUpTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpType | EnumFollowUpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FollowUpType[] | ListEnumFollowUpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowUpType[] | ListEnumFollowUpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowUpTypeWithAggregatesFilter<$PrismaModel> | $Enums.FollowUpType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFollowUpTypeFilter<$PrismaModel>
    _max?: NestedEnumFollowUpTypeFilter<$PrismaModel>
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type EnumMessageChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageChannel | EnumMessageChannelFieldRefInput<$PrismaModel>
    in?: $Enums.MessageChannel[] | ListEnumMessageChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageChannel[] | ListEnumMessageChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageChannelFilter<$PrismaModel> | $Enums.MessageChannel
  }

  export type EnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type MessageLogCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    participantId?: SortOrder
    eventId?: SortOrder
  }

  export type MessageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    participantId?: SortOrder
    eventId?: SortOrder
  }

  export type MessageLogMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    participantId?: SortOrder
    eventId?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type EnumMessageChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageChannel | EnumMessageChannelFieldRefInput<$PrismaModel>
    in?: $Enums.MessageChannel[] | ListEnumMessageChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageChannel[] | ListEnumMessageChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageChannelWithAggregatesFilter<$PrismaModel> | $Enums.MessageChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageChannelFilter<$PrismaModel>
    _max?: NestedEnumMessageChannelFilter<$PrismaModel>
  }

  export type EnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type EventCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EventCreateWithoutOrganizationInput, EventUncheckedCreateWithoutOrganizationInput> | EventCreateWithoutOrganizationInput[] | EventUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizationInput | EventCreateOrConnectWithoutOrganizationInput[]
    createMany?: EventCreateManyOrganizationInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EventCreateWithoutOrganizationInput, EventUncheckedCreateWithoutOrganizationInput> | EventCreateWithoutOrganizationInput[] | EventUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizationInput | EventCreateOrConnectWithoutOrganizationInput[]
    createMany?: EventCreateManyOrganizationInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EventCreateWithoutOrganizationInput, EventUncheckedCreateWithoutOrganizationInput> | EventCreateWithoutOrganizationInput[] | EventUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizationInput | EventCreateOrConnectWithoutOrganizationInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizationInput | EventUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EventCreateManyOrganizationInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizationInput | EventUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizationInput | EventUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EventCreateWithoutOrganizationInput, EventUncheckedCreateWithoutOrganizationInput> | EventCreateWithoutOrganizationInput[] | EventUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizationInput | EventCreateOrConnectWithoutOrganizationInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizationInput | EventUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EventCreateManyOrganizationInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizationInput | EventUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizationInput | EventUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationCreateNestedOneWithoutEventsInput = {
    create?: XOR<OrganizationCreateWithoutEventsInput, OrganizationUncheckedCreateWithoutEventsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEventsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EventFormFieldCreateNestedManyWithoutEventInput = {
    create?: XOR<EventFormFieldCreateWithoutEventInput, EventFormFieldUncheckedCreateWithoutEventInput> | EventFormFieldCreateWithoutEventInput[] | EventFormFieldUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventFormFieldCreateOrConnectWithoutEventInput | EventFormFieldCreateOrConnectWithoutEventInput[]
    createMany?: EventFormFieldCreateManyEventInputEnvelope
    connect?: EventFormFieldWhereUniqueInput | EventFormFieldWhereUniqueInput[]
  }

  export type EventParticipantCreateNestedManyWithoutEventInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type FollowUpCreateNestedManyWithoutEventInput = {
    create?: XOR<FollowUpCreateWithoutEventInput, FollowUpUncheckedCreateWithoutEventInput> | FollowUpCreateWithoutEventInput[] | FollowUpUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutEventInput | FollowUpCreateOrConnectWithoutEventInput[]
    createMany?: FollowUpCreateManyEventInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type MessageLogCreateNestedManyWithoutEventInput = {
    create?: XOR<MessageLogCreateWithoutEventInput, MessageLogUncheckedCreateWithoutEventInput> | MessageLogCreateWithoutEventInput[] | MessageLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutEventInput | MessageLogCreateOrConnectWithoutEventInput[]
    createMany?: MessageLogCreateManyEventInputEnvelope
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
  }

  export type EventFormFieldUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventFormFieldCreateWithoutEventInput, EventFormFieldUncheckedCreateWithoutEventInput> | EventFormFieldCreateWithoutEventInput[] | EventFormFieldUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventFormFieldCreateOrConnectWithoutEventInput | EventFormFieldCreateOrConnectWithoutEventInput[]
    createMany?: EventFormFieldCreateManyEventInputEnvelope
    connect?: EventFormFieldWhereUniqueInput | EventFormFieldWhereUniqueInput[]
  }

  export type EventParticipantUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type FollowUpUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<FollowUpCreateWithoutEventInput, FollowUpUncheckedCreateWithoutEventInput> | FollowUpCreateWithoutEventInput[] | FollowUpUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutEventInput | FollowUpCreateOrConnectWithoutEventInput[]
    createMany?: FollowUpCreateManyEventInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type MessageLogUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<MessageLogCreateWithoutEventInput, MessageLogUncheckedCreateWithoutEventInput> | MessageLogCreateWithoutEventInput[] | MessageLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutEventInput | MessageLogCreateOrConnectWithoutEventInput[]
    createMany?: MessageLogCreateManyEventInputEnvelope
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPublicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.PublicationStatus
  }

  export type OrganizationUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<OrganizationCreateWithoutEventsInput, OrganizationUncheckedCreateWithoutEventsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEventsInput
    upsert?: OrganizationUpsertWithoutEventsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutEventsInput, OrganizationUpdateWithoutEventsInput>, OrganizationUncheckedUpdateWithoutEventsInput>
  }

  export type EventFormFieldUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventFormFieldCreateWithoutEventInput, EventFormFieldUncheckedCreateWithoutEventInput> | EventFormFieldCreateWithoutEventInput[] | EventFormFieldUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventFormFieldCreateOrConnectWithoutEventInput | EventFormFieldCreateOrConnectWithoutEventInput[]
    upsert?: EventFormFieldUpsertWithWhereUniqueWithoutEventInput | EventFormFieldUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventFormFieldCreateManyEventInputEnvelope
    set?: EventFormFieldWhereUniqueInput | EventFormFieldWhereUniqueInput[]
    disconnect?: EventFormFieldWhereUniqueInput | EventFormFieldWhereUniqueInput[]
    delete?: EventFormFieldWhereUniqueInput | EventFormFieldWhereUniqueInput[]
    connect?: EventFormFieldWhereUniqueInput | EventFormFieldWhereUniqueInput[]
    update?: EventFormFieldUpdateWithWhereUniqueWithoutEventInput | EventFormFieldUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventFormFieldUpdateManyWithWhereWithoutEventInput | EventFormFieldUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventFormFieldScalarWhereInput | EventFormFieldScalarWhereInput[]
  }

  export type EventParticipantUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutEventInput | EventParticipantUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutEventInput | EventParticipantUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutEventInput | EventParticipantUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type FollowUpUpdateManyWithoutEventNestedInput = {
    create?: XOR<FollowUpCreateWithoutEventInput, FollowUpUncheckedCreateWithoutEventInput> | FollowUpCreateWithoutEventInput[] | FollowUpUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutEventInput | FollowUpCreateOrConnectWithoutEventInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutEventInput | FollowUpUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: FollowUpCreateManyEventInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutEventInput | FollowUpUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutEventInput | FollowUpUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type MessageLogUpdateManyWithoutEventNestedInput = {
    create?: XOR<MessageLogCreateWithoutEventInput, MessageLogUncheckedCreateWithoutEventInput> | MessageLogCreateWithoutEventInput[] | MessageLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutEventInput | MessageLogCreateOrConnectWithoutEventInput[]
    upsert?: MessageLogUpsertWithWhereUniqueWithoutEventInput | MessageLogUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MessageLogCreateManyEventInputEnvelope
    set?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    disconnect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    delete?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    update?: MessageLogUpdateWithWhereUniqueWithoutEventInput | MessageLogUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MessageLogUpdateManyWithWhereWithoutEventInput | MessageLogUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
  }

  export type EventFormFieldUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventFormFieldCreateWithoutEventInput, EventFormFieldUncheckedCreateWithoutEventInput> | EventFormFieldCreateWithoutEventInput[] | EventFormFieldUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventFormFieldCreateOrConnectWithoutEventInput | EventFormFieldCreateOrConnectWithoutEventInput[]
    upsert?: EventFormFieldUpsertWithWhereUniqueWithoutEventInput | EventFormFieldUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventFormFieldCreateManyEventInputEnvelope
    set?: EventFormFieldWhereUniqueInput | EventFormFieldWhereUniqueInput[]
    disconnect?: EventFormFieldWhereUniqueInput | EventFormFieldWhereUniqueInput[]
    delete?: EventFormFieldWhereUniqueInput | EventFormFieldWhereUniqueInput[]
    connect?: EventFormFieldWhereUniqueInput | EventFormFieldWhereUniqueInput[]
    update?: EventFormFieldUpdateWithWhereUniqueWithoutEventInput | EventFormFieldUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventFormFieldUpdateManyWithWhereWithoutEventInput | EventFormFieldUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventFormFieldScalarWhereInput | EventFormFieldScalarWhereInput[]
  }

  export type EventParticipantUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutEventInput | EventParticipantUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutEventInput | EventParticipantUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutEventInput | EventParticipantUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type FollowUpUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<FollowUpCreateWithoutEventInput, FollowUpUncheckedCreateWithoutEventInput> | FollowUpCreateWithoutEventInput[] | FollowUpUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutEventInput | FollowUpCreateOrConnectWithoutEventInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutEventInput | FollowUpUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: FollowUpCreateManyEventInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutEventInput | FollowUpUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutEventInput | FollowUpUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type MessageLogUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<MessageLogCreateWithoutEventInput, MessageLogUncheckedCreateWithoutEventInput> | MessageLogCreateWithoutEventInput[] | MessageLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutEventInput | MessageLogCreateOrConnectWithoutEventInput[]
    upsert?: MessageLogUpsertWithWhereUniqueWithoutEventInput | MessageLogUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MessageLogCreateManyEventInputEnvelope
    set?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    disconnect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    delete?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    update?: MessageLogUpdateWithWhereUniqueWithoutEventInput | MessageLogUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MessageLogUpdateManyWithWhereWithoutEventInput | MessageLogUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutFormFieldsInput = {
    create?: XOR<EventCreateWithoutFormFieldsInput, EventUncheckedCreateWithoutFormFieldsInput>
    connectOrCreate?: EventCreateOrConnectWithoutFormFieldsInput
    connect?: EventWhereUniqueInput
  }

  export type ParticipantResponseCreateNestedManyWithoutFieldInput = {
    create?: XOR<ParticipantResponseCreateWithoutFieldInput, ParticipantResponseUncheckedCreateWithoutFieldInput> | ParticipantResponseCreateWithoutFieldInput[] | ParticipantResponseUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ParticipantResponseCreateOrConnectWithoutFieldInput | ParticipantResponseCreateOrConnectWithoutFieldInput[]
    createMany?: ParticipantResponseCreateManyFieldInputEnvelope
    connect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
  }

  export type ParticipantResponseUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<ParticipantResponseCreateWithoutFieldInput, ParticipantResponseUncheckedCreateWithoutFieldInput> | ParticipantResponseCreateWithoutFieldInput[] | ParticipantResponseUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ParticipantResponseCreateOrConnectWithoutFieldInput | ParticipantResponseCreateOrConnectWithoutFieldInput[]
    createMany?: ParticipantResponseCreateManyFieldInputEnvelope
    connect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
  }

  export type EnumFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.FieldType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutFormFieldsNestedInput = {
    create?: XOR<EventCreateWithoutFormFieldsInput, EventUncheckedCreateWithoutFormFieldsInput>
    connectOrCreate?: EventCreateOrConnectWithoutFormFieldsInput
    upsert?: EventUpsertWithoutFormFieldsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFormFieldsInput, EventUpdateWithoutFormFieldsInput>, EventUncheckedUpdateWithoutFormFieldsInput>
  }

  export type ParticipantResponseUpdateManyWithoutFieldNestedInput = {
    create?: XOR<ParticipantResponseCreateWithoutFieldInput, ParticipantResponseUncheckedCreateWithoutFieldInput> | ParticipantResponseCreateWithoutFieldInput[] | ParticipantResponseUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ParticipantResponseCreateOrConnectWithoutFieldInput | ParticipantResponseCreateOrConnectWithoutFieldInput[]
    upsert?: ParticipantResponseUpsertWithWhereUniqueWithoutFieldInput | ParticipantResponseUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: ParticipantResponseCreateManyFieldInputEnvelope
    set?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    disconnect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    delete?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    connect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    update?: ParticipantResponseUpdateWithWhereUniqueWithoutFieldInput | ParticipantResponseUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: ParticipantResponseUpdateManyWithWhereWithoutFieldInput | ParticipantResponseUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: ParticipantResponseScalarWhereInput | ParticipantResponseScalarWhereInput[]
  }

  export type ParticipantResponseUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<ParticipantResponseCreateWithoutFieldInput, ParticipantResponseUncheckedCreateWithoutFieldInput> | ParticipantResponseCreateWithoutFieldInput[] | ParticipantResponseUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ParticipantResponseCreateOrConnectWithoutFieldInput | ParticipantResponseCreateOrConnectWithoutFieldInput[]
    upsert?: ParticipantResponseUpsertWithWhereUniqueWithoutFieldInput | ParticipantResponseUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: ParticipantResponseCreateManyFieldInputEnvelope
    set?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    disconnect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    delete?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    connect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    update?: ParticipantResponseUpdateWithWhereUniqueWithoutFieldInput | ParticipantResponseUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: ParticipantResponseUpdateManyWithWhereWithoutFieldInput | ParticipantResponseUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: ParticipantResponseScalarWhereInput | ParticipantResponseScalarWhereInput[]
  }

  export type EventParticipantCreateNestedManyWithoutParticipantInput = {
    create?: XOR<EventParticipantCreateWithoutParticipantInput, EventParticipantUncheckedCreateWithoutParticipantInput> | EventParticipantCreateWithoutParticipantInput[] | EventParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutParticipantInput | EventParticipantCreateOrConnectWithoutParticipantInput[]
    createMany?: EventParticipantCreateManyParticipantInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type MessageLogCreateNestedManyWithoutParticipantInput = {
    create?: XOR<MessageLogCreateWithoutParticipantInput, MessageLogUncheckedCreateWithoutParticipantInput> | MessageLogCreateWithoutParticipantInput[] | MessageLogUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutParticipantInput | MessageLogCreateOrConnectWithoutParticipantInput[]
    createMany?: MessageLogCreateManyParticipantInputEnvelope
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutParticipantInput = {
    create?: XOR<VoteCreateWithoutParticipantInput, VoteUncheckedCreateWithoutParticipantInput> | VoteCreateWithoutParticipantInput[] | VoteUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutParticipantInput | VoteCreateOrConnectWithoutParticipantInput[]
    createMany?: VoteCreateManyParticipantInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type EventParticipantUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<EventParticipantCreateWithoutParticipantInput, EventParticipantUncheckedCreateWithoutParticipantInput> | EventParticipantCreateWithoutParticipantInput[] | EventParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutParticipantInput | EventParticipantCreateOrConnectWithoutParticipantInput[]
    createMany?: EventParticipantCreateManyParticipantInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type MessageLogUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<MessageLogCreateWithoutParticipantInput, MessageLogUncheckedCreateWithoutParticipantInput> | MessageLogCreateWithoutParticipantInput[] | MessageLogUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutParticipantInput | MessageLogCreateOrConnectWithoutParticipantInput[]
    createMany?: MessageLogCreateManyParticipantInputEnvelope
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<VoteCreateWithoutParticipantInput, VoteUncheckedCreateWithoutParticipantInput> | VoteCreateWithoutParticipantInput[] | VoteUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutParticipantInput | VoteCreateOrConnectWithoutParticipantInput[]
    createMany?: VoteCreateManyParticipantInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type EventParticipantUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<EventParticipantCreateWithoutParticipantInput, EventParticipantUncheckedCreateWithoutParticipantInput> | EventParticipantCreateWithoutParticipantInput[] | EventParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutParticipantInput | EventParticipantCreateOrConnectWithoutParticipantInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutParticipantInput | EventParticipantUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: EventParticipantCreateManyParticipantInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutParticipantInput | EventParticipantUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutParticipantInput | EventParticipantUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type MessageLogUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<MessageLogCreateWithoutParticipantInput, MessageLogUncheckedCreateWithoutParticipantInput> | MessageLogCreateWithoutParticipantInput[] | MessageLogUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutParticipantInput | MessageLogCreateOrConnectWithoutParticipantInput[]
    upsert?: MessageLogUpsertWithWhereUniqueWithoutParticipantInput | MessageLogUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: MessageLogCreateManyParticipantInputEnvelope
    set?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    disconnect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    delete?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    update?: MessageLogUpdateWithWhereUniqueWithoutParticipantInput | MessageLogUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: MessageLogUpdateManyWithWhereWithoutParticipantInput | MessageLogUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<VoteCreateWithoutParticipantInput, VoteUncheckedCreateWithoutParticipantInput> | VoteCreateWithoutParticipantInput[] | VoteUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutParticipantInput | VoteCreateOrConnectWithoutParticipantInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutParticipantInput | VoteUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: VoteCreateManyParticipantInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutParticipantInput | VoteUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutParticipantInput | VoteUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type EventParticipantUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<EventParticipantCreateWithoutParticipantInput, EventParticipantUncheckedCreateWithoutParticipantInput> | EventParticipantCreateWithoutParticipantInput[] | EventParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutParticipantInput | EventParticipantCreateOrConnectWithoutParticipantInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutParticipantInput | EventParticipantUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: EventParticipantCreateManyParticipantInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutParticipantInput | EventParticipantUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutParticipantInput | EventParticipantUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type MessageLogUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<MessageLogCreateWithoutParticipantInput, MessageLogUncheckedCreateWithoutParticipantInput> | MessageLogCreateWithoutParticipantInput[] | MessageLogUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutParticipantInput | MessageLogCreateOrConnectWithoutParticipantInput[]
    upsert?: MessageLogUpsertWithWhereUniqueWithoutParticipantInput | MessageLogUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: MessageLogCreateManyParticipantInputEnvelope
    set?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    disconnect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    delete?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    update?: MessageLogUpdateWithWhereUniqueWithoutParticipantInput | MessageLogUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: MessageLogUpdateManyWithWhereWithoutParticipantInput | MessageLogUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<VoteCreateWithoutParticipantInput, VoteUncheckedCreateWithoutParticipantInput> | VoteCreateWithoutParticipantInput[] | VoteUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutParticipantInput | VoteCreateOrConnectWithoutParticipantInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutParticipantInput | VoteUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: VoteCreateManyParticipantInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutParticipantInput | VoteUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutParticipantInput | VoteUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput
    connect?: EventWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutEventsInput = {
    create?: XOR<ParticipantCreateWithoutEventsInput, ParticipantUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutEventsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantResponseCreateNestedManyWithoutEventParticipantInput = {
    create?: XOR<ParticipantResponseCreateWithoutEventParticipantInput, ParticipantResponseUncheckedCreateWithoutEventParticipantInput> | ParticipantResponseCreateWithoutEventParticipantInput[] | ParticipantResponseUncheckedCreateWithoutEventParticipantInput[]
    connectOrCreate?: ParticipantResponseCreateOrConnectWithoutEventParticipantInput | ParticipantResponseCreateOrConnectWithoutEventParticipantInput[]
    createMany?: ParticipantResponseCreateManyEventParticipantInputEnvelope
    connect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutEventParticipantInput = {
    create?: XOR<QuestionCreateWithoutEventParticipantInput, QuestionUncheckedCreateWithoutEventParticipantInput> | QuestionCreateWithoutEventParticipantInput[] | QuestionUncheckedCreateWithoutEventParticipantInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEventParticipantInput | QuestionCreateOrConnectWithoutEventParticipantInput[]
    createMany?: QuestionCreateManyEventParticipantInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ParticipantResponseUncheckedCreateNestedManyWithoutEventParticipantInput = {
    create?: XOR<ParticipantResponseCreateWithoutEventParticipantInput, ParticipantResponseUncheckedCreateWithoutEventParticipantInput> | ParticipantResponseCreateWithoutEventParticipantInput[] | ParticipantResponseUncheckedCreateWithoutEventParticipantInput[]
    connectOrCreate?: ParticipantResponseCreateOrConnectWithoutEventParticipantInput | ParticipantResponseCreateOrConnectWithoutEventParticipantInput[]
    createMany?: ParticipantResponseCreateManyEventParticipantInputEnvelope
    connect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutEventParticipantInput = {
    create?: XOR<QuestionCreateWithoutEventParticipantInput, QuestionUncheckedCreateWithoutEventParticipantInput> | QuestionCreateWithoutEventParticipantInput[] | QuestionUncheckedCreateWithoutEventParticipantInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEventParticipantInput | QuestionCreateOrConnectWithoutEventParticipantInput[]
    createMany?: QuestionCreateManyEventParticipantInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type EnumRegistrationOriginFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationOrigin
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EventUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput
    upsert?: EventUpsertWithoutParticipantsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutParticipantsInput, EventUpdateWithoutParticipantsInput>, EventUncheckedUpdateWithoutParticipantsInput>
  }

  export type ParticipantUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ParticipantCreateWithoutEventsInput, ParticipantUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutEventsInput
    upsert?: ParticipantUpsertWithoutEventsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutEventsInput, ParticipantUpdateWithoutEventsInput>, ParticipantUncheckedUpdateWithoutEventsInput>
  }

  export type ParticipantResponseUpdateManyWithoutEventParticipantNestedInput = {
    create?: XOR<ParticipantResponseCreateWithoutEventParticipantInput, ParticipantResponseUncheckedCreateWithoutEventParticipantInput> | ParticipantResponseCreateWithoutEventParticipantInput[] | ParticipantResponseUncheckedCreateWithoutEventParticipantInput[]
    connectOrCreate?: ParticipantResponseCreateOrConnectWithoutEventParticipantInput | ParticipantResponseCreateOrConnectWithoutEventParticipantInput[]
    upsert?: ParticipantResponseUpsertWithWhereUniqueWithoutEventParticipantInput | ParticipantResponseUpsertWithWhereUniqueWithoutEventParticipantInput[]
    createMany?: ParticipantResponseCreateManyEventParticipantInputEnvelope
    set?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    disconnect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    delete?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    connect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    update?: ParticipantResponseUpdateWithWhereUniqueWithoutEventParticipantInput | ParticipantResponseUpdateWithWhereUniqueWithoutEventParticipantInput[]
    updateMany?: ParticipantResponseUpdateManyWithWhereWithoutEventParticipantInput | ParticipantResponseUpdateManyWithWhereWithoutEventParticipantInput[]
    deleteMany?: ParticipantResponseScalarWhereInput | ParticipantResponseScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutEventParticipantNestedInput = {
    create?: XOR<QuestionCreateWithoutEventParticipantInput, QuestionUncheckedCreateWithoutEventParticipantInput> | QuestionCreateWithoutEventParticipantInput[] | QuestionUncheckedCreateWithoutEventParticipantInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEventParticipantInput | QuestionCreateOrConnectWithoutEventParticipantInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutEventParticipantInput | QuestionUpsertWithWhereUniqueWithoutEventParticipantInput[]
    createMany?: QuestionCreateManyEventParticipantInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutEventParticipantInput | QuestionUpdateWithWhereUniqueWithoutEventParticipantInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutEventParticipantInput | QuestionUpdateManyWithWhereWithoutEventParticipantInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ParticipantResponseUncheckedUpdateManyWithoutEventParticipantNestedInput = {
    create?: XOR<ParticipantResponseCreateWithoutEventParticipantInput, ParticipantResponseUncheckedCreateWithoutEventParticipantInput> | ParticipantResponseCreateWithoutEventParticipantInput[] | ParticipantResponseUncheckedCreateWithoutEventParticipantInput[]
    connectOrCreate?: ParticipantResponseCreateOrConnectWithoutEventParticipantInput | ParticipantResponseCreateOrConnectWithoutEventParticipantInput[]
    upsert?: ParticipantResponseUpsertWithWhereUniqueWithoutEventParticipantInput | ParticipantResponseUpsertWithWhereUniqueWithoutEventParticipantInput[]
    createMany?: ParticipantResponseCreateManyEventParticipantInputEnvelope
    set?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    disconnect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    delete?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    connect?: ParticipantResponseWhereUniqueInput | ParticipantResponseWhereUniqueInput[]
    update?: ParticipantResponseUpdateWithWhereUniqueWithoutEventParticipantInput | ParticipantResponseUpdateWithWhereUniqueWithoutEventParticipantInput[]
    updateMany?: ParticipantResponseUpdateManyWithWhereWithoutEventParticipantInput | ParticipantResponseUpdateManyWithWhereWithoutEventParticipantInput[]
    deleteMany?: ParticipantResponseScalarWhereInput | ParticipantResponseScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutEventParticipantNestedInput = {
    create?: XOR<QuestionCreateWithoutEventParticipantInput, QuestionUncheckedCreateWithoutEventParticipantInput> | QuestionCreateWithoutEventParticipantInput[] | QuestionUncheckedCreateWithoutEventParticipantInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEventParticipantInput | QuestionCreateOrConnectWithoutEventParticipantInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutEventParticipantInput | QuestionUpsertWithWhereUniqueWithoutEventParticipantInput[]
    createMany?: QuestionCreateManyEventParticipantInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutEventParticipantInput | QuestionUpdateWithWhereUniqueWithoutEventParticipantInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutEventParticipantInput | QuestionUpdateManyWithWhereWithoutEventParticipantInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type EventParticipantCreateNestedOneWithoutResponsesInput = {
    create?: XOR<EventParticipantCreateWithoutResponsesInput, EventParticipantUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: EventParticipantCreateOrConnectWithoutResponsesInput
    connect?: EventParticipantWhereUniqueInput
  }

  export type EventFormFieldCreateNestedOneWithoutResponsesInput = {
    create?: XOR<EventFormFieldCreateWithoutResponsesInput, EventFormFieldUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: EventFormFieldCreateOrConnectWithoutResponsesInput
    connect?: EventFormFieldWhereUniqueInput
  }

  export type EventParticipantUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<EventParticipantCreateWithoutResponsesInput, EventParticipantUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: EventParticipantCreateOrConnectWithoutResponsesInput
    upsert?: EventParticipantUpsertWithoutResponsesInput
    connect?: EventParticipantWhereUniqueInput
    update?: XOR<XOR<EventParticipantUpdateToOneWithWhereWithoutResponsesInput, EventParticipantUpdateWithoutResponsesInput>, EventParticipantUncheckedUpdateWithoutResponsesInput>
  }

  export type EventFormFieldUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<EventFormFieldCreateWithoutResponsesInput, EventFormFieldUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: EventFormFieldCreateOrConnectWithoutResponsesInput
    upsert?: EventFormFieldUpsertWithoutResponsesInput
    connect?: EventFormFieldWhereUniqueInput
    update?: XOR<XOR<EventFormFieldUpdateToOneWithWhereWithoutResponsesInput, EventFormFieldUpdateWithoutResponsesInput>, EventFormFieldUncheckedUpdateWithoutResponsesInput>
  }

  export type EventParticipantCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<EventParticipantCreateWithoutQuestionsInput, EventParticipantUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: EventParticipantCreateOrConnectWithoutQuestionsInput
    connect?: EventParticipantWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutQuestionInput = {
    create?: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput> | VoteCreateWithoutQuestionInput[] | VoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutQuestionInput | VoteCreateOrConnectWithoutQuestionInput[]
    createMany?: VoteCreateManyQuestionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput> | VoteCreateWithoutQuestionInput[] | VoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutQuestionInput | VoteCreateOrConnectWithoutQuestionInput[]
    createMany?: VoteCreateManyQuestionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumQuestionStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuestionStatus
  }

  export type EventParticipantUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<EventParticipantCreateWithoutQuestionsInput, EventParticipantUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: EventParticipantCreateOrConnectWithoutQuestionsInput
    upsert?: EventParticipantUpsertWithoutQuestionsInput
    connect?: EventParticipantWhereUniqueInput
    update?: XOR<XOR<EventParticipantUpdateToOneWithWhereWithoutQuestionsInput, EventParticipantUpdateWithoutQuestionsInput>, EventParticipantUncheckedUpdateWithoutQuestionsInput>
  }

  export type VoteUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput> | VoteCreateWithoutQuestionInput[] | VoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutQuestionInput | VoteCreateOrConnectWithoutQuestionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutQuestionInput | VoteUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: VoteCreateManyQuestionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutQuestionInput | VoteUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutQuestionInput | VoteUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput> | VoteCreateWithoutQuestionInput[] | VoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutQuestionInput | VoteCreateOrConnectWithoutQuestionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutQuestionInput | VoteUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: VoteCreateManyQuestionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutQuestionInput | VoteUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutQuestionInput | VoteUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutVotesInput = {
    create?: XOR<QuestionCreateWithoutVotesInput, QuestionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutVotesInput
    connect?: QuestionWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutVotesInput = {
    create?: XOR<ParticipantCreateWithoutVotesInput, ParticipantUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutVotesInput
    connect?: ParticipantWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<QuestionCreateWithoutVotesInput, QuestionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutVotesInput
    upsert?: QuestionUpsertWithoutVotesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutVotesInput, QuestionUpdateWithoutVotesInput>, QuestionUncheckedUpdateWithoutVotesInput>
  }

  export type ParticipantUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<ParticipantCreateWithoutVotesInput, ParticipantUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutVotesInput
    upsert?: ParticipantUpsertWithoutVotesInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutVotesInput, ParticipantUpdateWithoutVotesInput>, ParticipantUncheckedUpdateWithoutVotesInput>
  }

  export type EventCreateNestedOneWithoutFollowUpsInput = {
    create?: XOR<EventCreateWithoutFollowUpsInput, EventUncheckedCreateWithoutFollowUpsInput>
    connectOrCreate?: EventCreateOrConnectWithoutFollowUpsInput
    connect?: EventWhereUniqueInput
  }

  export type EnumFollowUpTypeFieldUpdateOperationsInput = {
    set?: $Enums.FollowUpType
  }

  export type EventUpdateOneRequiredWithoutFollowUpsNestedInput = {
    create?: XOR<EventCreateWithoutFollowUpsInput, EventUncheckedCreateWithoutFollowUpsInput>
    connectOrCreate?: EventCreateOrConnectWithoutFollowUpsInput
    upsert?: EventUpsertWithoutFollowUpsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFollowUpsInput, EventUpdateWithoutFollowUpsInput>, EventUncheckedUpdateWithoutFollowUpsInput>
  }

  export type ParticipantCreateNestedOneWithoutMessageLogsInput = {
    create?: XOR<ParticipantCreateWithoutMessageLogsInput, ParticipantUncheckedCreateWithoutMessageLogsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutMessageLogsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutMessageLogsInput = {
    create?: XOR<EventCreateWithoutMessageLogsInput, EventUncheckedCreateWithoutMessageLogsInput>
    connectOrCreate?: EventCreateOrConnectWithoutMessageLogsInput
    connect?: EventWhereUniqueInput
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type EnumMessageChannelFieldUpdateOperationsInput = {
    set?: $Enums.MessageChannel
  }

  export type EnumMessageStatusFieldUpdateOperationsInput = {
    set?: $Enums.MessageStatus
  }

  export type ParticipantUpdateOneRequiredWithoutMessageLogsNestedInput = {
    create?: XOR<ParticipantCreateWithoutMessageLogsInput, ParticipantUncheckedCreateWithoutMessageLogsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutMessageLogsInput
    upsert?: ParticipantUpsertWithoutMessageLogsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutMessageLogsInput, ParticipantUpdateWithoutMessageLogsInput>, ParticipantUncheckedUpdateWithoutMessageLogsInput>
  }

  export type EventUpdateOneRequiredWithoutMessageLogsNestedInput = {
    create?: XOR<EventCreateWithoutMessageLogsInput, EventUncheckedCreateWithoutMessageLogsInput>
    connectOrCreate?: EventCreateOrConnectWithoutMessageLogsInput
    upsert?: EventUpsertWithoutMessageLogsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutMessageLogsInput, EventUpdateWithoutMessageLogsInput>, EventUncheckedUpdateWithoutMessageLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPublicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationStatus | EnumPublicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationStatusFilter<$PrismaModel> | $Enums.PublicationStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPublicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationStatus | EnumPublicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublicationStatusFilter<$PrismaModel>
    _max?: NestedEnumPublicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRegistrationOriginFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationOrigin | EnumRegistrationOriginFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationOrigin[] | ListEnumRegistrationOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationOrigin[] | ListEnumRegistrationOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationOriginFilter<$PrismaModel> | $Enums.RegistrationOrigin
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRegistrationOriginWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationOrigin | EnumRegistrationOriginFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationOrigin[] | ListEnumRegistrationOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationOrigin[] | ListEnumRegistrationOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationOriginWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationOrigin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationOriginFilter<$PrismaModel>
    _max?: NestedEnumRegistrationOriginFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumQuestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[] | ListEnumQuestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionStatus[] | ListEnumQuestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionStatusFilter<$PrismaModel> | $Enums.QuestionStatus
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[] | ListEnumQuestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionStatus[] | ListEnumQuestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionStatusFilter<$PrismaModel>
    _max?: NestedEnumQuestionStatusFilter<$PrismaModel>
  }

  export type NestedEnumFollowUpTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpType | EnumFollowUpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FollowUpType[] | ListEnumFollowUpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowUpType[] | ListEnumFollowUpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowUpTypeFilter<$PrismaModel> | $Enums.FollowUpType
  }

  export type NestedEnumFollowUpTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpType | EnumFollowUpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FollowUpType[] | ListEnumFollowUpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowUpType[] | ListEnumFollowUpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowUpTypeWithAggregatesFilter<$PrismaModel> | $Enums.FollowUpType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFollowUpTypeFilter<$PrismaModel>
    _max?: NestedEnumFollowUpTypeFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageChannel | EnumMessageChannelFieldRefInput<$PrismaModel>
    in?: $Enums.MessageChannel[] | ListEnumMessageChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageChannel[] | ListEnumMessageChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageChannelFilter<$PrismaModel> | $Enums.MessageChannel
  }

  export type NestedEnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NestedEnumMessageChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageChannel | EnumMessageChannelFieldRefInput<$PrismaModel>
    in?: $Enums.MessageChannel[] | ListEnumMessageChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageChannel[] | ListEnumMessageChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageChannelWithAggregatesFilter<$PrismaModel> | $Enums.MessageChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageChannelFilter<$PrismaModel>
    _max?: NestedEnumMessageChannelFilter<$PrismaModel>
  }

  export type NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type EventCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    formFields?: EventFormFieldCreateNestedManyWithoutEventInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    followUps?: FollowUpCreateNestedManyWithoutEventInput
    messageLogs?: MessageLogCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    formFields?: EventFormFieldUncheckedCreateNestedManyWithoutEventInput
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    followUps?: FollowUpUncheckedCreateNestedManyWithoutEventInput
    messageLogs?: MessageLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizationInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizationInput, EventUncheckedCreateWithoutOrganizationInput>
  }

  export type EventCreateManyOrganizationInputEnvelope = {
    data: EventCreateManyOrganizationInput | EventCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizationInput, EventUncheckedUpdateWithoutOrganizationInput>
    create: XOR<EventCreateWithoutOrganizationInput, EventUncheckedCreateWithoutOrganizationInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizationInput, EventUncheckedUpdateWithoutOrganizationInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizationInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    topic?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    slug?: StringFilter<"Event"> | string
    publicationStatus?: EnumPublicationStatusFilter<"Event"> | $Enums.PublicationStatus
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    organizationId?: StringFilter<"Event"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: StringFilter<"User"> | string
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutEventsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutEventsInput, OrganizationUncheckedCreateWithoutEventsInput>
  }

  export type EventFormFieldCreateWithoutEventInput = {
    id?: string
    label: string
    type: $Enums.FieldType
    required?: boolean
    options?: string | null
    order: number
    isDefault?: boolean
    responses?: ParticipantResponseCreateNestedManyWithoutFieldInput
  }

  export type EventFormFieldUncheckedCreateWithoutEventInput = {
    id?: string
    label: string
    type: $Enums.FieldType
    required?: boolean
    options?: string | null
    order: number
    isDefault?: boolean
    responses?: ParticipantResponseUncheckedCreateNestedManyWithoutFieldInput
  }

  export type EventFormFieldCreateOrConnectWithoutEventInput = {
    where: EventFormFieldWhereUniqueInput
    create: XOR<EventFormFieldCreateWithoutEventInput, EventFormFieldUncheckedCreateWithoutEventInput>
  }

  export type EventFormFieldCreateManyEventInputEnvelope = {
    data: EventFormFieldCreateManyEventInput | EventFormFieldCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventParticipantCreateWithoutEventInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutEventsInput
    responses?: ParticipantResponseCreateNestedManyWithoutEventParticipantInput
    questions?: QuestionCreateNestedManyWithoutEventParticipantInput
  }

  export type EventParticipantUncheckedCreateWithoutEventInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    participantId: string
    responses?: ParticipantResponseUncheckedCreateNestedManyWithoutEventParticipantInput
    questions?: QuestionUncheckedCreateNestedManyWithoutEventParticipantInput
  }

  export type EventParticipantCreateOrConnectWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput>
  }

  export type EventParticipantCreateManyEventInputEnvelope = {
    data: EventParticipantCreateManyEventInput | EventParticipantCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type FollowUpCreateWithoutEventInput = {
    id?: string
    type: $Enums.FollowUpType
    content: string
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FollowUpUncheckedCreateWithoutEventInput = {
    id?: string
    type: $Enums.FollowUpType
    content: string
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FollowUpCreateOrConnectWithoutEventInput = {
    where: FollowUpWhereUniqueInput
    create: XOR<FollowUpCreateWithoutEventInput, FollowUpUncheckedCreateWithoutEventInput>
  }

  export type FollowUpCreateManyEventInputEnvelope = {
    data: FollowUpCreateManyEventInput | FollowUpCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type MessageLogCreateWithoutEventInput = {
    id?: string
    type: $Enums.MessageType
    channel: $Enums.MessageChannel
    status: $Enums.MessageStatus
    content: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutMessageLogsInput
  }

  export type MessageLogUncheckedCreateWithoutEventInput = {
    id?: string
    type: $Enums.MessageType
    channel: $Enums.MessageChannel
    status: $Enums.MessageStatus
    content: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
    participantId: string
  }

  export type MessageLogCreateOrConnectWithoutEventInput = {
    where: MessageLogWhereUniqueInput
    create: XOR<MessageLogCreateWithoutEventInput, MessageLogUncheckedCreateWithoutEventInput>
  }

  export type MessageLogCreateManyEventInputEnvelope = {
    data: MessageLogCreateManyEventInput | MessageLogCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutEventsInput = {
    update: XOR<OrganizationUpdateWithoutEventsInput, OrganizationUncheckedUpdateWithoutEventsInput>
    create: XOR<OrganizationCreateWithoutEventsInput, OrganizationUncheckedCreateWithoutEventsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutEventsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutEventsInput, OrganizationUncheckedUpdateWithoutEventsInput>
  }

  export type OrganizationUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type EventFormFieldUpsertWithWhereUniqueWithoutEventInput = {
    where: EventFormFieldWhereUniqueInput
    update: XOR<EventFormFieldUpdateWithoutEventInput, EventFormFieldUncheckedUpdateWithoutEventInput>
    create: XOR<EventFormFieldCreateWithoutEventInput, EventFormFieldUncheckedCreateWithoutEventInput>
  }

  export type EventFormFieldUpdateWithWhereUniqueWithoutEventInput = {
    where: EventFormFieldWhereUniqueInput
    data: XOR<EventFormFieldUpdateWithoutEventInput, EventFormFieldUncheckedUpdateWithoutEventInput>
  }

  export type EventFormFieldUpdateManyWithWhereWithoutEventInput = {
    where: EventFormFieldScalarWhereInput
    data: XOR<EventFormFieldUpdateManyMutationInput, EventFormFieldUncheckedUpdateManyWithoutEventInput>
  }

  export type EventFormFieldScalarWhereInput = {
    AND?: EventFormFieldScalarWhereInput | EventFormFieldScalarWhereInput[]
    OR?: EventFormFieldScalarWhereInput[]
    NOT?: EventFormFieldScalarWhereInput | EventFormFieldScalarWhereInput[]
    id?: StringFilter<"EventFormField"> | string
    label?: StringFilter<"EventFormField"> | string
    type?: EnumFieldTypeFilter<"EventFormField"> | $Enums.FieldType
    required?: BoolFilter<"EventFormField"> | boolean
    options?: StringNullableFilter<"EventFormField"> | string | null
    order?: IntFilter<"EventFormField"> | number
    isDefault?: BoolFilter<"EventFormField"> | boolean
    eventId?: StringFilter<"EventFormField"> | string
  }

  export type EventParticipantUpsertWithWhereUniqueWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    update: XOR<EventParticipantUpdateWithoutEventInput, EventParticipantUncheckedUpdateWithoutEventInput>
    create: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput>
  }

  export type EventParticipantUpdateWithWhereUniqueWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    data: XOR<EventParticipantUpdateWithoutEventInput, EventParticipantUncheckedUpdateWithoutEventInput>
  }

  export type EventParticipantUpdateManyWithWhereWithoutEventInput = {
    where: EventParticipantScalarWhereInput
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyWithoutEventInput>
  }

  export type EventParticipantScalarWhereInput = {
    AND?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
    OR?: EventParticipantScalarWhereInput[]
    NOT?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
    id?: StringFilter<"EventParticipant"> | string
    origin?: EnumRegistrationOriginFilter<"EventParticipant"> | $Enums.RegistrationOrigin
    checkedIn?: BoolFilter<"EventParticipant"> | boolean
    checkedInAt?: DateTimeNullableFilter<"EventParticipant"> | Date | string | null
    createdAt?: DateTimeFilter<"EventParticipant"> | Date | string
    eventId?: StringFilter<"EventParticipant"> | string
    participantId?: StringFilter<"EventParticipant"> | string
  }

  export type FollowUpUpsertWithWhereUniqueWithoutEventInput = {
    where: FollowUpWhereUniqueInput
    update: XOR<FollowUpUpdateWithoutEventInput, FollowUpUncheckedUpdateWithoutEventInput>
    create: XOR<FollowUpCreateWithoutEventInput, FollowUpUncheckedCreateWithoutEventInput>
  }

  export type FollowUpUpdateWithWhereUniqueWithoutEventInput = {
    where: FollowUpWhereUniqueInput
    data: XOR<FollowUpUpdateWithoutEventInput, FollowUpUncheckedUpdateWithoutEventInput>
  }

  export type FollowUpUpdateManyWithWhereWithoutEventInput = {
    where: FollowUpScalarWhereInput
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyWithoutEventInput>
  }

  export type FollowUpScalarWhereInput = {
    AND?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
    OR?: FollowUpScalarWhereInput[]
    NOT?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
    id?: StringFilter<"FollowUp"> | string
    type?: EnumFollowUpTypeFilter<"FollowUp"> | $Enums.FollowUpType
    content?: StringFilter<"FollowUp"> | string
    sentAt?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    createdAt?: DateTimeFilter<"FollowUp"> | Date | string
    eventId?: StringFilter<"FollowUp"> | string
  }

  export type MessageLogUpsertWithWhereUniqueWithoutEventInput = {
    where: MessageLogWhereUniqueInput
    update: XOR<MessageLogUpdateWithoutEventInput, MessageLogUncheckedUpdateWithoutEventInput>
    create: XOR<MessageLogCreateWithoutEventInput, MessageLogUncheckedCreateWithoutEventInput>
  }

  export type MessageLogUpdateWithWhereUniqueWithoutEventInput = {
    where: MessageLogWhereUniqueInput
    data: XOR<MessageLogUpdateWithoutEventInput, MessageLogUncheckedUpdateWithoutEventInput>
  }

  export type MessageLogUpdateManyWithWhereWithoutEventInput = {
    where: MessageLogScalarWhereInput
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyWithoutEventInput>
  }

  export type MessageLogScalarWhereInput = {
    AND?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
    OR?: MessageLogScalarWhereInput[]
    NOT?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
    id?: StringFilter<"MessageLog"> | string
    type?: EnumMessageTypeFilter<"MessageLog"> | $Enums.MessageType
    channel?: EnumMessageChannelFilter<"MessageLog"> | $Enums.MessageChannel
    status?: EnumMessageStatusFilter<"MessageLog"> | $Enums.MessageStatus
    content?: StringFilter<"MessageLog"> | string
    sentAt?: DateTimeNullableFilter<"MessageLog"> | Date | string | null
    error?: StringNullableFilter<"MessageLog"> | string | null
    createdAt?: DateTimeFilter<"MessageLog"> | Date | string
    participantId?: StringFilter<"MessageLog"> | string
    eventId?: StringFilter<"MessageLog"> | string
  }

  export type EventCreateWithoutFormFieldsInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutEventsInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    followUps?: FollowUpCreateNestedManyWithoutEventInput
    messageLogs?: MessageLogCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutFormFieldsInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    followUps?: FollowUpUncheckedCreateNestedManyWithoutEventInput
    messageLogs?: MessageLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutFormFieldsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFormFieldsInput, EventUncheckedCreateWithoutFormFieldsInput>
  }

  export type ParticipantResponseCreateWithoutFieldInput = {
    id?: string
    value: string
    eventParticipant: EventParticipantCreateNestedOneWithoutResponsesInput
  }

  export type ParticipantResponseUncheckedCreateWithoutFieldInput = {
    id?: string
    value: string
    eventParticipantId: string
  }

  export type ParticipantResponseCreateOrConnectWithoutFieldInput = {
    where: ParticipantResponseWhereUniqueInput
    create: XOR<ParticipantResponseCreateWithoutFieldInput, ParticipantResponseUncheckedCreateWithoutFieldInput>
  }

  export type ParticipantResponseCreateManyFieldInputEnvelope = {
    data: ParticipantResponseCreateManyFieldInput | ParticipantResponseCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutFormFieldsInput = {
    update: XOR<EventUpdateWithoutFormFieldsInput, EventUncheckedUpdateWithoutFormFieldsInput>
    create: XOR<EventCreateWithoutFormFieldsInput, EventUncheckedCreateWithoutFormFieldsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutFormFieldsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutFormFieldsInput, EventUncheckedUpdateWithoutFormFieldsInput>
  }

  export type EventUpdateWithoutFormFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    followUps?: FollowUpUpdateManyWithoutEventNestedInput
    messageLogs?: MessageLogUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutFormFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    followUps?: FollowUpUncheckedUpdateManyWithoutEventNestedInput
    messageLogs?: MessageLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type ParticipantResponseUpsertWithWhereUniqueWithoutFieldInput = {
    where: ParticipantResponseWhereUniqueInput
    update: XOR<ParticipantResponseUpdateWithoutFieldInput, ParticipantResponseUncheckedUpdateWithoutFieldInput>
    create: XOR<ParticipantResponseCreateWithoutFieldInput, ParticipantResponseUncheckedCreateWithoutFieldInput>
  }

  export type ParticipantResponseUpdateWithWhereUniqueWithoutFieldInput = {
    where: ParticipantResponseWhereUniqueInput
    data: XOR<ParticipantResponseUpdateWithoutFieldInput, ParticipantResponseUncheckedUpdateWithoutFieldInput>
  }

  export type ParticipantResponseUpdateManyWithWhereWithoutFieldInput = {
    where: ParticipantResponseScalarWhereInput
    data: XOR<ParticipantResponseUpdateManyMutationInput, ParticipantResponseUncheckedUpdateManyWithoutFieldInput>
  }

  export type ParticipantResponseScalarWhereInput = {
    AND?: ParticipantResponseScalarWhereInput | ParticipantResponseScalarWhereInput[]
    OR?: ParticipantResponseScalarWhereInput[]
    NOT?: ParticipantResponseScalarWhereInput | ParticipantResponseScalarWhereInput[]
    id?: StringFilter<"ParticipantResponse"> | string
    value?: StringFilter<"ParticipantResponse"> | string
    eventParticipantId?: StringFilter<"ParticipantResponse"> | string
    fieldId?: StringFilter<"ParticipantResponse"> | string
  }

  export type EventParticipantCreateWithoutParticipantInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutParticipantsInput
    responses?: ParticipantResponseCreateNestedManyWithoutEventParticipantInput
    questions?: QuestionCreateNestedManyWithoutEventParticipantInput
  }

  export type EventParticipantUncheckedCreateWithoutParticipantInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    eventId: string
    responses?: ParticipantResponseUncheckedCreateNestedManyWithoutEventParticipantInput
    questions?: QuestionUncheckedCreateNestedManyWithoutEventParticipantInput
  }

  export type EventParticipantCreateOrConnectWithoutParticipantInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutParticipantInput, EventParticipantUncheckedCreateWithoutParticipantInput>
  }

  export type EventParticipantCreateManyParticipantInputEnvelope = {
    data: EventParticipantCreateManyParticipantInput | EventParticipantCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type MessageLogCreateWithoutParticipantInput = {
    id?: string
    type: $Enums.MessageType
    channel: $Enums.MessageChannel
    status: $Enums.MessageStatus
    content: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutMessageLogsInput
  }

  export type MessageLogUncheckedCreateWithoutParticipantInput = {
    id?: string
    type: $Enums.MessageType
    channel: $Enums.MessageChannel
    status: $Enums.MessageStatus
    content: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
    eventId: string
  }

  export type MessageLogCreateOrConnectWithoutParticipantInput = {
    where: MessageLogWhereUniqueInput
    create: XOR<MessageLogCreateWithoutParticipantInput, MessageLogUncheckedCreateWithoutParticipantInput>
  }

  export type MessageLogCreateManyParticipantInputEnvelope = {
    data: MessageLogCreateManyParticipantInput | MessageLogCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutParticipantInput = {
    id?: string
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutParticipantInput = {
    id?: string
    createdAt?: Date | string
    questionId: string
  }

  export type VoteCreateOrConnectWithoutParticipantInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutParticipantInput, VoteUncheckedCreateWithoutParticipantInput>
  }

  export type VoteCreateManyParticipantInputEnvelope = {
    data: VoteCreateManyParticipantInput | VoteCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type EventParticipantUpsertWithWhereUniqueWithoutParticipantInput = {
    where: EventParticipantWhereUniqueInput
    update: XOR<EventParticipantUpdateWithoutParticipantInput, EventParticipantUncheckedUpdateWithoutParticipantInput>
    create: XOR<EventParticipantCreateWithoutParticipantInput, EventParticipantUncheckedCreateWithoutParticipantInput>
  }

  export type EventParticipantUpdateWithWhereUniqueWithoutParticipantInput = {
    where: EventParticipantWhereUniqueInput
    data: XOR<EventParticipantUpdateWithoutParticipantInput, EventParticipantUncheckedUpdateWithoutParticipantInput>
  }

  export type EventParticipantUpdateManyWithWhereWithoutParticipantInput = {
    where: EventParticipantScalarWhereInput
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyWithoutParticipantInput>
  }

  export type MessageLogUpsertWithWhereUniqueWithoutParticipantInput = {
    where: MessageLogWhereUniqueInput
    update: XOR<MessageLogUpdateWithoutParticipantInput, MessageLogUncheckedUpdateWithoutParticipantInput>
    create: XOR<MessageLogCreateWithoutParticipantInput, MessageLogUncheckedCreateWithoutParticipantInput>
  }

  export type MessageLogUpdateWithWhereUniqueWithoutParticipantInput = {
    where: MessageLogWhereUniqueInput
    data: XOR<MessageLogUpdateWithoutParticipantInput, MessageLogUncheckedUpdateWithoutParticipantInput>
  }

  export type MessageLogUpdateManyWithWhereWithoutParticipantInput = {
    where: MessageLogScalarWhereInput
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyWithoutParticipantInput>
  }

  export type VoteUpsertWithWhereUniqueWithoutParticipantInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutParticipantInput, VoteUncheckedUpdateWithoutParticipantInput>
    create: XOR<VoteCreateWithoutParticipantInput, VoteUncheckedCreateWithoutParticipantInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutParticipantInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutParticipantInput, VoteUncheckedUpdateWithoutParticipantInput>
  }

  export type VoteUpdateManyWithWhereWithoutParticipantInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutParticipantInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    questionId?: StringFilter<"Vote"> | string
    participantId?: StringFilter<"Vote"> | string
  }

  export type EventCreateWithoutParticipantsInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutEventsInput
    formFields?: EventFormFieldCreateNestedManyWithoutEventInput
    followUps?: FollowUpCreateNestedManyWithoutEventInput
    messageLogs?: MessageLogCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    formFields?: EventFormFieldUncheckedCreateNestedManyWithoutEventInput
    followUps?: FollowUpUncheckedCreateNestedManyWithoutEventInput
    messageLogs?: MessageLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutParticipantsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
  }

  export type ParticipantCreateWithoutEventsInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    messageLogs?: MessageLogCreateNestedManyWithoutParticipantInput
    votes?: VoteCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    messageLogs?: MessageLogUncheckedCreateNestedManyWithoutParticipantInput
    votes?: VoteUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutEventsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutEventsInput, ParticipantUncheckedCreateWithoutEventsInput>
  }

  export type ParticipantResponseCreateWithoutEventParticipantInput = {
    id?: string
    value: string
    field: EventFormFieldCreateNestedOneWithoutResponsesInput
  }

  export type ParticipantResponseUncheckedCreateWithoutEventParticipantInput = {
    id?: string
    value: string
    fieldId: string
  }

  export type ParticipantResponseCreateOrConnectWithoutEventParticipantInput = {
    where: ParticipantResponseWhereUniqueInput
    create: XOR<ParticipantResponseCreateWithoutEventParticipantInput, ParticipantResponseUncheckedCreateWithoutEventParticipantInput>
  }

  export type ParticipantResponseCreateManyEventParticipantInputEnvelope = {
    data: ParticipantResponseCreateManyEventParticipantInput | ParticipantResponseCreateManyEventParticipantInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutEventParticipantInput = {
    id?: string
    content: string
    aiApproved?: boolean | null
    aiScore?: number | null
    aiReason?: string | null
    moderatorApproved?: boolean | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    votes?: VoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutEventParticipantInput = {
    id?: string
    content: string
    aiApproved?: boolean | null
    aiScore?: number | null
    aiReason?: string | null
    moderatorApproved?: boolean | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutEventParticipantInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutEventParticipantInput, QuestionUncheckedCreateWithoutEventParticipantInput>
  }

  export type QuestionCreateManyEventParticipantInputEnvelope = {
    data: QuestionCreateManyEventParticipantInput | QuestionCreateManyEventParticipantInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutParticipantsInput = {
    update: XOR<EventUpdateWithoutParticipantsInput, EventUncheckedUpdateWithoutParticipantsInput>
    create: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutParticipantsInput, EventUncheckedUpdateWithoutParticipantsInput>
  }

  export type EventUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput
    formFields?: EventFormFieldUpdateManyWithoutEventNestedInput
    followUps?: FollowUpUpdateManyWithoutEventNestedInput
    messageLogs?: MessageLogUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    formFields?: EventFormFieldUncheckedUpdateManyWithoutEventNestedInput
    followUps?: FollowUpUncheckedUpdateManyWithoutEventNestedInput
    messageLogs?: MessageLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type ParticipantUpsertWithoutEventsInput = {
    update: XOR<ParticipantUpdateWithoutEventsInput, ParticipantUncheckedUpdateWithoutEventsInput>
    create: XOR<ParticipantCreateWithoutEventsInput, ParticipantUncheckedCreateWithoutEventsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutEventsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutEventsInput, ParticipantUncheckedUpdateWithoutEventsInput>
  }

  export type ParticipantUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageLogs?: MessageLogUpdateManyWithoutParticipantNestedInput
    votes?: VoteUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageLogs?: MessageLogUncheckedUpdateManyWithoutParticipantNestedInput
    votes?: VoteUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantResponseUpsertWithWhereUniqueWithoutEventParticipantInput = {
    where: ParticipantResponseWhereUniqueInput
    update: XOR<ParticipantResponseUpdateWithoutEventParticipantInput, ParticipantResponseUncheckedUpdateWithoutEventParticipantInput>
    create: XOR<ParticipantResponseCreateWithoutEventParticipantInput, ParticipantResponseUncheckedCreateWithoutEventParticipantInput>
  }

  export type ParticipantResponseUpdateWithWhereUniqueWithoutEventParticipantInput = {
    where: ParticipantResponseWhereUniqueInput
    data: XOR<ParticipantResponseUpdateWithoutEventParticipantInput, ParticipantResponseUncheckedUpdateWithoutEventParticipantInput>
  }

  export type ParticipantResponseUpdateManyWithWhereWithoutEventParticipantInput = {
    where: ParticipantResponseScalarWhereInput
    data: XOR<ParticipantResponseUpdateManyMutationInput, ParticipantResponseUncheckedUpdateManyWithoutEventParticipantInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutEventParticipantInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutEventParticipantInput, QuestionUncheckedUpdateWithoutEventParticipantInput>
    create: XOR<QuestionCreateWithoutEventParticipantInput, QuestionUncheckedCreateWithoutEventParticipantInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutEventParticipantInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutEventParticipantInput, QuestionUncheckedUpdateWithoutEventParticipantInput>
  }

  export type QuestionUpdateManyWithWhereWithoutEventParticipantInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutEventParticipantInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    aiApproved?: BoolNullableFilter<"Question"> | boolean | null
    aiScore?: FloatNullableFilter<"Question"> | number | null
    aiReason?: StringNullableFilter<"Question"> | string | null
    moderatorApproved?: BoolNullableFilter<"Question"> | boolean | null
    status?: EnumQuestionStatusFilter<"Question"> | $Enums.QuestionStatus
    createdAt?: DateTimeFilter<"Question"> | Date | string
    eventParticipantId?: StringFilter<"Question"> | string
  }

  export type EventParticipantCreateWithoutResponsesInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutParticipantsInput
    participant: ParticipantCreateNestedOneWithoutEventsInput
    questions?: QuestionCreateNestedManyWithoutEventParticipantInput
  }

  export type EventParticipantUncheckedCreateWithoutResponsesInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    eventId: string
    participantId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutEventParticipantInput
  }

  export type EventParticipantCreateOrConnectWithoutResponsesInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutResponsesInput, EventParticipantUncheckedCreateWithoutResponsesInput>
  }

  export type EventFormFieldCreateWithoutResponsesInput = {
    id?: string
    label: string
    type: $Enums.FieldType
    required?: boolean
    options?: string | null
    order: number
    isDefault?: boolean
    event: EventCreateNestedOneWithoutFormFieldsInput
  }

  export type EventFormFieldUncheckedCreateWithoutResponsesInput = {
    id?: string
    label: string
    type: $Enums.FieldType
    required?: boolean
    options?: string | null
    order: number
    isDefault?: boolean
    eventId: string
  }

  export type EventFormFieldCreateOrConnectWithoutResponsesInput = {
    where: EventFormFieldWhereUniqueInput
    create: XOR<EventFormFieldCreateWithoutResponsesInput, EventFormFieldUncheckedCreateWithoutResponsesInput>
  }

  export type EventParticipantUpsertWithoutResponsesInput = {
    update: XOR<EventParticipantUpdateWithoutResponsesInput, EventParticipantUncheckedUpdateWithoutResponsesInput>
    create: XOR<EventParticipantCreateWithoutResponsesInput, EventParticipantUncheckedCreateWithoutResponsesInput>
    where?: EventParticipantWhereInput
  }

  export type EventParticipantUpdateToOneWithWhereWithoutResponsesInput = {
    where?: EventParticipantWhereInput
    data: XOR<EventParticipantUpdateWithoutResponsesInput, EventParticipantUncheckedUpdateWithoutResponsesInput>
  }

  export type EventParticipantUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutEventsNestedInput
    questions?: QuestionUpdateManyWithoutEventParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutEventParticipantNestedInput
  }

  export type EventFormFieldUpsertWithoutResponsesInput = {
    update: XOR<EventFormFieldUpdateWithoutResponsesInput, EventFormFieldUncheckedUpdateWithoutResponsesInput>
    create: XOR<EventFormFieldCreateWithoutResponsesInput, EventFormFieldUncheckedCreateWithoutResponsesInput>
    where?: EventFormFieldWhereInput
  }

  export type EventFormFieldUpdateToOneWithWhereWithoutResponsesInput = {
    where?: EventFormFieldWhereInput
    data: XOR<EventFormFieldUpdateWithoutResponsesInput, EventFormFieldUncheckedUpdateWithoutResponsesInput>
  }

  export type EventFormFieldUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutFormFieldsNestedInput
  }

  export type EventFormFieldUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type EventParticipantCreateWithoutQuestionsInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutParticipantsInput
    participant: ParticipantCreateNestedOneWithoutEventsInput
    responses?: ParticipantResponseCreateNestedManyWithoutEventParticipantInput
  }

  export type EventParticipantUncheckedCreateWithoutQuestionsInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    eventId: string
    participantId: string
    responses?: ParticipantResponseUncheckedCreateNestedManyWithoutEventParticipantInput
  }

  export type EventParticipantCreateOrConnectWithoutQuestionsInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutQuestionsInput, EventParticipantUncheckedCreateWithoutQuestionsInput>
  }

  export type VoteCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    participantId: string
  }

  export type VoteCreateOrConnectWithoutQuestionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput>
  }

  export type VoteCreateManyQuestionInputEnvelope = {
    data: VoteCreateManyQuestionInput | VoteCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type EventParticipantUpsertWithoutQuestionsInput = {
    update: XOR<EventParticipantUpdateWithoutQuestionsInput, EventParticipantUncheckedUpdateWithoutQuestionsInput>
    create: XOR<EventParticipantCreateWithoutQuestionsInput, EventParticipantUncheckedCreateWithoutQuestionsInput>
    where?: EventParticipantWhereInput
  }

  export type EventParticipantUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: EventParticipantWhereInput
    data: XOR<EventParticipantUpdateWithoutQuestionsInput, EventParticipantUncheckedUpdateWithoutQuestionsInput>
  }

  export type EventParticipantUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutEventsNestedInput
    responses?: ParticipantResponseUpdateManyWithoutEventParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    responses?: ParticipantResponseUncheckedUpdateManyWithoutEventParticipantNestedInput
  }

  export type VoteUpsertWithWhereUniqueWithoutQuestionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutQuestionInput, VoteUncheckedUpdateWithoutQuestionInput>
    create: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutQuestionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutQuestionInput, VoteUncheckedUpdateWithoutQuestionInput>
  }

  export type VoteUpdateManyWithWhereWithoutQuestionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionCreateWithoutVotesInput = {
    id?: string
    content: string
    aiApproved?: boolean | null
    aiScore?: number | null
    aiReason?: string | null
    moderatorApproved?: boolean | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    eventParticipant: EventParticipantCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutVotesInput = {
    id?: string
    content: string
    aiApproved?: boolean | null
    aiScore?: number | null
    aiReason?: string | null
    moderatorApproved?: boolean | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    eventParticipantId: string
  }

  export type QuestionCreateOrConnectWithoutVotesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutVotesInput, QuestionUncheckedCreateWithoutVotesInput>
  }

  export type ParticipantCreateWithoutVotesInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    events?: EventParticipantCreateNestedManyWithoutParticipantInput
    messageLogs?: MessageLogCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutVotesInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    events?: EventParticipantUncheckedCreateNestedManyWithoutParticipantInput
    messageLogs?: MessageLogUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutVotesInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutVotesInput, ParticipantUncheckedCreateWithoutVotesInput>
  }

  export type QuestionUpsertWithoutVotesInput = {
    update: XOR<QuestionUpdateWithoutVotesInput, QuestionUncheckedUpdateWithoutVotesInput>
    create: XOR<QuestionCreateWithoutVotesInput, QuestionUncheckedCreateWithoutVotesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutVotesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutVotesInput, QuestionUncheckedUpdateWithoutVotesInput>
  }

  export type QuestionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventParticipant?: EventParticipantUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventParticipantId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantUpsertWithoutVotesInput = {
    update: XOR<ParticipantUpdateWithoutVotesInput, ParticipantUncheckedUpdateWithoutVotesInput>
    create: XOR<ParticipantCreateWithoutVotesInput, ParticipantUncheckedCreateWithoutVotesInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutVotesInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutVotesInput, ParticipantUncheckedUpdateWithoutVotesInput>
  }

  export type ParticipantUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventParticipantUpdateManyWithoutParticipantNestedInput
    messageLogs?: MessageLogUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    messageLogs?: MessageLogUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type EventCreateWithoutFollowUpsInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutEventsInput
    formFields?: EventFormFieldCreateNestedManyWithoutEventInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    messageLogs?: MessageLogCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutFollowUpsInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    formFields?: EventFormFieldUncheckedCreateNestedManyWithoutEventInput
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    messageLogs?: MessageLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutFollowUpsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFollowUpsInput, EventUncheckedCreateWithoutFollowUpsInput>
  }

  export type EventUpsertWithoutFollowUpsInput = {
    update: XOR<EventUpdateWithoutFollowUpsInput, EventUncheckedUpdateWithoutFollowUpsInput>
    create: XOR<EventCreateWithoutFollowUpsInput, EventUncheckedCreateWithoutFollowUpsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutFollowUpsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutFollowUpsInput, EventUncheckedUpdateWithoutFollowUpsInput>
  }

  export type EventUpdateWithoutFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput
    formFields?: EventFormFieldUpdateManyWithoutEventNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    messageLogs?: MessageLogUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    formFields?: EventFormFieldUncheckedUpdateManyWithoutEventNestedInput
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    messageLogs?: MessageLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type ParticipantCreateWithoutMessageLogsInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    events?: EventParticipantCreateNestedManyWithoutParticipantInput
    votes?: VoteCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutMessageLogsInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    events?: EventParticipantUncheckedCreateNestedManyWithoutParticipantInput
    votes?: VoteUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutMessageLogsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutMessageLogsInput, ParticipantUncheckedCreateWithoutMessageLogsInput>
  }

  export type EventCreateWithoutMessageLogsInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutEventsInput
    formFields?: EventFormFieldCreateNestedManyWithoutEventInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    followUps?: FollowUpCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutMessageLogsInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    formFields?: EventFormFieldUncheckedCreateNestedManyWithoutEventInput
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    followUps?: FollowUpUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutMessageLogsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutMessageLogsInput, EventUncheckedCreateWithoutMessageLogsInput>
  }

  export type ParticipantUpsertWithoutMessageLogsInput = {
    update: XOR<ParticipantUpdateWithoutMessageLogsInput, ParticipantUncheckedUpdateWithoutMessageLogsInput>
    create: XOR<ParticipantCreateWithoutMessageLogsInput, ParticipantUncheckedCreateWithoutMessageLogsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutMessageLogsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutMessageLogsInput, ParticipantUncheckedUpdateWithoutMessageLogsInput>
  }

  export type ParticipantUpdateWithoutMessageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventParticipantUpdateManyWithoutParticipantNestedInput
    votes?: VoteUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutMessageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    votes?: VoteUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type EventUpsertWithoutMessageLogsInput = {
    update: XOR<EventUpdateWithoutMessageLogsInput, EventUncheckedUpdateWithoutMessageLogsInput>
    create: XOR<EventCreateWithoutMessageLogsInput, EventUncheckedCreateWithoutMessageLogsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutMessageLogsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutMessageLogsInput, EventUncheckedUpdateWithoutMessageLogsInput>
  }

  export type EventUpdateWithoutMessageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput
    formFields?: EventFormFieldUpdateManyWithoutEventNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    followUps?: FollowUpUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutMessageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    formFields?: EventFormFieldUncheckedUpdateManyWithoutEventNestedInput
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    followUps?: FollowUpUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    topic: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    slug: string
    publicationStatus?: $Enums.PublicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
  }

  export type EventUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formFields?: EventFormFieldUpdateManyWithoutEventNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    followUps?: FollowUpUpdateManyWithoutEventNestedInput
    messageLogs?: MessageLogUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formFields?: EventFormFieldUncheckedUpdateManyWithoutEventNestedInput
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    followUps?: FollowUpUncheckedUpdateManyWithoutEventNestedInput
    messageLogs?: MessageLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    publicationStatus?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventFormFieldCreateManyEventInput = {
    id?: string
    label: string
    type: $Enums.FieldType
    required?: boolean
    options?: string | null
    order: number
    isDefault?: boolean
  }

  export type EventParticipantCreateManyEventInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    participantId: string
  }

  export type FollowUpCreateManyEventInput = {
    id?: string
    type: $Enums.FollowUpType
    content: string
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MessageLogCreateManyEventInput = {
    id?: string
    type: $Enums.MessageType
    channel: $Enums.MessageChannel
    status: $Enums.MessageStatus
    content: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
    participantId: string
  }

  export type EventFormFieldUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    responses?: ParticipantResponseUpdateManyWithoutFieldNestedInput
  }

  export type EventFormFieldUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    responses?: ParticipantResponseUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type EventFormFieldUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventParticipantUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutEventsNestedInput
    responses?: ParticipantResponseUpdateManyWithoutEventParticipantNestedInput
    questions?: QuestionUpdateManyWithoutEventParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
    responses?: ParticipantResponseUncheckedUpdateManyWithoutEventParticipantNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutEventParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowUpUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFollowUpTypeFieldUpdateOperationsInput | $Enums.FollowUpType
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFollowUpTypeFieldUpdateOperationsInput | $Enums.FollowUpType
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFollowUpTypeFieldUpdateOperationsInput | $Enums.FollowUpType
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    channel?: EnumMessageChannelFieldUpdateOperationsInput | $Enums.MessageChannel
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutMessageLogsNestedInput
  }

  export type MessageLogUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    channel?: EnumMessageChannelFieldUpdateOperationsInput | $Enums.MessageChannel
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageLogUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    channel?: EnumMessageChannelFieldUpdateOperationsInput | $Enums.MessageChannel
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantResponseCreateManyFieldInput = {
    id?: string
    value: string
    eventParticipantId: string
  }

  export type ParticipantResponseUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    eventParticipant?: EventParticipantUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ParticipantResponseUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    eventParticipantId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantResponseUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    eventParticipantId?: StringFieldUpdateOperationsInput | string
  }

  export type EventParticipantCreateManyParticipantInput = {
    id?: string
    origin: $Enums.RegistrationOrigin
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    eventId: string
  }

  export type MessageLogCreateManyParticipantInput = {
    id?: string
    type: $Enums.MessageType
    channel: $Enums.MessageChannel
    status: $Enums.MessageStatus
    content: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
    eventId: string
  }

  export type VoteCreateManyParticipantInput = {
    id?: string
    createdAt?: Date | string
    questionId: string
  }

  export type EventParticipantUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
    responses?: ParticipantResponseUpdateManyWithoutEventParticipantNestedInput
    questions?: QuestionUpdateManyWithoutEventParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
    responses?: ParticipantResponseUncheckedUpdateManyWithoutEventParticipantNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutEventParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: EnumRegistrationOriginFieldUpdateOperationsInput | $Enums.RegistrationOrigin
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageLogUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    channel?: EnumMessageChannelFieldUpdateOperationsInput | $Enums.MessageChannel
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutMessageLogsNestedInput
  }

  export type MessageLogUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    channel?: EnumMessageChannelFieldUpdateOperationsInput | $Enums.MessageChannel
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageLogUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    channel?: EnumMessageChannelFieldUpdateOperationsInput | $Enums.MessageChannel
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantResponseCreateManyEventParticipantInput = {
    id?: string
    value: string
    fieldId: string
  }

  export type QuestionCreateManyEventParticipantInput = {
    id?: string
    content: string
    aiApproved?: boolean | null
    aiScore?: number | null
    aiReason?: string | null
    moderatorApproved?: boolean | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
  }

  export type ParticipantResponseUpdateWithoutEventParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    field?: EventFormFieldUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ParticipantResponseUncheckedUpdateWithoutEventParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantResponseUncheckedUpdateManyWithoutEventParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpdateWithoutEventParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutEventParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutEventParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyQuestionInput = {
    id?: string
    createdAt?: Date | string
    participantId: string
  }

  export type VoteUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}