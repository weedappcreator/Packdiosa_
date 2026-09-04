
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model SubdomainOrder
 * 
 */
export type SubdomainOrder = $Result.DefaultSelection<Prisma.$SubdomainOrderPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model WorkoutExercise
 * 
 */
export type WorkoutExercise = $Result.DefaultSelection<Prisma.$WorkoutExercisePayload>
/**
 * Model Set
 * 
 */
export type Set = $Result.DefaultSelection<Prisma.$SetPayload>
/**
 * Model Routine
 * 
 */
export type Routine = $Result.DefaultSelection<Prisma.$RoutinePayload>
/**
 * Model RoutineExercise
 * 
 */
export type RoutineExercise = $Result.DefaultSelection<Prisma.$RoutineExercisePayload>
/**
 * Model BodyMeasurement
 * 
 */
export type BodyMeasurement = $Result.DefaultSelection<Prisma.$BodyMeasurementPayload>
/**
 * Model FoodItem
 * 
 */
export type FoodItem = $Result.DefaultSelection<Prisma.$FoodItemPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model MealFood
 * 
 */
export type MealFood = $Result.DefaultSelection<Prisma.$MealFoodPayload>
/**
 * Model FitnessGoal
 * 
 */
export type FitnessGoal = $Result.DefaultSelection<Prisma.$FitnessGoalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tasks
 * const tasks = await prisma.task.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tasks
   * const tasks = await prisma.task.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subdomainOrder`: Exposes CRUD operations for the **SubdomainOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubdomainOrders
    * const subdomainOrders = await prisma.subdomainOrder.findMany()
    * ```
    */
  get subdomainOrder(): Prisma.SubdomainOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutExercise`: Exposes CRUD operations for the **WorkoutExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutExercises
    * const workoutExercises = await prisma.workoutExercise.findMany()
    * ```
    */
  get workoutExercise(): Prisma.WorkoutExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.set`: Exposes CRUD operations for the **Set** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sets
    * const sets = await prisma.set.findMany()
    * ```
    */
  get set(): Prisma.SetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routine`: Exposes CRUD operations for the **Routine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routines
    * const routines = await prisma.routine.findMany()
    * ```
    */
  get routine(): Prisma.RoutineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routineExercise`: Exposes CRUD operations for the **RoutineExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutineExercises
    * const routineExercises = await prisma.routineExercise.findMany()
    * ```
    */
  get routineExercise(): Prisma.RoutineExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bodyMeasurement`: Exposes CRUD operations for the **BodyMeasurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyMeasurements
    * const bodyMeasurements = await prisma.bodyMeasurement.findMany()
    * ```
    */
  get bodyMeasurement(): Prisma.BodyMeasurementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodItem`: Exposes CRUD operations for the **FoodItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodItems
    * const foodItems = await prisma.foodItem.findMany()
    * ```
    */
  get foodItem(): Prisma.FoodItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealFood`: Exposes CRUD operations for the **MealFood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealFoods
    * const mealFoods = await prisma.mealFood.findMany()
    * ```
    */
  get mealFood(): Prisma.MealFoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fitnessGoal`: Exposes CRUD operations for the **FitnessGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FitnessGoals
    * const fitnessGoals = await prisma.fitnessGoal.findMany()
    * ```
    */
  get fitnessGoal(): Prisma.FitnessGoalDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Task: 'Task',
    User: 'User',
    Project: 'Project',
    SubdomainOrder: 'SubdomainOrder',
    Exercise: 'Exercise',
    Workout: 'Workout',
    WorkoutExercise: 'WorkoutExercise',
    Set: 'Set',
    Routine: 'Routine',
    RoutineExercise: 'RoutineExercise',
    BodyMeasurement: 'BodyMeasurement',
    FoodItem: 'FoodItem',
    Meal: 'Meal',
    MealFood: 'MealFood',
    FitnessGoal: 'FitnessGoal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "task" | "user" | "project" | "subdomainOrder" | "exercise" | "workout" | "workoutExercise" | "set" | "routine" | "routineExercise" | "bodyMeasurement" | "foodItem" | "meal" | "mealFood" | "fitnessGoal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
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
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      SubdomainOrder: {
        payload: Prisma.$SubdomainOrderPayload<ExtArgs>
        fields: Prisma.SubdomainOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubdomainOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubdomainOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload>
          }
          findFirst: {
            args: Prisma.SubdomainOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubdomainOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload>
          }
          findMany: {
            args: Prisma.SubdomainOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload>[]
          }
          create: {
            args: Prisma.SubdomainOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload>
          }
          createMany: {
            args: Prisma.SubdomainOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubdomainOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload>[]
          }
          delete: {
            args: Prisma.SubdomainOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload>
          }
          update: {
            args: Prisma.SubdomainOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload>
          }
          deleteMany: {
            args: Prisma.SubdomainOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubdomainOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubdomainOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload>[]
          }
          upsert: {
            args: Prisma.SubdomainOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainOrderPayload>
          }
          aggregate: {
            args: Prisma.SubdomainOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubdomainOrder>
          }
          groupBy: {
            args: Prisma.SubdomainOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubdomainOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubdomainOrderCountArgs<ExtArgs>
            result: $Utils.Optional<SubdomainOrderCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      WorkoutExercise: {
        payload: Prisma.$WorkoutExercisePayload<ExtArgs>
        fields: Prisma.WorkoutExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findFirst: {
            args: Prisma.WorkoutExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findMany: {
            args: Prisma.WorkoutExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          create: {
            args: Prisma.WorkoutExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          createMany: {
            args: Prisma.WorkoutExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          delete: {
            args: Prisma.WorkoutExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          update: {
            args: Prisma.WorkoutExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          deleteMany: {
            args: Prisma.WorkoutExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          upsert: {
            args: Prisma.WorkoutExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          aggregate: {
            args: Prisma.WorkoutExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutExercise>
          }
          groupBy: {
            args: Prisma.WorkoutExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseCountAggregateOutputType> | number
          }
        }
      }
      Set: {
        payload: Prisma.$SetPayload<ExtArgs>
        fields: Prisma.SetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          findFirst: {
            args: Prisma.SetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          findMany: {
            args: Prisma.SetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          create: {
            args: Prisma.SetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          createMany: {
            args: Prisma.SetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          delete: {
            args: Prisma.SetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          update: {
            args: Prisma.SetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          deleteMany: {
            args: Prisma.SetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          upsert: {
            args: Prisma.SetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          aggregate: {
            args: Prisma.SetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSet>
          }
          groupBy: {
            args: Prisma.SetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetCountArgs<ExtArgs>
            result: $Utils.Optional<SetCountAggregateOutputType> | number
          }
        }
      }
      Routine: {
        payload: Prisma.$RoutinePayload<ExtArgs>
        fields: Prisma.RoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findFirst: {
            args: Prisma.RoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findMany: {
            args: Prisma.RoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          create: {
            args: Prisma.RoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          createMany: {
            args: Prisma.RoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          delete: {
            args: Prisma.RoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          update: {
            args: Prisma.RoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          deleteMany: {
            args: Prisma.RoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          upsert: {
            args: Prisma.RoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          aggregate: {
            args: Prisma.RoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutine>
          }
          groupBy: {
            args: Prisma.RoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineCountAggregateOutputType> | number
          }
        }
      }
      RoutineExercise: {
        payload: Prisma.$RoutineExercisePayload<ExtArgs>
        fields: Prisma.RoutineExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          findFirst: {
            args: Prisma.RoutineExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          findMany: {
            args: Prisma.RoutineExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>[]
          }
          create: {
            args: Prisma.RoutineExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          createMany: {
            args: Prisma.RoutineExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>[]
          }
          delete: {
            args: Prisma.RoutineExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          update: {
            args: Prisma.RoutineExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          deleteMany: {
            args: Prisma.RoutineExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutineExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>[]
          }
          upsert: {
            args: Prisma.RoutineExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePayload>
          }
          aggregate: {
            args: Prisma.RoutineExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutineExercise>
          }
          groupBy: {
            args: Prisma.RoutineExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineExerciseCountAggregateOutputType> | number
          }
        }
      }
      BodyMeasurement: {
        payload: Prisma.$BodyMeasurementPayload<ExtArgs>
        fields: Prisma.BodyMeasurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BodyMeasurementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BodyMeasurementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          findFirst: {
            args: Prisma.BodyMeasurementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BodyMeasurementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          findMany: {
            args: Prisma.BodyMeasurementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          create: {
            args: Prisma.BodyMeasurementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          createMany: {
            args: Prisma.BodyMeasurementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BodyMeasurementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          delete: {
            args: Prisma.BodyMeasurementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          update: {
            args: Prisma.BodyMeasurementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          deleteMany: {
            args: Prisma.BodyMeasurementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BodyMeasurementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BodyMeasurementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          upsert: {
            args: Prisma.BodyMeasurementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          aggregate: {
            args: Prisma.BodyMeasurementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBodyMeasurement>
          }
          groupBy: {
            args: Prisma.BodyMeasurementGroupByArgs<ExtArgs>
            result: $Utils.Optional<BodyMeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.BodyMeasurementCountArgs<ExtArgs>
            result: $Utils.Optional<BodyMeasurementCountAggregateOutputType> | number
          }
        }
      }
      FoodItem: {
        payload: Prisma.$FoodItemPayload<ExtArgs>
        fields: Prisma.FoodItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findFirst: {
            args: Prisma.FoodItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findMany: {
            args: Prisma.FoodItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          create: {
            args: Prisma.FoodItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          createMany: {
            args: Prisma.FoodItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          delete: {
            args: Prisma.FoodItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          update: {
            args: Prisma.FoodItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          deleteMany: {
            args: Prisma.FoodItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          upsert: {
            args: Prisma.FoodItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          aggregate: {
            args: Prisma.FoodItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodItem>
          }
          groupBy: {
            args: Prisma.FoodItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodItemCountArgs<ExtArgs>
            result: $Utils.Optional<FoodItemCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      MealFood: {
        payload: Prisma.$MealFoodPayload<ExtArgs>
        fields: Prisma.MealFoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          findFirst: {
            args: Prisma.MealFoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          findMany: {
            args: Prisma.MealFoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>[]
          }
          create: {
            args: Prisma.MealFoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          createMany: {
            args: Prisma.MealFoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealFoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>[]
          }
          delete: {
            args: Prisma.MealFoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          update: {
            args: Prisma.MealFoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          deleteMany: {
            args: Prisma.MealFoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealFoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealFoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>[]
          }
          upsert: {
            args: Prisma.MealFoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          aggregate: {
            args: Prisma.MealFoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealFood>
          }
          groupBy: {
            args: Prisma.MealFoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealFoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealFoodCountArgs<ExtArgs>
            result: $Utils.Optional<MealFoodCountAggregateOutputType> | number
          }
        }
      }
      FitnessGoal: {
        payload: Prisma.$FitnessGoalPayload<ExtArgs>
        fields: Prisma.FitnessGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FitnessGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FitnessGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          findFirst: {
            args: Prisma.FitnessGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FitnessGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          findMany: {
            args: Prisma.FitnessGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>[]
          }
          create: {
            args: Prisma.FitnessGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          createMany: {
            args: Prisma.FitnessGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FitnessGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>[]
          }
          delete: {
            args: Prisma.FitnessGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          update: {
            args: Prisma.FitnessGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          deleteMany: {
            args: Prisma.FitnessGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FitnessGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FitnessGoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>[]
          }
          upsert: {
            args: Prisma.FitnessGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          aggregate: {
            args: Prisma.FitnessGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFitnessGoal>
          }
          groupBy: {
            args: Prisma.FitnessGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<FitnessGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.FitnessGoalCountArgs<ExtArgs>
            result: $Utils.Optional<FitnessGoalCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    task?: TaskOmit
    user?: UserOmit
    project?: ProjectOmit
    subdomainOrder?: SubdomainOrderOmit
    exercise?: ExerciseOmit
    workout?: WorkoutOmit
    workoutExercise?: WorkoutExerciseOmit
    set?: SetOmit
    routine?: RoutineOmit
    routineExercise?: RoutineExerciseOmit
    bodyMeasurement?: BodyMeasurementOmit
    foodItem?: FoodItemOmit
    meal?: MealOmit
    mealFood?: MealFoodOmit
    fitnessGoal?: FitnessGoalOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    workouts: number
    routines: number
    bodyMeasurements: number
    meals: number
    fitnessGoals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    workouts?: boolean | UserCountOutputTypeCountWorkoutsArgs
    routines?: boolean | UserCountOutputTypeCountRoutinesArgs
    bodyMeasurements?: boolean | UserCountOutputTypeCountBodyMeasurementsArgs
    meals?: boolean | UserCountOutputTypeCountMealsArgs
    fitnessGoals?: boolean | UserCountOutputTypeCountFitnessGoalsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBodyMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMeasurementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFitnessGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FitnessGoalWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    workoutExercises: number
    routineExercises: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercises?: boolean | ExerciseCountOutputTypeCountWorkoutExercisesArgs
    routineExercises?: boolean | ExerciseCountOutputTypeCountRoutineExercisesArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountRoutineExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineExerciseWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    exercises: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }


  /**
   * Count Type WorkoutExerciseCountOutputType
   */

  export type WorkoutExerciseCountOutputType = {
    sets: number
  }

  export type WorkoutExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sets?: boolean | WorkoutExerciseCountOutputTypeCountSetsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutExerciseCountOutputType without action
   */
  export type WorkoutExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExerciseCountOutputType
     */
    select?: WorkoutExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutExerciseCountOutputType without action
   */
  export type WorkoutExerciseCountOutputTypeCountSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetWhereInput
  }


  /**
   * Count Type RoutineCountOutputType
   */

  export type RoutineCountOutputType = {
    exercises: number
  }

  export type RoutineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | RoutineCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineCountOutputType
     */
    select?: RoutineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineExerciseWhereInput
  }


  /**
   * Count Type FoodItemCountOutputType
   */

  export type FoodItemCountOutputType = {
    mealFoods: number
  }

  export type FoodItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealFoods?: boolean | FoodItemCountOutputTypeCountMealFoodsArgs
  }

  // Custom InputTypes
  /**
   * FoodItemCountOutputType without action
   */
  export type FoodItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItemCountOutputType
     */
    select?: FoodItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodItemCountOutputType without action
   */
  export type FoodItemCountOutputTypeCountMealFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealFoodWhereInput
  }


  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    foods: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | MealCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes
  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealFoodWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: string | null
    priority: string | null
    owner: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: string | null
    priority: string | null
    owner: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    owner: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    owner?: true
    createdAt?: true
    completedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    owner?: true
    createdAt?: true
    completedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    owner?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: string
    priority: string
    owner: string
    createdAt: Date
    completedAt: Date | null
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    owner?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    owner?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    owner?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    owner?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "owner" | "createdAt" | "completedAt", ExtArgs["result"]["task"]>

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: string
      priority: string
      owner: string
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'String'>
    readonly owner: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
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
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    workouts?: boolean | User$workoutsArgs<ExtArgs>
    routines?: boolean | User$routinesArgs<ExtArgs>
    bodyMeasurements?: boolean | User$bodyMeasurementsArgs<ExtArgs>
    meals?: boolean | User$mealsArgs<ExtArgs>
    fitnessGoals?: boolean | User$fitnessGoalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    workouts?: boolean | User$workoutsArgs<ExtArgs>
    routines?: boolean | User$routinesArgs<ExtArgs>
    bodyMeasurements?: boolean | User$bodyMeasurementsArgs<ExtArgs>
    meals?: boolean | User$mealsArgs<ExtArgs>
    fitnessGoals?: boolean | User$fitnessGoalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
      routines: Prisma.$RoutinePayload<ExtArgs>[]
      bodyMeasurements: Prisma.$BodyMeasurementPayload<ExtArgs>[]
      meals: Prisma.$MealPayload<ExtArgs>[]
      fitnessGoals: Prisma.$FitnessGoalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
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
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workouts<T extends User$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routines<T extends User$routinesArgs<ExtArgs> = {}>(args?: Subset<T, User$routinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bodyMeasurements<T extends User$bodyMeasurementsArgs<ExtArgs> = {}>(args?: Subset<T, User$bodyMeasurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meals<T extends User$mealsArgs<ExtArgs> = {}>(args?: Subset<T, User$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fitnessGoals<T extends User$fitnessGoalsArgs<ExtArgs> = {}>(args?: Subset<T, User$fitnessGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.workouts
   */
  export type User$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * User.routines
   */
  export type User$routinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    cursor?: RoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * User.bodyMeasurements
   */
  export type User$bodyMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    where?: BodyMeasurementWhereInput
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    cursor?: BodyMeasurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * User.meals
   */
  export type User$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * User.fitnessGoals
   */
  export type User$fitnessGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    where?: FitnessGoalWhereInput
    orderBy?: FitnessGoalOrderByWithRelationInput | FitnessGoalOrderByWithRelationInput[]
    cursor?: FitnessGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FitnessGoalScalarFieldEnum | FitnessGoalScalarFieldEnum[]
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
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    messages: string | null
    data: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    messages: string | null
    data: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    messages: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    messages?: true
    data?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    messages?: true
    data?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    messages?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    userId: string | null
    messages: string
    data: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    messages?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Project$userArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    messages?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Project$userArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    messages?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Project$userArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    messages?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "messages" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Project$userArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Project$userArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Project$userArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string | null
      messages: string
      data: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Project$userArgs<ExtArgs> = {}>(args?: Subset<T, Project$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly messages: FieldRef<"Project", 'String'>
    readonly data: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.user
   */
  export type Project$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model SubdomainOrder
   */

  export type AggregateSubdomainOrder = {
    _count: SubdomainOrderCountAggregateOutputType | null
    _avg: SubdomainOrderAvgAggregateOutputType | null
    _sum: SubdomainOrderSumAggregateOutputType | null
    _min: SubdomainOrderMinAggregateOutputType | null
    _max: SubdomainOrderMaxAggregateOutputType | null
  }

  export type SubdomainOrderAvgAggregateOutputType = {
    price: number | null
  }

  export type SubdomainOrderSumAggregateOutputType = {
    price: number | null
  }

  export type SubdomainOrderMinAggregateOutputType = {
    id: string | null
    subdomain: string | null
    rootDomain: string | null
    fullDomain: string | null
    target: string | null
    recordType: string | null
    clientName: string | null
    clientEmail: string | null
    clientPhone: string | null
    price: number | null
    currency: string | null
    status: string | null
    cfRecordId: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubdomainOrderMaxAggregateOutputType = {
    id: string | null
    subdomain: string | null
    rootDomain: string | null
    fullDomain: string | null
    target: string | null
    recordType: string | null
    clientName: string | null
    clientEmail: string | null
    clientPhone: string | null
    price: number | null
    currency: string | null
    status: string | null
    cfRecordId: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubdomainOrderCountAggregateOutputType = {
    id: number
    subdomain: number
    rootDomain: number
    fullDomain: number
    target: number
    recordType: number
    clientName: number
    clientEmail: number
    clientPhone: number
    price: number
    currency: number
    status: number
    cfRecordId: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubdomainOrderAvgAggregateInputType = {
    price?: true
  }

  export type SubdomainOrderSumAggregateInputType = {
    price?: true
  }

  export type SubdomainOrderMinAggregateInputType = {
    id?: true
    subdomain?: true
    rootDomain?: true
    fullDomain?: true
    target?: true
    recordType?: true
    clientName?: true
    clientEmail?: true
    clientPhone?: true
    price?: true
    currency?: true
    status?: true
    cfRecordId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubdomainOrderMaxAggregateInputType = {
    id?: true
    subdomain?: true
    rootDomain?: true
    fullDomain?: true
    target?: true
    recordType?: true
    clientName?: true
    clientEmail?: true
    clientPhone?: true
    price?: true
    currency?: true
    status?: true
    cfRecordId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubdomainOrderCountAggregateInputType = {
    id?: true
    subdomain?: true
    rootDomain?: true
    fullDomain?: true
    target?: true
    recordType?: true
    clientName?: true
    clientEmail?: true
    clientPhone?: true
    price?: true
    currency?: true
    status?: true
    cfRecordId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubdomainOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubdomainOrder to aggregate.
     */
    where?: SubdomainOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubdomainOrders to fetch.
     */
    orderBy?: SubdomainOrderOrderByWithRelationInput | SubdomainOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubdomainOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubdomainOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubdomainOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubdomainOrders
    **/
    _count?: true | SubdomainOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubdomainOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubdomainOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubdomainOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubdomainOrderMaxAggregateInputType
  }

  export type GetSubdomainOrderAggregateType<T extends SubdomainOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateSubdomainOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubdomainOrder[P]>
      : GetScalarType<T[P], AggregateSubdomainOrder[P]>
  }




  export type SubdomainOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubdomainOrderWhereInput
    orderBy?: SubdomainOrderOrderByWithAggregationInput | SubdomainOrderOrderByWithAggregationInput[]
    by: SubdomainOrderScalarFieldEnum[] | SubdomainOrderScalarFieldEnum
    having?: SubdomainOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubdomainOrderCountAggregateInputType | true
    _avg?: SubdomainOrderAvgAggregateInputType
    _sum?: SubdomainOrderSumAggregateInputType
    _min?: SubdomainOrderMinAggregateInputType
    _max?: SubdomainOrderMaxAggregateInputType
  }

  export type SubdomainOrderGroupByOutputType = {
    id: string
    subdomain: string
    rootDomain: string
    fullDomain: string
    target: string
    recordType: string
    clientName: string
    clientEmail: string
    clientPhone: string | null
    price: number
    currency: string
    status: string
    cfRecordId: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubdomainOrderCountAggregateOutputType | null
    _avg: SubdomainOrderAvgAggregateOutputType | null
    _sum: SubdomainOrderSumAggregateOutputType | null
    _min: SubdomainOrderMinAggregateOutputType | null
    _max: SubdomainOrderMaxAggregateOutputType | null
  }

  type GetSubdomainOrderGroupByPayload<T extends SubdomainOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubdomainOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubdomainOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubdomainOrderGroupByOutputType[P]>
            : GetScalarType<T[P], SubdomainOrderGroupByOutputType[P]>
        }
      >
    >


  export type SubdomainOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subdomain?: boolean
    rootDomain?: boolean
    fullDomain?: boolean
    target?: boolean
    recordType?: boolean
    clientName?: boolean
    clientEmail?: boolean
    clientPhone?: boolean
    price?: boolean
    currency?: boolean
    status?: boolean
    cfRecordId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subdomainOrder"]>

  export type SubdomainOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subdomain?: boolean
    rootDomain?: boolean
    fullDomain?: boolean
    target?: boolean
    recordType?: boolean
    clientName?: boolean
    clientEmail?: boolean
    clientPhone?: boolean
    price?: boolean
    currency?: boolean
    status?: boolean
    cfRecordId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subdomainOrder"]>

  export type SubdomainOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subdomain?: boolean
    rootDomain?: boolean
    fullDomain?: boolean
    target?: boolean
    recordType?: boolean
    clientName?: boolean
    clientEmail?: boolean
    clientPhone?: boolean
    price?: boolean
    currency?: boolean
    status?: boolean
    cfRecordId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subdomainOrder"]>

  export type SubdomainOrderSelectScalar = {
    id?: boolean
    subdomain?: boolean
    rootDomain?: boolean
    fullDomain?: boolean
    target?: boolean
    recordType?: boolean
    clientName?: boolean
    clientEmail?: boolean
    clientPhone?: boolean
    price?: boolean
    currency?: boolean
    status?: boolean
    cfRecordId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubdomainOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subdomain" | "rootDomain" | "fullDomain" | "target" | "recordType" | "clientName" | "clientEmail" | "clientPhone" | "price" | "currency" | "status" | "cfRecordId" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["subdomainOrder"]>

  export type $SubdomainOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubdomainOrder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subdomain: string
      rootDomain: string
      fullDomain: string
      target: string
      recordType: string
      clientName: string
      clientEmail: string
      clientPhone: string | null
      price: number
      currency: string
      status: string
      cfRecordId: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subdomainOrder"]>
    composites: {}
  }

  type SubdomainOrderGetPayload<S extends boolean | null | undefined | SubdomainOrderDefaultArgs> = $Result.GetResult<Prisma.$SubdomainOrderPayload, S>

  type SubdomainOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubdomainOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubdomainOrderCountAggregateInputType | true
    }

  export interface SubdomainOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubdomainOrder'], meta: { name: 'SubdomainOrder' } }
    /**
     * Find zero or one SubdomainOrder that matches the filter.
     * @param {SubdomainOrderFindUniqueArgs} args - Arguments to find a SubdomainOrder
     * @example
     * // Get one SubdomainOrder
     * const subdomainOrder = await prisma.subdomainOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubdomainOrderFindUniqueArgs>(args: SelectSubset<T, SubdomainOrderFindUniqueArgs<ExtArgs>>): Prisma__SubdomainOrderClient<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubdomainOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubdomainOrderFindUniqueOrThrowArgs} args - Arguments to find a SubdomainOrder
     * @example
     * // Get one SubdomainOrder
     * const subdomainOrder = await prisma.subdomainOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubdomainOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, SubdomainOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubdomainOrderClient<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubdomainOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainOrderFindFirstArgs} args - Arguments to find a SubdomainOrder
     * @example
     * // Get one SubdomainOrder
     * const subdomainOrder = await prisma.subdomainOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubdomainOrderFindFirstArgs>(args?: SelectSubset<T, SubdomainOrderFindFirstArgs<ExtArgs>>): Prisma__SubdomainOrderClient<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubdomainOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainOrderFindFirstOrThrowArgs} args - Arguments to find a SubdomainOrder
     * @example
     * // Get one SubdomainOrder
     * const subdomainOrder = await prisma.subdomainOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubdomainOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, SubdomainOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubdomainOrderClient<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubdomainOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubdomainOrders
     * const subdomainOrders = await prisma.subdomainOrder.findMany()
     * 
     * // Get first 10 SubdomainOrders
     * const subdomainOrders = await prisma.subdomainOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subdomainOrderWithIdOnly = await prisma.subdomainOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubdomainOrderFindManyArgs>(args?: SelectSubset<T, SubdomainOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubdomainOrder.
     * @param {SubdomainOrderCreateArgs} args - Arguments to create a SubdomainOrder.
     * @example
     * // Create one SubdomainOrder
     * const SubdomainOrder = await prisma.subdomainOrder.create({
     *   data: {
     *     // ... data to create a SubdomainOrder
     *   }
     * })
     * 
     */
    create<T extends SubdomainOrderCreateArgs>(args: SelectSubset<T, SubdomainOrderCreateArgs<ExtArgs>>): Prisma__SubdomainOrderClient<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubdomainOrders.
     * @param {SubdomainOrderCreateManyArgs} args - Arguments to create many SubdomainOrders.
     * @example
     * // Create many SubdomainOrders
     * const subdomainOrder = await prisma.subdomainOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubdomainOrderCreateManyArgs>(args?: SelectSubset<T, SubdomainOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubdomainOrders and returns the data saved in the database.
     * @param {SubdomainOrderCreateManyAndReturnArgs} args - Arguments to create many SubdomainOrders.
     * @example
     * // Create many SubdomainOrders
     * const subdomainOrder = await prisma.subdomainOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubdomainOrders and only return the `id`
     * const subdomainOrderWithIdOnly = await prisma.subdomainOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubdomainOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, SubdomainOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubdomainOrder.
     * @param {SubdomainOrderDeleteArgs} args - Arguments to delete one SubdomainOrder.
     * @example
     * // Delete one SubdomainOrder
     * const SubdomainOrder = await prisma.subdomainOrder.delete({
     *   where: {
     *     // ... filter to delete one SubdomainOrder
     *   }
     * })
     * 
     */
    delete<T extends SubdomainOrderDeleteArgs>(args: SelectSubset<T, SubdomainOrderDeleteArgs<ExtArgs>>): Prisma__SubdomainOrderClient<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubdomainOrder.
     * @param {SubdomainOrderUpdateArgs} args - Arguments to update one SubdomainOrder.
     * @example
     * // Update one SubdomainOrder
     * const subdomainOrder = await prisma.subdomainOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubdomainOrderUpdateArgs>(args: SelectSubset<T, SubdomainOrderUpdateArgs<ExtArgs>>): Prisma__SubdomainOrderClient<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubdomainOrders.
     * @param {SubdomainOrderDeleteManyArgs} args - Arguments to filter SubdomainOrders to delete.
     * @example
     * // Delete a few SubdomainOrders
     * const { count } = await prisma.subdomainOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubdomainOrderDeleteManyArgs>(args?: SelectSubset<T, SubdomainOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubdomainOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubdomainOrders
     * const subdomainOrder = await prisma.subdomainOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubdomainOrderUpdateManyArgs>(args: SelectSubset<T, SubdomainOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubdomainOrders and returns the data updated in the database.
     * @param {SubdomainOrderUpdateManyAndReturnArgs} args - Arguments to update many SubdomainOrders.
     * @example
     * // Update many SubdomainOrders
     * const subdomainOrder = await prisma.subdomainOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubdomainOrders and only return the `id`
     * const subdomainOrderWithIdOnly = await prisma.subdomainOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubdomainOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, SubdomainOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubdomainOrder.
     * @param {SubdomainOrderUpsertArgs} args - Arguments to update or create a SubdomainOrder.
     * @example
     * // Update or create a SubdomainOrder
     * const subdomainOrder = await prisma.subdomainOrder.upsert({
     *   create: {
     *     // ... data to create a SubdomainOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubdomainOrder we want to update
     *   }
     * })
     */
    upsert<T extends SubdomainOrderUpsertArgs>(args: SelectSubset<T, SubdomainOrderUpsertArgs<ExtArgs>>): Prisma__SubdomainOrderClient<$Result.GetResult<Prisma.$SubdomainOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubdomainOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainOrderCountArgs} args - Arguments to filter SubdomainOrders to count.
     * @example
     * // Count the number of SubdomainOrders
     * const count = await prisma.subdomainOrder.count({
     *   where: {
     *     // ... the filter for the SubdomainOrders we want to count
     *   }
     * })
    **/
    count<T extends SubdomainOrderCountArgs>(
      args?: Subset<T, SubdomainOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubdomainOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubdomainOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubdomainOrderAggregateArgs>(args: Subset<T, SubdomainOrderAggregateArgs>): Prisma.PrismaPromise<GetSubdomainOrderAggregateType<T>>

    /**
     * Group by SubdomainOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainOrderGroupByArgs} args - Group by arguments.
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
      T extends SubdomainOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubdomainOrderGroupByArgs['orderBy'] }
        : { orderBy?: SubdomainOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubdomainOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubdomainOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubdomainOrder model
   */
  readonly fields: SubdomainOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubdomainOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubdomainOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SubdomainOrder model
   */
  interface SubdomainOrderFieldRefs {
    readonly id: FieldRef<"SubdomainOrder", 'String'>
    readonly subdomain: FieldRef<"SubdomainOrder", 'String'>
    readonly rootDomain: FieldRef<"SubdomainOrder", 'String'>
    readonly fullDomain: FieldRef<"SubdomainOrder", 'String'>
    readonly target: FieldRef<"SubdomainOrder", 'String'>
    readonly recordType: FieldRef<"SubdomainOrder", 'String'>
    readonly clientName: FieldRef<"SubdomainOrder", 'String'>
    readonly clientEmail: FieldRef<"SubdomainOrder", 'String'>
    readonly clientPhone: FieldRef<"SubdomainOrder", 'String'>
    readonly price: FieldRef<"SubdomainOrder", 'Float'>
    readonly currency: FieldRef<"SubdomainOrder", 'String'>
    readonly status: FieldRef<"SubdomainOrder", 'String'>
    readonly cfRecordId: FieldRef<"SubdomainOrder", 'String'>
    readonly notes: FieldRef<"SubdomainOrder", 'String'>
    readonly createdAt: FieldRef<"SubdomainOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"SubdomainOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubdomainOrder findUnique
   */
  export type SubdomainOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * Filter, which SubdomainOrder to fetch.
     */
    where: SubdomainOrderWhereUniqueInput
  }

  /**
   * SubdomainOrder findUniqueOrThrow
   */
  export type SubdomainOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * Filter, which SubdomainOrder to fetch.
     */
    where: SubdomainOrderWhereUniqueInput
  }

  /**
   * SubdomainOrder findFirst
   */
  export type SubdomainOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * Filter, which SubdomainOrder to fetch.
     */
    where?: SubdomainOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubdomainOrders to fetch.
     */
    orderBy?: SubdomainOrderOrderByWithRelationInput | SubdomainOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubdomainOrders.
     */
    cursor?: SubdomainOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubdomainOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubdomainOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubdomainOrders.
     */
    distinct?: SubdomainOrderScalarFieldEnum | SubdomainOrderScalarFieldEnum[]
  }

  /**
   * SubdomainOrder findFirstOrThrow
   */
  export type SubdomainOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * Filter, which SubdomainOrder to fetch.
     */
    where?: SubdomainOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubdomainOrders to fetch.
     */
    orderBy?: SubdomainOrderOrderByWithRelationInput | SubdomainOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubdomainOrders.
     */
    cursor?: SubdomainOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubdomainOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubdomainOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubdomainOrders.
     */
    distinct?: SubdomainOrderScalarFieldEnum | SubdomainOrderScalarFieldEnum[]
  }

  /**
   * SubdomainOrder findMany
   */
  export type SubdomainOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * Filter, which SubdomainOrders to fetch.
     */
    where?: SubdomainOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubdomainOrders to fetch.
     */
    orderBy?: SubdomainOrderOrderByWithRelationInput | SubdomainOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubdomainOrders.
     */
    cursor?: SubdomainOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubdomainOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubdomainOrders.
     */
    skip?: number
    distinct?: SubdomainOrderScalarFieldEnum | SubdomainOrderScalarFieldEnum[]
  }

  /**
   * SubdomainOrder create
   */
  export type SubdomainOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * The data needed to create a SubdomainOrder.
     */
    data: XOR<SubdomainOrderCreateInput, SubdomainOrderUncheckedCreateInput>
  }

  /**
   * SubdomainOrder createMany
   */
  export type SubdomainOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubdomainOrders.
     */
    data: SubdomainOrderCreateManyInput | SubdomainOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubdomainOrder createManyAndReturn
   */
  export type SubdomainOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * The data used to create many SubdomainOrders.
     */
    data: SubdomainOrderCreateManyInput | SubdomainOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubdomainOrder update
   */
  export type SubdomainOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * The data needed to update a SubdomainOrder.
     */
    data: XOR<SubdomainOrderUpdateInput, SubdomainOrderUncheckedUpdateInput>
    /**
     * Choose, which SubdomainOrder to update.
     */
    where: SubdomainOrderWhereUniqueInput
  }

  /**
   * SubdomainOrder updateMany
   */
  export type SubdomainOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubdomainOrders.
     */
    data: XOR<SubdomainOrderUpdateManyMutationInput, SubdomainOrderUncheckedUpdateManyInput>
    /**
     * Filter which SubdomainOrders to update
     */
    where?: SubdomainOrderWhereInput
    /**
     * Limit how many SubdomainOrders to update.
     */
    limit?: number
  }

  /**
   * SubdomainOrder updateManyAndReturn
   */
  export type SubdomainOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * The data used to update SubdomainOrders.
     */
    data: XOR<SubdomainOrderUpdateManyMutationInput, SubdomainOrderUncheckedUpdateManyInput>
    /**
     * Filter which SubdomainOrders to update
     */
    where?: SubdomainOrderWhereInput
    /**
     * Limit how many SubdomainOrders to update.
     */
    limit?: number
  }

  /**
   * SubdomainOrder upsert
   */
  export type SubdomainOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * The filter to search for the SubdomainOrder to update in case it exists.
     */
    where: SubdomainOrderWhereUniqueInput
    /**
     * In case the SubdomainOrder found by the `where` argument doesn't exist, create a new SubdomainOrder with this data.
     */
    create: XOR<SubdomainOrderCreateInput, SubdomainOrderUncheckedCreateInput>
    /**
     * In case the SubdomainOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubdomainOrderUpdateInput, SubdomainOrderUncheckedUpdateInput>
  }

  /**
   * SubdomainOrder delete
   */
  export type SubdomainOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
    /**
     * Filter which SubdomainOrder to delete.
     */
    where: SubdomainOrderWhereUniqueInput
  }

  /**
   * SubdomainOrder deleteMany
   */
  export type SubdomainOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubdomainOrders to delete
     */
    where?: SubdomainOrderWhereInput
    /**
     * Limit how many SubdomainOrders to delete.
     */
    limit?: number
  }

  /**
   * SubdomainOrder without action
   */
  export type SubdomainOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainOrder
     */
    select?: SubdomainOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubdomainOrder
     */
    omit?: SubdomainOrderOmit<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    bodyPart: string | null
    equipment: string | null
    target: string | null
    muscleGroup: string | null
    instructions: string | null
    image: string | null
    gifUrl: string | null
    attribution: string | null
    createdAt: Date | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    bodyPart: string | null
    equipment: string | null
    target: string | null
    muscleGroup: string | null
    instructions: string | null
    image: string | null
    gifUrl: string | null
    attribution: string | null
    createdAt: Date | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    category: number
    bodyPart: number
    equipment: number
    target: number
    muscleGroup: number
    secondaryMuscles: number
    instructions: number
    image: number
    gifUrl: number
    attribution: number
    createdAt: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    bodyPart?: true
    equipment?: true
    target?: true
    muscleGroup?: true
    instructions?: true
    image?: true
    gifUrl?: true
    attribution?: true
    createdAt?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    bodyPart?: true
    equipment?: true
    target?: true
    muscleGroup?: true
    instructions?: true
    image?: true
    gifUrl?: true
    attribution?: true
    createdAt?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    bodyPart?: true
    equipment?: true
    target?: true
    muscleGroup?: true
    secondaryMuscles?: true
    instructions?: true
    image?: true
    gifUrl?: true
    attribution?: true
    createdAt?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    name: string
    category: string
    bodyPart: string
    equipment: string
    target: string
    muscleGroup: string
    secondaryMuscles: JsonValue
    instructions: string
    image: string | null
    gifUrl: string | null
    attribution: string | null
    createdAt: Date
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    bodyPart?: boolean
    equipment?: boolean
    target?: boolean
    muscleGroup?: boolean
    secondaryMuscles?: boolean
    instructions?: boolean
    image?: boolean
    gifUrl?: boolean
    attribution?: boolean
    createdAt?: boolean
    workoutExercises?: boolean | Exercise$workoutExercisesArgs<ExtArgs>
    routineExercises?: boolean | Exercise$routineExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    bodyPart?: boolean
    equipment?: boolean
    target?: boolean
    muscleGroup?: boolean
    secondaryMuscles?: boolean
    instructions?: boolean
    image?: boolean
    gifUrl?: boolean
    attribution?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    bodyPart?: boolean
    equipment?: boolean
    target?: boolean
    muscleGroup?: boolean
    secondaryMuscles?: boolean
    instructions?: boolean
    image?: boolean
    gifUrl?: boolean
    attribution?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    bodyPart?: boolean
    equipment?: boolean
    target?: boolean
    muscleGroup?: boolean
    secondaryMuscles?: boolean
    instructions?: boolean
    image?: boolean
    gifUrl?: boolean
    attribution?: boolean
    createdAt?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "bodyPart" | "equipment" | "target" | "muscleGroup" | "secondaryMuscles" | "instructions" | "image" | "gifUrl" | "attribution" | "createdAt", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercises?: boolean | Exercise$workoutExercisesArgs<ExtArgs>
    routineExercises?: boolean | Exercise$routineExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      workoutExercises: Prisma.$WorkoutExercisePayload<ExtArgs>[]
      routineExercises: Prisma.$RoutineExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      bodyPart: string
      equipment: string
      target: string
      muscleGroup: string
      secondaryMuscles: Prisma.JsonValue
      instructions: string
      image: string | null
      gifUrl: string | null
      attribution: string | null
      createdAt: Date
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutExercises<T extends Exercise$workoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$workoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routineExercises<T extends Exercise$routineExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$routineExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly category: FieldRef<"Exercise", 'String'>
    readonly bodyPart: FieldRef<"Exercise", 'String'>
    readonly equipment: FieldRef<"Exercise", 'String'>
    readonly target: FieldRef<"Exercise", 'String'>
    readonly muscleGroup: FieldRef<"Exercise", 'String'>
    readonly secondaryMuscles: FieldRef<"Exercise", 'Json'>
    readonly instructions: FieldRef<"Exercise", 'String'>
    readonly image: FieldRef<"Exercise", 'String'>
    readonly gifUrl: FieldRef<"Exercise", 'String'>
    readonly attribution: FieldRef<"Exercise", 'String'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.workoutExercises
   */
  export type Exercise$workoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Exercise.routineExercises
   */
  export type Exercise$routineExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    where?: RoutineExerciseWhereInput
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    cursor?: RoutineExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineExerciseScalarFieldEnum | RoutineExerciseScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    duration: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    duration: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    notes: string | null
    duration: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    notes: string | null
    duration: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    notes: number
    duration: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    duration?: true
  }

  export type WorkoutSumAggregateInputType = {
    duration?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    notes?: true
    duration?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    notes?: true
    duration?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    notes?: true
    duration?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    notes: string | null
    duration: number | null
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    notes?: boolean
    duration?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    notes?: boolean
    duration?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    notes?: boolean
    duration?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    notes?: boolean
    duration?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "notes" | "duration" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exercises: Prisma.$WorkoutExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
      notes: string | null
      duration: number | null
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends Workout$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Workout$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'String'>
    readonly userId: FieldRef<"Workout", 'String'>
    readonly name: FieldRef<"Workout", 'String'>
    readonly notes: FieldRef<"Workout", 'String'>
    readonly duration: FieldRef<"Workout", 'Int'>
    readonly date: FieldRef<"Workout", 'DateTime'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
    readonly updatedAt: FieldRef<"Workout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout.exercises
   */
  export type Workout$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutExercise
   */

  export type AggregateWorkoutExercise = {
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  export type WorkoutExerciseAvgAggregateOutputType = {
    order: number | null
  }

  export type WorkoutExerciseSumAggregateOutputType = {
    order: number | null
  }

  export type WorkoutExerciseMinAggregateOutputType = {
    id: string | null
    workoutId: string | null
    exerciseId: string | null
    order: number | null
    notes: string | null
  }

  export type WorkoutExerciseMaxAggregateOutputType = {
    id: string | null
    workoutId: string | null
    exerciseId: string | null
    order: number | null
    notes: string | null
  }

  export type WorkoutExerciseCountAggregateOutputType = {
    id: number
    workoutId: number
    exerciseId: number
    order: number
    notes: number
    _all: number
  }


  export type WorkoutExerciseAvgAggregateInputType = {
    order?: true
  }

  export type WorkoutExerciseSumAggregateInputType = {
    order?: true
  }

  export type WorkoutExerciseMinAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    notes?: true
  }

  export type WorkoutExerciseMaxAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    notes?: true
  }

  export type WorkoutExerciseCountAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    notes?: true
    _all?: true
  }

  export type WorkoutExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercise to aggregate.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutExercises
    **/
    _count?: true | WorkoutExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type GetWorkoutExerciseAggregateType<T extends WorkoutExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutExercise[P]>
      : GetScalarType<T[P], AggregateWorkoutExercise[P]>
  }




  export type WorkoutExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithAggregationInput | WorkoutExerciseOrderByWithAggregationInput[]
    by: WorkoutExerciseScalarFieldEnum[] | WorkoutExerciseScalarFieldEnum
    having?: WorkoutExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutExerciseCountAggregateInputType | true
    _avg?: WorkoutExerciseAvgAggregateInputType
    _sum?: WorkoutExerciseSumAggregateInputType
    _min?: WorkoutExerciseMinAggregateInputType
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type WorkoutExerciseGroupByOutputType = {
    id: string
    workoutId: string
    exerciseId: string
    order: number
    notes: string | null
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  type GetWorkoutExerciseGroupByPayload<T extends WorkoutExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    notes?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    sets?: boolean | WorkoutExercise$setsArgs<ExtArgs>
    _count?: boolean | WorkoutExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    notes?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    notes?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectScalar = {
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    notes?: boolean
  }

  export type WorkoutExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutId" | "exerciseId" | "order" | "notes", ExtArgs["result"]["workoutExercise"]>
  export type WorkoutExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    sets?: boolean | WorkoutExercise$setsArgs<ExtArgs>
    _count?: boolean | WorkoutExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $WorkoutExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutExercise"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
      sets: Prisma.$SetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workoutId: string
      exerciseId: string
      order: number
      notes: string | null
    }, ExtArgs["result"]["workoutExercise"]>
    composites: {}
  }

  type WorkoutExerciseGetPayload<S extends boolean | null | undefined | WorkoutExerciseDefaultArgs> = $Result.GetResult<Prisma.$WorkoutExercisePayload, S>

  type WorkoutExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutExerciseCountAggregateInputType | true
    }

  export interface WorkoutExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutExercise'], meta: { name: 'WorkoutExercise' } }
    /**
     * Find zero or one WorkoutExercise that matches the filter.
     * @param {WorkoutExerciseFindUniqueArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutExerciseFindUniqueArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutExerciseFindUniqueOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutExerciseFindFirstArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany()
     * 
     * // Get first 10 WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutExerciseFindManyArgs>(args?: SelectSubset<T, WorkoutExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutExercise.
     * @param {WorkoutExerciseCreateArgs} args - Arguments to create a WorkoutExercise.
     * @example
     * // Create one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.create({
     *   data: {
     *     // ... data to create a WorkoutExercise
     *   }
     * })
     * 
     */
    create<T extends WorkoutExerciseCreateArgs>(args: SelectSubset<T, WorkoutExerciseCreateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutExercises.
     * @param {WorkoutExerciseCreateManyArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutExerciseCreateManyArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutExercises and returns the data saved in the database.
     * @param {WorkoutExerciseCreateManyAndReturnArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutExercises and only return the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutExercise.
     * @param {WorkoutExerciseDeleteArgs} args - Arguments to delete one WorkoutExercise.
     * @example
     * // Delete one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.delete({
     *   where: {
     *     // ... filter to delete one WorkoutExercise
     *   }
     * })
     * 
     */
    delete<T extends WorkoutExerciseDeleteArgs>(args: SelectSubset<T, WorkoutExerciseDeleteArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutExercise.
     * @param {WorkoutExerciseUpdateArgs} args - Arguments to update one WorkoutExercise.
     * @example
     * // Update one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutExerciseUpdateArgs>(args: SelectSubset<T, WorkoutExerciseUpdateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutExercises.
     * @param {WorkoutExerciseDeleteManyArgs} args - Arguments to filter WorkoutExercises to delete.
     * @example
     * // Delete a few WorkoutExercises
     * const { count } = await prisma.workoutExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutExerciseDeleteManyArgs>(args?: SelectSubset<T, WorkoutExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutExerciseUpdateManyArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises and returns the data updated in the database.
     * @param {WorkoutExerciseUpdateManyAndReturnArgs} args - Arguments to update many WorkoutExercises.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutExercises and only return the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutExercise.
     * @param {WorkoutExerciseUpsertArgs} args - Arguments to update or create a WorkoutExercise.
     * @example
     * // Update or create a WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.upsert({
     *   create: {
     *     // ... data to create a WorkoutExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutExercise we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutExerciseUpsertArgs>(args: SelectSubset<T, WorkoutExerciseUpsertArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseCountArgs} args - Arguments to filter WorkoutExercises to count.
     * @example
     * // Count the number of WorkoutExercises
     * const count = await prisma.workoutExercise.count({
     *   where: {
     *     // ... the filter for the WorkoutExercises we want to count
     *   }
     * })
    **/
    count<T extends WorkoutExerciseCountArgs>(
      args?: Subset<T, WorkoutExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutExerciseAggregateArgs>(args: Subset<T, WorkoutExerciseAggregateArgs>): Prisma.PrismaPromise<GetWorkoutExerciseAggregateType<T>>

    /**
     * Group by WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseGroupByArgs} args - Group by arguments.
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
      T extends WorkoutExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutExerciseGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutExercise model
   */
  readonly fields: WorkoutExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sets<T extends WorkoutExercise$setsArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutExercise$setsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkoutExercise model
   */
  interface WorkoutExerciseFieldRefs {
    readonly id: FieldRef<"WorkoutExercise", 'String'>
    readonly workoutId: FieldRef<"WorkoutExercise", 'String'>
    readonly exerciseId: FieldRef<"WorkoutExercise", 'String'>
    readonly order: FieldRef<"WorkoutExercise", 'Int'>
    readonly notes: FieldRef<"WorkoutExercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutExercise findUnique
   */
  export type WorkoutExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findUniqueOrThrow
   */
  export type WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findFirst
   */
  export type WorkoutExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findFirstOrThrow
   */
  export type WorkoutExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findMany
   */
  export type WorkoutExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise create
   */
  export type WorkoutExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
  }

  /**
   * WorkoutExercise createMany
   */
  export type WorkoutExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutExercise createManyAndReturn
   */
  export type WorkoutExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise update
   */
  export type WorkoutExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
    /**
     * Choose, which WorkoutExercise to update.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise updateMany
   */
  export type WorkoutExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
  }

  /**
   * WorkoutExercise updateManyAndReturn
   */
  export type WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise upsert
   */
  export type WorkoutExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutExercise to update in case it exists.
     */
    where: WorkoutExerciseWhereUniqueInput
    /**
     * In case the WorkoutExercise found by the `where` argument doesn't exist, create a new WorkoutExercise with this data.
     */
    create: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
    /**
     * In case the WorkoutExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
  }

  /**
   * WorkoutExercise delete
   */
  export type WorkoutExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter which WorkoutExercise to delete.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise deleteMany
   */
  export type WorkoutExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercises to delete
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to delete.
     */
    limit?: number
  }

  /**
   * WorkoutExercise.sets
   */
  export type WorkoutExercise$setsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    where?: SetWhereInput
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    cursor?: SetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * WorkoutExercise without action
   */
  export type WorkoutExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Set
   */

  export type AggregateSet = {
    _count: SetCountAggregateOutputType | null
    _avg: SetAvgAggregateOutputType | null
    _sum: SetSumAggregateOutputType | null
    _min: SetMinAggregateOutputType | null
    _max: SetMaxAggregateOutputType | null
  }

  export type SetAvgAggregateOutputType = {
    setNumber: number | null
    reps: number | null
    weight: number | null
    rpe: number | null
  }

  export type SetSumAggregateOutputType = {
    setNumber: number | null
    reps: number | null
    weight: number | null
    rpe: number | null
  }

  export type SetMinAggregateOutputType = {
    id: string | null
    workoutExerciseId: string | null
    setNumber: number | null
    reps: number | null
    weight: number | null
    rpe: number | null
    isWarmup: boolean | null
    isDropset: boolean | null
    isFailure: boolean | null
  }

  export type SetMaxAggregateOutputType = {
    id: string | null
    workoutExerciseId: string | null
    setNumber: number | null
    reps: number | null
    weight: number | null
    rpe: number | null
    isWarmup: boolean | null
    isDropset: boolean | null
    isFailure: boolean | null
  }

  export type SetCountAggregateOutputType = {
    id: number
    workoutExerciseId: number
    setNumber: number
    reps: number
    weight: number
    rpe: number
    isWarmup: number
    isDropset: number
    isFailure: number
    _all: number
  }


  export type SetAvgAggregateInputType = {
    setNumber?: true
    reps?: true
    weight?: true
    rpe?: true
  }

  export type SetSumAggregateInputType = {
    setNumber?: true
    reps?: true
    weight?: true
    rpe?: true
  }

  export type SetMinAggregateInputType = {
    id?: true
    workoutExerciseId?: true
    setNumber?: true
    reps?: true
    weight?: true
    rpe?: true
    isWarmup?: true
    isDropset?: true
    isFailure?: true
  }

  export type SetMaxAggregateInputType = {
    id?: true
    workoutExerciseId?: true
    setNumber?: true
    reps?: true
    weight?: true
    rpe?: true
    isWarmup?: true
    isDropset?: true
    isFailure?: true
  }

  export type SetCountAggregateInputType = {
    id?: true
    workoutExerciseId?: true
    setNumber?: true
    reps?: true
    weight?: true
    rpe?: true
    isWarmup?: true
    isDropset?: true
    isFailure?: true
    _all?: true
  }

  export type SetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Set to aggregate.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sets
    **/
    _count?: true | SetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetMaxAggregateInputType
  }

  export type GetSetAggregateType<T extends SetAggregateArgs> = {
        [P in keyof T & keyof AggregateSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSet[P]>
      : GetScalarType<T[P], AggregateSet[P]>
  }




  export type SetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetWhereInput
    orderBy?: SetOrderByWithAggregationInput | SetOrderByWithAggregationInput[]
    by: SetScalarFieldEnum[] | SetScalarFieldEnum
    having?: SetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetCountAggregateInputType | true
    _avg?: SetAvgAggregateInputType
    _sum?: SetSumAggregateInputType
    _min?: SetMinAggregateInputType
    _max?: SetMaxAggregateInputType
  }

  export type SetGroupByOutputType = {
    id: string
    workoutExerciseId: string
    setNumber: number
    reps: number | null
    weight: number | null
    rpe: number | null
    isWarmup: boolean
    isDropset: boolean
    isFailure: boolean
    _count: SetCountAggregateOutputType | null
    _avg: SetAvgAggregateOutputType | null
    _sum: SetSumAggregateOutputType | null
    _min: SetMinAggregateOutputType | null
    _max: SetMaxAggregateOutputType | null
  }

  type GetSetGroupByPayload<T extends SetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetGroupByOutputType[P]>
            : GetScalarType<T[P], SetGroupByOutputType[P]>
        }
      >
    >


  export type SetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutExerciseId?: boolean
    setNumber?: boolean
    reps?: boolean
    weight?: boolean
    rpe?: boolean
    isWarmup?: boolean
    isDropset?: boolean
    isFailure?: boolean
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["set"]>

  export type SetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutExerciseId?: boolean
    setNumber?: boolean
    reps?: boolean
    weight?: boolean
    rpe?: boolean
    isWarmup?: boolean
    isDropset?: boolean
    isFailure?: boolean
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["set"]>

  export type SetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutExerciseId?: boolean
    setNumber?: boolean
    reps?: boolean
    weight?: boolean
    rpe?: boolean
    isWarmup?: boolean
    isDropset?: boolean
    isFailure?: boolean
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["set"]>

  export type SetSelectScalar = {
    id?: boolean
    workoutExerciseId?: boolean
    setNumber?: boolean
    reps?: boolean
    weight?: boolean
    rpe?: boolean
    isWarmup?: boolean
    isDropset?: boolean
    isFailure?: boolean
  }

  export type SetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutExerciseId" | "setNumber" | "reps" | "weight" | "rpe" | "isWarmup" | "isDropset" | "isFailure", ExtArgs["result"]["set"]>
  export type SetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }
  export type SetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }
  export type SetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }

  export type $SetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Set"
    objects: {
      workoutExercise: Prisma.$WorkoutExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workoutExerciseId: string
      setNumber: number
      reps: number | null
      weight: number | null
      rpe: number | null
      isWarmup: boolean
      isDropset: boolean
      isFailure: boolean
    }, ExtArgs["result"]["set"]>
    composites: {}
  }

  type SetGetPayload<S extends boolean | null | undefined | SetDefaultArgs> = $Result.GetResult<Prisma.$SetPayload, S>

  type SetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetCountAggregateInputType | true
    }

  export interface SetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Set'], meta: { name: 'Set' } }
    /**
     * Find zero or one Set that matches the filter.
     * @param {SetFindUniqueArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetFindUniqueArgs>(args: SelectSubset<T, SetFindUniqueArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Set that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetFindUniqueOrThrowArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetFindUniqueOrThrowArgs>(args: SelectSubset<T, SetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Set that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindFirstArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetFindFirstArgs>(args?: SelectSubset<T, SetFindFirstArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Set that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindFirstOrThrowArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetFindFirstOrThrowArgs>(args?: SelectSubset<T, SetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sets
     * const sets = await prisma.set.findMany()
     * 
     * // Get first 10 Sets
     * const sets = await prisma.set.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setWithIdOnly = await prisma.set.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetFindManyArgs>(args?: SelectSubset<T, SetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Set.
     * @param {SetCreateArgs} args - Arguments to create a Set.
     * @example
     * // Create one Set
     * const Set = await prisma.set.create({
     *   data: {
     *     // ... data to create a Set
     *   }
     * })
     * 
     */
    create<T extends SetCreateArgs>(args: SelectSubset<T, SetCreateArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sets.
     * @param {SetCreateManyArgs} args - Arguments to create many Sets.
     * @example
     * // Create many Sets
     * const set = await prisma.set.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetCreateManyArgs>(args?: SelectSubset<T, SetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sets and returns the data saved in the database.
     * @param {SetCreateManyAndReturnArgs} args - Arguments to create many Sets.
     * @example
     * // Create many Sets
     * const set = await prisma.set.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sets and only return the `id`
     * const setWithIdOnly = await prisma.set.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetCreateManyAndReturnArgs>(args?: SelectSubset<T, SetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Set.
     * @param {SetDeleteArgs} args - Arguments to delete one Set.
     * @example
     * // Delete one Set
     * const Set = await prisma.set.delete({
     *   where: {
     *     // ... filter to delete one Set
     *   }
     * })
     * 
     */
    delete<T extends SetDeleteArgs>(args: SelectSubset<T, SetDeleteArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Set.
     * @param {SetUpdateArgs} args - Arguments to update one Set.
     * @example
     * // Update one Set
     * const set = await prisma.set.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetUpdateArgs>(args: SelectSubset<T, SetUpdateArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sets.
     * @param {SetDeleteManyArgs} args - Arguments to filter Sets to delete.
     * @example
     * // Delete a few Sets
     * const { count } = await prisma.set.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetDeleteManyArgs>(args?: SelectSubset<T, SetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sets
     * const set = await prisma.set.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetUpdateManyArgs>(args: SelectSubset<T, SetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sets and returns the data updated in the database.
     * @param {SetUpdateManyAndReturnArgs} args - Arguments to update many Sets.
     * @example
     * // Update many Sets
     * const set = await prisma.set.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sets and only return the `id`
     * const setWithIdOnly = await prisma.set.updateManyAndReturn({
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
    updateManyAndReturn<T extends SetUpdateManyAndReturnArgs>(args: SelectSubset<T, SetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Set.
     * @param {SetUpsertArgs} args - Arguments to update or create a Set.
     * @example
     * // Update or create a Set
     * const set = await prisma.set.upsert({
     *   create: {
     *     // ... data to create a Set
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Set we want to update
     *   }
     * })
     */
    upsert<T extends SetUpsertArgs>(args: SelectSubset<T, SetUpsertArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetCountArgs} args - Arguments to filter Sets to count.
     * @example
     * // Count the number of Sets
     * const count = await prisma.set.count({
     *   where: {
     *     // ... the filter for the Sets we want to count
     *   }
     * })
    **/
    count<T extends SetCountArgs>(
      args?: Subset<T, SetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Set.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetAggregateArgs>(args: Subset<T, SetAggregateArgs>): Prisma.PrismaPromise<GetSetAggregateType<T>>

    /**
     * Group by Set.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetGroupByArgs} args - Group by arguments.
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
      T extends SetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetGroupByArgs['orderBy'] }
        : { orderBy?: SetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Set model
   */
  readonly fields: SetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Set.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutExercise<T extends WorkoutExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutExerciseDefaultArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Set model
   */
  interface SetFieldRefs {
    readonly id: FieldRef<"Set", 'String'>
    readonly workoutExerciseId: FieldRef<"Set", 'String'>
    readonly setNumber: FieldRef<"Set", 'Int'>
    readonly reps: FieldRef<"Set", 'Int'>
    readonly weight: FieldRef<"Set", 'Float'>
    readonly rpe: FieldRef<"Set", 'Float'>
    readonly isWarmup: FieldRef<"Set", 'Boolean'>
    readonly isDropset: FieldRef<"Set", 'Boolean'>
    readonly isFailure: FieldRef<"Set", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Set findUnique
   */
  export type SetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set findUniqueOrThrow
   */
  export type SetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set findFirst
   */
  export type SetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sets.
     */
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set findFirstOrThrow
   */
  export type SetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sets.
     */
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set findMany
   */
  export type SetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Sets to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set create
   */
  export type SetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The data needed to create a Set.
     */
    data: XOR<SetCreateInput, SetUncheckedCreateInput>
  }

  /**
   * Set createMany
   */
  export type SetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sets.
     */
    data: SetCreateManyInput | SetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Set createManyAndReturn
   */
  export type SetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * The data used to create many Sets.
     */
    data: SetCreateManyInput | SetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Set update
   */
  export type SetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The data needed to update a Set.
     */
    data: XOR<SetUpdateInput, SetUncheckedUpdateInput>
    /**
     * Choose, which Set to update.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set updateMany
   */
  export type SetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sets.
     */
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyInput>
    /**
     * Filter which Sets to update
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to update.
     */
    limit?: number
  }

  /**
   * Set updateManyAndReturn
   */
  export type SetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * The data used to update Sets.
     */
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyInput>
    /**
     * Filter which Sets to update
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Set upsert
   */
  export type SetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The filter to search for the Set to update in case it exists.
     */
    where: SetWhereUniqueInput
    /**
     * In case the Set found by the `where` argument doesn't exist, create a new Set with this data.
     */
    create: XOR<SetCreateInput, SetUncheckedCreateInput>
    /**
     * In case the Set was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetUpdateInput, SetUncheckedUpdateInput>
  }

  /**
   * Set delete
   */
  export type SetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter which Set to delete.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set deleteMany
   */
  export type SetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sets to delete
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to delete.
     */
    limit?: number
  }

  /**
   * Set without action
   */
  export type SetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
  }


  /**
   * Model Routine
   */

  export type AggregateRoutine = {
    _count: RoutineCountAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  export type RoutineMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoutineMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routine to aggregate.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routines
    **/
    _count?: true | RoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineMaxAggregateInputType
  }

  export type GetRoutineAggregateType<T extends RoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutine[P]>
      : GetScalarType<T[P], AggregateRoutine[P]>
  }




  export type RoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithAggregationInput | RoutineOrderByWithAggregationInput[]
    by: RoutineScalarFieldEnum[] | RoutineScalarFieldEnum
    having?: RoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineCountAggregateInputType | true
    _min?: RoutineMinAggregateInputType
    _max?: RoutineMaxAggregateInputType
  }

  export type RoutineGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoutineCountAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  type GetRoutineGroupByPayload<T extends RoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineGroupByOutputType[P]>
        }
      >
    >


  export type RoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | Routine$exercisesArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoutineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["routine"]>
  export type RoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | Routine$exercisesArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoutineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoutineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Routine"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exercises: Prisma.$RoutineExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routine"]>
    composites: {}
  }

  type RoutineGetPayload<S extends boolean | null | undefined | RoutineDefaultArgs> = $Result.GetResult<Prisma.$RoutinePayload, S>

  type RoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineCountAggregateInputType | true
    }

  export interface RoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Routine'], meta: { name: 'Routine' } }
    /**
     * Find zero or one Routine that matches the filter.
     * @param {RoutineFindUniqueArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineFindUniqueArgs>(args: SelectSubset<T, RoutineFindUniqueArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Routine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineFindUniqueOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineFindFirstArgs>(args?: SelectSubset<T, RoutineFindFirstArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routines
     * const routines = await prisma.routine.findMany()
     * 
     * // Get first 10 Routines
     * const routines = await prisma.routine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineWithIdOnly = await prisma.routine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineFindManyArgs>(args?: SelectSubset<T, RoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Routine.
     * @param {RoutineCreateArgs} args - Arguments to create a Routine.
     * @example
     * // Create one Routine
     * const Routine = await prisma.routine.create({
     *   data: {
     *     // ... data to create a Routine
     *   }
     * })
     * 
     */
    create<T extends RoutineCreateArgs>(args: SelectSubset<T, RoutineCreateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routines.
     * @param {RoutineCreateManyArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineCreateManyArgs>(args?: SelectSubset<T, RoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routines and returns the data saved in the database.
     * @param {RoutineCreateManyAndReturnArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routines and only return the `id`
     * const routineWithIdOnly = await prisma.routine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Routine.
     * @param {RoutineDeleteArgs} args - Arguments to delete one Routine.
     * @example
     * // Delete one Routine
     * const Routine = await prisma.routine.delete({
     *   where: {
     *     // ... filter to delete one Routine
     *   }
     * })
     * 
     */
    delete<T extends RoutineDeleteArgs>(args: SelectSubset<T, RoutineDeleteArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Routine.
     * @param {RoutineUpdateArgs} args - Arguments to update one Routine.
     * @example
     * // Update one Routine
     * const routine = await prisma.routine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineUpdateArgs>(args: SelectSubset<T, RoutineUpdateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routines.
     * @param {RoutineDeleteManyArgs} args - Arguments to filter Routines to delete.
     * @example
     * // Delete a few Routines
     * const { count } = await prisma.routine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineDeleteManyArgs>(args?: SelectSubset<T, RoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineUpdateManyArgs>(args: SelectSubset<T, RoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines and returns the data updated in the database.
     * @param {RoutineUpdateManyAndReturnArgs} args - Arguments to update many Routines.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routines and only return the `id`
     * const routineWithIdOnly = await prisma.routine.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoutineUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Routine.
     * @param {RoutineUpsertArgs} args - Arguments to update or create a Routine.
     * @example
     * // Update or create a Routine
     * const routine = await prisma.routine.upsert({
     *   create: {
     *     // ... data to create a Routine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Routine we want to update
     *   }
     * })
     */
    upsert<T extends RoutineUpsertArgs>(args: SelectSubset<T, RoutineUpsertArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineCountArgs} args - Arguments to filter Routines to count.
     * @example
     * // Count the number of Routines
     * const count = await prisma.routine.count({
     *   where: {
     *     // ... the filter for the Routines we want to count
     *   }
     * })
    **/
    count<T extends RoutineCountArgs>(
      args?: Subset<T, RoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineAggregateArgs>(args: Subset<T, RoutineAggregateArgs>): Prisma.PrismaPromise<GetRoutineAggregateType<T>>

    /**
     * Group by Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineGroupByArgs} args - Group by arguments.
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
      T extends RoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineGroupByArgs['orderBy'] }
        : { orderBy?: RoutineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Routine model
   */
  readonly fields: RoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Routine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends Routine$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Routine$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Routine model
   */
  interface RoutineFieldRefs {
    readonly id: FieldRef<"Routine", 'String'>
    readonly userId: FieldRef<"Routine", 'String'>
    readonly name: FieldRef<"Routine", 'String'>
    readonly description: FieldRef<"Routine", 'String'>
    readonly createdAt: FieldRef<"Routine", 'DateTime'>
    readonly updatedAt: FieldRef<"Routine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Routine findUnique
   */
  export type RoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findUniqueOrThrow
   */
  export type RoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findFirst
   */
  export type RoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findFirstOrThrow
   */
  export type RoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findMany
   */
  export type RoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routines to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine create
   */
  export type RoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a Routine.
     */
    data: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
  }

  /**
   * Routine createMany
   */
  export type RoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Routine createManyAndReturn
   */
  export type RoutineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Routine update
   */
  export type RoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a Routine.
     */
    data: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
    /**
     * Choose, which Routine to update.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine updateMany
   */
  export type RoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to update.
     */
    limit?: number
  }

  /**
   * Routine updateManyAndReturn
   */
  export type RoutineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Routine upsert
   */
  export type RoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the Routine to update in case it exists.
     */
    where: RoutineWhereUniqueInput
    /**
     * In case the Routine found by the `where` argument doesn't exist, create a new Routine with this data.
     */
    create: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
    /**
     * In case the Routine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
  }

  /**
   * Routine delete
   */
  export type RoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter which Routine to delete.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine deleteMany
   */
  export type RoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routines to delete
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to delete.
     */
    limit?: number
  }

  /**
   * Routine.exercises
   */
  export type Routine$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    where?: RoutineExerciseWhereInput
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    cursor?: RoutineExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineExerciseScalarFieldEnum | RoutineExerciseScalarFieldEnum[]
  }

  /**
   * Routine without action
   */
  export type RoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
  }


  /**
   * Model RoutineExercise
   */

  export type AggregateRoutineExercise = {
    _count: RoutineExerciseCountAggregateOutputType | null
    _avg: RoutineExerciseAvgAggregateOutputType | null
    _sum: RoutineExerciseSumAggregateOutputType | null
    _min: RoutineExerciseMinAggregateOutputType | null
    _max: RoutineExerciseMaxAggregateOutputType | null
  }

  export type RoutineExerciseAvgAggregateOutputType = {
    order: number | null
    sets: number | null
    minReps: number | null
    maxReps: number | null
    restTime: number | null
  }

  export type RoutineExerciseSumAggregateOutputType = {
    order: number | null
    sets: number | null
    minReps: number | null
    maxReps: number | null
    restTime: number | null
  }

  export type RoutineExerciseMinAggregateOutputType = {
    id: string | null
    routineId: string | null
    exerciseId: string | null
    order: number | null
    sets: number | null
    minReps: number | null
    maxReps: number | null
    restTime: number | null
  }

  export type RoutineExerciseMaxAggregateOutputType = {
    id: string | null
    routineId: string | null
    exerciseId: string | null
    order: number | null
    sets: number | null
    minReps: number | null
    maxReps: number | null
    restTime: number | null
  }

  export type RoutineExerciseCountAggregateOutputType = {
    id: number
    routineId: number
    exerciseId: number
    order: number
    sets: number
    minReps: number
    maxReps: number
    restTime: number
    _all: number
  }


  export type RoutineExerciseAvgAggregateInputType = {
    order?: true
    sets?: true
    minReps?: true
    maxReps?: true
    restTime?: true
  }

  export type RoutineExerciseSumAggregateInputType = {
    order?: true
    sets?: true
    minReps?: true
    maxReps?: true
    restTime?: true
  }

  export type RoutineExerciseMinAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    order?: true
    sets?: true
    minReps?: true
    maxReps?: true
    restTime?: true
  }

  export type RoutineExerciseMaxAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    order?: true
    sets?: true
    minReps?: true
    maxReps?: true
    restTime?: true
  }

  export type RoutineExerciseCountAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    order?: true
    sets?: true
    minReps?: true
    maxReps?: true
    restTime?: true
    _all?: true
  }

  export type RoutineExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineExercise to aggregate.
     */
    where?: RoutineExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercises to fetch.
     */
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutineExercises
    **/
    _count?: true | RoutineExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutineExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutineExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineExerciseMaxAggregateInputType
  }

  export type GetRoutineExerciseAggregateType<T extends RoutineExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutineExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutineExercise[P]>
      : GetScalarType<T[P], AggregateRoutineExercise[P]>
  }




  export type RoutineExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineExerciseWhereInput
    orderBy?: RoutineExerciseOrderByWithAggregationInput | RoutineExerciseOrderByWithAggregationInput[]
    by: RoutineExerciseScalarFieldEnum[] | RoutineExerciseScalarFieldEnum
    having?: RoutineExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineExerciseCountAggregateInputType | true
    _avg?: RoutineExerciseAvgAggregateInputType
    _sum?: RoutineExerciseSumAggregateInputType
    _min?: RoutineExerciseMinAggregateInputType
    _max?: RoutineExerciseMaxAggregateInputType
  }

  export type RoutineExerciseGroupByOutputType = {
    id: string
    routineId: string
    exerciseId: string
    order: number
    sets: number
    minReps: number | null
    maxReps: number | null
    restTime: number | null
    _count: RoutineExerciseCountAggregateOutputType | null
    _avg: RoutineExerciseAvgAggregateOutputType | null
    _sum: RoutineExerciseSumAggregateOutputType | null
    _min: RoutineExerciseMinAggregateOutputType | null
    _max: RoutineExerciseMaxAggregateOutputType | null
  }

  type GetRoutineExerciseGroupByPayload<T extends RoutineExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineExerciseGroupByOutputType[P]>
        }
      >
    >


  export type RoutineExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    order?: boolean
    sets?: boolean
    minReps?: boolean
    maxReps?: boolean
    restTime?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineExercise"]>

  export type RoutineExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    order?: boolean
    sets?: boolean
    minReps?: boolean
    maxReps?: boolean
    restTime?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineExercise"]>

  export type RoutineExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    order?: boolean
    sets?: boolean
    minReps?: boolean
    maxReps?: boolean
    restTime?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineExercise"]>

  export type RoutineExerciseSelectScalar = {
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    order?: boolean
    sets?: boolean
    minReps?: boolean
    maxReps?: boolean
    restTime?: boolean
  }

  export type RoutineExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routineId" | "exerciseId" | "order" | "sets" | "minReps" | "maxReps" | "restTime", ExtArgs["result"]["routineExercise"]>
  export type RoutineExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type RoutineExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type RoutineExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $RoutineExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutineExercise"
    objects: {
      routine: Prisma.$RoutinePayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routineId: string
      exerciseId: string
      order: number
      sets: number
      minReps: number | null
      maxReps: number | null
      restTime: number | null
    }, ExtArgs["result"]["routineExercise"]>
    composites: {}
  }

  type RoutineExerciseGetPayload<S extends boolean | null | undefined | RoutineExerciseDefaultArgs> = $Result.GetResult<Prisma.$RoutineExercisePayload, S>

  type RoutineExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineExerciseCountAggregateInputType | true
    }

  export interface RoutineExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutineExercise'], meta: { name: 'RoutineExercise' } }
    /**
     * Find zero or one RoutineExercise that matches the filter.
     * @param {RoutineExerciseFindUniqueArgs} args - Arguments to find a RoutineExercise
     * @example
     * // Get one RoutineExercise
     * const routineExercise = await prisma.routineExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineExerciseFindUniqueArgs>(args: SelectSubset<T, RoutineExerciseFindUniqueArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoutineExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineExerciseFindUniqueOrThrowArgs} args - Arguments to find a RoutineExercise
     * @example
     * // Get one RoutineExercise
     * const routineExercise = await prisma.routineExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseFindFirstArgs} args - Arguments to find a RoutineExercise
     * @example
     * // Get one RoutineExercise
     * const routineExercise = await prisma.routineExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineExerciseFindFirstArgs>(args?: SelectSubset<T, RoutineExerciseFindFirstArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseFindFirstOrThrowArgs} args - Arguments to find a RoutineExercise
     * @example
     * // Get one RoutineExercise
     * const routineExercise = await prisma.routineExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoutineExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutineExercises
     * const routineExercises = await prisma.routineExercise.findMany()
     * 
     * // Get first 10 RoutineExercises
     * const routineExercises = await prisma.routineExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineExerciseWithIdOnly = await prisma.routineExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineExerciseFindManyArgs>(args?: SelectSubset<T, RoutineExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoutineExercise.
     * @param {RoutineExerciseCreateArgs} args - Arguments to create a RoutineExercise.
     * @example
     * // Create one RoutineExercise
     * const RoutineExercise = await prisma.routineExercise.create({
     *   data: {
     *     // ... data to create a RoutineExercise
     *   }
     * })
     * 
     */
    create<T extends RoutineExerciseCreateArgs>(args: SelectSubset<T, RoutineExerciseCreateArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoutineExercises.
     * @param {RoutineExerciseCreateManyArgs} args - Arguments to create many RoutineExercises.
     * @example
     * // Create many RoutineExercises
     * const routineExercise = await prisma.routineExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineExerciseCreateManyArgs>(args?: SelectSubset<T, RoutineExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoutineExercises and returns the data saved in the database.
     * @param {RoutineExerciseCreateManyAndReturnArgs} args - Arguments to create many RoutineExercises.
     * @example
     * // Create many RoutineExercises
     * const routineExercise = await prisma.routineExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoutineExercises and only return the `id`
     * const routineExerciseWithIdOnly = await prisma.routineExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoutineExercise.
     * @param {RoutineExerciseDeleteArgs} args - Arguments to delete one RoutineExercise.
     * @example
     * // Delete one RoutineExercise
     * const RoutineExercise = await prisma.routineExercise.delete({
     *   where: {
     *     // ... filter to delete one RoutineExercise
     *   }
     * })
     * 
     */
    delete<T extends RoutineExerciseDeleteArgs>(args: SelectSubset<T, RoutineExerciseDeleteArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoutineExercise.
     * @param {RoutineExerciseUpdateArgs} args - Arguments to update one RoutineExercise.
     * @example
     * // Update one RoutineExercise
     * const routineExercise = await prisma.routineExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineExerciseUpdateArgs>(args: SelectSubset<T, RoutineExerciseUpdateArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoutineExercises.
     * @param {RoutineExerciseDeleteManyArgs} args - Arguments to filter RoutineExercises to delete.
     * @example
     * // Delete a few RoutineExercises
     * const { count } = await prisma.routineExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineExerciseDeleteManyArgs>(args?: SelectSubset<T, RoutineExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutineExercises
     * const routineExercise = await prisma.routineExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineExerciseUpdateManyArgs>(args: SelectSubset<T, RoutineExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineExercises and returns the data updated in the database.
     * @param {RoutineExerciseUpdateManyAndReturnArgs} args - Arguments to update many RoutineExercises.
     * @example
     * // Update many RoutineExercises
     * const routineExercise = await prisma.routineExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoutineExercises and only return the `id`
     * const routineExerciseWithIdOnly = await prisma.routineExercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoutineExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutineExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoutineExercise.
     * @param {RoutineExerciseUpsertArgs} args - Arguments to update or create a RoutineExercise.
     * @example
     * // Update or create a RoutineExercise
     * const routineExercise = await prisma.routineExercise.upsert({
     *   create: {
     *     // ... data to create a RoutineExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutineExercise we want to update
     *   }
     * })
     */
    upsert<T extends RoutineExerciseUpsertArgs>(args: SelectSubset<T, RoutineExerciseUpsertArgs<ExtArgs>>): Prisma__RoutineExerciseClient<$Result.GetResult<Prisma.$RoutineExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoutineExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseCountArgs} args - Arguments to filter RoutineExercises to count.
     * @example
     * // Count the number of RoutineExercises
     * const count = await prisma.routineExercise.count({
     *   where: {
     *     // ... the filter for the RoutineExercises we want to count
     *   }
     * })
    **/
    count<T extends RoutineExerciseCountArgs>(
      args?: Subset<T, RoutineExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutineExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineExerciseAggregateArgs>(args: Subset<T, RoutineExerciseAggregateArgs>): Prisma.PrismaPromise<GetRoutineExerciseAggregateType<T>>

    /**
     * Group by RoutineExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExerciseGroupByArgs} args - Group by arguments.
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
      T extends RoutineExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineExerciseGroupByArgs['orderBy'] }
        : { orderBy?: RoutineExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutineExercise model
   */
  readonly fields: RoutineExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutineExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routine<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoutineExercise model
   */
  interface RoutineExerciseFieldRefs {
    readonly id: FieldRef<"RoutineExercise", 'String'>
    readonly routineId: FieldRef<"RoutineExercise", 'String'>
    readonly exerciseId: FieldRef<"RoutineExercise", 'String'>
    readonly order: FieldRef<"RoutineExercise", 'Int'>
    readonly sets: FieldRef<"RoutineExercise", 'Int'>
    readonly minReps: FieldRef<"RoutineExercise", 'Int'>
    readonly maxReps: FieldRef<"RoutineExercise", 'Int'>
    readonly restTime: FieldRef<"RoutineExercise", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoutineExercise findUnique
   */
  export type RoutineExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercise to fetch.
     */
    where: RoutineExerciseWhereUniqueInput
  }

  /**
   * RoutineExercise findUniqueOrThrow
   */
  export type RoutineExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercise to fetch.
     */
    where: RoutineExerciseWhereUniqueInput
  }

  /**
   * RoutineExercise findFirst
   */
  export type RoutineExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercise to fetch.
     */
    where?: RoutineExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercises to fetch.
     */
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineExercises.
     */
    cursor?: RoutineExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineExercises.
     */
    distinct?: RoutineExerciseScalarFieldEnum | RoutineExerciseScalarFieldEnum[]
  }

  /**
   * RoutineExercise findFirstOrThrow
   */
  export type RoutineExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercise to fetch.
     */
    where?: RoutineExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercises to fetch.
     */
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineExercises.
     */
    cursor?: RoutineExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineExercises.
     */
    distinct?: RoutineExerciseScalarFieldEnum | RoutineExerciseScalarFieldEnum[]
  }

  /**
   * RoutineExercise findMany
   */
  export type RoutineExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercises to fetch.
     */
    where?: RoutineExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercises to fetch.
     */
    orderBy?: RoutineExerciseOrderByWithRelationInput | RoutineExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutineExercises.
     */
    cursor?: RoutineExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercises.
     */
    skip?: number
    distinct?: RoutineExerciseScalarFieldEnum | RoutineExerciseScalarFieldEnum[]
  }

  /**
   * RoutineExercise create
   */
  export type RoutineExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutineExercise.
     */
    data: XOR<RoutineExerciseCreateInput, RoutineExerciseUncheckedCreateInput>
  }

  /**
   * RoutineExercise createMany
   */
  export type RoutineExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutineExercises.
     */
    data: RoutineExerciseCreateManyInput | RoutineExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutineExercise createManyAndReturn
   */
  export type RoutineExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many RoutineExercises.
     */
    data: RoutineExerciseCreateManyInput | RoutineExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutineExercise update
   */
  export type RoutineExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutineExercise.
     */
    data: XOR<RoutineExerciseUpdateInput, RoutineExerciseUncheckedUpdateInput>
    /**
     * Choose, which RoutineExercise to update.
     */
    where: RoutineExerciseWhereUniqueInput
  }

  /**
   * RoutineExercise updateMany
   */
  export type RoutineExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutineExercises.
     */
    data: XOR<RoutineExerciseUpdateManyMutationInput, RoutineExerciseUncheckedUpdateManyInput>
    /**
     * Filter which RoutineExercises to update
     */
    where?: RoutineExerciseWhereInput
    /**
     * Limit how many RoutineExercises to update.
     */
    limit?: number
  }

  /**
   * RoutineExercise updateManyAndReturn
   */
  export type RoutineExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * The data used to update RoutineExercises.
     */
    data: XOR<RoutineExerciseUpdateManyMutationInput, RoutineExerciseUncheckedUpdateManyInput>
    /**
     * Filter which RoutineExercises to update
     */
    where?: RoutineExerciseWhereInput
    /**
     * Limit how many RoutineExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutineExercise upsert
   */
  export type RoutineExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutineExercise to update in case it exists.
     */
    where: RoutineExerciseWhereUniqueInput
    /**
     * In case the RoutineExercise found by the `where` argument doesn't exist, create a new RoutineExercise with this data.
     */
    create: XOR<RoutineExerciseCreateInput, RoutineExerciseUncheckedCreateInput>
    /**
     * In case the RoutineExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineExerciseUpdateInput, RoutineExerciseUncheckedUpdateInput>
  }

  /**
   * RoutineExercise delete
   */
  export type RoutineExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
    /**
     * Filter which RoutineExercise to delete.
     */
    where: RoutineExerciseWhereUniqueInput
  }

  /**
   * RoutineExercise deleteMany
   */
  export type RoutineExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineExercises to delete
     */
    where?: RoutineExerciseWhereInput
    /**
     * Limit how many RoutineExercises to delete.
     */
    limit?: number
  }

  /**
   * RoutineExercise without action
   */
  export type RoutineExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercise
     */
    select?: RoutineExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercise
     */
    omit?: RoutineExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExerciseInclude<ExtArgs> | null
  }


  /**
   * Model BodyMeasurement
   */

  export type AggregateBodyMeasurement = {
    _count: BodyMeasurementCountAggregateOutputType | null
    _avg: BodyMeasurementAvgAggregateOutputType | null
    _sum: BodyMeasurementSumAggregateOutputType | null
    _min: BodyMeasurementMinAggregateOutputType | null
    _max: BodyMeasurementMaxAggregateOutputType | null
  }

  export type BodyMeasurementAvgAggregateOutputType = {
    weight: number | null
    bodyFat: number | null
    chest: number | null
    waist: number | null
    hips: number | null
    arms: number | null
    thighs: number | null
    calves: number | null
  }

  export type BodyMeasurementSumAggregateOutputType = {
    weight: number | null
    bodyFat: number | null
    chest: number | null
    waist: number | null
    hips: number | null
    arms: number | null
    thighs: number | null
    calves: number | null
  }

  export type BodyMeasurementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    weight: number | null
    bodyFat: number | null
    chest: number | null
    waist: number | null
    hips: number | null
    arms: number | null
    thighs: number | null
    calves: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type BodyMeasurementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    weight: number | null
    bodyFat: number | null
    chest: number | null
    waist: number | null
    hips: number | null
    arms: number | null
    thighs: number | null
    calves: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type BodyMeasurementCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    weight: number
    bodyFat: number
    chest: number
    waist: number
    hips: number
    arms: number
    thighs: number
    calves: number
    notes: number
    createdAt: number
    _all: number
  }


  export type BodyMeasurementAvgAggregateInputType = {
    weight?: true
    bodyFat?: true
    chest?: true
    waist?: true
    hips?: true
    arms?: true
    thighs?: true
    calves?: true
  }

  export type BodyMeasurementSumAggregateInputType = {
    weight?: true
    bodyFat?: true
    chest?: true
    waist?: true
    hips?: true
    arms?: true
    thighs?: true
    calves?: true
  }

  export type BodyMeasurementMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    weight?: true
    bodyFat?: true
    chest?: true
    waist?: true
    hips?: true
    arms?: true
    thighs?: true
    calves?: true
    notes?: true
    createdAt?: true
  }

  export type BodyMeasurementMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    weight?: true
    bodyFat?: true
    chest?: true
    waist?: true
    hips?: true
    arms?: true
    thighs?: true
    calves?: true
    notes?: true
    createdAt?: true
  }

  export type BodyMeasurementCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    weight?: true
    bodyFat?: true
    chest?: true
    waist?: true
    hips?: true
    arms?: true
    thighs?: true
    calves?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type BodyMeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMeasurement to aggregate.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyMeasurements
    **/
    _count?: true | BodyMeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BodyMeasurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BodyMeasurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyMeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyMeasurementMaxAggregateInputType
  }

  export type GetBodyMeasurementAggregateType<T extends BodyMeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyMeasurement[P]>
      : GetScalarType<T[P], AggregateBodyMeasurement[P]>
  }




  export type BodyMeasurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMeasurementWhereInput
    orderBy?: BodyMeasurementOrderByWithAggregationInput | BodyMeasurementOrderByWithAggregationInput[]
    by: BodyMeasurementScalarFieldEnum[] | BodyMeasurementScalarFieldEnum
    having?: BodyMeasurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyMeasurementCountAggregateInputType | true
    _avg?: BodyMeasurementAvgAggregateInputType
    _sum?: BodyMeasurementSumAggregateInputType
    _min?: BodyMeasurementMinAggregateInputType
    _max?: BodyMeasurementMaxAggregateInputType
  }

  export type BodyMeasurementGroupByOutputType = {
    id: string
    userId: string
    date: Date
    weight: number | null
    bodyFat: number | null
    chest: number | null
    waist: number | null
    hips: number | null
    arms: number | null
    thighs: number | null
    calves: number | null
    notes: string | null
    createdAt: Date
    _count: BodyMeasurementCountAggregateOutputType | null
    _avg: BodyMeasurementAvgAggregateOutputType | null
    _sum: BodyMeasurementSumAggregateOutputType | null
    _min: BodyMeasurementMinAggregateOutputType | null
    _max: BodyMeasurementMaxAggregateOutputType | null
  }

  type GetBodyMeasurementGroupByPayload<T extends BodyMeasurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BodyMeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyMeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyMeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], BodyMeasurementGroupByOutputType[P]>
        }
      >
    >


  export type BodyMeasurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    weight?: boolean
    bodyFat?: boolean
    chest?: boolean
    waist?: boolean
    hips?: boolean
    arms?: boolean
    thighs?: boolean
    calves?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    weight?: boolean
    bodyFat?: boolean
    chest?: boolean
    waist?: boolean
    hips?: boolean
    arms?: boolean
    thighs?: boolean
    calves?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    weight?: boolean
    bodyFat?: boolean
    chest?: boolean
    waist?: boolean
    hips?: boolean
    arms?: boolean
    thighs?: boolean
    calves?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    weight?: boolean
    bodyFat?: boolean
    chest?: boolean
    waist?: boolean
    hips?: boolean
    arms?: boolean
    thighs?: boolean
    calves?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type BodyMeasurementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "weight" | "bodyFat" | "chest" | "waist" | "hips" | "arms" | "thighs" | "calves" | "notes" | "createdAt", ExtArgs["result"]["bodyMeasurement"]>
  export type BodyMeasurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BodyMeasurementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BodyMeasurementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BodyMeasurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BodyMeasurement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      weight: number | null
      bodyFat: number | null
      chest: number | null
      waist: number | null
      hips: number | null
      arms: number | null
      thighs: number | null
      calves: number | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["bodyMeasurement"]>
    composites: {}
  }

  type BodyMeasurementGetPayload<S extends boolean | null | undefined | BodyMeasurementDefaultArgs> = $Result.GetResult<Prisma.$BodyMeasurementPayload, S>

  type BodyMeasurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BodyMeasurementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BodyMeasurementCountAggregateInputType | true
    }

  export interface BodyMeasurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BodyMeasurement'], meta: { name: 'BodyMeasurement' } }
    /**
     * Find zero or one BodyMeasurement that matches the filter.
     * @param {BodyMeasurementFindUniqueArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BodyMeasurementFindUniqueArgs>(args: SelectSubset<T, BodyMeasurementFindUniqueArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BodyMeasurement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BodyMeasurementFindUniqueOrThrowArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BodyMeasurementFindUniqueOrThrowArgs>(args: SelectSubset<T, BodyMeasurementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyMeasurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindFirstArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BodyMeasurementFindFirstArgs>(args?: SelectSubset<T, BodyMeasurementFindFirstArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyMeasurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindFirstOrThrowArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BodyMeasurementFindFirstOrThrowArgs>(args?: SelectSubset<T, BodyMeasurementFindFirstOrThrowArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BodyMeasurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyMeasurements
     * const bodyMeasurements = await prisma.bodyMeasurement.findMany()
     * 
     * // Get first 10 BodyMeasurements
     * const bodyMeasurements = await prisma.bodyMeasurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BodyMeasurementFindManyArgs>(args?: SelectSubset<T, BodyMeasurementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BodyMeasurement.
     * @param {BodyMeasurementCreateArgs} args - Arguments to create a BodyMeasurement.
     * @example
     * // Create one BodyMeasurement
     * const BodyMeasurement = await prisma.bodyMeasurement.create({
     *   data: {
     *     // ... data to create a BodyMeasurement
     *   }
     * })
     * 
     */
    create<T extends BodyMeasurementCreateArgs>(args: SelectSubset<T, BodyMeasurementCreateArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BodyMeasurements.
     * @param {BodyMeasurementCreateManyArgs} args - Arguments to create many BodyMeasurements.
     * @example
     * // Create many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BodyMeasurementCreateManyArgs>(args?: SelectSubset<T, BodyMeasurementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BodyMeasurements and returns the data saved in the database.
     * @param {BodyMeasurementCreateManyAndReturnArgs} args - Arguments to create many BodyMeasurements.
     * @example
     * // Create many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BodyMeasurements and only return the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BodyMeasurementCreateManyAndReturnArgs>(args?: SelectSubset<T, BodyMeasurementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BodyMeasurement.
     * @param {BodyMeasurementDeleteArgs} args - Arguments to delete one BodyMeasurement.
     * @example
     * // Delete one BodyMeasurement
     * const BodyMeasurement = await prisma.bodyMeasurement.delete({
     *   where: {
     *     // ... filter to delete one BodyMeasurement
     *   }
     * })
     * 
     */
    delete<T extends BodyMeasurementDeleteArgs>(args: SelectSubset<T, BodyMeasurementDeleteArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BodyMeasurement.
     * @param {BodyMeasurementUpdateArgs} args - Arguments to update one BodyMeasurement.
     * @example
     * // Update one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BodyMeasurementUpdateArgs>(args: SelectSubset<T, BodyMeasurementUpdateArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BodyMeasurements.
     * @param {BodyMeasurementDeleteManyArgs} args - Arguments to filter BodyMeasurements to delete.
     * @example
     * // Delete a few BodyMeasurements
     * const { count } = await prisma.bodyMeasurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BodyMeasurementDeleteManyArgs>(args?: SelectSubset<T, BodyMeasurementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMeasurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BodyMeasurementUpdateManyArgs>(args: SelectSubset<T, BodyMeasurementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMeasurements and returns the data updated in the database.
     * @param {BodyMeasurementUpdateManyAndReturnArgs} args - Arguments to update many BodyMeasurements.
     * @example
     * // Update many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BodyMeasurements and only return the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.updateManyAndReturn({
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
    updateManyAndReturn<T extends BodyMeasurementUpdateManyAndReturnArgs>(args: SelectSubset<T, BodyMeasurementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BodyMeasurement.
     * @param {BodyMeasurementUpsertArgs} args - Arguments to update or create a BodyMeasurement.
     * @example
     * // Update or create a BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.upsert({
     *   create: {
     *     // ... data to create a BodyMeasurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyMeasurement we want to update
     *   }
     * })
     */
    upsert<T extends BodyMeasurementUpsertArgs>(args: SelectSubset<T, BodyMeasurementUpsertArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BodyMeasurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementCountArgs} args - Arguments to filter BodyMeasurements to count.
     * @example
     * // Count the number of BodyMeasurements
     * const count = await prisma.bodyMeasurement.count({
     *   where: {
     *     // ... the filter for the BodyMeasurements we want to count
     *   }
     * })
    **/
    count<T extends BodyMeasurementCountArgs>(
      args?: Subset<T, BodyMeasurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyMeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyMeasurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BodyMeasurementAggregateArgs>(args: Subset<T, BodyMeasurementAggregateArgs>): Prisma.PrismaPromise<GetBodyMeasurementAggregateType<T>>

    /**
     * Group by BodyMeasurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementGroupByArgs} args - Group by arguments.
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
      T extends BodyMeasurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyMeasurementGroupByArgs['orderBy'] }
        : { orderBy?: BodyMeasurementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BodyMeasurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BodyMeasurement model
   */
  readonly fields: BodyMeasurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyMeasurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BodyMeasurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BodyMeasurement model
   */
  interface BodyMeasurementFieldRefs {
    readonly id: FieldRef<"BodyMeasurement", 'String'>
    readonly userId: FieldRef<"BodyMeasurement", 'String'>
    readonly date: FieldRef<"BodyMeasurement", 'DateTime'>
    readonly weight: FieldRef<"BodyMeasurement", 'Float'>
    readonly bodyFat: FieldRef<"BodyMeasurement", 'Float'>
    readonly chest: FieldRef<"BodyMeasurement", 'Float'>
    readonly waist: FieldRef<"BodyMeasurement", 'Float'>
    readonly hips: FieldRef<"BodyMeasurement", 'Float'>
    readonly arms: FieldRef<"BodyMeasurement", 'Float'>
    readonly thighs: FieldRef<"BodyMeasurement", 'Float'>
    readonly calves: FieldRef<"BodyMeasurement", 'Float'>
    readonly notes: FieldRef<"BodyMeasurement", 'String'>
    readonly createdAt: FieldRef<"BodyMeasurement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BodyMeasurement findUnique
   */
  export type BodyMeasurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement findUniqueOrThrow
   */
  export type BodyMeasurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement findFirst
   */
  export type BodyMeasurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMeasurements.
     */
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement findFirstOrThrow
   */
  export type BodyMeasurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMeasurements.
     */
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement findMany
   */
  export type BodyMeasurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurements to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement create
   */
  export type BodyMeasurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The data needed to create a BodyMeasurement.
     */
    data: XOR<BodyMeasurementCreateInput, BodyMeasurementUncheckedCreateInput>
  }

  /**
   * BodyMeasurement createMany
   */
  export type BodyMeasurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BodyMeasurements.
     */
    data: BodyMeasurementCreateManyInput | BodyMeasurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyMeasurement createManyAndReturn
   */
  export type BodyMeasurementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * The data used to create many BodyMeasurements.
     */
    data: BodyMeasurementCreateManyInput | BodyMeasurementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyMeasurement update
   */
  export type BodyMeasurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The data needed to update a BodyMeasurement.
     */
    data: XOR<BodyMeasurementUpdateInput, BodyMeasurementUncheckedUpdateInput>
    /**
     * Choose, which BodyMeasurement to update.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement updateMany
   */
  export type BodyMeasurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BodyMeasurements.
     */
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyInput>
    /**
     * Filter which BodyMeasurements to update
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to update.
     */
    limit?: number
  }

  /**
   * BodyMeasurement updateManyAndReturn
   */
  export type BodyMeasurementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * The data used to update BodyMeasurements.
     */
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyInput>
    /**
     * Filter which BodyMeasurements to update
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyMeasurement upsert
   */
  export type BodyMeasurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The filter to search for the BodyMeasurement to update in case it exists.
     */
    where: BodyMeasurementWhereUniqueInput
    /**
     * In case the BodyMeasurement found by the `where` argument doesn't exist, create a new BodyMeasurement with this data.
     */
    create: XOR<BodyMeasurementCreateInput, BodyMeasurementUncheckedCreateInput>
    /**
     * In case the BodyMeasurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BodyMeasurementUpdateInput, BodyMeasurementUncheckedUpdateInput>
  }

  /**
   * BodyMeasurement delete
   */
  export type BodyMeasurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter which BodyMeasurement to delete.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement deleteMany
   */
  export type BodyMeasurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMeasurements to delete
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to delete.
     */
    limit?: number
  }

  /**
   * BodyMeasurement without action
   */
  export type BodyMeasurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
  }


  /**
   * Model FoodItem
   */

  export type AggregateFoodItem = {
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  export type FoodItemAvgAggregateOutputType = {
    servingSize: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fiber: number | null
    sugar: number | null
    sodium: number | null
  }

  export type FoodItemSumAggregateOutputType = {
    servingSize: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fiber: number | null
    sugar: number | null
    sodium: number | null
  }

  export type FoodItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    servingSize: number | null
    servingUnit: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fiber: number | null
    sugar: number | null
    sodium: number | null
    category: string | null
    barcode: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type FoodItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    servingSize: number | null
    servingUnit: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fiber: number | null
    sugar: number | null
    sodium: number | null
    category: string | null
    barcode: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type FoodItemCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    servingSize: number
    servingUnit: number
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
    sugar: number
    sodium: number
    category: number
    barcode: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type FoodItemAvgAggregateInputType = {
    servingSize?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fiber?: true
    sugar?: true
    sodium?: true
  }

  export type FoodItemSumAggregateInputType = {
    servingSize?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fiber?: true
    sugar?: true
    sodium?: true
  }

  export type FoodItemMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    servingSize?: true
    servingUnit?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fiber?: true
    sugar?: true
    sodium?: true
    category?: true
    barcode?: true
    imageUrl?: true
    createdAt?: true
  }

  export type FoodItemMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    servingSize?: true
    servingUnit?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fiber?: true
    sugar?: true
    sodium?: true
    category?: true
    barcode?: true
    imageUrl?: true
    createdAt?: true
  }

  export type FoodItemCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    servingSize?: true
    servingUnit?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fiber?: true
    sugar?: true
    sodium?: true
    category?: true
    barcode?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type FoodItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItem to aggregate.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodItems
    **/
    _count?: true | FoodItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodItemMaxAggregateInputType
  }

  export type GetFoodItemAggregateType<T extends FoodItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodItem[P]>
      : GetScalarType<T[P], AggregateFoodItem[P]>
  }




  export type FoodItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodItemWhereInput
    orderBy?: FoodItemOrderByWithAggregationInput | FoodItemOrderByWithAggregationInput[]
    by: FoodItemScalarFieldEnum[] | FoodItemScalarFieldEnum
    having?: FoodItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodItemCountAggregateInputType | true
    _avg?: FoodItemAvgAggregateInputType
    _sum?: FoodItemSumAggregateInputType
    _min?: FoodItemMinAggregateInputType
    _max?: FoodItemMaxAggregateInputType
  }

  export type FoodItemGroupByOutputType = {
    id: string
    name: string
    brand: string | null
    servingSize: number | null
    servingUnit: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fiber: number | null
    sugar: number | null
    sodium: number | null
    category: string | null
    barcode: string
    imageUrl: string | null
    createdAt: Date
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  type GetFoodItemGroupByPayload<T extends FoodItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
            : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
        }
      >
    >


  export type FoodItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fiber?: boolean
    sugar?: boolean
    sodium?: boolean
    category?: boolean
    barcode?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    mealFoods?: boolean | FoodItem$mealFoodsArgs<ExtArgs>
    _count?: boolean | FoodItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fiber?: boolean
    sugar?: boolean
    sodium?: boolean
    category?: boolean
    barcode?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fiber?: boolean
    sugar?: boolean
    sodium?: boolean
    category?: boolean
    barcode?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fiber?: boolean
    sugar?: boolean
    sodium?: boolean
    category?: boolean
    barcode?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type FoodItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "servingSize" | "servingUnit" | "calories" | "protein" | "carbs" | "fat" | "fiber" | "sugar" | "sodium" | "category" | "barcode" | "imageUrl" | "createdAt", ExtArgs["result"]["foodItem"]>
  export type FoodItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealFoods?: boolean | FoodItem$mealFoodsArgs<ExtArgs>
    _count?: boolean | FoodItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FoodItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FoodItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodItem"
    objects: {
      mealFoods: Prisma.$MealFoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brand: string | null
      servingSize: number | null
      servingUnit: string | null
      calories: number | null
      protein: number | null
      carbs: number | null
      fat: number | null
      fiber: number | null
      sugar: number | null
      sodium: number | null
      category: string | null
      barcode: string
      imageUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["foodItem"]>
    composites: {}
  }

  type FoodItemGetPayload<S extends boolean | null | undefined | FoodItemDefaultArgs> = $Result.GetResult<Prisma.$FoodItemPayload, S>

  type FoodItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodItemCountAggregateInputType | true
    }

  export interface FoodItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodItem'], meta: { name: 'FoodItem' } }
    /**
     * Find zero or one FoodItem that matches the filter.
     * @param {FoodItemFindUniqueArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodItemFindUniqueArgs>(args: SelectSubset<T, FoodItemFindUniqueArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodItemFindUniqueOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodItemFindFirstArgs>(args?: SelectSubset<T, FoodItemFindFirstArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodItems
     * const foodItems = await prisma.foodItem.findMany()
     * 
     * // Get first 10 FoodItems
     * const foodItems = await prisma.foodItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodItemFindManyArgs>(args?: SelectSubset<T, FoodItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodItem.
     * @param {FoodItemCreateArgs} args - Arguments to create a FoodItem.
     * @example
     * // Create one FoodItem
     * const FoodItem = await prisma.foodItem.create({
     *   data: {
     *     // ... data to create a FoodItem
     *   }
     * })
     * 
     */
    create<T extends FoodItemCreateArgs>(args: SelectSubset<T, FoodItemCreateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodItems.
     * @param {FoodItemCreateManyArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodItemCreateManyArgs>(args?: SelectSubset<T, FoodItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodItems and returns the data saved in the database.
     * @param {FoodItemCreateManyAndReturnArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodItem.
     * @param {FoodItemDeleteArgs} args - Arguments to delete one FoodItem.
     * @example
     * // Delete one FoodItem
     * const FoodItem = await prisma.foodItem.delete({
     *   where: {
     *     // ... filter to delete one FoodItem
     *   }
     * })
     * 
     */
    delete<T extends FoodItemDeleteArgs>(args: SelectSubset<T, FoodItemDeleteArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodItem.
     * @param {FoodItemUpdateArgs} args - Arguments to update one FoodItem.
     * @example
     * // Update one FoodItem
     * const foodItem = await prisma.foodItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodItemUpdateArgs>(args: SelectSubset<T, FoodItemUpdateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodItems.
     * @param {FoodItemDeleteManyArgs} args - Arguments to filter FoodItems to delete.
     * @example
     * // Delete a few FoodItems
     * const { count } = await prisma.foodItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodItemDeleteManyArgs>(args?: SelectSubset<T, FoodItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodItemUpdateManyArgs>(args: SelectSubset<T, FoodItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems and returns the data updated in the database.
     * @param {FoodItemUpdateManyAndReturnArgs} args - Arguments to update many FoodItems.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends FoodItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodItem.
     * @param {FoodItemUpsertArgs} args - Arguments to update or create a FoodItem.
     * @example
     * // Update or create a FoodItem
     * const foodItem = await prisma.foodItem.upsert({
     *   create: {
     *     // ... data to create a FoodItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodItem we want to update
     *   }
     * })
     */
    upsert<T extends FoodItemUpsertArgs>(args: SelectSubset<T, FoodItemUpsertArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemCountArgs} args - Arguments to filter FoodItems to count.
     * @example
     * // Count the number of FoodItems
     * const count = await prisma.foodItem.count({
     *   where: {
     *     // ... the filter for the FoodItems we want to count
     *   }
     * })
    **/
    count<T extends FoodItemCountArgs>(
      args?: Subset<T, FoodItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodItemAggregateArgs>(args: Subset<T, FoodItemAggregateArgs>): Prisma.PrismaPromise<GetFoodItemAggregateType<T>>

    /**
     * Group by FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemGroupByArgs} args - Group by arguments.
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
      T extends FoodItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodItemGroupByArgs['orderBy'] }
        : { orderBy?: FoodItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodItem model
   */
  readonly fields: FoodItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mealFoods<T extends FoodItem$mealFoodsArgs<ExtArgs> = {}>(args?: Subset<T, FoodItem$mealFoodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FoodItem model
   */
  interface FoodItemFieldRefs {
    readonly id: FieldRef<"FoodItem", 'String'>
    readonly name: FieldRef<"FoodItem", 'String'>
    readonly brand: FieldRef<"FoodItem", 'String'>
    readonly servingSize: FieldRef<"FoodItem", 'Float'>
    readonly servingUnit: FieldRef<"FoodItem", 'String'>
    readonly calories: FieldRef<"FoodItem", 'Float'>
    readonly protein: FieldRef<"FoodItem", 'Float'>
    readonly carbs: FieldRef<"FoodItem", 'Float'>
    readonly fat: FieldRef<"FoodItem", 'Float'>
    readonly fiber: FieldRef<"FoodItem", 'Float'>
    readonly sugar: FieldRef<"FoodItem", 'Float'>
    readonly sodium: FieldRef<"FoodItem", 'Float'>
    readonly category: FieldRef<"FoodItem", 'String'>
    readonly barcode: FieldRef<"FoodItem", 'String'>
    readonly imageUrl: FieldRef<"FoodItem", 'String'>
    readonly createdAt: FieldRef<"FoodItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodItem findUnique
   */
  export type FoodItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findUniqueOrThrow
   */
  export type FoodItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findFirst
   */
  export type FoodItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findFirstOrThrow
   */
  export type FoodItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findMany
   */
  export type FoodItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItems to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem create
   */
  export type FoodItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodItem.
     */
    data: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
  }

  /**
   * FoodItem createMany
   */
  export type FoodItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem createManyAndReturn
   */
  export type FoodItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem update
   */
  export type FoodItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodItem.
     */
    data: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
    /**
     * Choose, which FoodItem to update.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem updateMany
   */
  export type FoodItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem updateManyAndReturn
   */
  export type FoodItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem upsert
   */
  export type FoodItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodItem to update in case it exists.
     */
    where: FoodItemWhereUniqueInput
    /**
     * In case the FoodItem found by the `where` argument doesn't exist, create a new FoodItem with this data.
     */
    create: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
    /**
     * In case the FoodItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
  }

  /**
   * FoodItem delete
   */
  export type FoodItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter which FoodItem to delete.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem deleteMany
   */
  export type FoodItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItems to delete
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to delete.
     */
    limit?: number
  }

  /**
   * FoodItem.mealFoods
   */
  export type FoodItem$mealFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    where?: MealFoodWhereInput
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    cursor?: MealFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * FoodItem without action
   */
  export type FoodItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    date: Date | null
    mealType: string | null
    createdAt: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    date: Date | null
    mealType: string | null
    createdAt: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    date: number
    mealType: number
    createdAt: number
    _all: number
  }


  export type MealMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    date?: true
    mealType?: true
    createdAt?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    date?: true
    mealType?: true
    createdAt?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    date?: true
    mealType?: true
    createdAt?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    date: Date
    mealType: string
    createdAt: Date
    _count: MealCountAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    date?: boolean
    mealType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foods?: boolean | Meal$foodsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    date?: boolean
    mealType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    date?: boolean
    mealType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    date?: boolean
    mealType?: boolean
    createdAt?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "date" | "mealType" | "createdAt", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foods?: boolean | Meal$foodsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      foods: Prisma.$MealFoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
      date: Date
      mealType: string
      createdAt: Date
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foods<T extends Meal$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'String'>
    readonly userId: FieldRef<"Meal", 'String'>
    readonly name: FieldRef<"Meal", 'String'>
    readonly date: FieldRef<"Meal", 'DateTime'>
    readonly mealType: FieldRef<"Meal", 'String'>
    readonly createdAt: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal.foods
   */
  export type Meal$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    where?: MealFoodWhereInput
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    cursor?: MealFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model MealFood
   */

  export type AggregateMealFood = {
    _count: MealFoodCountAggregateOutputType | null
    _avg: MealFoodAvgAggregateOutputType | null
    _sum: MealFoodSumAggregateOutputType | null
    _min: MealFoodMinAggregateOutputType | null
    _max: MealFoodMaxAggregateOutputType | null
  }

  export type MealFoodAvgAggregateOutputType = {
    servings: number | null
  }

  export type MealFoodSumAggregateOutputType = {
    servings: number | null
  }

  export type MealFoodMinAggregateOutputType = {
    id: string | null
    mealId: string | null
    foodId: string | null
    servings: number | null
  }

  export type MealFoodMaxAggregateOutputType = {
    id: string | null
    mealId: string | null
    foodId: string | null
    servings: number | null
  }

  export type MealFoodCountAggregateOutputType = {
    id: number
    mealId: number
    foodId: number
    servings: number
    _all: number
  }


  export type MealFoodAvgAggregateInputType = {
    servings?: true
  }

  export type MealFoodSumAggregateInputType = {
    servings?: true
  }

  export type MealFoodMinAggregateInputType = {
    id?: true
    mealId?: true
    foodId?: true
    servings?: true
  }

  export type MealFoodMaxAggregateInputType = {
    id?: true
    mealId?: true
    foodId?: true
    servings?: true
  }

  export type MealFoodCountAggregateInputType = {
    id?: true
    mealId?: true
    foodId?: true
    servings?: true
    _all?: true
  }

  export type MealFoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealFood to aggregate.
     */
    where?: MealFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealFoods to fetch.
     */
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealFoods
    **/
    _count?: true | MealFoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealFoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealFoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealFoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealFoodMaxAggregateInputType
  }

  export type GetMealFoodAggregateType<T extends MealFoodAggregateArgs> = {
        [P in keyof T & keyof AggregateMealFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealFood[P]>
      : GetScalarType<T[P], AggregateMealFood[P]>
  }




  export type MealFoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealFoodWhereInput
    orderBy?: MealFoodOrderByWithAggregationInput | MealFoodOrderByWithAggregationInput[]
    by: MealFoodScalarFieldEnum[] | MealFoodScalarFieldEnum
    having?: MealFoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealFoodCountAggregateInputType | true
    _avg?: MealFoodAvgAggregateInputType
    _sum?: MealFoodSumAggregateInputType
    _min?: MealFoodMinAggregateInputType
    _max?: MealFoodMaxAggregateInputType
  }

  export type MealFoodGroupByOutputType = {
    id: string
    mealId: string
    foodId: string
    servings: number
    _count: MealFoodCountAggregateOutputType | null
    _avg: MealFoodAvgAggregateOutputType | null
    _sum: MealFoodSumAggregateOutputType | null
    _min: MealFoodMinAggregateOutputType | null
    _max: MealFoodMaxAggregateOutputType | null
  }

  type GetMealFoodGroupByPayload<T extends MealFoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealFoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealFoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealFoodGroupByOutputType[P]>
            : GetScalarType<T[P], MealFoodGroupByOutputType[P]>
        }
      >
    >


  export type MealFoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    foodId?: boolean
    servings?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    food?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealFood"]>

  export type MealFoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    foodId?: boolean
    servings?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    food?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealFood"]>

  export type MealFoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    foodId?: boolean
    servings?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    food?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealFood"]>

  export type MealFoodSelectScalar = {
    id?: boolean
    mealId?: boolean
    foodId?: boolean
    servings?: boolean
  }

  export type MealFoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mealId" | "foodId" | "servings", ExtArgs["result"]["mealFood"]>
  export type MealFoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    food?: boolean | FoodItemDefaultArgs<ExtArgs>
  }
  export type MealFoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    food?: boolean | FoodItemDefaultArgs<ExtArgs>
  }
  export type MealFoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    food?: boolean | FoodItemDefaultArgs<ExtArgs>
  }

  export type $MealFoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealFood"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>
      food: Prisma.$FoodItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mealId: string
      foodId: string
      servings: number
    }, ExtArgs["result"]["mealFood"]>
    composites: {}
  }

  type MealFoodGetPayload<S extends boolean | null | undefined | MealFoodDefaultArgs> = $Result.GetResult<Prisma.$MealFoodPayload, S>

  type MealFoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealFoodCountAggregateInputType | true
    }

  export interface MealFoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealFood'], meta: { name: 'MealFood' } }
    /**
     * Find zero or one MealFood that matches the filter.
     * @param {MealFoodFindUniqueArgs} args - Arguments to find a MealFood
     * @example
     * // Get one MealFood
     * const mealFood = await prisma.mealFood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFoodFindUniqueArgs>(args: SelectSubset<T, MealFoodFindUniqueArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealFood that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFoodFindUniqueOrThrowArgs} args - Arguments to find a MealFood
     * @example
     * // Get one MealFood
     * const mealFood = await prisma.mealFood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFoodFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealFood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodFindFirstArgs} args - Arguments to find a MealFood
     * @example
     * // Get one MealFood
     * const mealFood = await prisma.mealFood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFoodFindFirstArgs>(args?: SelectSubset<T, MealFoodFindFirstArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealFood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodFindFirstOrThrowArgs} args - Arguments to find a MealFood
     * @example
     * // Get one MealFood
     * const mealFood = await prisma.mealFood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFoodFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealFoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealFoods
     * const mealFoods = await prisma.mealFood.findMany()
     * 
     * // Get first 10 MealFoods
     * const mealFoods = await prisma.mealFood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealFoodWithIdOnly = await prisma.mealFood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFoodFindManyArgs>(args?: SelectSubset<T, MealFoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealFood.
     * @param {MealFoodCreateArgs} args - Arguments to create a MealFood.
     * @example
     * // Create one MealFood
     * const MealFood = await prisma.mealFood.create({
     *   data: {
     *     // ... data to create a MealFood
     *   }
     * })
     * 
     */
    create<T extends MealFoodCreateArgs>(args: SelectSubset<T, MealFoodCreateArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealFoods.
     * @param {MealFoodCreateManyArgs} args - Arguments to create many MealFoods.
     * @example
     * // Create many MealFoods
     * const mealFood = await prisma.mealFood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealFoodCreateManyArgs>(args?: SelectSubset<T, MealFoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealFoods and returns the data saved in the database.
     * @param {MealFoodCreateManyAndReturnArgs} args - Arguments to create many MealFoods.
     * @example
     * // Create many MealFoods
     * const mealFood = await prisma.mealFood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealFoods and only return the `id`
     * const mealFoodWithIdOnly = await prisma.mealFood.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealFoodCreateManyAndReturnArgs>(args?: SelectSubset<T, MealFoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealFood.
     * @param {MealFoodDeleteArgs} args - Arguments to delete one MealFood.
     * @example
     * // Delete one MealFood
     * const MealFood = await prisma.mealFood.delete({
     *   where: {
     *     // ... filter to delete one MealFood
     *   }
     * })
     * 
     */
    delete<T extends MealFoodDeleteArgs>(args: SelectSubset<T, MealFoodDeleteArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealFood.
     * @param {MealFoodUpdateArgs} args - Arguments to update one MealFood.
     * @example
     * // Update one MealFood
     * const mealFood = await prisma.mealFood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealFoodUpdateArgs>(args: SelectSubset<T, MealFoodUpdateArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealFoods.
     * @param {MealFoodDeleteManyArgs} args - Arguments to filter MealFoods to delete.
     * @example
     * // Delete a few MealFoods
     * const { count } = await prisma.mealFood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealFoodDeleteManyArgs>(args?: SelectSubset<T, MealFoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealFoods
     * const mealFood = await prisma.mealFood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealFoodUpdateManyArgs>(args: SelectSubset<T, MealFoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealFoods and returns the data updated in the database.
     * @param {MealFoodUpdateManyAndReturnArgs} args - Arguments to update many MealFoods.
     * @example
     * // Update many MealFoods
     * const mealFood = await prisma.mealFood.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealFoods and only return the `id`
     * const mealFoodWithIdOnly = await prisma.mealFood.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealFoodUpdateManyAndReturnArgs>(args: SelectSubset<T, MealFoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealFood.
     * @param {MealFoodUpsertArgs} args - Arguments to update or create a MealFood.
     * @example
     * // Update or create a MealFood
     * const mealFood = await prisma.mealFood.upsert({
     *   create: {
     *     // ... data to create a MealFood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealFood we want to update
     *   }
     * })
     */
    upsert<T extends MealFoodUpsertArgs>(args: SelectSubset<T, MealFoodUpsertArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodCountArgs} args - Arguments to filter MealFoods to count.
     * @example
     * // Count the number of MealFoods
     * const count = await prisma.mealFood.count({
     *   where: {
     *     // ... the filter for the MealFoods we want to count
     *   }
     * })
    **/
    count<T extends MealFoodCountArgs>(
      args?: Subset<T, MealFoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealFoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealFoodAggregateArgs>(args: Subset<T, MealFoodAggregateArgs>): Prisma.PrismaPromise<GetMealFoodAggregateType<T>>

    /**
     * Group by MealFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodGroupByArgs} args - Group by arguments.
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
      T extends MealFoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealFoodGroupByArgs['orderBy'] }
        : { orderBy?: MealFoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealFoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealFood model
   */
  readonly fields: MealFoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealFood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealFoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    food<T extends FoodItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodItemDefaultArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MealFood model
   */
  interface MealFoodFieldRefs {
    readonly id: FieldRef<"MealFood", 'String'>
    readonly mealId: FieldRef<"MealFood", 'String'>
    readonly foodId: FieldRef<"MealFood", 'String'>
    readonly servings: FieldRef<"MealFood", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MealFood findUnique
   */
  export type MealFoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter, which MealFood to fetch.
     */
    where: MealFoodWhereUniqueInput
  }

  /**
   * MealFood findUniqueOrThrow
   */
  export type MealFoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter, which MealFood to fetch.
     */
    where: MealFoodWhereUniqueInput
  }

  /**
   * MealFood findFirst
   */
  export type MealFoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter, which MealFood to fetch.
     */
    where?: MealFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealFoods to fetch.
     */
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealFoods.
     */
    cursor?: MealFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealFoods.
     */
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * MealFood findFirstOrThrow
   */
  export type MealFoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter, which MealFood to fetch.
     */
    where?: MealFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealFoods to fetch.
     */
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealFoods.
     */
    cursor?: MealFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealFoods.
     */
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * MealFood findMany
   */
  export type MealFoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter, which MealFoods to fetch.
     */
    where?: MealFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealFoods to fetch.
     */
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealFoods.
     */
    cursor?: MealFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealFoods.
     */
    skip?: number
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * MealFood create
   */
  export type MealFoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * The data needed to create a MealFood.
     */
    data: XOR<MealFoodCreateInput, MealFoodUncheckedCreateInput>
  }

  /**
   * MealFood createMany
   */
  export type MealFoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealFoods.
     */
    data: MealFoodCreateManyInput | MealFoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealFood createManyAndReturn
   */
  export type MealFoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * The data used to create many MealFoods.
     */
    data: MealFoodCreateManyInput | MealFoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealFood update
   */
  export type MealFoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * The data needed to update a MealFood.
     */
    data: XOR<MealFoodUpdateInput, MealFoodUncheckedUpdateInput>
    /**
     * Choose, which MealFood to update.
     */
    where: MealFoodWhereUniqueInput
  }

  /**
   * MealFood updateMany
   */
  export type MealFoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealFoods.
     */
    data: XOR<MealFoodUpdateManyMutationInput, MealFoodUncheckedUpdateManyInput>
    /**
     * Filter which MealFoods to update
     */
    where?: MealFoodWhereInput
    /**
     * Limit how many MealFoods to update.
     */
    limit?: number
  }

  /**
   * MealFood updateManyAndReturn
   */
  export type MealFoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * The data used to update MealFoods.
     */
    data: XOR<MealFoodUpdateManyMutationInput, MealFoodUncheckedUpdateManyInput>
    /**
     * Filter which MealFoods to update
     */
    where?: MealFoodWhereInput
    /**
     * Limit how many MealFoods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealFood upsert
   */
  export type MealFoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * The filter to search for the MealFood to update in case it exists.
     */
    where: MealFoodWhereUniqueInput
    /**
     * In case the MealFood found by the `where` argument doesn't exist, create a new MealFood with this data.
     */
    create: XOR<MealFoodCreateInput, MealFoodUncheckedCreateInput>
    /**
     * In case the MealFood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealFoodUpdateInput, MealFoodUncheckedUpdateInput>
  }

  /**
   * MealFood delete
   */
  export type MealFoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter which MealFood to delete.
     */
    where: MealFoodWhereUniqueInput
  }

  /**
   * MealFood deleteMany
   */
  export type MealFoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealFoods to delete
     */
    where?: MealFoodWhereInput
    /**
     * Limit how many MealFoods to delete.
     */
    limit?: number
  }

  /**
   * MealFood without action
   */
  export type MealFoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
  }


  /**
   * Model FitnessGoal
   */

  export type AggregateFitnessGoal = {
    _count: FitnessGoalCountAggregateOutputType | null
    _avg: FitnessGoalAvgAggregateOutputType | null
    _sum: FitnessGoalSumAggregateOutputType | null
    _min: FitnessGoalMinAggregateOutputType | null
    _max: FitnessGoalMaxAggregateOutputType | null
  }

  export type FitnessGoalAvgAggregateOutputType = {
    target: number | null
    current: number | null
  }

  export type FitnessGoalSumAggregateOutputType = {
    target: number | null
    current: number | null
  }

  export type FitnessGoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    target: number | null
    current: number | null
    startDate: Date | null
    endDate: Date | null
    achieved: boolean | null
    createdAt: Date | null
  }

  export type FitnessGoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    target: number | null
    current: number | null
    startDate: Date | null
    endDate: Date | null
    achieved: boolean | null
    createdAt: Date | null
  }

  export type FitnessGoalCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    target: number
    current: number
    startDate: number
    endDate: number
    achieved: number
    createdAt: number
    _all: number
  }


  export type FitnessGoalAvgAggregateInputType = {
    target?: true
    current?: true
  }

  export type FitnessGoalSumAggregateInputType = {
    target?: true
    current?: true
  }

  export type FitnessGoalMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    target?: true
    current?: true
    startDate?: true
    endDate?: true
    achieved?: true
    createdAt?: true
  }

  export type FitnessGoalMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    target?: true
    current?: true
    startDate?: true
    endDate?: true
    achieved?: true
    createdAt?: true
  }

  export type FitnessGoalCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    target?: true
    current?: true
    startDate?: true
    endDate?: true
    achieved?: true
    createdAt?: true
    _all?: true
  }

  export type FitnessGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FitnessGoal to aggregate.
     */
    where?: FitnessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitnessGoals to fetch.
     */
    orderBy?: FitnessGoalOrderByWithRelationInput | FitnessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FitnessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitnessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitnessGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FitnessGoals
    **/
    _count?: true | FitnessGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FitnessGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FitnessGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FitnessGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FitnessGoalMaxAggregateInputType
  }

  export type GetFitnessGoalAggregateType<T extends FitnessGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateFitnessGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFitnessGoal[P]>
      : GetScalarType<T[P], AggregateFitnessGoal[P]>
  }




  export type FitnessGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FitnessGoalWhereInput
    orderBy?: FitnessGoalOrderByWithAggregationInput | FitnessGoalOrderByWithAggregationInput[]
    by: FitnessGoalScalarFieldEnum[] | FitnessGoalScalarFieldEnum
    having?: FitnessGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FitnessGoalCountAggregateInputType | true
    _avg?: FitnessGoalAvgAggregateInputType
    _sum?: FitnessGoalSumAggregateInputType
    _min?: FitnessGoalMinAggregateInputType
    _max?: FitnessGoalMaxAggregateInputType
  }

  export type FitnessGoalGroupByOutputType = {
    id: string
    userId: string
    type: string
    target: number
    current: number | null
    startDate: Date
    endDate: Date | null
    achieved: boolean
    createdAt: Date
    _count: FitnessGoalCountAggregateOutputType | null
    _avg: FitnessGoalAvgAggregateOutputType | null
    _sum: FitnessGoalSumAggregateOutputType | null
    _min: FitnessGoalMinAggregateOutputType | null
    _max: FitnessGoalMaxAggregateOutputType | null
  }

  type GetFitnessGoalGroupByPayload<T extends FitnessGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FitnessGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FitnessGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FitnessGoalGroupByOutputType[P]>
            : GetScalarType<T[P], FitnessGoalGroupByOutputType[P]>
        }
      >
    >


  export type FitnessGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    startDate?: boolean
    endDate?: boolean
    achieved?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fitnessGoal"]>

  export type FitnessGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    startDate?: boolean
    endDate?: boolean
    achieved?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fitnessGoal"]>

  export type FitnessGoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    startDate?: boolean
    endDate?: boolean
    achieved?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fitnessGoal"]>

  export type FitnessGoalSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    startDate?: boolean
    endDate?: boolean
    achieved?: boolean
    createdAt?: boolean
  }

  export type FitnessGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "target" | "current" | "startDate" | "endDate" | "achieved" | "createdAt", ExtArgs["result"]["fitnessGoal"]>
  export type FitnessGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FitnessGoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FitnessGoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FitnessGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FitnessGoal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      target: number
      current: number | null
      startDate: Date
      endDate: Date | null
      achieved: boolean
      createdAt: Date
    }, ExtArgs["result"]["fitnessGoal"]>
    composites: {}
  }

  type FitnessGoalGetPayload<S extends boolean | null | undefined | FitnessGoalDefaultArgs> = $Result.GetResult<Prisma.$FitnessGoalPayload, S>

  type FitnessGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FitnessGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FitnessGoalCountAggregateInputType | true
    }

  export interface FitnessGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FitnessGoal'], meta: { name: 'FitnessGoal' } }
    /**
     * Find zero or one FitnessGoal that matches the filter.
     * @param {FitnessGoalFindUniqueArgs} args - Arguments to find a FitnessGoal
     * @example
     * // Get one FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FitnessGoalFindUniqueArgs>(args: SelectSubset<T, FitnessGoalFindUniqueArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FitnessGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FitnessGoalFindUniqueOrThrowArgs} args - Arguments to find a FitnessGoal
     * @example
     * // Get one FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FitnessGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, FitnessGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FitnessGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalFindFirstArgs} args - Arguments to find a FitnessGoal
     * @example
     * // Get one FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FitnessGoalFindFirstArgs>(args?: SelectSubset<T, FitnessGoalFindFirstArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FitnessGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalFindFirstOrThrowArgs} args - Arguments to find a FitnessGoal
     * @example
     * // Get one FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FitnessGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, FitnessGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FitnessGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FitnessGoals
     * const fitnessGoals = await prisma.fitnessGoal.findMany()
     * 
     * // Get first 10 FitnessGoals
     * const fitnessGoals = await prisma.fitnessGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fitnessGoalWithIdOnly = await prisma.fitnessGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FitnessGoalFindManyArgs>(args?: SelectSubset<T, FitnessGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FitnessGoal.
     * @param {FitnessGoalCreateArgs} args - Arguments to create a FitnessGoal.
     * @example
     * // Create one FitnessGoal
     * const FitnessGoal = await prisma.fitnessGoal.create({
     *   data: {
     *     // ... data to create a FitnessGoal
     *   }
     * })
     * 
     */
    create<T extends FitnessGoalCreateArgs>(args: SelectSubset<T, FitnessGoalCreateArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FitnessGoals.
     * @param {FitnessGoalCreateManyArgs} args - Arguments to create many FitnessGoals.
     * @example
     * // Create many FitnessGoals
     * const fitnessGoal = await prisma.fitnessGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FitnessGoalCreateManyArgs>(args?: SelectSubset<T, FitnessGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FitnessGoals and returns the data saved in the database.
     * @param {FitnessGoalCreateManyAndReturnArgs} args - Arguments to create many FitnessGoals.
     * @example
     * // Create many FitnessGoals
     * const fitnessGoal = await prisma.fitnessGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FitnessGoals and only return the `id`
     * const fitnessGoalWithIdOnly = await prisma.fitnessGoal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FitnessGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, FitnessGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FitnessGoal.
     * @param {FitnessGoalDeleteArgs} args - Arguments to delete one FitnessGoal.
     * @example
     * // Delete one FitnessGoal
     * const FitnessGoal = await prisma.fitnessGoal.delete({
     *   where: {
     *     // ... filter to delete one FitnessGoal
     *   }
     * })
     * 
     */
    delete<T extends FitnessGoalDeleteArgs>(args: SelectSubset<T, FitnessGoalDeleteArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FitnessGoal.
     * @param {FitnessGoalUpdateArgs} args - Arguments to update one FitnessGoal.
     * @example
     * // Update one FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FitnessGoalUpdateArgs>(args: SelectSubset<T, FitnessGoalUpdateArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FitnessGoals.
     * @param {FitnessGoalDeleteManyArgs} args - Arguments to filter FitnessGoals to delete.
     * @example
     * // Delete a few FitnessGoals
     * const { count } = await prisma.fitnessGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FitnessGoalDeleteManyArgs>(args?: SelectSubset<T, FitnessGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FitnessGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FitnessGoals
     * const fitnessGoal = await prisma.fitnessGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FitnessGoalUpdateManyArgs>(args: SelectSubset<T, FitnessGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FitnessGoals and returns the data updated in the database.
     * @param {FitnessGoalUpdateManyAndReturnArgs} args - Arguments to update many FitnessGoals.
     * @example
     * // Update many FitnessGoals
     * const fitnessGoal = await prisma.fitnessGoal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FitnessGoals and only return the `id`
     * const fitnessGoalWithIdOnly = await prisma.fitnessGoal.updateManyAndReturn({
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
    updateManyAndReturn<T extends FitnessGoalUpdateManyAndReturnArgs>(args: SelectSubset<T, FitnessGoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FitnessGoal.
     * @param {FitnessGoalUpsertArgs} args - Arguments to update or create a FitnessGoal.
     * @example
     * // Update or create a FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.upsert({
     *   create: {
     *     // ... data to create a FitnessGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FitnessGoal we want to update
     *   }
     * })
     */
    upsert<T extends FitnessGoalUpsertArgs>(args: SelectSubset<T, FitnessGoalUpsertArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FitnessGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalCountArgs} args - Arguments to filter FitnessGoals to count.
     * @example
     * // Count the number of FitnessGoals
     * const count = await prisma.fitnessGoal.count({
     *   where: {
     *     // ... the filter for the FitnessGoals we want to count
     *   }
     * })
    **/
    count<T extends FitnessGoalCountArgs>(
      args?: Subset<T, FitnessGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FitnessGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FitnessGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FitnessGoalAggregateArgs>(args: Subset<T, FitnessGoalAggregateArgs>): Prisma.PrismaPromise<GetFitnessGoalAggregateType<T>>

    /**
     * Group by FitnessGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalGroupByArgs} args - Group by arguments.
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
      T extends FitnessGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FitnessGoalGroupByArgs['orderBy'] }
        : { orderBy?: FitnessGoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FitnessGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFitnessGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FitnessGoal model
   */
  readonly fields: FitnessGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FitnessGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FitnessGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FitnessGoal model
   */
  interface FitnessGoalFieldRefs {
    readonly id: FieldRef<"FitnessGoal", 'String'>
    readonly userId: FieldRef<"FitnessGoal", 'String'>
    readonly type: FieldRef<"FitnessGoal", 'String'>
    readonly target: FieldRef<"FitnessGoal", 'Float'>
    readonly current: FieldRef<"FitnessGoal", 'Float'>
    readonly startDate: FieldRef<"FitnessGoal", 'DateTime'>
    readonly endDate: FieldRef<"FitnessGoal", 'DateTime'>
    readonly achieved: FieldRef<"FitnessGoal", 'Boolean'>
    readonly createdAt: FieldRef<"FitnessGoal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FitnessGoal findUnique
   */
  export type FitnessGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter, which FitnessGoal to fetch.
     */
    where: FitnessGoalWhereUniqueInput
  }

  /**
   * FitnessGoal findUniqueOrThrow
   */
  export type FitnessGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter, which FitnessGoal to fetch.
     */
    where: FitnessGoalWhereUniqueInput
  }

  /**
   * FitnessGoal findFirst
   */
  export type FitnessGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter, which FitnessGoal to fetch.
     */
    where?: FitnessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitnessGoals to fetch.
     */
    orderBy?: FitnessGoalOrderByWithRelationInput | FitnessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FitnessGoals.
     */
    cursor?: FitnessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitnessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitnessGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FitnessGoals.
     */
    distinct?: FitnessGoalScalarFieldEnum | FitnessGoalScalarFieldEnum[]
  }

  /**
   * FitnessGoal findFirstOrThrow
   */
  export type FitnessGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter, which FitnessGoal to fetch.
     */
    where?: FitnessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitnessGoals to fetch.
     */
    orderBy?: FitnessGoalOrderByWithRelationInput | FitnessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FitnessGoals.
     */
    cursor?: FitnessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitnessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitnessGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FitnessGoals.
     */
    distinct?: FitnessGoalScalarFieldEnum | FitnessGoalScalarFieldEnum[]
  }

  /**
   * FitnessGoal findMany
   */
  export type FitnessGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter, which FitnessGoals to fetch.
     */
    where?: FitnessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitnessGoals to fetch.
     */
    orderBy?: FitnessGoalOrderByWithRelationInput | FitnessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FitnessGoals.
     */
    cursor?: FitnessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitnessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitnessGoals.
     */
    skip?: number
    distinct?: FitnessGoalScalarFieldEnum | FitnessGoalScalarFieldEnum[]
  }

  /**
   * FitnessGoal create
   */
  export type FitnessGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a FitnessGoal.
     */
    data: XOR<FitnessGoalCreateInput, FitnessGoalUncheckedCreateInput>
  }

  /**
   * FitnessGoal createMany
   */
  export type FitnessGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FitnessGoals.
     */
    data: FitnessGoalCreateManyInput | FitnessGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FitnessGoal createManyAndReturn
   */
  export type FitnessGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * The data used to create many FitnessGoals.
     */
    data: FitnessGoalCreateManyInput | FitnessGoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FitnessGoal update
   */
  export type FitnessGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a FitnessGoal.
     */
    data: XOR<FitnessGoalUpdateInput, FitnessGoalUncheckedUpdateInput>
    /**
     * Choose, which FitnessGoal to update.
     */
    where: FitnessGoalWhereUniqueInput
  }

  /**
   * FitnessGoal updateMany
   */
  export type FitnessGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FitnessGoals.
     */
    data: XOR<FitnessGoalUpdateManyMutationInput, FitnessGoalUncheckedUpdateManyInput>
    /**
     * Filter which FitnessGoals to update
     */
    where?: FitnessGoalWhereInput
    /**
     * Limit how many FitnessGoals to update.
     */
    limit?: number
  }

  /**
   * FitnessGoal updateManyAndReturn
   */
  export type FitnessGoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * The data used to update FitnessGoals.
     */
    data: XOR<FitnessGoalUpdateManyMutationInput, FitnessGoalUncheckedUpdateManyInput>
    /**
     * Filter which FitnessGoals to update
     */
    where?: FitnessGoalWhereInput
    /**
     * Limit how many FitnessGoals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FitnessGoal upsert
   */
  export type FitnessGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the FitnessGoal to update in case it exists.
     */
    where: FitnessGoalWhereUniqueInput
    /**
     * In case the FitnessGoal found by the `where` argument doesn't exist, create a new FitnessGoal with this data.
     */
    create: XOR<FitnessGoalCreateInput, FitnessGoalUncheckedCreateInput>
    /**
     * In case the FitnessGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FitnessGoalUpdateInput, FitnessGoalUncheckedUpdateInput>
  }

  /**
   * FitnessGoal delete
   */
  export type FitnessGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter which FitnessGoal to delete.
     */
    where: FitnessGoalWhereUniqueInput
  }

  /**
   * FitnessGoal deleteMany
   */
  export type FitnessGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FitnessGoals to delete
     */
    where?: FitnessGoalWhereInput
    /**
     * Limit how many FitnessGoals to delete.
     */
    limit?: number
  }

  /**
   * FitnessGoal without action
   */
  export type FitnessGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
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


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    owner: 'owner',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    messages: 'messages',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SubdomainOrderScalarFieldEnum: {
    id: 'id',
    subdomain: 'subdomain',
    rootDomain: 'rootDomain',
    fullDomain: 'fullDomain',
    target: 'target',
    recordType: 'recordType',
    clientName: 'clientName',
    clientEmail: 'clientEmail',
    clientPhone: 'clientPhone',
    price: 'price',
    currency: 'currency',
    status: 'status',
    cfRecordId: 'cfRecordId',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubdomainOrderScalarFieldEnum = (typeof SubdomainOrderScalarFieldEnum)[keyof typeof SubdomainOrderScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    bodyPart: 'bodyPart',
    equipment: 'equipment',
    target: 'target',
    muscleGroup: 'muscleGroup',
    secondaryMuscles: 'secondaryMuscles',
    instructions: 'instructions',
    image: 'image',
    gifUrl: 'gifUrl',
    attribution: 'attribution',
    createdAt: 'createdAt'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    notes: 'notes',
    duration: 'duration',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const WorkoutExerciseScalarFieldEnum: {
    id: 'id',
    workoutId: 'workoutId',
    exerciseId: 'exerciseId',
    order: 'order',
    notes: 'notes'
  };

  export type WorkoutExerciseScalarFieldEnum = (typeof WorkoutExerciseScalarFieldEnum)[keyof typeof WorkoutExerciseScalarFieldEnum]


  export const SetScalarFieldEnum: {
    id: 'id',
    workoutExerciseId: 'workoutExerciseId',
    setNumber: 'setNumber',
    reps: 'reps',
    weight: 'weight',
    rpe: 'rpe',
    isWarmup: 'isWarmup',
    isDropset: 'isDropset',
    isFailure: 'isFailure'
  };

  export type SetScalarFieldEnum = (typeof SetScalarFieldEnum)[keyof typeof SetScalarFieldEnum]


  export const RoutineScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoutineScalarFieldEnum = (typeof RoutineScalarFieldEnum)[keyof typeof RoutineScalarFieldEnum]


  export const RoutineExerciseScalarFieldEnum: {
    id: 'id',
    routineId: 'routineId',
    exerciseId: 'exerciseId',
    order: 'order',
    sets: 'sets',
    minReps: 'minReps',
    maxReps: 'maxReps',
    restTime: 'restTime'
  };

  export type RoutineExerciseScalarFieldEnum = (typeof RoutineExerciseScalarFieldEnum)[keyof typeof RoutineExerciseScalarFieldEnum]


  export const BodyMeasurementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    weight: 'weight',
    bodyFat: 'bodyFat',
    chest: 'chest',
    waist: 'waist',
    hips: 'hips',
    arms: 'arms',
    thighs: 'thighs',
    calves: 'calves',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type BodyMeasurementScalarFieldEnum = (typeof BodyMeasurementScalarFieldEnum)[keyof typeof BodyMeasurementScalarFieldEnum]


  export const FoodItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    servingSize: 'servingSize',
    servingUnit: 'servingUnit',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat',
    fiber: 'fiber',
    sugar: 'sugar',
    sodium: 'sodium',
    category: 'category',
    barcode: 'barcode',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type FoodItemScalarFieldEnum = (typeof FoodItemScalarFieldEnum)[keyof typeof FoodItemScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    date: 'date',
    mealType: 'mealType',
    createdAt: 'createdAt'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const MealFoodScalarFieldEnum: {
    id: 'id',
    mealId: 'mealId',
    foodId: 'foodId',
    servings: 'servings'
  };

  export type MealFoodScalarFieldEnum = (typeof MealFoodScalarFieldEnum)[keyof typeof MealFoodScalarFieldEnum]


  export const FitnessGoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    target: 'target',
    current: 'current',
    startDate: 'startDate',
    endDate: 'endDate',
    achieved: 'achieved',
    createdAt: 'createdAt'
  };

  export type FitnessGoalScalarFieldEnum = (typeof FitnessGoalScalarFieldEnum)[keyof typeof FitnessGoalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    owner?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    owner?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: StringWithAggregatesFilter<"Task"> | string
    priority?: StringWithAggregatesFilter<"Task"> | string
    owner?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
    workouts?: WorkoutListRelationFilter
    routines?: RoutineListRelationFilter
    bodyMeasurements?: BodyMeasurementListRelationFilter
    meals?: MealListRelationFilter
    fitnessGoals?: FitnessGoalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    workouts?: WorkoutOrderByRelationAggregateInput
    routines?: RoutineOrderByRelationAggregateInput
    bodyMeasurements?: BodyMeasurementOrderByRelationAggregateInput
    meals?: MealOrderByRelationAggregateInput
    fitnessGoals?: FitnessGoalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
    workouts?: WorkoutListRelationFilter
    routines?: RoutineListRelationFilter
    bodyMeasurements?: BodyMeasurementListRelationFilter
    meals?: MealListRelationFilter
    fitnessGoals?: FitnessGoalListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    userId?: StringNullableFilter<"Project"> | string | null
    messages?: StringFilter<"Project"> | string
    data?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrderInput | SortOrder
    messages?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    userId?: StringNullableFilter<"Project"> | string | null
    messages?: StringFilter<"Project"> | string
    data?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrderInput | SortOrder
    messages?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    messages?: StringWithAggregatesFilter<"Project"> | string
    data?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type SubdomainOrderWhereInput = {
    AND?: SubdomainOrderWhereInput | SubdomainOrderWhereInput[]
    OR?: SubdomainOrderWhereInput[]
    NOT?: SubdomainOrderWhereInput | SubdomainOrderWhereInput[]
    id?: StringFilter<"SubdomainOrder"> | string
    subdomain?: StringFilter<"SubdomainOrder"> | string
    rootDomain?: StringFilter<"SubdomainOrder"> | string
    fullDomain?: StringFilter<"SubdomainOrder"> | string
    target?: StringFilter<"SubdomainOrder"> | string
    recordType?: StringFilter<"SubdomainOrder"> | string
    clientName?: StringFilter<"SubdomainOrder"> | string
    clientEmail?: StringFilter<"SubdomainOrder"> | string
    clientPhone?: StringNullableFilter<"SubdomainOrder"> | string | null
    price?: FloatFilter<"SubdomainOrder"> | number
    currency?: StringFilter<"SubdomainOrder"> | string
    status?: StringFilter<"SubdomainOrder"> | string
    cfRecordId?: StringNullableFilter<"SubdomainOrder"> | string | null
    notes?: StringNullableFilter<"SubdomainOrder"> | string | null
    createdAt?: DateTimeFilter<"SubdomainOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SubdomainOrder"> | Date | string
  }

  export type SubdomainOrderOrderByWithRelationInput = {
    id?: SortOrder
    subdomain?: SortOrder
    rootDomain?: SortOrder
    fullDomain?: SortOrder
    target?: SortOrder
    recordType?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    clientPhone?: SortOrderInput | SortOrder
    price?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    cfRecordId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubdomainOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subdomain?: string
    fullDomain?: string
    AND?: SubdomainOrderWhereInput | SubdomainOrderWhereInput[]
    OR?: SubdomainOrderWhereInput[]
    NOT?: SubdomainOrderWhereInput | SubdomainOrderWhereInput[]
    rootDomain?: StringFilter<"SubdomainOrder"> | string
    target?: StringFilter<"SubdomainOrder"> | string
    recordType?: StringFilter<"SubdomainOrder"> | string
    clientName?: StringFilter<"SubdomainOrder"> | string
    clientEmail?: StringFilter<"SubdomainOrder"> | string
    clientPhone?: StringNullableFilter<"SubdomainOrder"> | string | null
    price?: FloatFilter<"SubdomainOrder"> | number
    currency?: StringFilter<"SubdomainOrder"> | string
    status?: StringFilter<"SubdomainOrder"> | string
    cfRecordId?: StringNullableFilter<"SubdomainOrder"> | string | null
    notes?: StringNullableFilter<"SubdomainOrder"> | string | null
    createdAt?: DateTimeFilter<"SubdomainOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SubdomainOrder"> | Date | string
  }, "id" | "subdomain" | "fullDomain">

  export type SubdomainOrderOrderByWithAggregationInput = {
    id?: SortOrder
    subdomain?: SortOrder
    rootDomain?: SortOrder
    fullDomain?: SortOrder
    target?: SortOrder
    recordType?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    clientPhone?: SortOrderInput | SortOrder
    price?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    cfRecordId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubdomainOrderCountOrderByAggregateInput
    _avg?: SubdomainOrderAvgOrderByAggregateInput
    _max?: SubdomainOrderMaxOrderByAggregateInput
    _min?: SubdomainOrderMinOrderByAggregateInput
    _sum?: SubdomainOrderSumOrderByAggregateInput
  }

  export type SubdomainOrderScalarWhereWithAggregatesInput = {
    AND?: SubdomainOrderScalarWhereWithAggregatesInput | SubdomainOrderScalarWhereWithAggregatesInput[]
    OR?: SubdomainOrderScalarWhereWithAggregatesInput[]
    NOT?: SubdomainOrderScalarWhereWithAggregatesInput | SubdomainOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubdomainOrder"> | string
    subdomain?: StringWithAggregatesFilter<"SubdomainOrder"> | string
    rootDomain?: StringWithAggregatesFilter<"SubdomainOrder"> | string
    fullDomain?: StringWithAggregatesFilter<"SubdomainOrder"> | string
    target?: StringWithAggregatesFilter<"SubdomainOrder"> | string
    recordType?: StringWithAggregatesFilter<"SubdomainOrder"> | string
    clientName?: StringWithAggregatesFilter<"SubdomainOrder"> | string
    clientEmail?: StringWithAggregatesFilter<"SubdomainOrder"> | string
    clientPhone?: StringNullableWithAggregatesFilter<"SubdomainOrder"> | string | null
    price?: FloatWithAggregatesFilter<"SubdomainOrder"> | number
    currency?: StringWithAggregatesFilter<"SubdomainOrder"> | string
    status?: StringWithAggregatesFilter<"SubdomainOrder"> | string
    cfRecordId?: StringNullableWithAggregatesFilter<"SubdomainOrder"> | string | null
    notes?: StringNullableWithAggregatesFilter<"SubdomainOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SubdomainOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubdomainOrder"> | Date | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    category?: StringFilter<"Exercise"> | string
    bodyPart?: StringFilter<"Exercise"> | string
    equipment?: StringFilter<"Exercise"> | string
    target?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    secondaryMuscles?: JsonFilter<"Exercise">
    instructions?: StringFilter<"Exercise"> | string
    image?: StringNullableFilter<"Exercise"> | string | null
    gifUrl?: StringNullableFilter<"Exercise"> | string | null
    attribution?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    workoutExercises?: WorkoutExerciseListRelationFilter
    routineExercises?: RoutineExerciseListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    bodyPart?: SortOrder
    equipment?: SortOrder
    target?: SortOrder
    muscleGroup?: SortOrder
    secondaryMuscles?: SortOrder
    instructions?: SortOrder
    image?: SortOrderInput | SortOrder
    gifUrl?: SortOrderInput | SortOrder
    attribution?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workoutExercises?: WorkoutExerciseOrderByRelationAggregateInput
    routineExercises?: RoutineExerciseOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    category?: StringFilter<"Exercise"> | string
    bodyPart?: StringFilter<"Exercise"> | string
    equipment?: StringFilter<"Exercise"> | string
    target?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    secondaryMuscles?: JsonFilter<"Exercise">
    instructions?: StringFilter<"Exercise"> | string
    image?: StringNullableFilter<"Exercise"> | string | null
    gifUrl?: StringNullableFilter<"Exercise"> | string | null
    attribution?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    workoutExercises?: WorkoutExerciseListRelationFilter
    routineExercises?: RoutineExerciseListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    bodyPart?: SortOrder
    equipment?: SortOrder
    target?: SortOrder
    muscleGroup?: SortOrder
    secondaryMuscles?: SortOrder
    instructions?: SortOrder
    image?: SortOrderInput | SortOrder
    gifUrl?: SortOrderInput | SortOrder
    attribution?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    category?: StringWithAggregatesFilter<"Exercise"> | string
    bodyPart?: StringWithAggregatesFilter<"Exercise"> | string
    equipment?: StringWithAggregatesFilter<"Exercise"> | string
    target?: StringWithAggregatesFilter<"Exercise"> | string
    muscleGroup?: StringWithAggregatesFilter<"Exercise"> | string
    secondaryMuscles?: JsonWithAggregatesFilter<"Exercise">
    instructions?: StringWithAggregatesFilter<"Exercise"> | string
    image?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    gifUrl?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    attribution?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: StringFilter<"Workout"> | string
    userId?: StringFilter<"Workout"> | string
    name?: StringNullableFilter<"Workout"> | string | null
    notes?: StringNullableFilter<"Workout"> | string | null
    duration?: IntNullableFilter<"Workout"> | number | null
    date?: DateTimeFilter<"Workout"> | Date | string
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: WorkoutExerciseListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    exercises?: WorkoutExerciseOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    userId?: StringFilter<"Workout"> | string
    name?: StringNullableFilter<"Workout"> | string | null
    notes?: StringNullableFilter<"Workout"> | string | null
    duration?: IntNullableFilter<"Workout"> | number | null
    date?: DateTimeFilter<"Workout"> | Date | string
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: WorkoutExerciseListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workout"> | string
    userId?: StringWithAggregatesFilter<"Workout"> | string
    name?: StringNullableWithAggregatesFilter<"Workout"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Workout"> | string | null
    duration?: IntNullableWithAggregatesFilter<"Workout"> | number | null
    date?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
  }

  export type WorkoutExerciseWhereInput = {
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    id?: StringFilter<"WorkoutExercise"> | string
    workoutId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    order?: IntFilter<"WorkoutExercise"> | number
    notes?: StringNullableFilter<"WorkoutExercise"> | string | null
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    sets?: SetListRelationFilter
  }

  export type WorkoutExerciseOrderByWithRelationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    notes?: SortOrderInput | SortOrder
    workout?: WorkoutOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
    sets?: SetOrderByRelationAggregateInput
  }

  export type WorkoutExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    workoutId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    order?: IntFilter<"WorkoutExercise"> | number
    notes?: StringNullableFilter<"WorkoutExercise"> | string | null
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    sets?: SetListRelationFilter
  }, "id">

  export type WorkoutExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: WorkoutExerciseCountOrderByAggregateInput
    _avg?: WorkoutExerciseAvgOrderByAggregateInput
    _max?: WorkoutExerciseMaxOrderByAggregateInput
    _min?: WorkoutExerciseMinOrderByAggregateInput
    _sum?: WorkoutExerciseSumOrderByAggregateInput
  }

  export type WorkoutExerciseScalarWhereWithAggregatesInput = {
    AND?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    OR?: WorkoutExerciseScalarWhereWithAggregatesInput[]
    NOT?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    workoutId?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    exerciseId?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    order?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    notes?: StringNullableWithAggregatesFilter<"WorkoutExercise"> | string | null
  }

  export type SetWhereInput = {
    AND?: SetWhereInput | SetWhereInput[]
    OR?: SetWhereInput[]
    NOT?: SetWhereInput | SetWhereInput[]
    id?: StringFilter<"Set"> | string
    workoutExerciseId?: StringFilter<"Set"> | string
    setNumber?: IntFilter<"Set"> | number
    reps?: IntNullableFilter<"Set"> | number | null
    weight?: FloatNullableFilter<"Set"> | number | null
    rpe?: FloatNullableFilter<"Set"> | number | null
    isWarmup?: BoolFilter<"Set"> | boolean
    isDropset?: BoolFilter<"Set"> | boolean
    isFailure?: BoolFilter<"Set"> | boolean
    workoutExercise?: XOR<WorkoutExerciseScalarRelationFilter, WorkoutExerciseWhereInput>
  }

  export type SetOrderByWithRelationInput = {
    id?: SortOrder
    workoutExerciseId?: SortOrder
    setNumber?: SortOrder
    reps?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    rpe?: SortOrderInput | SortOrder
    isWarmup?: SortOrder
    isDropset?: SortOrder
    isFailure?: SortOrder
    workoutExercise?: WorkoutExerciseOrderByWithRelationInput
  }

  export type SetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SetWhereInput | SetWhereInput[]
    OR?: SetWhereInput[]
    NOT?: SetWhereInput | SetWhereInput[]
    workoutExerciseId?: StringFilter<"Set"> | string
    setNumber?: IntFilter<"Set"> | number
    reps?: IntNullableFilter<"Set"> | number | null
    weight?: FloatNullableFilter<"Set"> | number | null
    rpe?: FloatNullableFilter<"Set"> | number | null
    isWarmup?: BoolFilter<"Set"> | boolean
    isDropset?: BoolFilter<"Set"> | boolean
    isFailure?: BoolFilter<"Set"> | boolean
    workoutExercise?: XOR<WorkoutExerciseScalarRelationFilter, WorkoutExerciseWhereInput>
  }, "id">

  export type SetOrderByWithAggregationInput = {
    id?: SortOrder
    workoutExerciseId?: SortOrder
    setNumber?: SortOrder
    reps?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    rpe?: SortOrderInput | SortOrder
    isWarmup?: SortOrder
    isDropset?: SortOrder
    isFailure?: SortOrder
    _count?: SetCountOrderByAggregateInput
    _avg?: SetAvgOrderByAggregateInput
    _max?: SetMaxOrderByAggregateInput
    _min?: SetMinOrderByAggregateInput
    _sum?: SetSumOrderByAggregateInput
  }

  export type SetScalarWhereWithAggregatesInput = {
    AND?: SetScalarWhereWithAggregatesInput | SetScalarWhereWithAggregatesInput[]
    OR?: SetScalarWhereWithAggregatesInput[]
    NOT?: SetScalarWhereWithAggregatesInput | SetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Set"> | string
    workoutExerciseId?: StringWithAggregatesFilter<"Set"> | string
    setNumber?: IntWithAggregatesFilter<"Set"> | number
    reps?: IntNullableWithAggregatesFilter<"Set"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"Set"> | number | null
    rpe?: FloatNullableWithAggregatesFilter<"Set"> | number | null
    isWarmup?: BoolWithAggregatesFilter<"Set"> | boolean
    isDropset?: BoolWithAggregatesFilter<"Set"> | boolean
    isFailure?: BoolWithAggregatesFilter<"Set"> | boolean
  }

  export type RoutineWhereInput = {
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    id?: StringFilter<"Routine"> | string
    userId?: StringFilter<"Routine"> | string
    name?: StringFilter<"Routine"> | string
    description?: StringNullableFilter<"Routine"> | string | null
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: RoutineExerciseListRelationFilter
  }

  export type RoutineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    exercises?: RoutineExerciseOrderByRelationAggregateInput
  }

  export type RoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    userId?: StringFilter<"Routine"> | string
    name?: StringFilter<"Routine"> | string
    description?: StringNullableFilter<"Routine"> | string | null
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: RoutineExerciseListRelationFilter
  }, "id">

  export type RoutineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoutineCountOrderByAggregateInput
    _max?: RoutineMaxOrderByAggregateInput
    _min?: RoutineMinOrderByAggregateInput
  }

  export type RoutineScalarWhereWithAggregatesInput = {
    AND?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    OR?: RoutineScalarWhereWithAggregatesInput[]
    NOT?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Routine"> | string
    userId?: StringWithAggregatesFilter<"Routine"> | string
    name?: StringWithAggregatesFilter<"Routine"> | string
    description?: StringNullableWithAggregatesFilter<"Routine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
  }

  export type RoutineExerciseWhereInput = {
    AND?: RoutineExerciseWhereInput | RoutineExerciseWhereInput[]
    OR?: RoutineExerciseWhereInput[]
    NOT?: RoutineExerciseWhereInput | RoutineExerciseWhereInput[]
    id?: StringFilter<"RoutineExercise"> | string
    routineId?: StringFilter<"RoutineExercise"> | string
    exerciseId?: StringFilter<"RoutineExercise"> | string
    order?: IntFilter<"RoutineExercise"> | number
    sets?: IntFilter<"RoutineExercise"> | number
    minReps?: IntNullableFilter<"RoutineExercise"> | number | null
    maxReps?: IntNullableFilter<"RoutineExercise"> | number | null
    restTime?: IntNullableFilter<"RoutineExercise"> | number | null
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type RoutineExerciseOrderByWithRelationInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    minReps?: SortOrderInput | SortOrder
    maxReps?: SortOrderInput | SortOrder
    restTime?: SortOrderInput | SortOrder
    routine?: RoutineOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type RoutineExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutineExerciseWhereInput | RoutineExerciseWhereInput[]
    OR?: RoutineExerciseWhereInput[]
    NOT?: RoutineExerciseWhereInput | RoutineExerciseWhereInput[]
    routineId?: StringFilter<"RoutineExercise"> | string
    exerciseId?: StringFilter<"RoutineExercise"> | string
    order?: IntFilter<"RoutineExercise"> | number
    sets?: IntFilter<"RoutineExercise"> | number
    minReps?: IntNullableFilter<"RoutineExercise"> | number | null
    maxReps?: IntNullableFilter<"RoutineExercise"> | number | null
    restTime?: IntNullableFilter<"RoutineExercise"> | number | null
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type RoutineExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    minReps?: SortOrderInput | SortOrder
    maxReps?: SortOrderInput | SortOrder
    restTime?: SortOrderInput | SortOrder
    _count?: RoutineExerciseCountOrderByAggregateInput
    _avg?: RoutineExerciseAvgOrderByAggregateInput
    _max?: RoutineExerciseMaxOrderByAggregateInput
    _min?: RoutineExerciseMinOrderByAggregateInput
    _sum?: RoutineExerciseSumOrderByAggregateInput
  }

  export type RoutineExerciseScalarWhereWithAggregatesInput = {
    AND?: RoutineExerciseScalarWhereWithAggregatesInput | RoutineExerciseScalarWhereWithAggregatesInput[]
    OR?: RoutineExerciseScalarWhereWithAggregatesInput[]
    NOT?: RoutineExerciseScalarWhereWithAggregatesInput | RoutineExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoutineExercise"> | string
    routineId?: StringWithAggregatesFilter<"RoutineExercise"> | string
    exerciseId?: StringWithAggregatesFilter<"RoutineExercise"> | string
    order?: IntWithAggregatesFilter<"RoutineExercise"> | number
    sets?: IntWithAggregatesFilter<"RoutineExercise"> | number
    minReps?: IntNullableWithAggregatesFilter<"RoutineExercise"> | number | null
    maxReps?: IntNullableWithAggregatesFilter<"RoutineExercise"> | number | null
    restTime?: IntNullableWithAggregatesFilter<"RoutineExercise"> | number | null
  }

  export type BodyMeasurementWhereInput = {
    AND?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    OR?: BodyMeasurementWhereInput[]
    NOT?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    id?: StringFilter<"BodyMeasurement"> | string
    userId?: StringFilter<"BodyMeasurement"> | string
    date?: DateTimeFilter<"BodyMeasurement"> | Date | string
    weight?: FloatNullableFilter<"BodyMeasurement"> | number | null
    bodyFat?: FloatNullableFilter<"BodyMeasurement"> | number | null
    chest?: FloatNullableFilter<"BodyMeasurement"> | number | null
    waist?: FloatNullableFilter<"BodyMeasurement"> | number | null
    hips?: FloatNullableFilter<"BodyMeasurement"> | number | null
    arms?: FloatNullableFilter<"BodyMeasurement"> | number | null
    thighs?: FloatNullableFilter<"BodyMeasurement"> | number | null
    calves?: FloatNullableFilter<"BodyMeasurement"> | number | null
    notes?: StringNullableFilter<"BodyMeasurement"> | string | null
    createdAt?: DateTimeFilter<"BodyMeasurement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BodyMeasurementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    weight?: SortOrderInput | SortOrder
    bodyFat?: SortOrderInput | SortOrder
    chest?: SortOrderInput | SortOrder
    waist?: SortOrderInput | SortOrder
    hips?: SortOrderInput | SortOrder
    arms?: SortOrderInput | SortOrder
    thighs?: SortOrderInput | SortOrder
    calves?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BodyMeasurementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    OR?: BodyMeasurementWhereInput[]
    NOT?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    userId?: StringFilter<"BodyMeasurement"> | string
    date?: DateTimeFilter<"BodyMeasurement"> | Date | string
    weight?: FloatNullableFilter<"BodyMeasurement"> | number | null
    bodyFat?: FloatNullableFilter<"BodyMeasurement"> | number | null
    chest?: FloatNullableFilter<"BodyMeasurement"> | number | null
    waist?: FloatNullableFilter<"BodyMeasurement"> | number | null
    hips?: FloatNullableFilter<"BodyMeasurement"> | number | null
    arms?: FloatNullableFilter<"BodyMeasurement"> | number | null
    thighs?: FloatNullableFilter<"BodyMeasurement"> | number | null
    calves?: FloatNullableFilter<"BodyMeasurement"> | number | null
    notes?: StringNullableFilter<"BodyMeasurement"> | string | null
    createdAt?: DateTimeFilter<"BodyMeasurement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BodyMeasurementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    weight?: SortOrderInput | SortOrder
    bodyFat?: SortOrderInput | SortOrder
    chest?: SortOrderInput | SortOrder
    waist?: SortOrderInput | SortOrder
    hips?: SortOrderInput | SortOrder
    arms?: SortOrderInput | SortOrder
    thighs?: SortOrderInput | SortOrder
    calves?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BodyMeasurementCountOrderByAggregateInput
    _avg?: BodyMeasurementAvgOrderByAggregateInput
    _max?: BodyMeasurementMaxOrderByAggregateInput
    _min?: BodyMeasurementMinOrderByAggregateInput
    _sum?: BodyMeasurementSumOrderByAggregateInput
  }

  export type BodyMeasurementScalarWhereWithAggregatesInput = {
    AND?: BodyMeasurementScalarWhereWithAggregatesInput | BodyMeasurementScalarWhereWithAggregatesInput[]
    OR?: BodyMeasurementScalarWhereWithAggregatesInput[]
    NOT?: BodyMeasurementScalarWhereWithAggregatesInput | BodyMeasurementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BodyMeasurement"> | string
    userId?: StringWithAggregatesFilter<"BodyMeasurement"> | string
    date?: DateTimeWithAggregatesFilter<"BodyMeasurement"> | Date | string
    weight?: FloatNullableWithAggregatesFilter<"BodyMeasurement"> | number | null
    bodyFat?: FloatNullableWithAggregatesFilter<"BodyMeasurement"> | number | null
    chest?: FloatNullableWithAggregatesFilter<"BodyMeasurement"> | number | null
    waist?: FloatNullableWithAggregatesFilter<"BodyMeasurement"> | number | null
    hips?: FloatNullableWithAggregatesFilter<"BodyMeasurement"> | number | null
    arms?: FloatNullableWithAggregatesFilter<"BodyMeasurement"> | number | null
    thighs?: FloatNullableWithAggregatesFilter<"BodyMeasurement"> | number | null
    calves?: FloatNullableWithAggregatesFilter<"BodyMeasurement"> | number | null
    notes?: StringNullableWithAggregatesFilter<"BodyMeasurement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BodyMeasurement"> | Date | string
  }

  export type FoodItemWhereInput = {
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    id?: StringFilter<"FoodItem"> | string
    name?: StringFilter<"FoodItem"> | string
    brand?: StringNullableFilter<"FoodItem"> | string | null
    servingSize?: FloatNullableFilter<"FoodItem"> | number | null
    servingUnit?: StringNullableFilter<"FoodItem"> | string | null
    calories?: FloatNullableFilter<"FoodItem"> | number | null
    protein?: FloatNullableFilter<"FoodItem"> | number | null
    carbs?: FloatNullableFilter<"FoodItem"> | number | null
    fat?: FloatNullableFilter<"FoodItem"> | number | null
    fiber?: FloatNullableFilter<"FoodItem"> | number | null
    sugar?: FloatNullableFilter<"FoodItem"> | number | null
    sodium?: FloatNullableFilter<"FoodItem"> | number | null
    category?: StringNullableFilter<"FoodItem"> | string | null
    barcode?: StringFilter<"FoodItem"> | string
    imageUrl?: StringNullableFilter<"FoodItem"> | string | null
    createdAt?: DateTimeFilter<"FoodItem"> | Date | string
    mealFoods?: MealFoodListRelationFilter
  }

  export type FoodItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrderInput | SortOrder
    servingSize?: SortOrderInput | SortOrder
    servingUnit?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    fiber?: SortOrderInput | SortOrder
    sugar?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    barcode?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    mealFoods?: MealFoodOrderByRelationAggregateInput
  }

  export type FoodItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    barcode?: string
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    name?: StringFilter<"FoodItem"> | string
    brand?: StringNullableFilter<"FoodItem"> | string | null
    servingSize?: FloatNullableFilter<"FoodItem"> | number | null
    servingUnit?: StringNullableFilter<"FoodItem"> | string | null
    calories?: FloatNullableFilter<"FoodItem"> | number | null
    protein?: FloatNullableFilter<"FoodItem"> | number | null
    carbs?: FloatNullableFilter<"FoodItem"> | number | null
    fat?: FloatNullableFilter<"FoodItem"> | number | null
    fiber?: FloatNullableFilter<"FoodItem"> | number | null
    sugar?: FloatNullableFilter<"FoodItem"> | number | null
    sodium?: FloatNullableFilter<"FoodItem"> | number | null
    category?: StringNullableFilter<"FoodItem"> | string | null
    imageUrl?: StringNullableFilter<"FoodItem"> | string | null
    createdAt?: DateTimeFilter<"FoodItem"> | Date | string
    mealFoods?: MealFoodListRelationFilter
  }, "id" | "barcode">

  export type FoodItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrderInput | SortOrder
    servingSize?: SortOrderInput | SortOrder
    servingUnit?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    fiber?: SortOrderInput | SortOrder
    sugar?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    barcode?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FoodItemCountOrderByAggregateInput
    _avg?: FoodItemAvgOrderByAggregateInput
    _max?: FoodItemMaxOrderByAggregateInput
    _min?: FoodItemMinOrderByAggregateInput
    _sum?: FoodItemSumOrderByAggregateInput
  }

  export type FoodItemScalarWhereWithAggregatesInput = {
    AND?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    OR?: FoodItemScalarWhereWithAggregatesInput[]
    NOT?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodItem"> | string
    name?: StringWithAggregatesFilter<"FoodItem"> | string
    brand?: StringNullableWithAggregatesFilter<"FoodItem"> | string | null
    servingSize?: FloatNullableWithAggregatesFilter<"FoodItem"> | number | null
    servingUnit?: StringNullableWithAggregatesFilter<"FoodItem"> | string | null
    calories?: FloatNullableWithAggregatesFilter<"FoodItem"> | number | null
    protein?: FloatNullableWithAggregatesFilter<"FoodItem"> | number | null
    carbs?: FloatNullableWithAggregatesFilter<"FoodItem"> | number | null
    fat?: FloatNullableWithAggregatesFilter<"FoodItem"> | number | null
    fiber?: FloatNullableWithAggregatesFilter<"FoodItem"> | number | null
    sugar?: FloatNullableWithAggregatesFilter<"FoodItem"> | number | null
    sodium?: FloatNullableWithAggregatesFilter<"FoodItem"> | number | null
    category?: StringNullableWithAggregatesFilter<"FoodItem"> | string | null
    barcode?: StringWithAggregatesFilter<"FoodItem"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"FoodItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FoodItem"> | Date | string
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: StringFilter<"Meal"> | string
    userId?: StringFilter<"Meal"> | string
    name?: StringNullableFilter<"Meal"> | string | null
    date?: DateTimeFilter<"Meal"> | Date | string
    mealType?: StringFilter<"Meal"> | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foods?: MealFoodListRelationFilter
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    date?: SortOrder
    mealType?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    foods?: MealFoodOrderByRelationAggregateInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    userId?: StringFilter<"Meal"> | string
    name?: StringNullableFilter<"Meal"> | string | null
    date?: DateTimeFilter<"Meal"> | Date | string
    mealType?: StringFilter<"Meal"> | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foods?: MealFoodListRelationFilter
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    date?: SortOrder
    mealType?: SortOrder
    createdAt?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meal"> | string
    userId?: StringWithAggregatesFilter<"Meal"> | string
    name?: StringNullableWithAggregatesFilter<"Meal"> | string | null
    date?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    mealType?: StringWithAggregatesFilter<"Meal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
  }

  export type MealFoodWhereInput = {
    AND?: MealFoodWhereInput | MealFoodWhereInput[]
    OR?: MealFoodWhereInput[]
    NOT?: MealFoodWhereInput | MealFoodWhereInput[]
    id?: StringFilter<"MealFood"> | string
    mealId?: StringFilter<"MealFood"> | string
    foodId?: StringFilter<"MealFood"> | string
    servings?: FloatFilter<"MealFood"> | number
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    food?: XOR<FoodItemScalarRelationFilter, FoodItemWhereInput>
  }

  export type MealFoodOrderByWithRelationInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodId?: SortOrder
    servings?: SortOrder
    meal?: MealOrderByWithRelationInput
    food?: FoodItemOrderByWithRelationInput
  }

  export type MealFoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealFoodWhereInput | MealFoodWhereInput[]
    OR?: MealFoodWhereInput[]
    NOT?: MealFoodWhereInput | MealFoodWhereInput[]
    mealId?: StringFilter<"MealFood"> | string
    foodId?: StringFilter<"MealFood"> | string
    servings?: FloatFilter<"MealFood"> | number
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    food?: XOR<FoodItemScalarRelationFilter, FoodItemWhereInput>
  }, "id">

  export type MealFoodOrderByWithAggregationInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodId?: SortOrder
    servings?: SortOrder
    _count?: MealFoodCountOrderByAggregateInput
    _avg?: MealFoodAvgOrderByAggregateInput
    _max?: MealFoodMaxOrderByAggregateInput
    _min?: MealFoodMinOrderByAggregateInput
    _sum?: MealFoodSumOrderByAggregateInput
  }

  export type MealFoodScalarWhereWithAggregatesInput = {
    AND?: MealFoodScalarWhereWithAggregatesInput | MealFoodScalarWhereWithAggregatesInput[]
    OR?: MealFoodScalarWhereWithAggregatesInput[]
    NOT?: MealFoodScalarWhereWithAggregatesInput | MealFoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealFood"> | string
    mealId?: StringWithAggregatesFilter<"MealFood"> | string
    foodId?: StringWithAggregatesFilter<"MealFood"> | string
    servings?: FloatWithAggregatesFilter<"MealFood"> | number
  }

  export type FitnessGoalWhereInput = {
    AND?: FitnessGoalWhereInput | FitnessGoalWhereInput[]
    OR?: FitnessGoalWhereInput[]
    NOT?: FitnessGoalWhereInput | FitnessGoalWhereInput[]
    id?: StringFilter<"FitnessGoal"> | string
    userId?: StringFilter<"FitnessGoal"> | string
    type?: StringFilter<"FitnessGoal"> | string
    target?: FloatFilter<"FitnessGoal"> | number
    current?: FloatNullableFilter<"FitnessGoal"> | number | null
    startDate?: DateTimeFilter<"FitnessGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"FitnessGoal"> | Date | string | null
    achieved?: BoolFilter<"FitnessGoal"> | boolean
    createdAt?: DateTimeFilter<"FitnessGoal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FitnessGoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    achieved?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FitnessGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FitnessGoalWhereInput | FitnessGoalWhereInput[]
    OR?: FitnessGoalWhereInput[]
    NOT?: FitnessGoalWhereInput | FitnessGoalWhereInput[]
    userId?: StringFilter<"FitnessGoal"> | string
    type?: StringFilter<"FitnessGoal"> | string
    target?: FloatFilter<"FitnessGoal"> | number
    current?: FloatNullableFilter<"FitnessGoal"> | number | null
    startDate?: DateTimeFilter<"FitnessGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"FitnessGoal"> | Date | string | null
    achieved?: BoolFilter<"FitnessGoal"> | boolean
    createdAt?: DateTimeFilter<"FitnessGoal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FitnessGoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    achieved?: SortOrder
    createdAt?: SortOrder
    _count?: FitnessGoalCountOrderByAggregateInput
    _avg?: FitnessGoalAvgOrderByAggregateInput
    _max?: FitnessGoalMaxOrderByAggregateInput
    _min?: FitnessGoalMinOrderByAggregateInput
    _sum?: FitnessGoalSumOrderByAggregateInput
  }

  export type FitnessGoalScalarWhereWithAggregatesInput = {
    AND?: FitnessGoalScalarWhereWithAggregatesInput | FitnessGoalScalarWhereWithAggregatesInput[]
    OR?: FitnessGoalScalarWhereWithAggregatesInput[]
    NOT?: FitnessGoalScalarWhereWithAggregatesInput | FitnessGoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FitnessGoal"> | string
    userId?: StringWithAggregatesFilter<"FitnessGoal"> | string
    type?: StringWithAggregatesFilter<"FitnessGoal"> | string
    target?: FloatWithAggregatesFilter<"FitnessGoal"> | number
    current?: FloatNullableWithAggregatesFilter<"FitnessGoal"> | number | null
    startDate?: DateTimeWithAggregatesFilter<"FitnessGoal"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"FitnessGoal"> | Date | string | null
    achieved?: BoolWithAggregatesFilter<"FitnessGoal"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FitnessGoal"> | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    owner?: string
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    owner?: string
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    owner?: string
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    meals?: MealCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    meals?: MealUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    messages?: string
    data?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    userId?: string | null
    messages?: string
    data?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    userId?: string | null
    messages?: string
    data?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubdomainOrderCreateInput = {
    id?: string
    subdomain: string
    rootDomain?: string
    fullDomain: string
    target: string
    recordType?: string
    clientName: string
    clientEmail: string
    clientPhone?: string | null
    price?: number
    currency?: string
    status?: string
    cfRecordId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubdomainOrderUncheckedCreateInput = {
    id?: string
    subdomain: string
    rootDomain?: string
    fullDomain: string
    target: string
    recordType?: string
    clientName: string
    clientEmail: string
    clientPhone?: string | null
    price?: number
    currency?: string
    status?: string
    cfRecordId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubdomainOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    rootDomain?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    recordType?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cfRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubdomainOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    rootDomain?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    recordType?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cfRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubdomainOrderCreateManyInput = {
    id?: string
    subdomain: string
    rootDomain?: string
    fullDomain: string
    target: string
    recordType?: string
    clientName: string
    clientEmail: string
    clientPhone?: string | null
    price?: number
    currency?: string
    status?: string
    cfRecordId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubdomainOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    rootDomain?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    recordType?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cfRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubdomainOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    rootDomain?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    recordType?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cfRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateInput = {
    id: string
    name: string
    category: string
    bodyPart: string
    equipment: string
    target: string
    muscleGroup: string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions: string
    image?: string | null
    gifUrl?: string | null
    attribution?: string | null
    createdAt?: Date | string
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
    routineExercises?: RoutineExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id: string
    name: string
    category: string
    bodyPart: string
    equipment: string
    target: string
    muscleGroup: string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions: string
    image?: string | null
    gifUrl?: string | null
    attribution?: string | null
    createdAt?: Date | string
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
    routineExercises?: RoutineExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    bodyPart?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attribution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
    routineExercises?: RoutineExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    bodyPart?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attribution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
    routineExercises?: RoutineExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id: string
    name: string
    category: string
    bodyPart: string
    equipment: string
    target: string
    muscleGroup: string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions: string
    image?: string | null
    gifUrl?: string | null
    attribution?: string | null
    createdAt?: Date | string
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    bodyPart?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attribution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    bodyPart?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attribution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateInput = {
    id?: string
    name?: string | null
    notes?: string | null
    duration?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkoutsInput
    exercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    notes?: string | null
    duration?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput
    exercises?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
    notes?: string | null
    duration?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateInput = {
    id?: string
    order: number
    notes?: string | null
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisesInput
    sets?: SetCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUncheckedCreateInput = {
    id?: string
    workoutId: string
    exerciseId: string
    order: number
    notes?: string | null
    sets?: SetUncheckedCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    sets?: SetUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: SetUncheckedUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseCreateManyInput = {
    id?: string
    workoutId: string
    exerciseId: string
    order: number
    notes?: string | null
  }

  export type WorkoutExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SetCreateInput = {
    id?: string
    setNumber: number
    reps?: number | null
    weight?: number | null
    rpe?: number | null
    isWarmup?: boolean
    isDropset?: boolean
    isFailure?: boolean
    workoutExercise: WorkoutExerciseCreateNestedOneWithoutSetsInput
  }

  export type SetUncheckedCreateInput = {
    id?: string
    workoutExerciseId: string
    setNumber: number
    reps?: number | null
    weight?: number | null
    rpe?: number | null
    isWarmup?: boolean
    isDropset?: boolean
    isFailure?: boolean
  }

  export type SetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    isWarmup?: BoolFieldUpdateOperationsInput | boolean
    isDropset?: BoolFieldUpdateOperationsInput | boolean
    isFailure?: BoolFieldUpdateOperationsInput | boolean
    workoutExercise?: WorkoutExerciseUpdateOneRequiredWithoutSetsNestedInput
  }

  export type SetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    isWarmup?: BoolFieldUpdateOperationsInput | boolean
    isDropset?: BoolFieldUpdateOperationsInput | boolean
    isFailure?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SetCreateManyInput = {
    id?: string
    workoutExerciseId: string
    setNumber: number
    reps?: number | null
    weight?: number | null
    rpe?: number | null
    isWarmup?: boolean
    isDropset?: boolean
    isFailure?: boolean
  }

  export type SetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    isWarmup?: BoolFieldUpdateOperationsInput | boolean
    isDropset?: BoolFieldUpdateOperationsInput | boolean
    isFailure?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    isWarmup?: BoolFieldUpdateOperationsInput | boolean
    isDropset?: BoolFieldUpdateOperationsInput | boolean
    isFailure?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoutineCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutinesInput
    exercises?: RoutineExerciseCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: RoutineExerciseUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutinesNestedInput
    exercises?: RoutineExerciseUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: RoutineExerciseUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineExerciseCreateInput = {
    id?: string
    order: number
    sets?: number
    minReps?: number | null
    maxReps?: number | null
    restTime?: number | null
    routine: RoutineCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutRoutineExercisesInput
  }

  export type RoutineExerciseUncheckedCreateInput = {
    id?: string
    routineId: string
    exerciseId: string
    order: number
    sets?: number
    minReps?: number | null
    maxReps?: number | null
    restTime?: number | null
  }

  export type RoutineExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    minReps?: NullableIntFieldUpdateOperationsInput | number | null
    maxReps?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    routine?: RoutineUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutRoutineExercisesNestedInput
  }

  export type RoutineExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    minReps?: NullableIntFieldUpdateOperationsInput | number | null
    maxReps?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoutineExerciseCreateManyInput = {
    id?: string
    routineId: string
    exerciseId: string
    order: number
    sets?: number
    minReps?: number | null
    maxReps?: number | null
    restTime?: number | null
  }

  export type RoutineExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    minReps?: NullableIntFieldUpdateOperationsInput | number | null
    maxReps?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoutineExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    minReps?: NullableIntFieldUpdateOperationsInput | number | null
    maxReps?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BodyMeasurementCreateInput = {
    id?: string
    date?: Date | string
    weight?: number | null
    bodyFat?: number | null
    chest?: number | null
    waist?: number | null
    hips?: number | null
    arms?: number | null
    thighs?: number | null
    calves?: number | null
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBodyMeasurementsInput
  }

  export type BodyMeasurementUncheckedCreateInput = {
    id?: string
    userId: string
    date?: Date | string
    weight?: number | null
    bodyFat?: number | null
    chest?: number | null
    waist?: number | null
    hips?: number | null
    arms?: number | null
    thighs?: number | null
    calves?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type BodyMeasurementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFat?: NullableFloatFieldUpdateOperationsInput | number | null
    chest?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hips?: NullableFloatFieldUpdateOperationsInput | number | null
    arms?: NullableFloatFieldUpdateOperationsInput | number | null
    thighs?: NullableFloatFieldUpdateOperationsInput | number | null
    calves?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBodyMeasurementsNestedInput
  }

  export type BodyMeasurementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFat?: NullableFloatFieldUpdateOperationsInput | number | null
    chest?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hips?: NullableFloatFieldUpdateOperationsInput | number | null
    arms?: NullableFloatFieldUpdateOperationsInput | number | null
    thighs?: NullableFloatFieldUpdateOperationsInput | number | null
    calves?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementCreateManyInput = {
    id?: string
    userId: string
    date?: Date | string
    weight?: number | null
    bodyFat?: number | null
    chest?: number | null
    waist?: number | null
    hips?: number | null
    arms?: number | null
    thighs?: number | null
    calves?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type BodyMeasurementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFat?: NullableFloatFieldUpdateOperationsInput | number | null
    chest?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hips?: NullableFloatFieldUpdateOperationsInput | number | null
    arms?: NullableFloatFieldUpdateOperationsInput | number | null
    thighs?: NullableFloatFieldUpdateOperationsInput | number | null
    calves?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFat?: NullableFloatFieldUpdateOperationsInput | number | null
    chest?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hips?: NullableFloatFieldUpdateOperationsInput | number | null
    arms?: NullableFloatFieldUpdateOperationsInput | number | null
    thighs?: NullableFloatFieldUpdateOperationsInput | number | null
    calves?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemCreateInput = {
    id: string
    name: string
    brand?: string | null
    servingSize?: number | null
    servingUnit?: string | null
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    fiber?: number | null
    sugar?: number | null
    sodium?: number | null
    category?: string | null
    barcode: string
    imageUrl?: string | null
    createdAt?: Date | string
    mealFoods?: MealFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodItemUncheckedCreateInput = {
    id: string
    name: string
    brand?: string | null
    servingSize?: number | null
    servingUnit?: string | null
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    fiber?: number | null
    sugar?: number | null
    sodium?: number | null
    category?: string | null
    barcode: string
    imageUrl?: string | null
    createdAt?: Date | string
    mealFoods?: MealFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealFoods?: MealFoodUpdateManyWithoutFoodNestedInput
  }

  export type FoodItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealFoods?: MealFoodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodItemCreateManyInput = {
    id: string
    name: string
    brand?: string | null
    servingSize?: number | null
    servingUnit?: string | null
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    fiber?: number | null
    sugar?: number | null
    sodium?: number | null
    category?: string | null
    barcode: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type FoodItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateInput = {
    id?: string
    name?: string | null
    date?: Date | string
    mealType?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMealsInput
    foods?: MealFoodCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    date?: Date | string
    mealType?: string
    createdAt?: Date | string
    foods?: MealFoodUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealsNestedInput
    foods?: MealFoodUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: MealFoodUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
    date?: Date | string
    mealType?: string
    createdAt?: Date | string
  }

  export type MealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealFoodCreateInput = {
    id?: string
    servings?: number
    meal: MealCreateNestedOneWithoutFoodsInput
    food: FoodItemCreateNestedOneWithoutMealFoodsInput
  }

  export type MealFoodUncheckedCreateInput = {
    id?: string
    mealId: string
    foodId: string
    servings?: number
  }

  export type MealFoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    servings?: FloatFieldUpdateOperationsInput | number
    meal?: MealUpdateOneRequiredWithoutFoodsNestedInput
    food?: FoodItemUpdateOneRequiredWithoutMealFoodsNestedInput
  }

  export type MealFoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    servings?: FloatFieldUpdateOperationsInput | number
  }

  export type MealFoodCreateManyInput = {
    id?: string
    mealId: string
    foodId: string
    servings?: number
  }

  export type MealFoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    servings?: FloatFieldUpdateOperationsInput | number
  }

  export type MealFoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    servings?: FloatFieldUpdateOperationsInput | number
  }

  export type FitnessGoalCreateInput = {
    id?: string
    type: string
    target: number
    current?: number | null
    startDate?: Date | string
    endDate?: Date | string | null
    achieved?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFitnessGoalsInput
  }

  export type FitnessGoalUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    target: number
    current?: number | null
    startDate?: Date | string
    endDate?: Date | string | null
    achieved?: boolean
    createdAt?: Date | string
  }

  export type FitnessGoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFitnessGoalsNestedInput
  }

  export type FitnessGoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FitnessGoalCreateManyInput = {
    id?: string
    userId: string
    type: string
    target: number
    current?: number | null
    startDate?: Date | string
    endDate?: Date | string | null
    achieved?: boolean
    createdAt?: Date | string
  }

  export type FitnessGoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FitnessGoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type RoutineListRelationFilter = {
    every?: RoutineWhereInput
    some?: RoutineWhereInput
    none?: RoutineWhereInput
  }

  export type BodyMeasurementListRelationFilter = {
    every?: BodyMeasurementWhereInput
    some?: BodyMeasurementWhereInput
    none?: BodyMeasurementWhereInput
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type FitnessGoalListRelationFilter = {
    every?: FitnessGoalWhereInput
    some?: FitnessGoalWhereInput
    none?: FitnessGoalWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BodyMeasurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FitnessGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    messages?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    messages?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    messages?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SubdomainOrderCountOrderByAggregateInput = {
    id?: SortOrder
    subdomain?: SortOrder
    rootDomain?: SortOrder
    fullDomain?: SortOrder
    target?: SortOrder
    recordType?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    clientPhone?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    cfRecordId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubdomainOrderAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SubdomainOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    subdomain?: SortOrder
    rootDomain?: SortOrder
    fullDomain?: SortOrder
    target?: SortOrder
    recordType?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    clientPhone?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    cfRecordId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubdomainOrderMinOrderByAggregateInput = {
    id?: SortOrder
    subdomain?: SortOrder
    rootDomain?: SortOrder
    fullDomain?: SortOrder
    target?: SortOrder
    recordType?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    clientPhone?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    cfRecordId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubdomainOrderSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkoutExerciseListRelationFilter = {
    every?: WorkoutExerciseWhereInput
    some?: WorkoutExerciseWhereInput
    none?: WorkoutExerciseWhereInput
  }

  export type RoutineExerciseListRelationFilter = {
    every?: RoutineExerciseWhereInput
    some?: RoutineExerciseWhereInput
    none?: RoutineExerciseWhereInput
  }

  export type WorkoutExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    bodyPart?: SortOrder
    equipment?: SortOrder
    target?: SortOrder
    muscleGroup?: SortOrder
    secondaryMuscles?: SortOrder
    instructions?: SortOrder
    image?: SortOrder
    gifUrl?: SortOrder
    attribution?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    bodyPart?: SortOrder
    equipment?: SortOrder
    target?: SortOrder
    muscleGroup?: SortOrder
    instructions?: SortOrder
    image?: SortOrder
    gifUrl?: SortOrder
    attribution?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    bodyPart?: SortOrder
    equipment?: SortOrder
    target?: SortOrder
    muscleGroup?: SortOrder
    instructions?: SortOrder
    image?: SortOrder
    gifUrl?: SortOrder
    attribution?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type WorkoutScalarRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type SetListRelationFilter = {
    every?: SetWhereInput
    some?: SetWhereInput
    none?: SetWhereInput
  }

  export type SetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    notes?: SortOrder
  }

  export type WorkoutExerciseAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type WorkoutExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    notes?: SortOrder
  }

  export type WorkoutExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    notes?: SortOrder
  }

  export type WorkoutExerciseSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkoutExerciseScalarRelationFilter = {
    is?: WorkoutExerciseWhereInput
    isNot?: WorkoutExerciseWhereInput
  }

  export type SetCountOrderByAggregateInput = {
    id?: SortOrder
    workoutExerciseId?: SortOrder
    setNumber?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    rpe?: SortOrder
    isWarmup?: SortOrder
    isDropset?: SortOrder
    isFailure?: SortOrder
  }

  export type SetAvgOrderByAggregateInput = {
    setNumber?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    rpe?: SortOrder
  }

  export type SetMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutExerciseId?: SortOrder
    setNumber?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    rpe?: SortOrder
    isWarmup?: SortOrder
    isDropset?: SortOrder
    isFailure?: SortOrder
  }

  export type SetMinOrderByAggregateInput = {
    id?: SortOrder
    workoutExerciseId?: SortOrder
    setNumber?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    rpe?: SortOrder
    isWarmup?: SortOrder
    isDropset?: SortOrder
    isFailure?: SortOrder
  }

  export type SetSumOrderByAggregateInput = {
    setNumber?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    rpe?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoutineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineScalarRelationFilter = {
    is?: RoutineWhereInput
    isNot?: RoutineWhereInput
  }

  export type RoutineExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    minReps?: SortOrder
    maxReps?: SortOrder
    restTime?: SortOrder
  }

  export type RoutineExerciseAvgOrderByAggregateInput = {
    order?: SortOrder
    sets?: SortOrder
    minReps?: SortOrder
    maxReps?: SortOrder
    restTime?: SortOrder
  }

  export type RoutineExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    minReps?: SortOrder
    maxReps?: SortOrder
    restTime?: SortOrder
  }

  export type RoutineExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    minReps?: SortOrder
    maxReps?: SortOrder
    restTime?: SortOrder
  }

  export type RoutineExerciseSumOrderByAggregateInput = {
    order?: SortOrder
    sets?: SortOrder
    minReps?: SortOrder
    maxReps?: SortOrder
    restTime?: SortOrder
  }

  export type BodyMeasurementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    bodyFat?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hips?: SortOrder
    arms?: SortOrder
    thighs?: SortOrder
    calves?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type BodyMeasurementAvgOrderByAggregateInput = {
    weight?: SortOrder
    bodyFat?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hips?: SortOrder
    arms?: SortOrder
    thighs?: SortOrder
    calves?: SortOrder
  }

  export type BodyMeasurementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    bodyFat?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hips?: SortOrder
    arms?: SortOrder
    thighs?: SortOrder
    calves?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type BodyMeasurementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    bodyFat?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hips?: SortOrder
    arms?: SortOrder
    thighs?: SortOrder
    calves?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type BodyMeasurementSumOrderByAggregateInput = {
    weight?: SortOrder
    bodyFat?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hips?: SortOrder
    arms?: SortOrder
    thighs?: SortOrder
    calves?: SortOrder
  }

  export type MealFoodListRelationFilter = {
    every?: MealFoodWhereInput
    some?: MealFoodWhereInput
    none?: MealFoodWhereInput
  }

  export type MealFoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodium?: SortOrder
    category?: SortOrder
    barcode?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type FoodItemAvgOrderByAggregateInput = {
    servingSize?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodium?: SortOrder
  }

  export type FoodItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodium?: SortOrder
    category?: SortOrder
    barcode?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type FoodItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodium?: SortOrder
    category?: SortOrder
    barcode?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type FoodItemSumOrderByAggregateInput = {
    servingSize?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodium?: SortOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    createdAt?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    createdAt?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    createdAt?: SortOrder
  }

  export type MealScalarRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type FoodItemScalarRelationFilter = {
    is?: FoodItemWhereInput
    isNot?: FoodItemWhereInput
  }

  export type MealFoodCountOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodId?: SortOrder
    servings?: SortOrder
  }

  export type MealFoodAvgOrderByAggregateInput = {
    servings?: SortOrder
  }

  export type MealFoodMaxOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodId?: SortOrder
    servings?: SortOrder
  }

  export type MealFoodMinOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodId?: SortOrder
    servings?: SortOrder
  }

  export type MealFoodSumOrderByAggregateInput = {
    servings?: SortOrder
  }

  export type FitnessGoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    achieved?: SortOrder
    createdAt?: SortOrder
  }

  export type FitnessGoalAvgOrderByAggregateInput = {
    target?: SortOrder
    current?: SortOrder
  }

  export type FitnessGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    achieved?: SortOrder
    createdAt?: SortOrder
  }

  export type FitnessGoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    achieved?: SortOrder
    createdAt?: SortOrder
  }

  export type FitnessGoalSumOrderByAggregateInput = {
    target?: SortOrder
    current?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type WorkoutCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type RoutineCreateNestedManyWithoutUserInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type BodyMeasurementCreateNestedManyWithoutUserInput = {
    create?: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput> | BodyMeasurementCreateWithoutUserInput[] | BodyMeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutUserInput | BodyMeasurementCreateOrConnectWithoutUserInput[]
    createMany?: BodyMeasurementCreateManyUserInputEnvelope
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
  }

  export type MealCreateNestedManyWithoutUserInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type FitnessGoalCreateNestedManyWithoutUserInput = {
    create?: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput> | FitnessGoalCreateWithoutUserInput[] | FitnessGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FitnessGoalCreateOrConnectWithoutUserInput | FitnessGoalCreateOrConnectWithoutUserInput[]
    createMany?: FitnessGoalCreateManyUserInputEnvelope
    connect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type RoutineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type BodyMeasurementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput> | BodyMeasurementCreateWithoutUserInput[] | BodyMeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutUserInput | BodyMeasurementCreateOrConnectWithoutUserInput[]
    createMany?: BodyMeasurementCreateManyUserInputEnvelope
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type FitnessGoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput> | FitnessGoalCreateWithoutUserInput[] | FitnessGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FitnessGoalCreateOrConnectWithoutUserInput | FitnessGoalCreateOrConnectWithoutUserInput[]
    createMany?: FitnessGoalCreateManyUserInputEnvelope
    connect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type WorkoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type RoutineUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUserInput | RoutineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUserInput | RoutineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUserInput | RoutineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type BodyMeasurementUpdateManyWithoutUserNestedInput = {
    create?: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput> | BodyMeasurementCreateWithoutUserInput[] | BodyMeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutUserInput | BodyMeasurementCreateOrConnectWithoutUserInput[]
    upsert?: BodyMeasurementUpsertWithWhereUniqueWithoutUserInput | BodyMeasurementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BodyMeasurementCreateManyUserInputEnvelope
    set?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    disconnect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    delete?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    update?: BodyMeasurementUpdateWithWhereUniqueWithoutUserInput | BodyMeasurementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BodyMeasurementUpdateManyWithWhereWithoutUserInput | BodyMeasurementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
  }

  export type MealUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutUserInput | MealUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutUserInput | MealUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealUpdateManyWithWhereWithoutUserInput | MealUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type FitnessGoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput> | FitnessGoalCreateWithoutUserInput[] | FitnessGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FitnessGoalCreateOrConnectWithoutUserInput | FitnessGoalCreateOrConnectWithoutUserInput[]
    upsert?: FitnessGoalUpsertWithWhereUniqueWithoutUserInput | FitnessGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FitnessGoalCreateManyUserInputEnvelope
    set?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    disconnect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    delete?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    connect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    update?: FitnessGoalUpdateWithWhereUniqueWithoutUserInput | FitnessGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FitnessGoalUpdateManyWithWhereWithoutUserInput | FitnessGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FitnessGoalScalarWhereInput | FitnessGoalScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type RoutineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUserInput | RoutineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUserInput | RoutineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUserInput | RoutineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput> | BodyMeasurementCreateWithoutUserInput[] | BodyMeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutUserInput | BodyMeasurementCreateOrConnectWithoutUserInput[]
    upsert?: BodyMeasurementUpsertWithWhereUniqueWithoutUserInput | BodyMeasurementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BodyMeasurementCreateManyUserInputEnvelope
    set?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    disconnect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    delete?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    update?: BodyMeasurementUpdateWithWhereUniqueWithoutUserInput | BodyMeasurementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BodyMeasurementUpdateManyWithWhereWithoutUserInput | BodyMeasurementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutUserInput | MealUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutUserInput | MealUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealUpdateManyWithWhereWithoutUserInput | MealUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type FitnessGoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput> | FitnessGoalCreateWithoutUserInput[] | FitnessGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FitnessGoalCreateOrConnectWithoutUserInput | FitnessGoalCreateOrConnectWithoutUserInput[]
    upsert?: FitnessGoalUpsertWithWhereUniqueWithoutUserInput | FitnessGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FitnessGoalCreateManyUserInputEnvelope
    set?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    disconnect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    delete?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    connect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    update?: FitnessGoalUpdateWithWhereUniqueWithoutUserInput | FitnessGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FitnessGoalUpdateManyWithWhereWithoutUserInput | FitnessGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FitnessGoalScalarWhereInput | FitnessGoalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type RoutineExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput> | RoutineExerciseCreateWithoutExerciseInput[] | RoutineExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutExerciseInput | RoutineExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: RoutineExerciseCreateManyExerciseInputEnvelope
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type RoutineExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput> | RoutineExerciseCreateWithoutExerciseInput[] | RoutineExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutExerciseInput | RoutineExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: RoutineExerciseCreateManyExerciseInputEnvelope
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type RoutineExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput> | RoutineExerciseCreateWithoutExerciseInput[] | RoutineExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutExerciseInput | RoutineExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: RoutineExerciseUpsertWithWhereUniqueWithoutExerciseInput | RoutineExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: RoutineExerciseCreateManyExerciseInputEnvelope
    set?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    disconnect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    delete?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    update?: RoutineExerciseUpdateWithWhereUniqueWithoutExerciseInput | RoutineExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: RoutineExerciseUpdateManyWithWhereWithoutExerciseInput | RoutineExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type RoutineExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput> | RoutineExerciseCreateWithoutExerciseInput[] | RoutineExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutExerciseInput | RoutineExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: RoutineExerciseUpsertWithWhereUniqueWithoutExerciseInput | RoutineExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: RoutineExerciseCreateManyExerciseInputEnvelope
    set?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    disconnect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    delete?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    update?: RoutineExerciseUpdateWithWhereUniqueWithoutExerciseInput | RoutineExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: RoutineExerciseUpdateManyWithWhereWithoutExerciseInput | RoutineExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutExerciseCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput
    upsert?: UserUpsertWithoutWorkoutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutsInput, UserUpdateWithoutWorkoutsInput>, UserUncheckedUpdateWithoutWorkoutsInput>
  }

  export type WorkoutExerciseUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput
    connect?: WorkoutWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutWorkoutExercisesInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type SetCreateNestedManyWithoutWorkoutExerciseInput = {
    create?: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput> | SetCreateWithoutWorkoutExerciseInput[] | SetUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutWorkoutExerciseInput | SetCreateOrConnectWithoutWorkoutExerciseInput[]
    createMany?: SetCreateManyWorkoutExerciseInputEnvelope
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
  }

  export type SetUncheckedCreateNestedManyWithoutWorkoutExerciseInput = {
    create?: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput> | SetCreateWithoutWorkoutExerciseInput[] | SetUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutWorkoutExerciseInput | SetCreateOrConnectWithoutWorkoutExerciseInput[]
    createMany?: SetCreateManyWorkoutExerciseInputEnvelope
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutUpsertWithoutExercisesInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutExercisesInput, WorkoutUpdateWithoutExercisesInput>, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExercisesInput
    upsert?: ExerciseUpsertWithoutWorkoutExercisesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutWorkoutExercisesInput, ExerciseUpdateWithoutWorkoutExercisesInput>, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type SetUpdateManyWithoutWorkoutExerciseNestedInput = {
    create?: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput> | SetCreateWithoutWorkoutExerciseInput[] | SetUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutWorkoutExerciseInput | SetCreateOrConnectWithoutWorkoutExerciseInput[]
    upsert?: SetUpsertWithWhereUniqueWithoutWorkoutExerciseInput | SetUpsertWithWhereUniqueWithoutWorkoutExerciseInput[]
    createMany?: SetCreateManyWorkoutExerciseInputEnvelope
    set?: SetWhereUniqueInput | SetWhereUniqueInput[]
    disconnect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    delete?: SetWhereUniqueInput | SetWhereUniqueInput[]
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    update?: SetUpdateWithWhereUniqueWithoutWorkoutExerciseInput | SetUpdateWithWhereUniqueWithoutWorkoutExerciseInput[]
    updateMany?: SetUpdateManyWithWhereWithoutWorkoutExerciseInput | SetUpdateManyWithWhereWithoutWorkoutExerciseInput[]
    deleteMany?: SetScalarWhereInput | SetScalarWhereInput[]
  }

  export type SetUncheckedUpdateManyWithoutWorkoutExerciseNestedInput = {
    create?: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput> | SetCreateWithoutWorkoutExerciseInput[] | SetUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutWorkoutExerciseInput | SetCreateOrConnectWithoutWorkoutExerciseInput[]
    upsert?: SetUpsertWithWhereUniqueWithoutWorkoutExerciseInput | SetUpsertWithWhereUniqueWithoutWorkoutExerciseInput[]
    createMany?: SetCreateManyWorkoutExerciseInputEnvelope
    set?: SetWhereUniqueInput | SetWhereUniqueInput[]
    disconnect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    delete?: SetWhereUniqueInput | SetWhereUniqueInput[]
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    update?: SetUpdateWithWhereUniqueWithoutWorkoutExerciseInput | SetUpdateWithWhereUniqueWithoutWorkoutExerciseInput[]
    updateMany?: SetUpdateManyWithWhereWithoutWorkoutExerciseInput | SetUpdateManyWithWhereWithoutWorkoutExerciseInput[]
    deleteMany?: SetScalarWhereInput | SetScalarWhereInput[]
  }

  export type WorkoutExerciseCreateNestedOneWithoutSetsInput = {
    create?: XOR<WorkoutExerciseCreateWithoutSetsInput, WorkoutExerciseUncheckedCreateWithoutSetsInput>
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutSetsInput
    connect?: WorkoutExerciseWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkoutExerciseUpdateOneRequiredWithoutSetsNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutSetsInput, WorkoutExerciseUncheckedCreateWithoutSetsInput>
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutSetsInput
    upsert?: WorkoutExerciseUpsertWithoutSetsInput
    connect?: WorkoutExerciseWhereUniqueInput
    update?: XOR<XOR<WorkoutExerciseUpdateToOneWithWhereWithoutSetsInput, WorkoutExerciseUpdateWithoutSetsInput>, WorkoutExerciseUncheckedUpdateWithoutSetsInput>
  }

  export type UserCreateNestedOneWithoutRoutinesInput = {
    create?: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput
    connect?: UserWhereUniqueInput
  }

  export type RoutineExerciseCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput> | RoutineExerciseCreateWithoutRoutineInput[] | RoutineExerciseUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutRoutineInput | RoutineExerciseCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineExerciseCreateManyRoutineInputEnvelope
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
  }

  export type RoutineExerciseUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput> | RoutineExerciseCreateWithoutRoutineInput[] | RoutineExerciseUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutRoutineInput | RoutineExerciseCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineExerciseCreateManyRoutineInputEnvelope
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoutinesNestedInput = {
    create?: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput
    upsert?: UserUpsertWithoutRoutinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutinesInput, UserUpdateWithoutRoutinesInput>, UserUncheckedUpdateWithoutRoutinesInput>
  }

  export type RoutineExerciseUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput> | RoutineExerciseCreateWithoutRoutineInput[] | RoutineExerciseUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutRoutineInput | RoutineExerciseCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineExerciseUpsertWithWhereUniqueWithoutRoutineInput | RoutineExerciseUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineExerciseCreateManyRoutineInputEnvelope
    set?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    disconnect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    delete?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    update?: RoutineExerciseUpdateWithWhereUniqueWithoutRoutineInput | RoutineExerciseUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineExerciseUpdateManyWithWhereWithoutRoutineInput | RoutineExerciseUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
  }

  export type RoutineExerciseUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput> | RoutineExerciseCreateWithoutRoutineInput[] | RoutineExerciseUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExerciseCreateOrConnectWithoutRoutineInput | RoutineExerciseCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineExerciseUpsertWithWhereUniqueWithoutRoutineInput | RoutineExerciseUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineExerciseCreateManyRoutineInputEnvelope
    set?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    disconnect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    delete?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    connect?: RoutineExerciseWhereUniqueInput | RoutineExerciseWhereUniqueInput[]
    update?: RoutineExerciseUpdateWithWhereUniqueWithoutRoutineInput | RoutineExerciseUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineExerciseUpdateManyWithWhereWithoutRoutineInput | RoutineExerciseUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
  }

  export type RoutineCreateNestedOneWithoutExercisesInput = {
    create?: XOR<RoutineCreateWithoutExercisesInput, RoutineUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutExercisesInput
    connect?: RoutineWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutRoutineExercisesInput = {
    create?: XOR<ExerciseCreateWithoutRoutineExercisesInput, ExerciseUncheckedCreateWithoutRoutineExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutRoutineExercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type RoutineUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<RoutineCreateWithoutExercisesInput, RoutineUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutExercisesInput
    upsert?: RoutineUpsertWithoutExercisesInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutExercisesInput, RoutineUpdateWithoutExercisesInput>, RoutineUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutRoutineExercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutRoutineExercisesInput, ExerciseUncheckedCreateWithoutRoutineExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutRoutineExercisesInput
    upsert?: ExerciseUpsertWithoutRoutineExercisesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutRoutineExercisesInput, ExerciseUpdateWithoutRoutineExercisesInput>, ExerciseUncheckedUpdateWithoutRoutineExercisesInput>
  }

  export type UserCreateNestedOneWithoutBodyMeasurementsInput = {
    create?: XOR<UserCreateWithoutBodyMeasurementsInput, UserUncheckedCreateWithoutBodyMeasurementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBodyMeasurementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBodyMeasurementsNestedInput = {
    create?: XOR<UserCreateWithoutBodyMeasurementsInput, UserUncheckedCreateWithoutBodyMeasurementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBodyMeasurementsInput
    upsert?: UserUpsertWithoutBodyMeasurementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBodyMeasurementsInput, UserUpdateWithoutBodyMeasurementsInput>, UserUncheckedUpdateWithoutBodyMeasurementsInput>
  }

  export type MealFoodCreateNestedManyWithoutFoodInput = {
    create?: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput> | MealFoodCreateWithoutFoodInput[] | MealFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutFoodInput | MealFoodCreateOrConnectWithoutFoodInput[]
    createMany?: MealFoodCreateManyFoodInputEnvelope
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
  }

  export type MealFoodUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput> | MealFoodCreateWithoutFoodInput[] | MealFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutFoodInput | MealFoodCreateOrConnectWithoutFoodInput[]
    createMany?: MealFoodCreateManyFoodInputEnvelope
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
  }

  export type MealFoodUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput> | MealFoodCreateWithoutFoodInput[] | MealFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutFoodInput | MealFoodCreateOrConnectWithoutFoodInput[]
    upsert?: MealFoodUpsertWithWhereUniqueWithoutFoodInput | MealFoodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MealFoodCreateManyFoodInputEnvelope
    set?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    disconnect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    delete?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    update?: MealFoodUpdateWithWhereUniqueWithoutFoodInput | MealFoodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MealFoodUpdateManyWithWhereWithoutFoodInput | MealFoodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
  }

  export type MealFoodUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput> | MealFoodCreateWithoutFoodInput[] | MealFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutFoodInput | MealFoodCreateOrConnectWithoutFoodInput[]
    upsert?: MealFoodUpsertWithWhereUniqueWithoutFoodInput | MealFoodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MealFoodCreateManyFoodInputEnvelope
    set?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    disconnect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    delete?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    update?: MealFoodUpdateWithWhereUniqueWithoutFoodInput | MealFoodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MealFoodUpdateManyWithWhereWithoutFoodInput | MealFoodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMealsInput = {
    create?: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealsInput
    connect?: UserWhereUniqueInput
  }

  export type MealFoodCreateNestedManyWithoutMealInput = {
    create?: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput> | MealFoodCreateWithoutMealInput[] | MealFoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutMealInput | MealFoodCreateOrConnectWithoutMealInput[]
    createMany?: MealFoodCreateManyMealInputEnvelope
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
  }

  export type MealFoodUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput> | MealFoodCreateWithoutMealInput[] | MealFoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutMealInput | MealFoodCreateOrConnectWithoutMealInput[]
    createMany?: MealFoodCreateManyMealInputEnvelope
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealsInput
    upsert?: UserUpsertWithoutMealsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealsInput, UserUpdateWithoutMealsInput>, UserUncheckedUpdateWithoutMealsInput>
  }

  export type MealFoodUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput> | MealFoodCreateWithoutMealInput[] | MealFoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutMealInput | MealFoodCreateOrConnectWithoutMealInput[]
    upsert?: MealFoodUpsertWithWhereUniqueWithoutMealInput | MealFoodUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealFoodCreateManyMealInputEnvelope
    set?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    disconnect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    delete?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    update?: MealFoodUpdateWithWhereUniqueWithoutMealInput | MealFoodUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealFoodUpdateManyWithWhereWithoutMealInput | MealFoodUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
  }

  export type MealFoodUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput> | MealFoodCreateWithoutMealInput[] | MealFoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutMealInput | MealFoodCreateOrConnectWithoutMealInput[]
    upsert?: MealFoodUpsertWithWhereUniqueWithoutMealInput | MealFoodUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealFoodCreateManyMealInputEnvelope
    set?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    disconnect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    delete?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    update?: MealFoodUpdateWithWhereUniqueWithoutMealInput | MealFoodUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealFoodUpdateManyWithWhereWithoutMealInput | MealFoodUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
  }

  export type MealCreateNestedOneWithoutFoodsInput = {
    create?: XOR<MealCreateWithoutFoodsInput, MealUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: MealCreateOrConnectWithoutFoodsInput
    connect?: MealWhereUniqueInput
  }

  export type FoodItemCreateNestedOneWithoutMealFoodsInput = {
    create?: XOR<FoodItemCreateWithoutMealFoodsInput, FoodItemUncheckedCreateWithoutMealFoodsInput>
    connectOrCreate?: FoodItemCreateOrConnectWithoutMealFoodsInput
    connect?: FoodItemWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<MealCreateWithoutFoodsInput, MealUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: MealCreateOrConnectWithoutFoodsInput
    upsert?: MealUpsertWithoutFoodsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutFoodsInput, MealUpdateWithoutFoodsInput>, MealUncheckedUpdateWithoutFoodsInput>
  }

  export type FoodItemUpdateOneRequiredWithoutMealFoodsNestedInput = {
    create?: XOR<FoodItemCreateWithoutMealFoodsInput, FoodItemUncheckedCreateWithoutMealFoodsInput>
    connectOrCreate?: FoodItemCreateOrConnectWithoutMealFoodsInput
    upsert?: FoodItemUpsertWithoutMealFoodsInput
    connect?: FoodItemWhereUniqueInput
    update?: XOR<XOR<FoodItemUpdateToOneWithWhereWithoutMealFoodsInput, FoodItemUpdateWithoutMealFoodsInput>, FoodItemUncheckedUpdateWithoutMealFoodsInput>
  }

  export type UserCreateNestedOneWithoutFitnessGoalsInput = {
    create?: XOR<UserCreateWithoutFitnessGoalsInput, UserUncheckedCreateWithoutFitnessGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFitnessGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFitnessGoalsNestedInput = {
    create?: XOR<UserCreateWithoutFitnessGoalsInput, UserUncheckedCreateWithoutFitnessGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFitnessGoalsInput
    upsert?: UserUpsertWithoutFitnessGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFitnessGoalsInput, UserUpdateWithoutFitnessGoalsInput>, UserUncheckedUpdateWithoutFitnessGoalsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    messages?: string
    data?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    messages?: string
    data?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutCreateWithoutUserInput = {
    id?: string
    name?: string | null
    notes?: string | null
    duration?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    notes?: string | null
    duration?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutCreateManyUserInputEnvelope = {
    data: WorkoutCreateManyUserInput | WorkoutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoutineCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: RoutineExerciseCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: RoutineExerciseUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutUserInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput>
  }

  export type RoutineCreateManyUserInputEnvelope = {
    data: RoutineCreateManyUserInput | RoutineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BodyMeasurementCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    weight?: number | null
    bodyFat?: number | null
    chest?: number | null
    waist?: number | null
    hips?: number | null
    arms?: number | null
    thighs?: number | null
    calves?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type BodyMeasurementUncheckedCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    weight?: number | null
    bodyFat?: number | null
    chest?: number | null
    waist?: number | null
    hips?: number | null
    arms?: number | null
    thighs?: number | null
    calves?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type BodyMeasurementCreateOrConnectWithoutUserInput = {
    where: BodyMeasurementWhereUniqueInput
    create: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput>
  }

  export type BodyMeasurementCreateManyUserInputEnvelope = {
    data: BodyMeasurementCreateManyUserInput | BodyMeasurementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MealCreateWithoutUserInput = {
    id?: string
    name?: string | null
    date?: Date | string
    mealType?: string
    createdAt?: Date | string
    foods?: MealFoodCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    date?: Date | string
    mealType?: string
    createdAt?: Date | string
    foods?: MealFoodUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutUserInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput>
  }

  export type MealCreateManyUserInputEnvelope = {
    data: MealCreateManyUserInput | MealCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FitnessGoalCreateWithoutUserInput = {
    id?: string
    type: string
    target: number
    current?: number | null
    startDate?: Date | string
    endDate?: Date | string | null
    achieved?: boolean
    createdAt?: Date | string
  }

  export type FitnessGoalUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    target: number
    current?: number | null
    startDate?: Date | string
    endDate?: Date | string | null
    achieved?: boolean
    createdAt?: Date | string
  }

  export type FitnessGoalCreateOrConnectWithoutUserInput = {
    where: FitnessGoalWhereUniqueInput
    create: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput>
  }

  export type FitnessGoalCreateManyUserInputEnvelope = {
    data: FitnessGoalCreateManyUserInput | FitnessGoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    userId?: StringNullableFilter<"Project"> | string | null
    messages?: StringFilter<"Project"> | string
    data?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type WorkoutUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: StringFilter<"Workout"> | string
    userId?: StringFilter<"Workout"> | string
    name?: StringNullableFilter<"Workout"> | string | null
    notes?: StringNullableFilter<"Workout"> | string | null
    duration?: IntNullableFilter<"Workout"> | number | null
    date?: DateTimeFilter<"Workout"> | Date | string
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
  }

  export type RoutineUpsertWithWhereUniqueWithoutUserInput = {
    where: RoutineWhereUniqueInput
    update: XOR<RoutineUpdateWithoutUserInput, RoutineUncheckedUpdateWithoutUserInput>
    create: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput>
  }

  export type RoutineUpdateWithWhereUniqueWithoutUserInput = {
    where: RoutineWhereUniqueInput
    data: XOR<RoutineUpdateWithoutUserInput, RoutineUncheckedUpdateWithoutUserInput>
  }

  export type RoutineUpdateManyWithWhereWithoutUserInput = {
    where: RoutineScalarWhereInput
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyWithoutUserInput>
  }

  export type RoutineScalarWhereInput = {
    AND?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    OR?: RoutineScalarWhereInput[]
    NOT?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    id?: StringFilter<"Routine"> | string
    userId?: StringFilter<"Routine"> | string
    name?: StringFilter<"Routine"> | string
    description?: StringNullableFilter<"Routine"> | string | null
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
  }

  export type BodyMeasurementUpsertWithWhereUniqueWithoutUserInput = {
    where: BodyMeasurementWhereUniqueInput
    update: XOR<BodyMeasurementUpdateWithoutUserInput, BodyMeasurementUncheckedUpdateWithoutUserInput>
    create: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput>
  }

  export type BodyMeasurementUpdateWithWhereUniqueWithoutUserInput = {
    where: BodyMeasurementWhereUniqueInput
    data: XOR<BodyMeasurementUpdateWithoutUserInput, BodyMeasurementUncheckedUpdateWithoutUserInput>
  }

  export type BodyMeasurementUpdateManyWithWhereWithoutUserInput = {
    where: BodyMeasurementScalarWhereInput
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyWithoutUserInput>
  }

  export type BodyMeasurementScalarWhereInput = {
    AND?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
    OR?: BodyMeasurementScalarWhereInput[]
    NOT?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
    id?: StringFilter<"BodyMeasurement"> | string
    userId?: StringFilter<"BodyMeasurement"> | string
    date?: DateTimeFilter<"BodyMeasurement"> | Date | string
    weight?: FloatNullableFilter<"BodyMeasurement"> | number | null
    bodyFat?: FloatNullableFilter<"BodyMeasurement"> | number | null
    chest?: FloatNullableFilter<"BodyMeasurement"> | number | null
    waist?: FloatNullableFilter<"BodyMeasurement"> | number | null
    hips?: FloatNullableFilter<"BodyMeasurement"> | number | null
    arms?: FloatNullableFilter<"BodyMeasurement"> | number | null
    thighs?: FloatNullableFilter<"BodyMeasurement"> | number | null
    calves?: FloatNullableFilter<"BodyMeasurement"> | number | null
    notes?: StringNullableFilter<"BodyMeasurement"> | string | null
    createdAt?: DateTimeFilter<"BodyMeasurement"> | Date | string
  }

  export type MealUpsertWithWhereUniqueWithoutUserInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutUserInput, MealUncheckedUpdateWithoutUserInput>
    create: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput>
  }

  export type MealUpdateWithWhereUniqueWithoutUserInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutUserInput, MealUncheckedUpdateWithoutUserInput>
  }

  export type MealUpdateManyWithWhereWithoutUserInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutUserInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: StringFilter<"Meal"> | string
    userId?: StringFilter<"Meal"> | string
    name?: StringNullableFilter<"Meal"> | string | null
    date?: DateTimeFilter<"Meal"> | Date | string
    mealType?: StringFilter<"Meal"> | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
  }

  export type FitnessGoalUpsertWithWhereUniqueWithoutUserInput = {
    where: FitnessGoalWhereUniqueInput
    update: XOR<FitnessGoalUpdateWithoutUserInput, FitnessGoalUncheckedUpdateWithoutUserInput>
    create: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput>
  }

  export type FitnessGoalUpdateWithWhereUniqueWithoutUserInput = {
    where: FitnessGoalWhereUniqueInput
    data: XOR<FitnessGoalUpdateWithoutUserInput, FitnessGoalUncheckedUpdateWithoutUserInput>
  }

  export type FitnessGoalUpdateManyWithWhereWithoutUserInput = {
    where: FitnessGoalScalarWhereInput
    data: XOR<FitnessGoalUpdateManyMutationInput, FitnessGoalUncheckedUpdateManyWithoutUserInput>
  }

  export type FitnessGoalScalarWhereInput = {
    AND?: FitnessGoalScalarWhereInput | FitnessGoalScalarWhereInput[]
    OR?: FitnessGoalScalarWhereInput[]
    NOT?: FitnessGoalScalarWhereInput | FitnessGoalScalarWhereInput[]
    id?: StringFilter<"FitnessGoal"> | string
    userId?: StringFilter<"FitnessGoal"> | string
    type?: StringFilter<"FitnessGoal"> | string
    target?: FloatFilter<"FitnessGoal"> | number
    current?: FloatNullableFilter<"FitnessGoal"> | number | null
    startDate?: DateTimeFilter<"FitnessGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"FitnessGoal"> | Date | string | null
    achieved?: BoolFilter<"FitnessGoal"> | boolean
    createdAt?: DateTimeFilter<"FitnessGoal"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    meals?: MealCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    meals?: MealUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutExerciseCreateWithoutExerciseInput = {
    id?: string
    order: number
    notes?: string | null
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    sets?: SetCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutExerciseInput = {
    id?: string
    workoutId: string
    order: number
    notes?: string | null
    sets?: SetUncheckedCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseCreateOrConnectWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseCreateManyExerciseInputEnvelope = {
    data: WorkoutExerciseCreateManyExerciseInput | WorkoutExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type RoutineExerciseCreateWithoutExerciseInput = {
    id?: string
    order: number
    sets?: number
    minReps?: number | null
    maxReps?: number | null
    restTime?: number | null
    routine: RoutineCreateNestedOneWithoutExercisesInput
  }

  export type RoutineExerciseUncheckedCreateWithoutExerciseInput = {
    id?: string
    routineId: string
    order: number
    sets?: number
    minReps?: number | null
    maxReps?: number | null
    restTime?: number | null
  }

  export type RoutineExerciseCreateOrConnectWithoutExerciseInput = {
    where: RoutineExerciseWhereUniqueInput
    create: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type RoutineExerciseCreateManyExerciseInputEnvelope = {
    data: RoutineExerciseCreateManyExerciseInput | RoutineExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type WorkoutExerciseScalarWhereInput = {
    AND?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    OR?: WorkoutExerciseScalarWhereInput[]
    NOT?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    id?: StringFilter<"WorkoutExercise"> | string
    workoutId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    order?: IntFilter<"WorkoutExercise"> | number
    notes?: StringNullableFilter<"WorkoutExercise"> | string | null
  }

  export type RoutineExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: RoutineExerciseWhereUniqueInput
    update: XOR<RoutineExerciseUpdateWithoutExerciseInput, RoutineExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<RoutineExerciseCreateWithoutExerciseInput, RoutineExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type RoutineExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: RoutineExerciseWhereUniqueInput
    data: XOR<RoutineExerciseUpdateWithoutExerciseInput, RoutineExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type RoutineExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: RoutineExerciseScalarWhereInput
    data: XOR<RoutineExerciseUpdateManyMutationInput, RoutineExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type RoutineExerciseScalarWhereInput = {
    AND?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
    OR?: RoutineExerciseScalarWhereInput[]
    NOT?: RoutineExerciseScalarWhereInput | RoutineExerciseScalarWhereInput[]
    id?: StringFilter<"RoutineExercise"> | string
    routineId?: StringFilter<"RoutineExercise"> | string
    exerciseId?: StringFilter<"RoutineExercise"> | string
    order?: IntFilter<"RoutineExercise"> | number
    sets?: IntFilter<"RoutineExercise"> | number
    minReps?: IntNullableFilter<"RoutineExercise"> | number | null
    maxReps?: IntNullableFilter<"RoutineExercise"> | number | null
    restTime?: IntNullableFilter<"RoutineExercise"> | number | null
  }

  export type UserCreateWithoutWorkoutsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    meals?: MealCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
  }

  export type WorkoutExerciseCreateWithoutWorkoutInput = {
    id?: string
    order: number
    notes?: string | null
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisesInput
    sets?: SetCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutWorkoutInput = {
    id?: string
    exerciseId: string
    order: number
    notes?: string | null
    sets?: SetUncheckedCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseCreateOrConnectWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExerciseCreateManyWorkoutInputEnvelope = {
    data: WorkoutExerciseCreateManyWorkoutInput | WorkoutExerciseCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkoutsInput = {
    update: XOR<UserUpdateWithoutWorkoutsInput, UserUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutsInput, UserUncheckedUpdateWithoutWorkoutsInput>
  }

  export type UserUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    meals?: MealUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutWorkoutInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutInput>
    create: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutWorkoutInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutCreateWithoutExercisesInput = {
    id?: string
    name?: string | null
    notes?: string | null
    duration?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkoutsInput
  }

  export type WorkoutUncheckedCreateWithoutExercisesInput = {
    id?: string
    userId: string
    name?: string | null
    notes?: string | null
    duration?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutCreateOrConnectWithoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseCreateWithoutWorkoutExercisesInput = {
    id: string
    name: string
    category: string
    bodyPart: string
    equipment: string
    target: string
    muscleGroup: string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions: string
    image?: string | null
    gifUrl?: string | null
    attribution?: string | null
    createdAt?: Date | string
    routineExercises?: RoutineExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutWorkoutExercisesInput = {
    id: string
    name: string
    category: string
    bodyPart: string
    equipment: string
    target: string
    muscleGroup: string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions: string
    image?: string | null
    gifUrl?: string | null
    attribution?: string | null
    createdAt?: Date | string
    routineExercises?: RoutineExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutWorkoutExercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
  }

  export type SetCreateWithoutWorkoutExerciseInput = {
    id?: string
    setNumber: number
    reps?: number | null
    weight?: number | null
    rpe?: number | null
    isWarmup?: boolean
    isDropset?: boolean
    isFailure?: boolean
  }

  export type SetUncheckedCreateWithoutWorkoutExerciseInput = {
    id?: string
    setNumber: number
    reps?: number | null
    weight?: number | null
    rpe?: number | null
    isWarmup?: boolean
    isDropset?: boolean
    isFailure?: boolean
  }

  export type SetCreateOrConnectWithoutWorkoutExerciseInput = {
    where: SetWhereUniqueInput
    create: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput>
  }

  export type SetCreateManyWorkoutExerciseInputEnvelope = {
    data: SetCreateManyWorkoutExerciseInput | SetCreateManyWorkoutExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutUpsertWithoutExercisesInput = {
    update: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUpsertWithoutWorkoutExercisesInput = {
    update: XOR<ExerciseUpdateWithoutWorkoutExercisesInput, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
    create: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutWorkoutExercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutWorkoutExercisesInput, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ExerciseUpdateWithoutWorkoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    bodyPart?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attribution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineExercises?: RoutineExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    bodyPart?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attribution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineExercises?: RoutineExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type SetUpsertWithWhereUniqueWithoutWorkoutExerciseInput = {
    where: SetWhereUniqueInput
    update: XOR<SetUpdateWithoutWorkoutExerciseInput, SetUncheckedUpdateWithoutWorkoutExerciseInput>
    create: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput>
  }

  export type SetUpdateWithWhereUniqueWithoutWorkoutExerciseInput = {
    where: SetWhereUniqueInput
    data: XOR<SetUpdateWithoutWorkoutExerciseInput, SetUncheckedUpdateWithoutWorkoutExerciseInput>
  }

  export type SetUpdateManyWithWhereWithoutWorkoutExerciseInput = {
    where: SetScalarWhereInput
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyWithoutWorkoutExerciseInput>
  }

  export type SetScalarWhereInput = {
    AND?: SetScalarWhereInput | SetScalarWhereInput[]
    OR?: SetScalarWhereInput[]
    NOT?: SetScalarWhereInput | SetScalarWhereInput[]
    id?: StringFilter<"Set"> | string
    workoutExerciseId?: StringFilter<"Set"> | string
    setNumber?: IntFilter<"Set"> | number
    reps?: IntNullableFilter<"Set"> | number | null
    weight?: FloatNullableFilter<"Set"> | number | null
    rpe?: FloatNullableFilter<"Set"> | number | null
    isWarmup?: BoolFilter<"Set"> | boolean
    isDropset?: BoolFilter<"Set"> | boolean
    isFailure?: BoolFilter<"Set"> | boolean
  }

  export type WorkoutExerciseCreateWithoutSetsInput = {
    id?: string
    order: number
    notes?: string | null
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutSetsInput = {
    id?: string
    workoutId: string
    exerciseId: string
    order: number
    notes?: string | null
  }

  export type WorkoutExerciseCreateOrConnectWithoutSetsInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutSetsInput, WorkoutExerciseUncheckedCreateWithoutSetsInput>
  }

  export type WorkoutExerciseUpsertWithoutSetsInput = {
    update: XOR<WorkoutExerciseUpdateWithoutSetsInput, WorkoutExerciseUncheckedUpdateWithoutSetsInput>
    create: XOR<WorkoutExerciseCreateWithoutSetsInput, WorkoutExerciseUncheckedCreateWithoutSetsInput>
    where?: WorkoutExerciseWhereInput
  }

  export type WorkoutExerciseUpdateToOneWithWhereWithoutSetsInput = {
    where?: WorkoutExerciseWhereInput
    data: XOR<WorkoutExerciseUpdateWithoutSetsInput, WorkoutExerciseUncheckedUpdateWithoutSetsInput>
  }

  export type WorkoutExerciseUpdateWithoutSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutRoutinesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    meals?: MealCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoutinesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoutinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
  }

  export type RoutineExerciseCreateWithoutRoutineInput = {
    id?: string
    order: number
    sets?: number
    minReps?: number | null
    maxReps?: number | null
    restTime?: number | null
    exercise: ExerciseCreateNestedOneWithoutRoutineExercisesInput
  }

  export type RoutineExerciseUncheckedCreateWithoutRoutineInput = {
    id?: string
    exerciseId: string
    order: number
    sets?: number
    minReps?: number | null
    maxReps?: number | null
    restTime?: number | null
  }

  export type RoutineExerciseCreateOrConnectWithoutRoutineInput = {
    where: RoutineExerciseWhereUniqueInput
    create: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineExerciseCreateManyRoutineInputEnvelope = {
    data: RoutineExerciseCreateManyRoutineInput | RoutineExerciseCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoutinesInput = {
    update: XOR<UserUpdateWithoutRoutinesInput, UserUncheckedUpdateWithoutRoutinesInput>
    create: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutinesInput, UserUncheckedUpdateWithoutRoutinesInput>
  }

  export type UserUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    meals?: MealUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoutineExerciseUpsertWithWhereUniqueWithoutRoutineInput = {
    where: RoutineExerciseWhereUniqueInput
    update: XOR<RoutineExerciseUpdateWithoutRoutineInput, RoutineExerciseUncheckedUpdateWithoutRoutineInput>
    create: XOR<RoutineExerciseCreateWithoutRoutineInput, RoutineExerciseUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineExerciseUpdateWithWhereUniqueWithoutRoutineInput = {
    where: RoutineExerciseWhereUniqueInput
    data: XOR<RoutineExerciseUpdateWithoutRoutineInput, RoutineExerciseUncheckedUpdateWithoutRoutineInput>
  }

  export type RoutineExerciseUpdateManyWithWhereWithoutRoutineInput = {
    where: RoutineExerciseScalarWhereInput
    data: XOR<RoutineExerciseUpdateManyMutationInput, RoutineExerciseUncheckedUpdateManyWithoutRoutineInput>
  }

  export type RoutineCreateWithoutExercisesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutinesInput
  }

  export type RoutineUncheckedCreateWithoutExercisesInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineCreateOrConnectWithoutExercisesInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutExercisesInput, RoutineUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseCreateWithoutRoutineExercisesInput = {
    id: string
    name: string
    category: string
    bodyPart: string
    equipment: string
    target: string
    muscleGroup: string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions: string
    image?: string | null
    gifUrl?: string | null
    attribution?: string | null
    createdAt?: Date | string
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutRoutineExercisesInput = {
    id: string
    name: string
    category: string
    bodyPart: string
    equipment: string
    target: string
    muscleGroup: string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions: string
    image?: string | null
    gifUrl?: string | null
    attribution?: string | null
    createdAt?: Date | string
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutRoutineExercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutRoutineExercisesInput, ExerciseUncheckedCreateWithoutRoutineExercisesInput>
  }

  export type RoutineUpsertWithoutExercisesInput = {
    update: XOR<RoutineUpdateWithoutExercisesInput, RoutineUncheckedUpdateWithoutExercisesInput>
    create: XOR<RoutineCreateWithoutExercisesInput, RoutineUncheckedCreateWithoutExercisesInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutExercisesInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutExercisesInput, RoutineUncheckedUpdateWithoutExercisesInput>
  }

  export type RoutineUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutinesNestedInput
  }

  export type RoutineUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUpsertWithoutRoutineExercisesInput = {
    update: XOR<ExerciseUpdateWithoutRoutineExercisesInput, ExerciseUncheckedUpdateWithoutRoutineExercisesInput>
    create: XOR<ExerciseCreateWithoutRoutineExercisesInput, ExerciseUncheckedCreateWithoutRoutineExercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutRoutineExercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutRoutineExercisesInput, ExerciseUncheckedUpdateWithoutRoutineExercisesInput>
  }

  export type ExerciseUpdateWithoutRoutineExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    bodyPart?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attribution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutRoutineExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    bodyPart?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    secondaryMuscles?: JsonNullValueInput | InputJsonValue
    instructions?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attribution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type UserCreateWithoutBodyMeasurementsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    meals?: MealCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBodyMeasurementsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBodyMeasurementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBodyMeasurementsInput, UserUncheckedCreateWithoutBodyMeasurementsInput>
  }

  export type UserUpsertWithoutBodyMeasurementsInput = {
    update: XOR<UserUpdateWithoutBodyMeasurementsInput, UserUncheckedUpdateWithoutBodyMeasurementsInput>
    create: XOR<UserCreateWithoutBodyMeasurementsInput, UserUncheckedCreateWithoutBodyMeasurementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBodyMeasurementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBodyMeasurementsInput, UserUncheckedUpdateWithoutBodyMeasurementsInput>
  }

  export type UserUpdateWithoutBodyMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    meals?: MealUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBodyMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealFoodCreateWithoutFoodInput = {
    id?: string
    servings?: number
    meal: MealCreateNestedOneWithoutFoodsInput
  }

  export type MealFoodUncheckedCreateWithoutFoodInput = {
    id?: string
    mealId: string
    servings?: number
  }

  export type MealFoodCreateOrConnectWithoutFoodInput = {
    where: MealFoodWhereUniqueInput
    create: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput>
  }

  export type MealFoodCreateManyFoodInputEnvelope = {
    data: MealFoodCreateManyFoodInput | MealFoodCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type MealFoodUpsertWithWhereUniqueWithoutFoodInput = {
    where: MealFoodWhereUniqueInput
    update: XOR<MealFoodUpdateWithoutFoodInput, MealFoodUncheckedUpdateWithoutFoodInput>
    create: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput>
  }

  export type MealFoodUpdateWithWhereUniqueWithoutFoodInput = {
    where: MealFoodWhereUniqueInput
    data: XOR<MealFoodUpdateWithoutFoodInput, MealFoodUncheckedUpdateWithoutFoodInput>
  }

  export type MealFoodUpdateManyWithWhereWithoutFoodInput = {
    where: MealFoodScalarWhereInput
    data: XOR<MealFoodUpdateManyMutationInput, MealFoodUncheckedUpdateManyWithoutFoodInput>
  }

  export type MealFoodScalarWhereInput = {
    AND?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
    OR?: MealFoodScalarWhereInput[]
    NOT?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
    id?: StringFilter<"MealFood"> | string
    mealId?: StringFilter<"MealFood"> | string
    foodId?: StringFilter<"MealFood"> | string
    servings?: FloatFilter<"MealFood"> | number
  }

  export type UserCreateWithoutMealsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMealsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMealsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
  }

  export type MealFoodCreateWithoutMealInput = {
    id?: string
    servings?: number
    food: FoodItemCreateNestedOneWithoutMealFoodsInput
  }

  export type MealFoodUncheckedCreateWithoutMealInput = {
    id?: string
    foodId: string
    servings?: number
  }

  export type MealFoodCreateOrConnectWithoutMealInput = {
    where: MealFoodWhereUniqueInput
    create: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput>
  }

  export type MealFoodCreateManyMealInputEnvelope = {
    data: MealFoodCreateManyMealInput | MealFoodCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMealsInput = {
    update: XOR<UserUpdateWithoutMealsInput, UserUncheckedUpdateWithoutMealsInput>
    create: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealsInput, UserUncheckedUpdateWithoutMealsInput>
  }

  export type UserUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealFoodUpsertWithWhereUniqueWithoutMealInput = {
    where: MealFoodWhereUniqueInput
    update: XOR<MealFoodUpdateWithoutMealInput, MealFoodUncheckedUpdateWithoutMealInput>
    create: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput>
  }

  export type MealFoodUpdateWithWhereUniqueWithoutMealInput = {
    where: MealFoodWhereUniqueInput
    data: XOR<MealFoodUpdateWithoutMealInput, MealFoodUncheckedUpdateWithoutMealInput>
  }

  export type MealFoodUpdateManyWithWhereWithoutMealInput = {
    where: MealFoodScalarWhereInput
    data: XOR<MealFoodUpdateManyMutationInput, MealFoodUncheckedUpdateManyWithoutMealInput>
  }

  export type MealCreateWithoutFoodsInput = {
    id?: string
    name?: string | null
    date?: Date | string
    mealType?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutFoodsInput = {
    id?: string
    userId: string
    name?: string | null
    date?: Date | string
    mealType?: string
    createdAt?: Date | string
  }

  export type MealCreateOrConnectWithoutFoodsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutFoodsInput, MealUncheckedCreateWithoutFoodsInput>
  }

  export type FoodItemCreateWithoutMealFoodsInput = {
    id: string
    name: string
    brand?: string | null
    servingSize?: number | null
    servingUnit?: string | null
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    fiber?: number | null
    sugar?: number | null
    sodium?: number | null
    category?: string | null
    barcode: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type FoodItemUncheckedCreateWithoutMealFoodsInput = {
    id: string
    name: string
    brand?: string | null
    servingSize?: number | null
    servingUnit?: string | null
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    fiber?: number | null
    sugar?: number | null
    sodium?: number | null
    category?: string | null
    barcode: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type FoodItemCreateOrConnectWithoutMealFoodsInput = {
    where: FoodItemWhereUniqueInput
    create: XOR<FoodItemCreateWithoutMealFoodsInput, FoodItemUncheckedCreateWithoutMealFoodsInput>
  }

  export type MealUpsertWithoutFoodsInput = {
    update: XOR<MealUpdateWithoutFoodsInput, MealUncheckedUpdateWithoutFoodsInput>
    create: XOR<MealCreateWithoutFoodsInput, MealUncheckedCreateWithoutFoodsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutFoodsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutFoodsInput, MealUncheckedUpdateWithoutFoodsInput>
  }

  export type MealUpdateWithoutFoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutFoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemUpsertWithoutMealFoodsInput = {
    update: XOR<FoodItemUpdateWithoutMealFoodsInput, FoodItemUncheckedUpdateWithoutMealFoodsInput>
    create: XOR<FoodItemCreateWithoutMealFoodsInput, FoodItemUncheckedCreateWithoutMealFoodsInput>
    where?: FoodItemWhereInput
  }

  export type FoodItemUpdateToOneWithWhereWithoutMealFoodsInput = {
    where?: FoodItemWhereInput
    data: XOR<FoodItemUpdateWithoutMealFoodsInput, FoodItemUncheckedUpdateWithoutMealFoodsInput>
  }

  export type FoodItemUpdateWithoutMealFoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemUncheckedUpdateWithoutMealFoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutFitnessGoalsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    meals?: MealCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFitnessGoalsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFitnessGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFitnessGoalsInput, UserUncheckedCreateWithoutFitnessGoalsInput>
  }

  export type UserUpsertWithoutFitnessGoalsInput = {
    update: XOR<UserUpdateWithoutFitnessGoalsInput, UserUncheckedUpdateWithoutFitnessGoalsInput>
    create: XOR<UserCreateWithoutFitnessGoalsInput, UserUncheckedCreateWithoutFitnessGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFitnessGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFitnessGoalsInput, UserUncheckedUpdateWithoutFitnessGoalsInput>
  }

  export type UserUpdateWithoutFitnessGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    meals?: MealUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFitnessGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    messages?: string
    data?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutCreateManyUserInput = {
    id?: string
    name?: string | null
    notes?: string | null
    duration?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BodyMeasurementCreateManyUserInput = {
    id?: string
    date?: Date | string
    weight?: number | null
    bodyFat?: number | null
    chest?: number | null
    waist?: number | null
    hips?: number | null
    arms?: number | null
    thighs?: number | null
    calves?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type MealCreateManyUserInput = {
    id?: string
    name?: string | null
    date?: Date | string
    mealType?: string
    createdAt?: Date | string
  }

  export type FitnessGoalCreateManyUserInput = {
    id?: string
    type: string
    target: number
    current?: number | null
    startDate?: Date | string
    endDate?: Date | string | null
    achieved?: boolean
    createdAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: RoutineExerciseUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: RoutineExerciseUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFat?: NullableFloatFieldUpdateOperationsInput | number | null
    chest?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hips?: NullableFloatFieldUpdateOperationsInput | number | null
    arms?: NullableFloatFieldUpdateOperationsInput | number | null
    thighs?: NullableFloatFieldUpdateOperationsInput | number | null
    calves?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFat?: NullableFloatFieldUpdateOperationsInput | number | null
    chest?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hips?: NullableFloatFieldUpdateOperationsInput | number | null
    arms?: NullableFloatFieldUpdateOperationsInput | number | null
    thighs?: NullableFloatFieldUpdateOperationsInput | number | null
    calves?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFat?: NullableFloatFieldUpdateOperationsInput | number | null
    chest?: NullableFloatFieldUpdateOperationsInput | number | null
    waist?: NullableFloatFieldUpdateOperationsInput | number | null
    hips?: NullableFloatFieldUpdateOperationsInput | number | null
    arms?: NullableFloatFieldUpdateOperationsInput | number | null
    thighs?: NullableFloatFieldUpdateOperationsInput | number | null
    calves?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: MealFoodUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: MealFoodUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FitnessGoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FitnessGoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FitnessGoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateManyExerciseInput = {
    id?: string
    workoutId: string
    order: number
    notes?: string | null
  }

  export type RoutineExerciseCreateManyExerciseInput = {
    id?: string
    routineId: string
    order: number
    sets?: number
    minReps?: number | null
    maxReps?: number | null
    restTime?: number | null
  }

  export type WorkoutExerciseUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    sets?: SetUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: SetUncheckedUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoutineExerciseUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    minReps?: NullableIntFieldUpdateOperationsInput | number | null
    maxReps?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    routine?: RoutineUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type RoutineExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    minReps?: NullableIntFieldUpdateOperationsInput | number | null
    maxReps?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoutineExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    minReps?: NullableIntFieldUpdateOperationsInput | number | null
    maxReps?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutExerciseCreateManyWorkoutInput = {
    id?: string
    exerciseId: string
    order: number
    notes?: string | null
  }

  export type WorkoutExerciseUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    sets?: SetUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: SetUncheckedUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SetCreateManyWorkoutExerciseInput = {
    id?: string
    setNumber: number
    reps?: number | null
    weight?: number | null
    rpe?: number | null
    isWarmup?: boolean
    isDropset?: boolean
    isFailure?: boolean
  }

  export type SetUpdateWithoutWorkoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    isWarmup?: BoolFieldUpdateOperationsInput | boolean
    isDropset?: BoolFieldUpdateOperationsInput | boolean
    isFailure?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SetUncheckedUpdateWithoutWorkoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    isWarmup?: BoolFieldUpdateOperationsInput | boolean
    isDropset?: BoolFieldUpdateOperationsInput | boolean
    isFailure?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SetUncheckedUpdateManyWithoutWorkoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    setNumber?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    rpe?: NullableFloatFieldUpdateOperationsInput | number | null
    isWarmup?: BoolFieldUpdateOperationsInput | boolean
    isDropset?: BoolFieldUpdateOperationsInput | boolean
    isFailure?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoutineExerciseCreateManyRoutineInput = {
    id?: string
    exerciseId: string
    order: number
    sets?: number
    minReps?: number | null
    maxReps?: number | null
    restTime?: number | null
  }

  export type RoutineExerciseUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    minReps?: NullableIntFieldUpdateOperationsInput | number | null
    maxReps?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    exercise?: ExerciseUpdateOneRequiredWithoutRoutineExercisesNestedInput
  }

  export type RoutineExerciseUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    minReps?: NullableIntFieldUpdateOperationsInput | number | null
    maxReps?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoutineExerciseUncheckedUpdateManyWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    minReps?: NullableIntFieldUpdateOperationsInput | number | null
    maxReps?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MealFoodCreateManyFoodInput = {
    id?: string
    mealId: string
    servings?: number
  }

  export type MealFoodUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    servings?: FloatFieldUpdateOperationsInput | number
    meal?: MealUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type MealFoodUncheckedUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    servings?: FloatFieldUpdateOperationsInput | number
  }

  export type MealFoodUncheckedUpdateManyWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    servings?: FloatFieldUpdateOperationsInput | number
  }

  export type MealFoodCreateManyMealInput = {
    id?: string
    foodId: string
    servings?: number
  }

  export type MealFoodUpdateWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    servings?: FloatFieldUpdateOperationsInput | number
    food?: FoodItemUpdateOneRequiredWithoutMealFoodsNestedInput
  }

  export type MealFoodUncheckedUpdateWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    servings?: FloatFieldUpdateOperationsInput | number
  }

  export type MealFoodUncheckedUpdateManyWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    servings?: FloatFieldUpdateOperationsInput | number
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