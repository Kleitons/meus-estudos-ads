import java.util.Scanner;

public class ClassificadorPressao {
    public static void main(String[] arg) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe a pressão sistólica (máxima): ");
        int sistolica = scanner.nextInt();

        System.out.print("Informe a pressão diastólica (mínima): ");
        int diastolica = scanner.nextInt();

        System.out.println("\n--- Diagnóstico ---");
        if (sistolica < 120 && diastolica < 80) {
            System.out.println("Pressão Normal");
        } else if (sistolica < 130 && diastolica < 80) {
            System.out.println("Pressão Elevada");
        } else if (sistolica < 140 || diastolica < 90) {
            System.out.println("Hipertensão Estágio 1");
        } else if (sistolica < 180 || diastolica < 120) {
            System.out.println("Hipertensão Estágio 2");
        } else {
            System.out.println("Crise Hipertensiva");
        }   

        scanner.close();
    }
}