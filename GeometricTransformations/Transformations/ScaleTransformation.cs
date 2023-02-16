namespace GeometricTransformations.Transformations;

public class ScaleTransformation : ITransformation
{
    private readonly int _xAxisScale;
    private readonly int _yAxisScale;

    public ScaleTransformation(int xAxisScale = 0, int yAxisScale = 0)
    {
        _xAxisScale = xAxisScale;
        _yAxisScale = yAxisScale;
    }

    public double[,] ToMatrix()
    {
        return new double[,]
        {
            { _xAxisScale, 0, 0 },
            { 0, _yAxisScale, 0 },
            { 0, 0, 1 }
        };
    }
}