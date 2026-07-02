public class FinancialForecasting {

    
    public static double futureValue(double presentValue,
                                     double growthRate,
                                     int years) {

        
        if (years == 0) {
            return presentValue;
        }

        
        return futureValue(
                presentValue * (1 + growthRate),
                growthRate,
                years - 1
        );
    }

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double result = futureValue(
                presentValue,
                growthRate,
                years
        );

        System.out.println("Present Value: Rs. " + presentValue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.printf("Future Value: Rs. %.2f%n", result);
    }
}