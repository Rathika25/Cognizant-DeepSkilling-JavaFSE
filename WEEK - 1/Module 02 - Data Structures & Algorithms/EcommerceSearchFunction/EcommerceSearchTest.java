public class EcommerceSearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        Product result1 = SearchAlgorithms.linearSearch(products, 103);

        if (result1 != null) {
            System.out.println("Linear Search Found:");
            System.out.println(result1.productName);
        }

        Product result2 = SearchAlgorithms.binarySearch(products, 104);

        if (result2 != null) {
            System.out.println("Binary Search Found:");
            System.out.println(result2.productName);
        }
    }
}