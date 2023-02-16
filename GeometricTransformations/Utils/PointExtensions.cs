namespace GeometricTransformations.Utils;

public static class PointExtensions
{
    public static double[,] ToMatrix(this Point point)
    {
        return new double[,]
        {
            { point.X },
            { point.Y },
            { 1 }
        };
    }
}
