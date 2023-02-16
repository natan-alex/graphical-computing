namespace GeometricTransformations.Utils;

public static class DoubleExtensions
{
    public static Point? AsPoint(this double[,] matrix)
    {
        if (matrix is null) return null;

        if (matrix.GetLength(0) < 2) return null;
        if (matrix.GetLength(1) != 1) return null;

        var x = (int) Math.Round(matrix[0, 0]);
        var y = (int) Math.Round(matrix[1, 0]);

        return new Point(x, y);
    }
}
