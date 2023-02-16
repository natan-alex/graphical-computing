namespace GeometricTransformations.Transformations;

public class TranslationTransformation : ITransformation
{
    private readonly int _xAxisTranslation;
    private readonly int _yAxisTranslation;

    public TranslationTransformation(int xAxisTranslation = 0, int yAxisTranslation = 0)
    {
        _xAxisTranslation = xAxisTranslation;
        _yAxisTranslation = yAxisTranslation;
    }

    public double[,] ToMatrix()
    {
        return new double[,]
        {
            { 1, 0, _xAxisTranslation },
            { 0, 1, _yAxisTranslation },
            { 0, 0, 1 }
        };
    }
}
