enum Colors {
    red,
    green,
    blue
}

console.log(Colors) // { '0': 'red', '1': 'green', '2': 'blue', red: 0, green: 1, blue: 2 }
// enum 은 리버스 맵핑을 지원한다.
console.log(Colors[2]) // blue
console.log(Colors["blue"]) // 2

enum LanguageCode {
    korean = 'ko',
    english = 'en',
    japanese = 'ja',
    chinese = 'zh',
    spanish = 'es'
}

const localeCode: LanguageCode = LanguageCode.korean
console.log(localeCode) // ko