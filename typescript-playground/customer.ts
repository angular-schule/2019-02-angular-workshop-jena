export class Customer {
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    fooBar(): string {
        const self = this;
        setTimeout(function () {
            console.log('Nutzer-ID', self.id);
        }, 2000);

        setTimeout(
            () => console.log('!! Nutzer-ID', this.id),
            2000
        );

        return 'Hallo';
    }
}
