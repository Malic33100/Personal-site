import java.util.*;
import javax.swing.*;



public class test4 {

    public static method main(String[] args){
        Scanner myScan = new Scanner(System.in);

        submitButton(){
            JFrame f = new JFrame("Submit-button");
            Jbutton b = new Jbutton(new ImageIcon("D:\\icon.png"));
            b.setBounds(100,100,100,40);
            f.add(b);
            f.setSize(300,400);
            f.setLayout(null);
            f.setVisible(true);
            f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
}

            new Submit();

        System.out.print("Please enter your name: ");
        String Name = myScan.nextLine();

        System.out.print("Next enter your hours worked: ");
        double hours = myScan.nextDouble();

        System.out.print("Lastly, enter your hourly rate: ");
        double hourlyRate = myScan.nextDouble();

        if (grossPay >= 599.99){
            tax1 = grossPay*.21;
        }
        else if(599.98 == grossPay & grossPay >=  300.00){
            tax1 = grossPay*.18;
        }
        else if(299.99 == grossPay && grossPay >= 100.00){
            tax1 = grossPay*.12;
        }
        else {
            tax1 = grossPay*.06;
        }
        
        double netPay = grossPay - tax1;

        myScan.close();

       
    }
    
    /* public static SavetoFile() {
            //  save summary to file;
          PrintStream fileOut = new PrintStream("CalcPay.txt");
          };  */
}