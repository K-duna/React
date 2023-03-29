
const adjectives = ['zelena','plava','žuta'];
const nouns = ['žaba','riba','bubamara'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounsIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounsIndex]}`;
}