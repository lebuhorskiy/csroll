export default function typeToColor (type) {
    switch (type) {
        case 'milSpec':
            return 'blue'
        case 'industrial':
            return 'blue'
        case 'distinguished':
            return 'blue'
        case 'highGrade':
            return 'blue'
        case 'restricted':
            return 'purple'
        case 'remarkable':
            return 'purple'
        case 'exceptional':
            return 'purple'
        case 'covert':
            return 'red'
        case 'extraordinary':
            return 'red'
        case 'master':
            return 'red'
        case 'exotic':
            return 'pink'
        case 'superior':
            return 'pink'
        case 'classified':
            return 'pink'
        case 'contraband':
            return 'yellow'

    }

    return 'blue';
}