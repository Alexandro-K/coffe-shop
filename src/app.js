document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id: 1, name: 'Kopi 1', img: '1.jpg', price: 50000},
            {id: 2, name: 'Kopi 2', img: '1.jpg', price: 60000},
            {id: 3, name: 'Kopi 3', img: '1.jpg', price: 70000},
            {id: 4, name: 'Kopi 4', img: '1.jpg', price: 80000},
            {id: 5, name: 'Kopi 5', img: '1.jpg', price: 90000},
        ],
    }))

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem){
            // Check if there is a same item in the cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // Jika belum ada /cart masih kosong
            if(!cartItem){
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
            }else{
                // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if(item.id !== newItem.id){
                        return item;
                    }else{
                        // jika barang sudah ada, tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }

                })
            }
        },

        remove(id){
            // ambil item yang mau diremove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            // jika item lebih dari 1
            if(cartItem.quantity > 1){
                // telusuri 1 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yang diklik
                    if(item.id !== id) {
                        return item;
                    }else{
                        item.quantity--;
                        item.total = item.price * item. quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            }else if(cartItem.quantity === 1){
                // jika barang sisa 1 
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
})


// konversi Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}