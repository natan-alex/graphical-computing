namespace GeometricTransformations.Transformations;

public class Matrices
{
    public static double[,]? Multiply(double[,] a, double[,] b)
    {
        var numberOfColumnsForA = a.GetLength(1);
        var numberOfRowsForB = b.GetLength(0);

        if (numberOfColumnsForA != numberOfRowsForB)
        {
            var message = "The number of rows and columns are different!";
            throw new InvalidOperationException(message);
        }

        var numberOfRowsForA = a.GetLength(0);
        var numberOfColumnsForB = b.GetLength(1);

        var result = new double[numberOfRowsForA, numberOfColumnsForB];

        for (var i = 0; i < numberOfRowsForA; i++)
        {
            for (var j = 0; j < numberOfColumnsForB; j++)
            {
                result[i, j] = 0.0;

                for (var k = 0; k < numberOfColumnsForA; k++)
                {
                    result[i, j] += a[i, k] * b[k, j];
                }
            }
        }

        return result;
    }
}
