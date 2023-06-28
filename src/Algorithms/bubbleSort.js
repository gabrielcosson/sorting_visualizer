export default function bubbleSort(array){
    const animations = [];

    for (let i = 0; i < array.length; i++) { 
        for (let j = 0; j < (array.length - i - 1); j++) {
            let animation = {
                indexes: [j, j + 1],
                values: [array[j], array[j + 1]],
            };
            animations.push({...animation, step: 'compare'});
            if (array[j] > array[j + 1]) {
                animations.push({...animation, step: 'swap'});
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
            animations.push({...animation, step: 'clear'});
        }
    }
    return animations;
}