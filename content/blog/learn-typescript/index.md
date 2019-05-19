---
title: Typescript와 친해지기
date: "2019-05-18"
description: Typesciprt가 널리 쓰이기 시작한지는 오래 되었지만, 실제 서비스를 만들 때에 사용해보지 않았었습니다. 최근에 회사에서 주로 Typescript를 사용하자고 결정이 된 이후로 Typescript와 친해지기 위해서 공부하기 시작하면서 알게된 내용을 간단히 정리합니다.
---

Typesciprt가 널리 쓰이기 시작한지는 오래 되었지만, 실제 서비스를 만들 때에 사용해보지 않았었습니다. 최근에 회사에서 주로 Typescript를 사용하자고 결정이 된 이후로 Typescript와 친해지기 위해서 공부하기 시작하면서 알게된 내용을 간단히 정리합니다.

이번 Typescript를 공부하면서 취한 나만의 전략을 설명하자면,

1) [Typesciprt Official Documentaion](https://www.typescriptlang.org/docs/home.html)에서 최대한 기본적인 내용을 먼저 익힌다. (Getting Started, Handbook 초반 부분)
2) 나름대로 익힌 내용으로 하나의 [Toy Application](https://github.com/impressor615/learn-typescript)을 만들어본다.
3) 다른 사람들은 어떻게 typescript를 어떻게 사용하고 있는 지 살펴 본다. 저는 [react typescript cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)이라는 repository를 보면서 살펴 보았습니다.
4) 다 읽지 못했던 Typescript Offical Documentation을 정독해봅니다.

위의 과정을 진행하면서 알게 된 내용을 간단히 정리합니다.

-----------

### Javascript에서의 Symbol, Map

타입스크립트를 공부하다가 타입스크립트의 내용이 아닌 제가 모르고 있던 Javascript에 존재하는 타입들에 대해서 배울 수 있었습니다. 실제로 Symbol, Map이라는 타입이 Javascript에 존재하는 지 이번에 처음 알게 되었습니다.

첫 번째로 Symbol은 다른 역할도 있겠지만, 가장 흔한 용례로는 이름 충돌 위험이 없는 객체의 key를 만들기 위해서 사용합니다. [참고 링크](https://poiemaweb.com/es6-symbol)

```javascript
const obj = {};

const mySymbol = Symbol('mySymbol');
obj[mySymbol] = 123;

console.log(obj); // { [Symbol(mySymbol)]: 123 }
console.log(obj[mySymbol]); // 123
```

두 번째로 Javascript의 Map이라는 타입이 존재합니다. 기본적으로 Javascript에서 Object는 `Object.keys(obj)`와 같은 method를 사용하여 loop를 만들곤 합니다. 하지만, 여기서는 순서가 일정하게 유지된다는 보장을 할 수 없습니다. 하지만 `Map`타입은 순서를 보장해주는 객체를 만들어 줄 수 있습니다. 또한, 일반 Object는 string 혹은 Symbol만 key값으로 사용될 수 있지만, Map에서는 모든 객체가 키로 사용될 수 있다는 특징이 있습니다. [참고 링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)

### Typesciprt에서 namespace와 module의 차이

Typescript를 documenation을 읽으면서 몇 가지 사용되는 개념들 중에서 헷갈리는 것들이 있었습니다. 그 중에 하나가 namespace와 module이었습니다. 초반에는 두개가 구분되지 않고 모두 module로 사용되었지만 지금은 두개가 구분되었다고 합니다. 그래서 정리하자면,

1) `namespace`는 내부 module의 type을 정의할 때 사용됩니다.
2) `module`은 외부 패키지의 type을 정의할 때 사용됩니다.

공식 문서에서의 설명은 다음과 같이 되어 있습니다.

> A note about terminology: It’s important to note that in TypeScript 1.5, the nomenclature has changed. “Internal modules” are now “namespaces”. “External modules” are now simply “modules”, as to align with ECMAScript 2015’s terminology, (namely that module X { is equivalent to the now-preferred namespace X {).
>
> 내부 모듈은 이제 "namespaces"라고 명명한다. 외부 모듈은 간단히 "modules"이라고 명명합니다.

### type assertion const의 의미

Typesciprt compiler보다 프로그래머가 타입을 더 잘 추론할 수 있을 경우에는 `as` type assertion을 사용합니다. 간단한 사용 방법은 다음과 같습니다.

```typescript
import React from 'react'
import ReactDOM from 'react-dom'

const App: React.FC = () => <div>Hello World</div>

ReactDOM.render(
  document.getElementById('app') as HTMLElement,
  <App />
);
```

하지만 직접 type을 정해주는 것도 있지만 `const`라는 type assertion 방법도 있다는 것을 알게 되었습니다. type assertion으로 `const`를 사용하게 되면 다음과 같은 의미를 지닙니다.

- 타입이 확장되서는 안됩니다.
- 객체에서 사용된다면 property들은 모두 `readonly` 속성을 지니게 됩니다. 
- Array에서도 모두 `readonly tuple`형태가 됩니다.

간단히 코드로 살펴보면,

```typescript
// 타입이 확장되서는 안되는 특성
let str = 'hello' as const;
str = 'world' // 타입체크가 실패합니다. str에는 'hello'만 가능합니다.

// 객체에서 사용될 때
const obj = {
  key: 'value'
} as const;

obj.key = 'new value'; // 타입 체크가 실패합니다. obj의 key는 readonly의 속성을 지닙니다.

// Array에서 사용될 때
const arr = [1, 2] as const;
arr[0] = 2 // 타입 체크가 실패합니다. const type assertion이 설정될 경우 readonly tuple로 compile됩니다.
```

### interface와 type은 어디서 사용되어야 하는가?

interface는 객체의 shape를 기준으로 type을 정의할 때 사용 됩니다. 그런데, type도 interface처럼 shape를 통해 정의할 수 있습니다. 그렇다면 언제 우리는 interface를 사용하고, 언제 type을 사용하는 게 좋을까요? 공식 문서에서의 설명은 다음과 같습니다.

> Types are useful for union types (e.g. type MyType = TypeA | TypeB) whereas Interfaces are better for declaring dictionary shapes and then implementing or extending them.
>
> Types는 union types을 쓰기에 적절하다. 반면에 interface는 dictionary의 모양을 선언하기에 더 용이하다. 또한 interface는 해당 type을 확장하기에 더 용이하다.

### 알아두면 쓸데 있는 typescript type

**1) Partial**: 특정 타입의 부분만 사용할 수 있는 type. interface의 모든 property를 optional하게 변경한다.

```typescript
interface IState {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type OtherProps = Partial<IState>
const otherProps: OtherProps = {
  value: 'value'
} // onChange를 가지고 있지 않아도 에러를 내지 않는다.
```

**2) Required**: 모든 interface의 property를 required로 변경한다.

```typescript
interface IState {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type OtherProps = Required<Partial<IState>>
const otherProps: OtherProps = {
  value: 'value'
} // onChange를 가지고 있지 않기 때문에 에러를 낸다.
```

**3) Omit**: intersection 타입을 사용하다보면 overlap되는 prop들이 있다. 그럴 경우 해당 prop만 제외하고 intersection 타입을 만들고 싶은 경우에 사용할 수 있다. 해당 타입을 만들기 위해서 특정 key만 가져오는 `Pick` 타입과 `Exlucde` 타입이 사용되었다. 현재 최신 typescript 버전에는 기본적으로 Omit이 정의되어서 포함되어 있다. (하지만 이전 버전의 typescript에서는 포함되어 있지 않다. 직접 정의해서 사용해야 한다.)

```typescript
type Omit<T, K> = Pick<T, Exclude<T, K>>

interface IState {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type IntersectionProps = Omit<IState, 'value'> & {
  value: number;
} // IState의 string인 value가 아니라 IntersectionProps에서는 value를 number로 사용한다.
// omit을 사용하지 않으면 value는 다음과 같이 정의된다. 이상하긴 하지만,
// { value: string & number }와 같이 정의가 될 것이다.
```

### 외부 패키지에서 정의해둔 type들 잘 가져다 쓰기

특히, React를 typescript로 작성할 때에 React 자체적으로 정의해둔 type들에 대해 잘 이해하고 있어야 적절하게 타입 정의를 할 수 있다.
몇 가지만 알아보면,

**1) ReactNode:** JSX에서 안에서 rendering이 가능한 모든 것.
**2) FC, FunctionComponent:** React의 function component 타입
**3) CSSPropperties:** JSX안에서 inlince style 타입
**4) JSX.IntrinsicElements['elementName']:** 특정 html tag들에 기본적인 prop에 대한 내용들을 한방에 정의할 수 있다.
**4) React.PropsWithChildren<PropType>:** children type이 정의 되어있는 React type
**5) React.PropsWithRef<PropType>:** Ref Type이 정의 되어 있는 React Type
**6: React.PropsWithoutRef<PropType>:** Ref를 제외한 React Type

나름대로 정확히 이해하고자 노력해야 겠다고 생각하면서 공부를 시작한거에 비해 너무 파편적으로 이해한 거 같아서 부끄럽다. 그래도 하나하나 나름대로 정리하고 공부하는 습관을 기르기 위해 글을 남긴다. 아직은 많이 조악하지만, **더 유용한 정보들을 나눌 수 있고 토론할 수 있는 날을 꿈꾸며** 글을 마무리 한다.
